import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatMenuModule} from '@angular/material/menu';
import { MatButtonModule, 
         MatCheckboxModule,
         } from '@angular/material';

import { FlexLayoutModule } from '@angular/flex-layout';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,
    FlexLayoutModule 
  ],
  exports:[
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,
    FlexLayoutModule
  ]
})
export class ShareModule { }
