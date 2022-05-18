import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeadsRoutingModule } from './leads-routing.module';
import { LeadsComponent } from './leads.component';
import { ViewleadsComponent } from './viewleads/viewleads.component';
import { EditleadsComponent } from './editleads/editleads.component';
import { AddleadsComponent } from './addleads/addleads.component';


@NgModule({
  declarations: [
    LeadsComponent,
    ViewleadsComponent,
    EditleadsComponent,
    AddleadsComponent
  ],
  imports: [
    CommonModule,
    LeadsRoutingModule
  ]
})
export class LeadsModule { }
