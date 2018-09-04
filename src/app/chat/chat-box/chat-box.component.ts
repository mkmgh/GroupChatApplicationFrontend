import { Component, OnInit, ViewContainerRef, ViewChild, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
import { SocketService } from './../../socket.service';
import { AppService } from './../../app.service';

import { Router } from '@angular/router';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { ToastrService } from 'ngx-toastr';
import { FirstCharComponent } from '../../shared/first-char/first-char.component';

import { ChatMessage } from './chat'
import { CheckUser } from '../../checkUser';


@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.css'],
  providers: [SocketService]
})

export class ChatBoxComponent implements OnInit, CheckUser, OnChanges{

  ngOnChanges(changes: SimpleChanges): void {
    throw new Error("Method not implemented.");
  }
  @ViewChild('scrollMe', { read: ElementRef }) 
  
  public scrollMe: ElementRef;

  

  public authToken: any;
  public userInfo: any;
  public userList: any = [];
  public disconnectedSocket: boolean; 
  public groupName: string;
  public groupsJoined: any = [];
  public otherGroups: any = [];
  public groupMember: boolean = false;


  public scrollToChatTop:boolean= false;

  public receiverId: any;
  public receiverName: any;
  public previousChatList: any = [];
  public messageText: any; 
  public messageList: any = []; // stores the current message list display in chat box
  public pageValue: number = 0;
  public loadingPreviousChat: boolean = false;
  public userMail: string;
  public personTyping: string;


  constructor(
    public AppService: AppService,
    public SocketService: SocketService,
    public router: Router,
    private toastr: ToastrService,
  ) {
  }



  ngOnInit() {

    this.authToken = Cookie.get('authtoken');

    this.userInfo = this.AppService.getUserInfoFromLocalstorage();

    this.receiverId = Cookie.get("receiverId");

    this.receiverName =  Cookie.get('receiverName');

    console.log(this.receiverId,this.receiverName)

    if(this.receiverId!=null && this.receiverId!=undefined && this.receiverId!=''){
      this.userSelectedToChat(this.receiverId,this.receiverName)
    }

    this.checkStatus();
    this.verifyUserConfirmation();
    this.getOnlineUserList()
    this.loadGroup();
   // this.getMessageFromAUser();

   this.getMessageFromAGroup();

    if (Cookie.get('callMethod')) {
      this.groupSelectedToChat(this.receiverId, this.receiverName);
    }

    this.groupCreated();
    this.groupRemoved();
    this.refreshGroups();
    this.typing();

  //  this.joinGroup(this.receiverId, this.receiverName);


  }


  public checkStatus: any = () => {

    if (Cookie.get('authtoken') === undefined || Cookie.get('authtoken') === '' || Cookie.get('authtoken') === null) {

      this.router.navigate(['/']);

      return false;

    } else {

      return true;

    }

  } // end checkStatus



  public verifyUserConfirmation: any = () => {

    this.SocketService.verifyUser()
      .subscribe((data) => {

        this.disconnectedSocket = false;

        this.SocketService.setUser(this.authToken);

      });//end subscribe
  }//end verifyUserConfirmation

  

  public getOnlineUserList: any = () => {

    this.SocketService.onlineUserList()
      .subscribe((userListfromdb) => {

        this.userList = [];

        for (let x in userListfromdb) {

          let temp = { 'userId': x, 'name': userListfromdb[x], 'unread': 0, 'chatting': false };

          this.userList.push(temp);

        }

      });//end subscribe

  }//end getOnlineUserList


  // chat related methods 

  public groupCreated: any = () => {

    this.SocketService.groupCreated()
      .subscribe((data) => {

        this.toastr.info(`Group Created: ${data}`, "Update");
        this.loadGroup();

      });//end subscribe
  }//end GroupCreated

  public groupRemoved: any = () => {

    this.SocketService.groupRemoved()
      .subscribe((data) => {

        this.toastr.info(`Group Removed: ${data}`, "Update");
        this.loadGroup();

      });//end subscribe
  }//end GroupRemoved

  public getPreviousChatWithAUser: any = () => {

    let previousData = (this.messageList.length > 0 ? this.messageList.slice() : []);

    this.AppService.getChat(this.receiverId, this.pageValue)
      .subscribe((apiResponse) => {

        if (apiResponse.status == 200) {
          this.messageList = apiResponse.data.concat(previousData);
        } else {
          this.messageList = previousData;
        }
        this.loadingPreviousChat = false;
      }, (err) => {
        this.toastr.error('some error occured', "Error!");
      });

  }//end getPreviousChatWithAUser

