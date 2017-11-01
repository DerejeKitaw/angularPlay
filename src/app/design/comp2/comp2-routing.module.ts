import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Comp2AComponent } from 'app/design/comp2/comp2-a/comp2-a.component';
import { Comp2Component } from 'app/design/comp2/comp2.component';
import { Comp2BComponent } from 'app/design/comp2/comp2-b/comp2-b.component';
import { Comp2CComponent } from 'app/design/comp2/comp2-c/comp2-c.component';

const routes: Routes = [
  { path: 'comp2', component: Comp2Component,
  children: [
    { path: '', redirectTo: 'comp1', pathMatch: 'full' },
    { path: 'comp2a', component: Comp2AComponent },
    { path: 'comp2b', component: Comp2BComponent },
    { path: 'comp2c', component: Comp2CComponent }
  ] },
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Comp2RoutingModule { }
