import { UserComponent } from './users/user/user.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './users/create/create.component';
import { UsersComponent } from './users/users/users.component';
import { DeleteComponent } from './users/delete/delete.component';
import { EditComponent } from './users/edit/edit.component';

const routes: Routes = [
  { path: 'create',    component: CreateComponent, },
  { path: 'user/:id',   component: UserComponent, },
  { path: 'users',     component: UsersComponent,},
  { path: 'delete/:id', component: DeleteComponent,},
  { path: 'edit/:id',   component: EditComponent,},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
