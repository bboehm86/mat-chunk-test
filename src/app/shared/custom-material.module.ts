import { NgModule } from '@angular/core';

import {
  MdButtonModule,
  MdCardModule,
  MdCheckboxModule,
  MdIconModule,
  MdRadioModule,
  MdSlideToggleModule
} from '@angular/material';

@NgModule({
  exports: [
    MdButtonModule,
    MdCardModule,
    MdCheckboxModule,
    MdIconModule,
    MdRadioModule,
    MdSlideToggleModule
  ],
  declarations: []
})
export class CustomMaterialModule { }
