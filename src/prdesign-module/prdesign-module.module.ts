import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrAutocompleteComponent } from './pr-autocomplete/pr-autocomplete.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    PrAutocompleteComponent
  ],
  exports:[
    PrAutocompleteComponent
  ]
})
export class PRDesignModule { }
