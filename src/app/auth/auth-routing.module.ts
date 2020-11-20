import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginadminComponent } from '../auth/loginadmin/loginadmin.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'loginadmin',
    pathMatch: 'full'
  },

  {

    path: 'loginadmin',
    component: LoginadminComponent

  },
 {
    path: 'loginadmin',
    component: LoginadminComponent
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }


