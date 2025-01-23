import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudFormComponent } from './crud-form/crud-form.component';
import { CrudListComponent } from './crud-list/crud-list.component';

const routes: Routes = [
  {path:"",redirectTo:'crudList',pathMatch:'full'},
  {path:"crudForm",component:CrudFormComponent},
  {path:"crudList",component:CrudListComponent},
  {path:"editform/:id",component:CrudFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
