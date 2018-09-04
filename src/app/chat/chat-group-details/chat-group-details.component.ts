import { Component, OnInit } from '@angular/core';

import { Cookie } from 'ng2-cookies/ng2-cookies';
import { ActivatedRoute, Router } from '../../../../node_modules/@angular/router';
import { AppService } from '../../app.service';
import { ToastrService } from '../../../../node_modules/ngx-toastr';
import { SocketService } from '../../socket.service';

import {Location} from '@angular/common';


@Component({
  selector: 'app-chat-group-details',
  templateUrl: './chat-group-details.component.html',
  styleUrls: ['./chat-group-details.component.css'],
  providers: [Location]
})
export class ChatGroupDetailsComponent implements OnInit {

  public roomId: any;
  public roomName: string;
  public admin: string;
  public members: any = [];

  public receiverId:string;

  constructor(
    public route: ActivatedRoute,
    public router: Router,
    public appService: AppService,
    public toastr: ToastrService,
    public location:Location
  ) { }

  ngOnInit() {

    this.receiverId = this.route.snapshot.paramMap.get('receiverId');

    console.log(this.receiverId)

    this.appService.getGroup(this.receiverId)
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

  public goBackToPreviousPage():any{
    this.location.back();
  }
}
