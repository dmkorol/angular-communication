import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-form',
  template: `
    <form #myForm="ngForm">
      <div>
        <label>Firstname:</label>
        <input type="text" name="firstName" ngModel>
      </div>
      <div>
        <label>Lastname:</label>
        <input type="text" name="lastName" ngModel>
      </div>
      <app-user-form-address></app-user-form-address>
    </form>
    <pre>{{ myForm.value | json }}</pre>
  `,
  styles: []
})
export class UserFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
