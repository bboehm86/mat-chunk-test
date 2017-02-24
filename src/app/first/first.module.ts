import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FirstRoutingModule } from './first-routing.module';

import { MaterialModule } from '@angular/material';

import { FirstComponent } from './first.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    FirstRoutingModule
  ],
  declarations: [ FirstComponent ]
})
export class FirstModule { }