  public loadEarlierPageOfChat: any = () => {

    this.loadingPreviousChat = true;

    this.pageValue++;
    this.scrollToChatTop = true;

    this.getPreviousChatWithAUser();

  }//end loadPreviousChat

  public userSelectedToChat: any = (id, name) => {

    this.groupMember = false;
    Cookie.set('receiverId', id);
    Cookie.set('receiverName', name);

    this.receiverId = id;
    this.receiverName = name;

    this.messageList = [];
    this.pageValue = 0;
    this.scrollToChatTop = false;
    let chatDetails = {
      userId: this.userInfo.userId,
      senderId: id
    }

    //this.SocketService.markChatAsSeen(chatDetails);

    this.getPreviousChatWithAUser();

  } // end userBtnClick function


  public groupSelectedToChat: any = (id, name) => {

    this.groupMember = true;

    Cookie.set('receiverId', id);
    Cookie.set('receiverName', name);

    this.receiverId = id;
    this.receiverName = name;

  }//end groupSelectedToChat


  public sendMessageUsingKeypress: any = (event: any) => {

    if (event.keyCode === 13) { // 13 is keycode of enter.

      this.sendMessage();

    }

  } // end sendMessageUsingKeypress


  public userTyping: any = (event: any) => {

    let data: any = {};
    data.room = Cookie.get('receiverId');
    data.userName = this.userInfo.firstName;
    if (event.keyCode) {//13 is keycode of enter key

      this.SocketService.userTyping(data);

    }

  }//end userTyping

  public typing: any = () => {

    this.SocketService.typingInRoom()
      .subscribe((data) => {

        if(this.receiverId === data.room){
        this.personTyping = data.userName;
      }
        setTimeout(() => {
          this.personTyping = "";
        }, 2000);

      });//end subscribe
  }//end typing

  public createGroup = () => {

    if (this.groupName === "" || this.groupName === null || this.groupName === undefined) {
      this.toastr.warning("Group Name required", "Warning!");
    }
    else {
      let data: any = {}
      data.email = this.userInfo.email;
      data.grpname = this.groupName;
      this.groupName = " ";

      this.AppService.createGroup(data)
        .subscribe((apiResponse) => {
          if (apiResponse.status == 200) {
            this.toastr.success(`Group: ${data.grpname} created`, "Successfully!");
            this.userInfo.groups.push(apiResponse.data.roomId);
            this.AppService.setUserInfoInLocalStorage(this.userInfo);
            this.loadGroup();
            this.SocketService.groupAdded(data.grpname);
          }
          else {
            this.toastr.error(apiResponse.message, "Error!");
          }
        }, (error) => {
          this.toastr.error("Some error Occurred", "Error!");
        });//end subscribe
    }//end else
  }//end createGroup

  public loadGroup = () => {

    this.AppService.getGroups().subscribe((apiResponse) => {
      this.otherGroups = [];
      this.groupsJoined = [];
      if (apiResponse.status == 200) {

        for (let group of apiResponse.data) {
          let flag = false;
          for (let userGroupId of this.userInfo.groups) {
            if (group.roomId === userGroupId && group.status != false) {
              this.groupsJoined.push(group)
              flag = true;
              break;
            }//end if
          }//end inner for
          if (!flag && group.status != false) {
            this.otherGroups.push(group);
          }
          if (this.userInfo.groups.length === 0) {
            this.otherGroups = apiResponse.data;
            break;
          }
        }//end external for loop

      }//end if for success
      else {
        this.toastr.error(apiResponse.message, "Error!");
      }//end else if error
    },
      (error) => {
        this.toastr.error("Some Error Occurred", "Error!");
      });//end subscribe 

  }//end loadGroup

  public joinGroup = (name, id) => {

    let data: any = {};
    data.userEmail = this.userInfo.email;
    data.roomId = id;
    data.userId = this.userInfo.userId;

    this.AppService.joinGroup(data).subscribe((apiResponse) => {
      console.log(apiResponse)
      if (apiResponse.status == 200) {
        this.toastr.success(`Chat Group: ${name} Joined`, "Success!");
        this.userInfo.groups.push(id);
        this.AppService.setUserInfoInLocalStorage(this.userInfo);
        this.loadGroup();
        this.SocketService.joinGroup(data);
        this.userSelectedToChat(id, name);
      }
      else {
        this.toastr.error(apiResponse.message, "Error!");
      }
    }, (error) => {
      this.toastr.error("Some error occurred", "Error!");
    })//end subscribe

  }//end joinGroup

