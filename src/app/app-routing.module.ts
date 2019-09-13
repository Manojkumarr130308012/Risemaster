import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

import { BloodgroupComponent } from './Master/bloodgroup/bloodgroup.component';
import { CasteComponent } from './Master/caste/caste.component';
import { CommunityComponent } from './Master/community/community.component';
import { NationalityComponent } from './Master/nationality/nationality.component';
import { ReligionComponent } from './Master/religion/religion.component';
import { FileuploadComponent } from './fileupload/fileupload.component';
import { AcademicYearComponent } from './Master/academic-year/academic-year.component';
import { UserDesignationComponent } from './Master/user-designation/user-designation.component';

import { AdmissionTypeComponent } from './Master/admission-type/admission-type.component';
import { InstitutionComponent } from './Master/institution/institution.component';
import { BoardOfEducationComponent } from './Master/board-of-education/board-of-education.component';
import { AdmissionCategoryComponent } from './Master/admission-category/admission-category.component';
import { CourseProgramComponent } from './Master/course-program/course-program.component';
import { CourseCategoryComponent } from './Master/course-category/course-category.component';

// Student Master
import { AddressTypeComponent } from './StudentMaster/address-type/address-type.component';
import { CourseTypeComponent } from './StudentMaster/course-type/course-type.component';
import { DegreeComponent } from './StudentMaster/degree/degree.component';
import { InstitutionTypeComponent } from './StudentMaster/institution-type/institution-type.component';
import { MediumComponent } from './StudentMaster/medium/medium.component';
import { MotherTongueComponent } from './StudentMaster/mother-tongue/mother-tongue.component';
import { PaymentMethodComponent } from './StudentMaster/payment-method/payment-method.component';
import { ReferralTypeComponent } from './StudentMaster/referral-type/referral-type.component';
import { ScholarshipCategoryComponent } from './StudentMaster/scholarship-category/scholarship-category.component';
import { BankComponent } from './StudentMaster/bank/bank.component';

//Staff Master
import { GenderComponent } from './StaffMaster/gender/gender.component';
import { MaritalStatusComponent } from './StaffMaster/marital-status/marital-status.component';
import { DepartmentComponent } from './StaffMaster/department/department.component';
import { StaffTypeComponent } from './StaffMaster/staff-type/staff-type.component';
import { StaffRoleComponent } from './StaffMaster/staff-role/staff-role.component';
import { PayTypeComponent } from './StaffMaster/pay-type/pay-type.component';
import { SalutationComponent } from './StaffMaster/salutation/salutation.component';
import { FeeTypeComponent } from './StaffMaster/fee-type/fee-type.component';
import { ModeOfEnquiryComponent } from './StaffMaster/mode-of-enquiry/mode-of-enquiry.component';

const routes: Routes = [
  //{ path: '', component: LoginComponent },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  },

  {
    path: 'user-designation',
    component: UserDesignationComponent
  },

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'file',
    component: FileuploadComponent
  },

  {
    path: 'nationality',
    component: NationalityComponent
  },


  {
    path: 'religion',
    component: ReligionComponent
  },

  {
    path: 'community',
    component: CommunityComponent
  },

  {
    path: 'caste',
    component: CasteComponent
  },

  {
    path: 'bloodgroup',
    component: BloodgroupComponent
  },

  {
    path: 'academic-year',
    component: AcademicYearComponent
  },

  {
    path: 'admission-type',
    component: AdmissionTypeComponent
  },
  {
    path: 'institution',
    component: InstitutionComponent
  },
  {
    path: 'boardOfEducation',
    component: BoardOfEducationComponent
  },
  {
    path: 'admissionCategory',
    component: AdmissionCategoryComponent
  },
  {
    path: 'course-category',
    component: CourseCategoryComponent
  },


  {
    path: 'course-program',
    component: CourseProgramComponent
  },

  //Student Master
{
	path: 'address-type', 
	component: AddressTypeComponent
	},
 { 
 path: 'course-type', 
 component: CourseTypeComponent 
 },
 { 
 path: 'degree', 
 component: DegreeComponent 
 },
 { 
 path: 'institution-type', 
 component: InstitutionTypeComponent
 },
 { 
 path: 'medium',
 component: MediumComponent 
 },
 { 
 path: 'mother-tongue', 
 component: MotherTongueComponent
 },
 { 
 path: 'payment-method', 
 component: PaymentMethodComponent 
 },
 {
	 path: 'referral-type', 
	 component: ReferralTypeComponent
	 },
 { 
 path: 'scholarship-category',
 component: ScholarshipCategoryComponent 
 },
 { 
 path: 'bank',
 component: BankComponent 
 },

 // Staff Master
{ 
  path: 'staff-type', 
  component: StaffTypeComponent 
  },

{
  path: 'staff-role', 
  component: StaffRoleComponent 
  },

{ 
  path: 'pay-type', 
  component: PayTypeComponent 
  },

{ 
  path: 'salutation', 
  component: SalutationComponent 
  },

{ 
  path: 'gender', 
  component: GenderComponent 
  },

{ 
  path: 'marital-status', 
  component: MaritalStatusComponent 
  },

{ 
  path: 'department', 
  component: DepartmentComponent 
  },

{ 
  path: 'fee-type', 
  component: FeeTypeComponent 
  },

{ 
  path: 'mode-of-enquiry', 
  component: ModeOfEnquiryComponent 
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
