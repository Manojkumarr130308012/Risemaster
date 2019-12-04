import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentLoginComponent } from './studentLogin/studentLogin.component';
import { StaffLoginComponent } from '../auth/StaffLogin/StaffLogin.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'staff-login',
    pathMatch: 'full'
  },

  {

    path: 'staff-login',
    component: StaffLoginComponent

  },
  // {
  //   path: 'studentLogin',
  //   component: StudentLoginComponent
  // },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }


