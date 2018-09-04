import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatBoxComponent } from './chat-box/chat-box.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';


//for toast message
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RemoveSpecialCharPipe } from './../shared/pipe/remove-special-char.pipe';
import { ChatRouteGuardService } from './chat-route-guard.service';
import { ChatGroupJoinComponent } from './chat-group-join/chat-group-join.component';
import { ChatGroupDetailsComponent } from './chat-group-details/chat-group-details.component';
import { EditChatGroupDetailsComponent } from './edit-chat-group-details/edit-chat-group-details.component';


@NgModule({
  imports: [
    CommonModule, 
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    RouterModule.forChild([ 
      { path: 'chat', component: ChatBoxComponent , canActivate : [ChatRouteGuardService]},
      { path: 'joinGroup/:receiverId/:receiverName', component: ChatGroupJoinComponent, canActivate: [ChatRouteGuardService]},
      { path:'groupDetails/:receiverId' , component:ChatGroupDetailsComponent },
      { path:'editGroupDetails/:receiverId', component:EditChatGroupDetailsComponent}
    ]),
    SharedModule
  ],
  declarations: [ChatBoxComponent,RemoveSpecialCharPipe, ChatGroupJoinComponent, ChatGroupDetailsComponent, EditChatGroupDetailsComponent],
  providers : [ChatRouteGuardService]
})
export class ChatModule { }


