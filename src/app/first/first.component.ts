import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  template: `
    <p>
      first Works! - Some Material Modules
    </p>
    <md-card>
      <md-card-content>
        <h2 class="example-h2">Checkbox configuration</h2>

        <section class="example-section">
          <md-checkbox class="example-margin" [(ngModel)]="checked">Checked</md-checkbox>
          <md-checkbox class="example-margin" [(ngModel)]="indeterminate">Indeterminate</md-checkbox>
        </section>

        <section class="example-section">
          <label class="example-margin">Align:</label>
          <md-radio-group [(ngModel)]="align">
            <md-radio-button class="example-margin" value="start">Start</md-radio-button>
            <md-radio-button class="example-margin" value="end">End</md-radio-button>
          </md-radio-group>
        </section>

        <section class="example-section">
          <md-checkbox class="example-margin" [(ngModel)]="disabled">Disabled</md-checkbox>
        </section>
      </md-card-content>
    </md-card>

    <md-card class="result">
      <md-card-content>
        <h2 class="example-h2">Result</h2>

        <section class="example-section">
          <md-checkbox
              class="example-margin"
              [checked]="checked"
              [indeterminate]="indeterminate"
              [align]="align"
              [disabled]="disabled">
            I'm a checkbox
          </md-checkbox>
        </section>
      </md-card-content>
    </md-card>
  `,
  styles: []
})
export class FirstComponent implements OnInit {
  checked = false;
  indeterminate = false;
  align = 'start';
  disabled = false;

  constructor() { }

  ngOnInit() {
  }

}
