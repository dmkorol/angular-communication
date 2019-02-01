import { AfterContentInit, Component, ContentChildren, OnInit, QueryList, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

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
      <ng-content></ng-content>
    </form>
    <pre>{{ myForm.value | json }}</pre>
  `,
  styles: []
})
export class UserFormComponent implements OnInit, AfterContentInit {
  @ContentChildren(NgModel) public models: QueryList<NgModel>;
  @ViewChild(NgForm) public form: NgForm;

  ngAfterContentInit() {
    this.models.toArray().forEach(item => {
      this.form.addControl(item);
    });
  }

  constructor() {
  }

  ngOnInit() {
  }

}
