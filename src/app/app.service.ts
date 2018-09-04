import { Injectable } from '@angular/core';

//for using cookies
import { Cookie } from 'ng2-cookies/ng2-cookies';

//Importing the required files for http services.
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
//import { Observable } from 'rxjs';
import { HttpHeaders, HttpParams } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class AppService {

  private url =  'http://api-chatapp.emayurm.in.net';

  constructor(
    public http: HttpClient
  ) {

  } // end constructor  


  public getUserInfoFromLocalstorage = () => {

    return JSON.parse(localStorage.getItem('userInfo'));

  } // end getUserInfoFromLocalstorage


  public setUserInfoInLocalStorage = (data) =>{

    localStorage.setItem('userInfo', JSON.stringify(data))


  }

  public signupFunction(data): Observable<any> {

    const params = new HttpParams()
      .set('firstName', data.firstName)
      .set('lastName', data.lastName)
      .set('mobile', data.mobile)
      .set('email', data.email)
      .set('password', data.password)

    return this.http.post(`${this.url}/api/v1/users/signup`, params);

  } // end of signupFunction function.

  public signinFunction(data): Observable<any> {
    
    const params = new HttpParams()
      .set('email', data.email)
      .set('password', data.password);
      
    return this.http.post(`${this.url}/api/v1/users/login`, params);
  } // end of signinFunction function.


  public sendResetLink(email): Observable<any> {
   // console.log(this.url+"/api/v1/users/forgotPassword");
    const params = new HttpParams()
    .set('email', email)
    return this.http.post(`${this.url}/api/v1/users/forgotPassword`,params);
  } // end of sendResetLink function.

  public resetPassword(data: any): Observable<any> {
    const params = new HttpParams()
      .set('userId', data.userId)
      .set('password', data.password);
    return this.http.post(`${this.url}/api/v1/users/resetPassword`, params);

  }//end resetPassword Function


  public getChat(receiverid, skip): Observable<any> {

    return this.http.get(`${this.url}/api/v1/chat/getGroupChat?chatRoomId=${receiverid}&skip=${skip}&authToken=${Cookie.get('authToken')}`)

  }//end getChat function

  public createGroup(data: any): Observable<any> {
    const params = new HttpParams()
      .set('userEmail', data.email)
      .set('roomName', data.grpname);

    return this.http.post(`${this.url}/api/v1/chatRoom/createChatRoom`, params);

  }//end createGroup

  public getGroups(): Observable<any> {

    return this.http.get(`${this.url}/api/v1/chatRoom/getChatRooms`);

  }//end getGroups

  public getGroup(data): Observable<any>{

    return this.http.get(`${this.url}/api/v1/chatRoom/${data}/getChatRoom`);

  }


  public editGroup(data): Observable<any>{

    const params = new HttpParams()
      .set('roomName', data.roomName);

    return this.http.put(`${this.url}/api/v1/chatRoom/${data.chatRoomId}/editChatRoom`,params);

  }


  public joinGroup(data: any): Observable<any> {

    const params = new HttpParams()
      .set('userEmail', data.userEmail)
      .set('chatRoomId', data.roomId);

    return this.http.post(`${this.url}/api/v1/chatRoom/joinChatRoom`, params);
  }//end joinGroup

  public closeGroup(data): Observable<any> {

    return this.http.get(`${this.url}/api/v1/chatRoom/${data}/closeGroup`);
  }//end closeGroup
  
  public sendInvite(data: any): Observable<any> {

    const params = new HttpParams()
      .set('userEmail', data.userEmail)
      .set('chatRoomId', data.roomId);

    return this.http.post(`${this.url}/api/v1/chatRoom/sendInvite`, params);
  }//end sendInvite

  public deleteGroup(data: any): Observable<any> {

    const params = new HttpParams()
      .set('chatRoomId', data);

    return this.http.put(`${this.url}/api/v1/chatRoom/deleteChatRoom`, params);
  }//end deleteGroup

  public logout(): Observable<any> {

    const params = new HttpParams()
      .set('authToken', Cookie.get('authtoken'))

    return this.http.post(`${this.url}/api/v1/users/logout`, params);

  } // end logout function



  private handleError(err: HttpErrorResponse) {

    let errorMessage = '';

    if (err.error instanceof Error) {

      errorMessage = `An error occurred: ${err.error.message}`;

    } else {

      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;

    } // end condition *if

    console.error(errorMessage);

    //return Observable.throw(errorMessage);

  }  // END handleError

}
