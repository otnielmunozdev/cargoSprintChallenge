import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouteARoutingModule } from './route-a-routing.module';
import { RouteAComponent } from './route-a.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RouteAComponent
  ],
  imports: [
    CommonModule,
    RouteARoutingModule,
    FormsModule
  ],
})
export class RouteAModule { }
