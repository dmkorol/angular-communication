import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InputIndexComponent } from './input/input-index.component';
import { TemplateIndexComponent } from './template/template-index.component';
import { ViewchildIndexComponent } from './viewchild/viewchild-index.component';
import { ServiceIndexComponent } from './service/service-index.component';
import { DiIndexComponent } from './di/di-index.component';
import { ContentIndexComponent } from './content/content-index.component';

const routes: Routes = [
  { path: 'input', component: InputIndexComponent },
  { path: 'template', component: TemplateIndexComponent },
  { path: 'viewchild', component: ViewchildIndexComponent},
  { path: 'service', component: ServiceIndexComponent },
  { path: 'content', component: ContentIndexComponent },
  { path: 'di', component: DiIndexComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
