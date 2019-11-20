import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BloodgroupComponent } from './Master/bloodgroup/bloodgroup.component';
import { CasteComponent } from './Master/caste/caste.component';
import { CommunityComponent } from './Master/community/community.component';
import { NationalityComponent } from './Master/nationality/nationality.component';
import { ReligionComponent } from './Master/religion/religion.component';

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
import { QualificationTypeComponent } from './StudentMaster/qualification-type/qualification-type.component';
import { RelationshipComponent } from './StudentMaster/relationship/relationship.component';
import { ActivityCategoryComponent } from './StudentMaster/activity-category/activity-category.component';
import { SubCategoryComponent } from './StudentMaster/sub-category/sub-category.component';
import { BatchComponent } from './Master/batch/batch.component';
// Staff Master
import { GenderComponent } from './StaffMaster/gender/gender.component';
import { MaritalStatusComponent } from './StaffMaster/marital-status/marital-status.component';
import { DepartmentComponent } from './StaffMaster/department/department.component';
import { StaffTypeComponent } from './StaffMaster/staff-type/staff-type.component';
import { StaffRoleComponent } from './StaffMaster/staff-role/staff-role.component';
import { PayTypeComponent } from './StaffMaster/pay-type/pay-type.component';
import { SalutationComponent } from './StaffMaster/salutation/salutation.component';
import { FeeTypeComponent } from './StaffMaster/fee-type/fee-type.component';
import { ModeOfEnquiryComponent } from './StaffMaster/mode-of-enquiry/mode-of-enquiry.component';

// Vehicle Management
import { VehicleMasterComponent } from './VehicleManagement/vehicle-master/vehicle-master.component';
import { DriverMasterComponent } from './VehicleManagement/driver-master/driver-master.component';
import { FillingStationsComponent } from './VehicleManagement/filling-stations/filling-stations.component';
import { VehicleExpensesComponent } from './VehicleManagement/vehicle-expenses/vehicle-expenses.component';
import { StageDetailsComponent } from './VehicleManagement/stage-details/stage-details.component';
import { FuelEntryComponent } from './VehicleManagement/Vehicle Transaction/fuel-entry/fuel-entry.component';
import { ExpensesEntryComponent } from './VehicleManagement/Vehicle Transaction/expenses-entry/expenses-entry.component';
import { FuelEntryReportComponent } from './VehicleManagement/Vehicle Transaction/fuel-entry-report/fuel-entry-report.component';
import { ExpenseEntryReportComponent } from './VehicleManagement/Vehicle Transaction/Expense-entry-report/Expense-entry-report.component';

// Staff Management
import { StaffProfileComponent } from './StaffManagement/staff-profile/staff-profile.component';
import { StaffDetailsComponent } from './StaffManagement/staff-details/staff-details.component';
//CandidateEnquiry
import { CEMainPageComponent } from './StudentCandidateEnquiry/ce-main-page/ce-main-page.component';
import { CEAddFormComponent } from './StudentCandidateEnquiry/ce-add-form/ce-add-form.component';
import { CEEditFormComponent } from './StudentCandidateEnquiry/ce-edit-form/ce-edit-form.component';
import { ConvertToStudentComponent } from './StudentCandidateEnquiry/convert-to-student/convert-to-student.component';
import { CandidateReportComponent } from './StudentCandidateEnquiry/candidate-report/candidate-report.component';
//Student Management
import { StudentDetailComponent } from './StudentManagement/student-detail/student-detail.component';
import { CertificateTypeComponent } from './StudentMaster/certificate-type/certificate-type.component';
import { StudentEditComponent } from './StudentManagement/student-edit/student-edit.component';
import { StudentProfileComponent } from './StudentManagement/student-profile/student-profile.component';
import { StudentEntryComponent } from './StudentManagement/student-entry/student-entry.component';


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
    path: 'user-designation',
    component: UserDesignationComponent
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
    path: 'batch',
    component: BatchComponent
  },
  {
    path: 'course-category',
    component: CourseCategoryComponent
  },
  {
    path: 'course-program',
    component: CourseProgramComponent
  },

  // Student Master
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
 {
  path: 'qualification-type',
  component: QualificationTypeComponent
  },
  {
    path: 'relationship',
    component: RelationshipComponent
  },
  {
    path: 'activity-category',
    component: ActivityCategoryComponent
  },
  {
    path: 'sub-category',
    component: SubCategoryComponent
  },
  {
    path: 'certificateType',
    component: CertificateTypeComponent
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

    //  Vehicle Management
  { path: 'vehicle',
  component: VehicleMasterComponent },

  { path: 'driver',
  component: DriverMasterComponent },

  { path: 'vehicle-expenses',
  component: VehicleExpensesComponent },

  { path: 'filling-stations',
  component: FillingStationsComponent },

  { path: 'stage-details',
  component: StageDetailsComponent },

  { path: 'fuel-entry',
  component: FuelEntryComponent },

  { path: 'fuel-entry-report',
  component: FuelEntryReportComponent },



  { path: 'expenses-entry-report',
  component: ExpenseEntryReportComponent },

  { path: 'expenses-entry',
  component: ExpensesEntryComponent },



  // Staff Management
  { path: 'staff-profile',
  component: StaffProfileComponent },

  { path: 'staff-details',
  component: StaffDetailsComponent },

//CandidateEnquiry
  { path: 'candidateEnquiry',
  component: CEMainPageComponent },
  { path: 'addCandidate',
  component: CEAddFormComponent },
  { path: 'editCandidate',
  component: CEEditFormComponent },
  { path: 'convertToStudent',
  component: ConvertToStudentComponent },
  { path: 'candidateEnquiryReport',
  component: CandidateReportComponent },
  //StudentManagemnat
  { path: 'studentProfile',
  component: StudentProfileComponent },
  { path: 'studentEntry',
  component: StudentEntryComponent},
  { path: 'studentDetail',
  component: StudentDetailComponent},
  { path: 'studentEdit', 
  component: StudentEditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
