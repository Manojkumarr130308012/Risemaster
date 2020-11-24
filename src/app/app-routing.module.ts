import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CountryComponent } from './Master/country/country.component';
import { StateComponent } from './Master/state/state.component';
import { CityComponent } from './Master/city/city.component';
import { GenderComponent } from './Master/gender/gender.component';
import { InterestedComponent } from './Master/interested/interested.component';
import { MembershipCategoryComponent } from './Master/membership-category/membership-category.component';
import { MembershipTypeComponent } from './Master/membership-type/membership-type.component';
// Student Master

// Staff Master

// Vehicle Management

// Staff Management

//CandidateEnquiry

//Student Management

//subject MAster





const routes: Routes = [
  // { path: '', component: LoginComponent },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  },


  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },


  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },


 
  {
    path: 'country',
    component: CountryComponent
  },
  {
    path: 'state',
    component: StateComponent
  },
  {
    path: 'city',
    component: CityComponent
  },
  {
    path: 'gender',
    component: GenderComponent
  },
  {
    path: 'interest',
    component: InterestedComponent
  },
  {
    path: 'membarshipcategory',
    component: MembershipCategoryComponent
  },
  {
    path: 'membarshiptype',
    component: MembershipTypeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
