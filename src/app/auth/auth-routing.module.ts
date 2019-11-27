import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }


