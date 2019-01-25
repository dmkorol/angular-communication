import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-index',
  template: `
    <app-content-controlls>
      <h2>Header</h2>
      <app-template-timer
        *ngFor="let item of vals" [value]="item"
      ></app-template-timer>
    </app-content-controlls>`,
  /**`
   <!-- TODO: Need to be discussed -->
   <app-content-controlls [values]="vals">
   <h2>Header</h2>
   <app-template-timer
   *ngFor="let item of vals" [value]="item"
   ></app-template-timer>
   </app-content-controlls>

   <!-- TODO: Next time implement -->
   <!--<app-content-controlls [values]="vals">-->
   <!--<ng-template uTemplate="item" let-item>-->
   <!--<app-template-timer [value]="item"></app-template-timer>-->
   <!--</ng-template>-->
   <!--</app-content-controlls>-->
   `,*/
  styles: []
})

export class ContentIndexComponent implements OnInit {
  vals = [1, 2, 4, 5, 7];

  constructor() {
  }

  ngOnInit() {
  }

}
