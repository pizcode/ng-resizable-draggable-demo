import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MoveableDemo1Component } from './moveable-demo1/moveable-demo1.component';
import { MoveableDemoComponent } from './moveable-demo/moveable-demo.component';

const routes: Routes = [
  { path: '', component: MoveableDemo1Component },
  { path: 'demo', component: MoveableDemoComponent },
  { path: '**', component: AppComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
