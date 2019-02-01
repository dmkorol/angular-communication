import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateIndexComponent } from './template/template-index.component';
import { ViewchildIndexComponent } from './viewchild/viewchild-index.component';
import { ServiceIndexComponent } from './service/service-index.component';
import { ContentIndexComponent } from './content/content-index.component';
import { DiIndexComponent } from './di/di-index.component';
import { InputIndexComponent } from './input/input-index.component';
import { InputParentComponent } from './input/input-parent.component';
import { InputChildComponent } from './input/input-child.component';
import { TemplateControllsComponent } from './template/template-controlls.component';
import { TemplateTimerComponent } from './template/template-timer.component';
import { ViewchildControllsComponent } from './viewchild/viewchild-controlls.component';
import { ContentControlsComponent } from './content/content-controlls.component';
import { UserInfoShortComponent } from './service/user-info-short.component';
import { UserInfoEditComponent } from './service/user-info-edit.component';
import { FormsModule } from '@angular/forms';
import { ServiceTimerComponent } from './service/service-timer.component';
import { MainTimerControlComponent } from './service/main-timer-control.component';
import { UserFormComponent } from './di/user-form.component';
import { UserFormAddressComponent } from './di/user-form-address.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateIndexComponent,
    ViewchildIndexComponent,
    ServiceIndexComponent,
    ContentIndexComponent,
    DiIndexComponent,
    InputIndexComponent,
    InputParentComponent,
    InputChildComponent,
    TemplateControllsComponent,
    TemplateTimerComponent,
    ViewchildControllsComponent,
    ContentControlsComponent,
    UserInfoShortComponent,
    UserInfoEditComponent,
    ServiceTimerComponent,
    MainTimerControlComponent,
    UserFormComponent,
    UserFormAddressComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
