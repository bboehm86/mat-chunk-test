import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SecondRoutingModule } from './second-routing.module';

import { MaterialModule } from '@angular/material';

import { SecondComponent } from './second.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    SecondRoutingModule
  ],
  declarations: [ SecondComponent ]
})
export class SecondModule { }
