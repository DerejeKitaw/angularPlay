import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Comp2RoutingModule } from './comp2-routing.module';
import { Comp2AComponent } from './comp2-a/comp2-a.component';
import { Comp2BComponent } from './comp2-b/comp2-b.component';
import { Comp2CComponent } from './comp2-c/comp2-c.component';

@NgModule({
  imports: [
    CommonModule,
    Comp2RoutingModule
  ],
  declarations: [Comp2AComponent, Comp2BComponent, Comp2CComponent]
})
export class Comp2Module { }
