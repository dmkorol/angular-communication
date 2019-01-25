import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-index',
  template: `
    <app-input-parent></app-input-parent>
    
    <p></p>
  `,
  styles: []
})
export class InputIndexComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
