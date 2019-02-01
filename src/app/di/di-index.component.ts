import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-di-index',
  template: `
    <app-user-form>
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
    </app-user-form>
  `,
  styles: []
})
export class DiIndexComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
