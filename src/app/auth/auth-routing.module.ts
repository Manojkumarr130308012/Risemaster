import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentLoginComponent } from './studentLogin/studentLogin.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'studentLogin',
    pathMatch: 'full'
  },
  {
    path: 'studentLogin',
    component: StudentLoginComponent
  },

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }


