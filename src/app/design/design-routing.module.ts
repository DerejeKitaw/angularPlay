import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Comp1Component } from 'app/design/comp1/comp1.component';
import { Comp2Component } from 'app/design/comp2/comp2.component';
import { Comp3Component } from 'app/design/comp3/comp3.component';

const routes: Routes = [
  { path: 'comp1', component: Comp1Component },
  { path: 'comp2', component: Comp2Component },
  { path: 'comp3', component: Comp3Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DesignRoutingModule { }
