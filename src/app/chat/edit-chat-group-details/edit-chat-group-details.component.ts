import { Component, OnInit } from '@angular/core';

import { Cookie } from 'ng2-cookies/ng2-cookies';
import { ActivatedRoute, Router } from '../../../../node_modules/@angular/router';
import { AppService } from '../../app.service';
import { ToastrService } from '../../../../node_modules/ngx-toastr';
import { SocketService } from '../../socket.service';

import {Location} from '@angular/common';



@Component({
  selector: 'app-edit-chat-group-details',
  templateUrl: './edit-chat-group-details.component.html',
  styleUrls: ['./edit-chat-group-details.component.css'],
  providers: [Location]
})
export class EditChatGroupDetailsComponent implements OnInit {

  public roomId: any;
  public roomName: string;
  public admin: string;
  public members: any = [];

  
  constructor(
    public route: ActivatedRoute,
    public router: Router,
    public appService: AppService,
    public toastr: ToastrService,
    public location:Location
  ) { }

  ngOnInit() {
   
    let receiverId: string = this.route.snapshot.paramMap.get('receiverId');
    this.roomId = receiverId;
    this.appService.getGroup(receiverId)
      .subscribe((apiResponse) => {
        if (apiResponse.status == 200) {
          this.members = apiResponse.data.members;
          console.log(this.members)
          this.roomName = apiResponse.data.roomName;
          console.log(this.roomName)
          this.admin = apiResponse.data.admin;
          console.log(apiResponse);
        }
        else {
          this.toastr.error(apiResponse.message, "Error!");
        }
      },
        (error) => {
          this.toastr.error("Some Error Occurred", "Error!");
        })//end subscribe

  }



  public saveChatRoomName() {

    let data: any = {}
    data.chatRoomId = this.roomId;
    data.roomName = this.roomName;

    console.log(data);
    this.appService.editGroup(data)
      .subscribe((apiResponse) => {
        if (apiResponse.status == 200) {
          this.toastr.success("Group Name Changed");
          this.router.navigate(['/chat']);
          Cookie.set('receiverName', data.roomName);
        }
        else {
          this.toastr.error(apiResponse.message, "Error!");
        }
      },
        (error) => {
          this.toastr.error("Some Error Occurred", "Error!");
        }
      );//end subscribe
  }//end saveName



  public goBackToPreviousPage():any{
    this.location.back();
  }

}
