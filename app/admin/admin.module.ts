import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUseComponent } from './edit-use/edit-use.component';
import { AddRoleComponent } from './add-role/add-role.component';
import { EditRoleComponent } from './edit-role/edit-role.component';
import { ViewUsersComponent } from './view-users/view-users.component';
import { ViewRolesComponent } from './view-roles/view-roles.component';
import { EdituserComponent } from './edituser/edituser.component';
import {ReactiveFormsModule} from '@angular/forms'
import {FormsModule} from '@angular/forms'
import {NgxPaginationModule} from 'ngx-pagination';
import { EditusersComponent } from './editusers/editusers.component';


@NgModule({
  declarations: [
    AdminComponent,
    AddUserComponent,
    EditUseComponent,
    AddRoleComponent,
    EditRoleComponent,
    ViewUsersComponent,
    ViewRolesComponent,
    EdituserComponent,
    EditusersComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    FormsModule,
NgxPaginationModule

  ]
})
export class AdminModule { }
