import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ResizableDraggableComponent } from './component/resizable-draggable/resizable-draggable.component';
import { AppRoutingModule } from './app-routing.module';
import { MoveableDemo1Component } from './moveable-demo1/moveable-demo1.component';
import { NgxMoveableModule } from 'ngx-moveable';
import { AngularResizeElementModule } from 'angular-resize-element';
import { MoveableComponent } from './component/moveable/moveable.component';
import { MoveableDemoComponent } from './moveable-demo/moveable-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    ResizableDraggableComponent,
    MoveableDemo1Component,
    MoveableComponent,
    MoveableDemoComponent
  ],
  imports: [
    AppRoutingModule,
    NgxMoveableModule,
    AngularResizeElementModule,
    BrowserModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
