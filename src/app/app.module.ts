import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SalesPageComponent } from './sales-page/sales-page.component';
import { AnimationTestComponent } from './animation-test/animation-test.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TheamChangeComponent } from './theam-change/theam-change.component';
import { FormsModule } from '@angular/forms';
import { ResponsiveIframeComponent } from './responsive-iframe/responsive-iframe.component';

@NgModule({
  declarations: [
    AppComponent,
    SalesPageComponent,
    AnimationTestComponent,
    TheamChangeComponent,
    ResponsiveIframeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
