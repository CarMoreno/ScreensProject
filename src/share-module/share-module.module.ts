import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  MatButtonModule, 
  MatCheckboxModule,
  MatMenuModule,
  MatCardModule,
  MatTabsModule,
  MatExpansionModule,
  MatInputModule,
  MatSelectModule,
  MatOptionModule,
  MatFormFieldModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PRDesignModule } from 'src/prdesign-module/prdesign-module.module';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,
    MatCardModule,
    MatTabsModule,
    MatExpansionModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatFormFieldModule,
    FlexLayoutModule ,
    PRDesignModule
  ],
  exports:[
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,
    MatCardModule,
    MatTabsModule,
    MatExpansionModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    FlexLayoutModule,
    PRDesignModule
  ]
})
export class ShareModule { }
