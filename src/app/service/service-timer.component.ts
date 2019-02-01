import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { TimerService } from './timer.service';

@Component({
  selector: 'app-service-timer',
  template: `
    <h2>{{seconds___}}</h2>
  `,
  styles: []
})
export class ServiceTimerComponent implements OnInit, OnDestroy {
  @Input() set value(val: number) {
    this.seconds___ = val;
  }

  intervalId: any;
  seconds___ = 0;

  constructor(private timerService: TimerService) {
  }

  ngOnInit() {
    this.timerService.register(this);
    this.start();
  }

  ngOnDestroy() {
    this.timerService.unregister(this);
    this.stop();
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
}

