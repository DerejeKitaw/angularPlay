import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DesignModule } from 'app/design/design.module';
import { MyNgIfDirective } from './my-ng-if/my-ng-if.directive';
import { TestMyNgIfDirectiveComponent } from './test-my-ng-if-directive/test-my-ng-if-directive.component';

@NgModule({
  declarations: [
    AppComponent,
    MyNgIfDirective,
    TestMyNgIfDirectiveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    DesignModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
