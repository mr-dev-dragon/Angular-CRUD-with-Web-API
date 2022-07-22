import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListUsersComponent } from './list-users/list-users.component';
import { ViweUserComponent } from './viwe-user/viwe-user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { DeleteComponent } from './delete/delete.component';



@NgModule({
  declarations: [
    ListUsersComponent,
    ViweUserComponent,
    AddUserComponent,
    EditUserComponent,
    DeleteComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UsersModule { }
