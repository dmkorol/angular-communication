import { Component, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-form-address',
  template: `
    
  `,
  styles: [],
  viewProviders: [ { provide: ControlContainer, useExisting: NgForm } ]
})
export class UserFormAddressComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