  public closeGroup = () => {

    this.AppService.closeGroup(this.receiverId)
      .subscribe((apiResponse) => {

        if (apiResponse.status == 200) {
          this.SocketService.groupClosed(this.receiverName);
          Cookie.set('receiverId', this.userInfo.userId);
          Cookie.set('receiverName', ``);
          this.receiverId = Cookie.get('receiverId');
          this.receiverName = Cookie.get('receiverName');
          this.userSelectedToChat(this.receiverId, this.receiverName);
        }
        else {
          this.toastr.error(apiResponse.message, '!Error');
        }
      },
        (error) => {
          this.toastr.error("Some Error Occurred", "Error!");
        });//end subscribe

  }//end closeGroup

  public refreshGroups = () => {

    this.SocketService.closedGroup()
      .subscribe((data) => {

        this.toastr.info(`Group Closed: ${data}`, "Update");
        this.loadGroup();

      });//end subscribe
  }//end refreshGroups


  public sendInvite = () => {
    let data: any = {};

    data.userEmail = this.userMail;
    data.roomId = this.receiverId;

    this.AppService.sendInvite(data)
      .subscribe((apiResponse) => {

        if (apiResponse.status == 200) {
          this.toastr.info(`Mail Sent to: ${data.userEmail}`, "Update");
        }
        else {
          this.toastr.error(apiResponse.message, "Error!");
        }
      }, (error) => {
        this.toastr.error("Some Error Occurred", "Error!");
      })//end subscribe

  }//end sendInvite


  public deleteGroup = () => {

    this.receiverId = Cookie.get('receiverId');
    this.AppService.deleteGroup(this.receiverId)
      .subscribe((apiResponse) => {
        if (apiResponse.status == 200) {
          this.SocketService.groupDeleted(this.receiverName);
          Cookie.set('receiverId', this.userInfo.userId);
          Cookie.set('receiverName', ``);
          this.receiverId = Cookie.get('receiverId');
          this.receiverName = Cookie.get('receiverName');
          this.userSelectedToChat(this.receiverId, this.receiverName);
        }
      })//end subscribe
  }//end deleteGroup



  public sendMessage: any = () => {

    if(this.messageText){

      let chatMsgObject : ChatMessage = {
        senderName: this.userInfo.firstName + " " + this.userInfo.lastName,
        senderId: this.userInfo.userId,
        receiverName: Cookie.get('receiverName'),
        receiverId: Cookie.get('receiverId'),
        message: this.messageText,
        createdOn: new Date()
      } // end chatMsgObject
      console.log(chatMsgObject);
      this.SocketService.SendChatMessage(chatMsgObject)
      this.pushToChatWindow(chatMsgObject)
      

    }
    else{
      this.toastr.warning('text message can not be empty')

    }

 } // end sendMessage


 public pushToChatWindow: any = (data) => {

  this.messageText = "";
  this.messageList.push(data);
  this.scrollToChatTop = false;

}//end pushToChatWindow

public getMessageFromAGroup: any = () => {

  this.SocketService.groupChatMessage()
    .subscribe((data) => {
    
      if (data.receiverId === this.receiverId && data.senderId != this.userInfo.userId) {
        this.messageList.push(data);
      }
      console.log(data)
      this.toastr.success(`${data.senderName} says : ${data.message}`);

      this.scrollToChatTop = false;

    });//end subscribe

}//end getMessageFromAGroup

/*
 public getMessageFromAUser: any =()=>{

  this.SocketService.chatByUserId(this.userInfo.userId)
  .subscribe((data)=>{
   

    (this.receiverId==data.senderId)?this.messageList.push(data):'';

    this.toastr.success(`${data.senderName} says : ${data.message}`)

    this.scrollToChatTop=false;

  });//end subscribe
}// end get message from a user 


*/
/*

public groupJoined: any =()=>{

  this.SocketService.groupJoined()
  .subscribe((data)=>{
   
    this.toastr.success(` joined`)

    this.scrollToChatTop=false;

  });//end subscribe
}// end get message from a user 
*/



  public logout: any = () => {

    this.AppService.logout()
      .subscribe((apiResponse) => {

        if (apiResponse.status === 200) {
          console.log("logout called")
          Cookie.delete('authtoken');

          Cookie.delete('receiverId');

          Cookie.delete('receiverName');

          this.SocketService.exitSocket()

          this.router.navigate(['/']);

        } else {
          this.toastr.error(apiResponse.message)

        } // end condition

      }, (err) => {
        this.toastr.error('some error occured')


      });

  } // end logout

  // handle the output from a child component 

  public showGroupName =(name:string)=>{

    this.toastr.success("You are chatting with "+name)

  }




}
