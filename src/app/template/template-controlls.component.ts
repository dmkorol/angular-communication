import { Component, Input, OnInit } from '@angular/core';
import { TemplateTimerComponent } from './template-timer.component';

@Component({
  selector: 'app-template-controlls',
  template: `
    <p>
      <button (click)="start()">Start</button>
      <button (click)="stop()">Stop</button>
      <button (click)="timer.seconds___=0">Reset</button>
    </p>
    {{timer.seconds___}}
  `,
  styles: []
})
export class TemplateControllsComponent implements OnInit {

  @Input()
  timer: TemplateTimerComponent;

  constructor() {
  }

  ngOnInit() {
  }

  start() {
    this.timer.start();
  }

  stop() {
    this.timer.stop();
  }
}
