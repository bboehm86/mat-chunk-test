import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'first'
  },
  {
    path: 'first',
    loadChildren: './first/first.module#FirstModule'
  },
  {
    path: 'second',
    loadChildren: './second/second.module#SecondModule'
  },
  {
    path: 'third',
    loadChildren: './third/third.module#ThirdModule'
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  providers: []
})
export class AppRoutingModule { }
