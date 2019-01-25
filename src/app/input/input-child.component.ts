import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export enum EVote {
  Offline = 'offline',
  Online = 'online'
}

@Component({
  selector: 'app-input-child',
  template: `
    <p>{{name}}
      <ng-container *ngIf="!this._isVoted">
        <button (click)="onVote('online')">online</button>
        <button (click)="onVote('offline')">offline</button>
      </ng-container>
      <ng-container *ngIf="this._isVoted">
        <i>{{_result}} {{result}}</i>
      </ng-container>
    </p>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputChildComponent implements OnInit {
  @Input() name: string;

  @Input() set result(value: EVote) {
    this._result = value;
  }

  @Output() vote: EventEmitter<EVote> = new EventEmitter();

  _result: EVote;

  get _isVoted() {
    return this._result !== undefined;
  }

  constructor() {
  }

  ngOnInit() {
  }

  onVote(val: EVote) {
    this.vote.emit(val);
  }
}
