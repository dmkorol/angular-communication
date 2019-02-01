import { Component, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-form-address',
  template: `
    <fieldset ngModelGroup="address">
      <div>
        <label>Zip:</label>
        <input type="text" name="zip" ngModel>
      </div>
      <div>
        <label>Street:</label>
        <input type="text" name="street" ngModel>
      </div>
      <div>
        <label>City:</label>
        <input type="text" name="city" ngModel>
      </div>
    </fieldset>
  `,
  styles: [],
  viewProviders: [ { provide: ControlContainer, useExisting: NgForm } ]
})
export class UserFormAddressComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
