import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DesignRoutingModule } from './design-routing.module';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { Comp3Component } from './comp3/comp3.component';
import { Comp1Module } from 'app/design/comp1/comp1.module';
import { Comp2Module } from 'app/design/comp2/comp2.module';

@NgModule({
  imports: [
    CommonModule,
    DesignRoutingModule,
    Comp1Module,
    Comp2Module,
  ],
  declarations: [Comp1Component, Comp2Component, Comp3Component]
})
export class DesignModule { }
