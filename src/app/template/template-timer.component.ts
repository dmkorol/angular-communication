import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-timer',
  template: `
    <h2>{{seconds___}}</h2>
  `,
  styles: []
})
export class TemplateTimerComponent implements OnInit, OnDestroy {
  @Input() set value(val: number) {
    this.seconds___ = val;
  }

  intervalId: any;
  seconds___ = 0;

  constructor() {
  }

  ngOnInit() {
    this.start();
  }

  public start() {
    if (!this.intervalId) {
      this.intervalId = window.setInterval(() => {
        this.seconds___++;
      }, 500);
    }
  }

  public stop() {
    clearInterval(this.intervalId);
    this.intervalId = undefined;
  }

  public reset() {
    this.seconds___ = 0;
  }

  ngOnDestroy() {
    this.stop();
  }

}
