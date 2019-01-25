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
    ContentControlsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
