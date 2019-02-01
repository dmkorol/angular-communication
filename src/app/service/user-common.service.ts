import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

export interface IUserInfo {
  name: string;
  age: number;
}

@Injectable({
  providedIn: 'root'
})
export class UserCommonService {
  public userInfoChanges$: BehaviorSubject<IUserInfo> = new BehaviorSubject({ name: 'no name', age: -1 });

  constructor() {
  }

  setUserInfo(userInfo: IUserInfo) {
    // Emulates http
    console.log(userInfo);
    return of(userInfo)
      .pipe(
        delay(1000),
        tap(info => {
          /** To avoid changes in other components use Object.assign() or changeStratagy On.Push*/
          this.userInfoChanges$.next(Object.assign({}, info));
        })
      );
  }

  getUserInfo() {
    // Emulates http
    return of(Object.assign({}, this.userInfoChanges$.value));
  }
}
