import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContractRoutingModule } from './contract-routing.module';
import { ContractComponent } from './contract.component';
import { AddcontractComponent } from './addcontract/addcontract.component';
import { ViewcontractComponent } from './viewcontract/viewcontract.component';
import { EditcontractComponent } from './editcontract/editcontract.component';


@NgModule({
  declarations: [
    ContractComponent,
    AddcontractComponent,
    ViewcontractComponent,
    EditcontractComponent
  ],
  imports: [
    CommonModule,
    ContractRoutingModule
  ]
})
export class ContractModule { }
