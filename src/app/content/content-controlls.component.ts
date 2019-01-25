import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ContentChild,
  ContentChildren, ElementRef,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren
} from '@angular/core';
import { TemplateTimerComponent } from '../template/template-timer.component';

@Component({
  selector: 'app-content-controlls',
  template: `
    <button (click)="stop()">Stop all</button>
    <button (click)="resume()">Resume all</button>
    
    <ng-content></ng-content>
  `,
  styles: []
})
export class ContentControlsComponent implements OnInit, AfterViewInit {
  vals = [1, 2, 4, 5, 7];

  @ContentChildren(TemplateTimerComponent) timers: QueryList<TemplateTimerComponent>;
  @ContentChild(TemplateTimerComponent, {read: ElementRef}) timer: ElementRef;

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

  resume() {
    this.timers.forEach((i: TemplateTimerComponent) => {
      i.start();
    });
  }

  add() {
    this.vals.push(22);
  }

  getTimer() {
    console.log(this.timer);
  }
}
