import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>
    {{title}}
  </h1>

  <button routerLink="/first" routerLinkActive="active" md-raised-button>
    1. route
    <md-icon>done</md-icon>
  </button>

  <button routerLink="/second" routerLinkActive="active" md-raised-button>
    2. route
    <md-icon>done</md-icon>
  </button>

  <button routerLink="/third" routerLinkActive="active" md-raised-button>
    3. route
    <md-icon>done</md-icon>
  </button>

  <router-outlet></router-outlet>
  `,
  styles: [`button:not(.active) md-icon { opacity: 0 }`]
})
export class AppComponent {
  title = 'app works!';
}
