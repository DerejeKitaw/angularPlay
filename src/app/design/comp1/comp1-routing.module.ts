import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Comp1AComponent } from 'app/design/comp1/comp1-a/comp1-a.component';
import { Comp1BComponent } from 'app/design/comp1/comp1-b/comp1-b.component';
import { Comp1CComponent } from 'app/design/comp1/comp1-c/comp1-c.component';
import { Comp1Component } from 'app/design/comp1/comp1.component';

const routes: Routes = [
  { path: 'comp1', component: Comp1Component,
  children: [
    { path: '', redirectTo: 'comp1', pathMatch: 'full' },
    { path: 'comp1a', component: Comp1AComponent },
    { path: 'comp1b', component: Comp1BComponent },
    { path: 'comp1c', component: Comp1CComponent }
  ] },
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Comp1RoutingModule { }
