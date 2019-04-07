import { ShareModule } from '../share-module/share-module.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { PrGeneralTabsComponent } from './pr-general-tabs/pr-general-tabs.component';
import { PrTercerosComponent } from './pr-terceros/pr-terceros.component';
import { PrRadicacionComponent } from './pr-radicacion/pr-radicacion.component';
@NgModule({
  declarations: [
    AppComponent,
    PrGeneralTabsComponent,
    PrTercerosComponent,
    PrRadicacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ShareModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
