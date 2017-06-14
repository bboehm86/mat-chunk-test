import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SecondRoutingModule } from './second-routing.module';

import { CustomMaterialModule } from './../shared/custom-material.module';

import { SecondComponent } from './second.component';

@NgModule({
  imports: [
    CommonModule,
    CustomMaterialModule,
    FormsModule,
    SecondRoutingModule
  ],
  declarations: [ SecondComponent ]
})
export class SecondModule { }
