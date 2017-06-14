import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FirstRoutingModule } from './first-routing.module';

import { CustomMaterialModule } from './../shared/custom-material.module';

import { FirstComponent } from './first.component';

@NgModule({
  imports: [
    CommonModule,
    CustomMaterialModule,
    FormsModule,
    FirstRoutingModule
  ],
  declarations: [ FirstComponent ]
})
export class FirstModule { }
