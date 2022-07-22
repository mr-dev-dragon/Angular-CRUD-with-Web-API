import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteComponent } from './delete/delete.component';
import { CreateComponent } from './create/create.component';
import { UsersComponent } from './users/users.component';
import { EditComponent } from './edit/edit.component';
import { UserComponent } from './user/user.component';



@NgModule({
  declarations: [
    DeleteComponent,
    CreateComponent,
    UsersComponent,
    EditComponent,
    UserComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UsersModule { }
