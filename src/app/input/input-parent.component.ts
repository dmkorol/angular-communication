import { Component, Input, OnInit } from '@angular/core';
import { EVote } from './input-child.component';

export interface IUser {
  name: string;
  result: EVote;
}

@Component({
  selector: 'app-input-parent',
  template: `
    <p>online: {{onlineCopunter}}; offline: {{offlineCopunter}};</p>
    <app-input-child
      *ngFor='let item of names'
      [name]="item.name"
      [result]="item.result"
      (vote)="onVote($event, item)"></app-input-child>
  `,
  styles: []
})
export class InputParentComponent implements OnInit {
  @Input() names: IUser[] = (['Valentin', 'Dima K', 'Dima Ш.', 'Roman', 'Ivan', 'Dima S.']
    .map((i: string) => {
      return <IUser>{ 'result': undefined, name: i };
    }));

  constructor() {
  }

  onlineCopunter = 0;
  offlineCopunter = 0;

  ngOnInit() {
  }

  onVote(result: EVote, item) {
    if (result === EVote.Online) {
      this.onlineCopunter++;
    } else {
      this.offlineCopunter++;
    }
    item.result = result;
  }

}
