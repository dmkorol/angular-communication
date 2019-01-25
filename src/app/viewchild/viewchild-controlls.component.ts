import { AfterContentInit, AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { TemplateTimerComponent } from '../template/template-timer.component';

@Component({
  selector: 'app-viewchild-controlls',
  template: `
    <h2>ngFor</h2>
    <div>
      <button (click)="start()">Start all</button>
      <button (click)="stop()">Stop all</button>
      <button (click)="add()">Add</button>
    </div>
    <hr>
    <app-template-timer *ngFor="let item of vals" [value]="item"></app-template-timer>

    <br>
    <br>
    <h2>Single</h2>
    <div>
      <button (click)="isTimerShown=!isTimerShown">Show Single timer</button>
      <button (click)="getTimer()">Get Single Timer</button>
    </div>
    <hr>
    <app-template-timer *ngIf="isTimerShown"></app-template-timer>

  `,
  styles: []
})
export class ViewchildControllsComponent implements OnInit, AfterViewInit {
  vals = [1, 2, 4, 5, 7];
  isTimerShown = false;

  @ViewChildren(TemplateTimerComponent) timers: QueryList<TemplateTimerComponent>;

  @ViewChild(TemplateTimerComponent) timer;
  @ViewChild(TemplateTimerComponent, { read: ElementRef }) timerEl;

  constructor() {
    console.log(this.timers);
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    // console.log(this.timers);
    // console.log(this.timer);
    this.timers.changes.subscribe(value => {
      console.log(this.timers.toArray());
    });
  }

  stop() {
    this.timers.forEach(i => {
      i.stop();
    });
  }

  start() {
    this.timers.forEach(i => {
      i.start();
    });
  }

  add() {
    this.vals.push(22);
  }

  getTimer() {
    console.log(this.timer);
    console.log(this.timerEl);
  }
}
