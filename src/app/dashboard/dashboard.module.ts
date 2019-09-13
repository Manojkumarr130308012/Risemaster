import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { MainComponent } from './main.component';

import { ChartsModule as chartjsModule } from 'ng2-charts';
import { NgxEchartsModule } from "ngx-echarts";


@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    chartjsModule,
    NgxEchartsModule
  ]
})
export class DashboardModule { }