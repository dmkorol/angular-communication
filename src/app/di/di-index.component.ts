import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-di-index',
  template: `
    <app-user-form></app-user-form>
  `,
  styles: []
})
export class DiIndexComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
