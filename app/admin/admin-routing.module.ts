import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminguardGuard } from '../adminguard.guard';
import { SafeguardGuard } from '../safeguard.guard';
import { AddRoleComponent } from './add-role/add-role.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AdminComponent } from './admin.component';
import { EditRoleComponent } from './edit-role/edit-role.component';
import { EditUseComponent } from './edit-use/edit-use.component';
import { EdituserComponent } from './edituser/edituser.component';
import { EditusersComponent } from './editusers/editusers.component';
import { ViewRolesComponent } from './view-roles/view-roles.component';
import { ViewUsersComponent } from './view-users/view-users.component';

const routes: Routes = [{ path: '', component: AdminComponent, canActivate:[AdminguardGuard] },

                        {path :"app-add-role", component :AddRoleComponent},
                        {path :"app-add-user", component:AddUserComponent},
                        {path:"app-edit-role", component:EditRoleComponent},
                        {path :"app-edit-use", component:EditUseComponent},
                        {path :"app-view-roles", component:ViewRolesComponent},
                        {path:"app-view-users", component:ViewUsersComponent},
                        {path:"app-edituser", component:EdituserComponent},
                        {path:"app-editusers",component:EditusersComponent }];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
