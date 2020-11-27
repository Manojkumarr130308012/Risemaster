import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CountryComponent } from './Master/country/country.component';
import { StateComponent } from './Master/state/state.component';
import { RegionComponent } from './Master/region/region.component';
import { GenderComponent } from './Master/gender/gender.component';
import { InterestedComponent } from './Master/interested/interested.component';
import { MembershipCategoryComponent } from './Master/membership-category/membership-category.component';
import { MembershipTypeComponent } from './Master/membership-type/membership-type.component';
import { CitymasterComponent } from './Master/citymaster/citymaster.component';
import { MemberclassComponent } from './Master/memberclass/memberclass.component';
import { MembershipcostComponent } from './Master/membershipcost/membershipcost.component';
import { CountrymasComponent } from './Master/countrymas/countrymas.component';
import { ChapterComponent } from './Master/chapter/chapter.component';
import { CityComponent } from './Master/city/city.component';
import { DistrictComponent } from './Master/district/district.component';
// import { MembershipclassificationComponent } from './Master/membershipclassification/membershipclassification.component';

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
    path: 'region',
    component: RegionComponent
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
    path: 'membershipcategory',
    component: MembershipCategoryComponent
  },
  {
    path: 'membershiptype',
    component: MembershipTypeComponent
  },
  {
    path: 'city',
    component: CityComponent
  },
  {
    path: 'memberclassification',
    component: MemberclassComponent
  },
  {
    path: 'membershipcost',
    component: MembershipcostComponent
  },
  {
    path: 'countrymas',
    component: CountrymasComponent
  },
  {
    path: 'chapter',
    component: ChapterComponent
  },
  {
    path: 'district',
    component: DistrictComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
