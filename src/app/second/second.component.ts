import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  template: `
    <p>
      second Works! - One Material Modules
    </p>
    <md-slide-toggle
        class="example-margin"
        [color]="color"
        [checked]="checked"
        [disabled]="disabled">
      Slide me!
    </md-slide-toggle>
  `,
  styles: []
})
export class SecondComponent implements OnInit {
  color = 'accent';
  checked = false;
  disabled = false;

  constructor() { }

  ngOnInit() {
  }

}
