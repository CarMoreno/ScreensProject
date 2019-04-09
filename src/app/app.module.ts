import { ShareModule } from '../share-module/share-module.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { PrGeneralTabsComponent } from './pr-general-tabs/pr-general-tabs.component';
import { PrTercerosComponent } from './pr-terceros/pr-terceros.component';
import { PrRadicacionComponent } from './pr-radicacion/pr-radicacion.component';
import { PrFormTipoTerceroComponent } from './pr-terceros/forms/pr-form-tipo-tercero/pr-form-tipo-tercero.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PrFormDatosBasicosPersonaNaturalComponent } from './pr-terceros/forms/pr-form-datos-basicos-persona-natural/pr-form-datos-basicos-persona-natural.component';
import { PrFormDatosBasicosPersonaJuridicaComponent } from './pr-terceros/forms/pr-form-datos-basicos-persona-juridica/pr-form-datos-basicos-persona-juridica.component';
@NgModule({
  declarations: [
    AppComponent,
    PrGeneralTabsComponent,
    PrTercerosComponent,
    PrRadicacionComponent,
    PrFormTipoTerceroComponent,
    PrFormDatosBasicosPersonaNaturalComponent,
    PrFormDatosBasicosPersonaJuridicaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ShareModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
