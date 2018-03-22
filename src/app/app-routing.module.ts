import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestMyNgIfDirectiveComponent } from './test-my-ng-if-directive/test-my-ng-if-directive.component';

const routes: Routes = [
  {path: 'ngif',
  component: TestMyNgIfDirectiveComponent},
  {
    path: '',
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
