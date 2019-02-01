import { Component, OnInit } from '@angular/core';
import { IUserInfo, UserCommonService } from './user-common.service';

@Component({
  selector: 'app-user-info-edit',
  template: `
    <p>
      <Label>Name:</Label>
      <input type="text" [(ngModel)]="userInfo.name">
    </p>
    <p>
      <Label>Age:</Label>
      <input type="text" [(ngModel)]="userInfo.age">
    </p>
    <button (click)="save()">Save</button>
    <p>{{statusText}}</p>
  `,
  styles: []
})
export class UserInfoEditComponent implements OnInit {
  userInfo: IUserInfo;
  statusText: string;

  constructor(public userService: UserCommonService) {
    this.userService.getUserInfo()
      .subscribe(info => {
        this.userInfo = info;
      });
  }

  ngOnInit() {
  }

  save() {
    this.statusText = 'Sending...';
    this.userService.setUserInfo(this.userInfo)
      .subscribe(_ => {
        this.statusText = 'Saved.';
        setTimeout(_ => {
          this.statusText = '';
        });
      });
  }

}
