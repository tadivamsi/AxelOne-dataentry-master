import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: "", component : LoginComponent},
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) }, { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) }, { path: 'Leads', loadChildren: () => import('./leads/leads.module').then(m => m.LeadsModule) }, { path: 'customer', loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule) }, { path: 'Contract', loadChildren: () => import('./contract/contract.module').then(m => m.ContractModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
