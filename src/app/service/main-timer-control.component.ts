import { Component, OnInit } from '@angular/core';
import { TimerService } from './timer.service';

@Component({
  selector: 'app-main-timer-control',
  template: `
    <p>
      <button (click)="stop()">Stop all</button>
      <button (click)="resume()">Resume all</button>
    </p>
    <ng-content></ng-content>
  `,
  styles: [],
  providers: [TimerService]
})
export class MainTimerControlComponent implements OnInit {

  constructor(private timerService: TimerService) {
  }

  ngOnInit() {
  }

  stop() {
    this.timerService.stopAll();
  }

  resume() {
    this.timerService.startAll();
  }

}
