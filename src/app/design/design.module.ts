import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DesignRoutingModule } from './design-routing.module';
import { Comp1Component } from './comp1/comp1.component';

@NgModule({
  imports: [
    CommonModule,
    DesignRoutingModule
  ],
  declarations: [Comp1Component]
})
export class DesignModule { }
