import { Component, OnInit } from '@angular/core';
import { IUserInfo, UserCommonService } from './user-common.service';

@Component({
  selector: 'app-user-info-short',
  template: `
    <p>name: {{userInfo.name}}</p>
    <p *ngIf="userInfo.age>-1">age: {{userInfo.age}}</p>
  `,
  styles: []
})
export class UserInfoShortComponent implements OnInit {
  userInfo: IUserInfo;

  constructor(private userService: UserCommonService) {
  }

  ngOnInit() {
    this.userService.userInfoChanges$.subscribe(info => {
      console.log(info);
      this.userInfo = info;

    });
  }

}
