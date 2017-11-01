import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Comp1RoutingModule } from './comp1-routing.module';
import { Comp1AComponent } from './comp1-a/comp1-a.component';
import { Comp1BComponent } from './comp1-b/comp1-b.component';
import { Comp1CComponent } from './comp1-c/comp1-c.component';

@NgModule({
  imports: [
    CommonModule,
    Comp1RoutingModule
  ],
  declarations: [Comp1AComponent, Comp1BComponent, Comp1CComponent,]
})
export class Comp1Module { }
