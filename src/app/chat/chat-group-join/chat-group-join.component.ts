import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Cookie } from 'ng2-cookies/ng2-cookies';

@Component({
  selector: 'app-chat-group-join',
  templateUrl: './chat-group-join.component.html',
  styleUrls: ['./chat-group-join.component.css']
})
export class ChatGroupJoinComponent implements OnInit {

  constructor(
    public router: Router,
    public _route: ActivatedRoute
  ) { }

  ngOnInit() {
    let receiverId: string = this._route.snapshot.paramMap.get('receiverId');
    let receiverName: string = this._route.snapshot.paramMap.get('receiverName');
    Cookie.set('receiverId', receiverId);
    Cookie.set('receiverName', receiverName);
    Cookie.set('callMethod', 'true');

    this.router.navigate(['/chat']);
  }

}
