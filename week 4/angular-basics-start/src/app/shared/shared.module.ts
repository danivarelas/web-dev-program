import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BarComponent } from './bar/bar.component';
import { FormatGenderPipe } from './format-gender.pipe';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    BarComponent,
    FormatGenderPipe
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    FormatGenderPipe,
    BarComponent,
    CommonModule,
    FormsModule,
    HttpClientModule
  ]
})
export class SharedModule { }
