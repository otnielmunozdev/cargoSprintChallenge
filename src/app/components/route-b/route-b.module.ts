import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouteBRoutingModule } from './route-b-routing.module';
import { RouteBComponent } from './route-b.component';
import { DaysOfWeekPipe } from 'src/app/shared/pipes/days-of-week-pipe';

@NgModule({
  declarations: [
    RouteBComponent,
    DaysOfWeekPipe
   ],
  imports: [
    CommonModule,
    RouteBRoutingModule,
  ]})
export class RouteBModule { }
