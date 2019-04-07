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
    FlexLayoutModule 
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
    FlexLayoutModule
  ]
})
export class ShareModule { }
