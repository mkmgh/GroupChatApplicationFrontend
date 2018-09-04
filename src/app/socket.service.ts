import { Injectable } from '@angular/core';


import * as io from 'socket.io-client';

import { Observable, throwError } from 'rxjs';
import { Cookie } from 'ng2-cookies/ng2-cookies';


import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse, HttpParams } from "@angular/common/http";

@Injectable()

export class SocketService {

  private url = 'http://api-chatapp.emayurm.in.net';

  private socket;


  constructor(public http: HttpClient) {
    // connection is being created.
    // that handshake
    this.socket = io(this.url);

  }

  
  // events to be listened 
  public verifyUser = () => {

    return Observable.create((observer) => {

      this.socket.on('verifyUser', (data) => {

        observer.next(data);

      }); // end Socket

    }); // end Observable

  } // end verifyUser

  public onlineUserList = () => {

    return Observable.create((observer) => {

      this.socket.on("online-user-list", (userList) => {

        observer.next(userList);

      }); // end Socket

    }); // end Observable

  } // end onlineUserList


  public authError = () => {
    return Observable.create((observer) => {

      this.socket.on('auth-error', (data) => {

        observer.next(data);

      })//end socket

    });//end observer

  }//end authError

  public typingInRoom = () => {

    return Observable.create((observer) => {

      this.socket.on("typing", (data) => {

        observer.next(data);

      });//endsocket 

    });//end Observable

  }//end typingInRoom



  public groupCreated = () => {

    return Observable.create((observer) => {

      this.socket.on("GroupCreated", (data) => {

        observer.next(data);

      });//endsocket 

    });//end Observable

  }//end activeInRoom

  public closedGroup = () => {

    return Observable.create((observer) => {

      this.socket.on("closedGroup", (data) => {

        observer.next(data);

      });//endsocket 

    });//end Observable

  }//end activeInRoom

  public groupRemoved = () => {

    return Observable.create((observer) => {

      this.socket.on("GroupRemoved", (data) => {

        observer.next(data);

      });//endsocket 

    });//end Observable

  }//end activeInRoom


  public disconnectedSocket = () => {

    return Observable.create((observer) => {

      this.socket.on("disconnect", () => {

        observer.next();

      }); // end Socket

    }); // end Observable

  } // end disconnectSocket

  //end event to be listened


  // events to be emitted

  public setUser = (authToken) => {

    this.socket.emit("set-user", authToken);

  } // end setUser

  public groupAdded = (data) => {

    this.socket.emit("newGroup", data);//endsocket 

  }//end Group Added

  public groupClosed = (data) => {

    this.socket.emit("GroupClosed", data);//endsocket 

  }//end Group Closed
  
  public joinGroup = (data) => {

    this.socket.emit(data.userId, data);

  }//end joinGroup

  public userTyping = (data) => {

    this.socket.emit("userTyping", data);

  }//end userTyping


  public groupDeleted = (data) => {

    this.socket.emit("GrpDeleted", data);//endsocket 

  }//end Group Deleted


  // end events to be emitted


  // chat related methods 

  public chatByUserId = (userId) => {

    return Observable.create((observer) => {
      
      this.socket.on(userId, (data) => {

        observer.next(data);

      }); // end Socket

    }); // end Observable

  } // end chatByUserId

  public SendChatMessage = (chatMsgObject) => {

    console.log(chatMsgObject)
    this.socket.emit('chat-msg', chatMsgObject);

  } // end getChatMessage


  public groupChatMessage = () => {

    return Observable.create((observer) => {

      this.socket.on('message', (data) => {

        console.log(data)
        observer.next(data);

      });//end socket

    });//end observable

  }//end groupChatMessage


  public exitSocket = () =>{

    this.socket.disconnect();

  }// end exit socket


  private handleError(err: HttpErrorResponse) {

    let errorMessage = '';

    if (err.error instanceof Error) {

      errorMessage = `An error occurred: ${err.error.message}`;

    } else {

      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;

    } // end condition *if

    console.error(errorMessage);

    return Observable.throw(errorMessage);

  }  // END handleError

}
