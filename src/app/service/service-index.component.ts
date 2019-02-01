import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-index',
  template: `
    <h2>User edit</h2>
    <app-user-info-short></app-user-info-short>
    <app-user-info-edit></app-user-info-edit>

    <h2>Timers</h2>
    <app-main-timer-control>
      <app-service-timer></app-service-timer>
      <app-service-timer></app-service-timer>
      <app-service-timer></app-service-timer>
    </app-main-timer-control>

    <app-main-timer-control>
      <app-service-timer></app-service-timer>
      <app-service-timer></app-service-timer>
      <app-service-timer></app-service-timer>
    </app-main-timer-control>
  `,
  styles: []
})
export class ServiceIndexComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
