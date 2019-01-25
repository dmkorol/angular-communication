import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-index',
  template: `<p>
    <app-template-controlls [timer]="timer"></app-template-controlls>
    <app-template-timer #timer></app-template-timer>
  </p>
  `,
  styles: []
})
export class TemplateIndexComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
