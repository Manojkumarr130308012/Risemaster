import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {   MatSnackBarModule} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { PageLoaderComponent } from './layout/page-loader/page-loader.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { RightSidebarComponent } from './layout/right-sidebar/right-sidebar.component';

import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { DynamicScriptLoaderService } from './services/dynamic-script-loader.service';

import { RequestService } from './../app/services/request.service';
import { HttpClientModule } from '@angular/common/http';
import {FileUploadModule} from 'ng2-file-upload';


import * as moment from 'moment';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {NgxPaginationModule} from 'ngx-pagination';
import { OrderModule } from 'ngx-order-pipe';

import { ArchwizardModule } from 'angular-archwizard';

import { AcademicYearComponent } from './Master/academic-year/academic-year.component';
import { UserDesignationComponent } from './Master/user-designation/user-designation.component';
import { BloodgroupComponent } from './Master/bloodgroup/bloodgroup.component';
import { CasteComponent } from './Master/caste/caste.component';
import { CommunityComponent } from './Master/community/community.component';
import { NationalityComponent } from './Master/nationality/nationality.component';
import { ReligionComponent } from './Master/religion/religion.component';



import { AdmissionTypeComponent } from './Master/admission-type/admission-type.component';
import { InstitutionComponent } from './Master/institution/institution.component';
import { AdmissionCategoryComponent } from './Master/admission-category/admission-category.component';
import { BoardOfEducationComponent } from './Master/board-of-education/board-of-education.component';
import { CourseProgramComponent } from './Master/course-program/course-program.component';
import { CourseCategoryComponent } from './Master/course-category/course-category.component';

// Student Master
import { DegreeComponent } from './StudentMaster/degree/degree.component';
import { MotherTongueComponent } from './StudentMaster/mother-tongue/mother-tongue.component';
import { ReferralTypeComponent } from './StudentMaster/referral-type/referral-type.component';
import { AddressTypeComponent } from './StudentMaster/address-type/address-type.component';
import { InstitutionTypeComponent } from './StudentMaster/institution-type/institution-type.component';
import { CourseTypeComponent } from './StudentMaster/course-type/course-type.component';
import { PaymentMethodComponent } from './StudentMaster/payment-method/payment-method.component';
import { MediumComponent } from './StudentMaster/medium/medium.component';
import { ScholarshipCategoryComponent } from './StudentMaster/scholarship-category/scholarship-category.component';
import { BankComponent } from './StudentMaster/bank/bank.component';
import { QualificationTypeComponent } from './StudentMaster/qualification-type/qualification-type.component';

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

import { ExpensesEntryComponent } from './VehicleManagement/Vehicle Transaction/expenses-entry/expenses-entry.component';
import { FuelEntryComponent } from './VehicleManagement/Vehicle Transaction/fuel-entry/fuel-entry.component';

import { VehicleTransactionComponent } from './VehicleManagement/vehicle-transaction/vehicle-transaction.component';


// Staff Management
import { StaffProfileComponent } from './StaffManagement/staff-profile/staff-profile.component';
import { StaffDetailsComponent } from './StaffManagement/staff-details/staff-details.component';


import { BatchComponent } from './Master/batch/batch.component';
import { ConvertToStudentComponent } from './StudentCandidateEnquiry/convert-to-student/convert-to-student.component';
import { StudentProfileComponent } from './StudentManagement/student-profile/student-profile.component';
import { StudentEntryComponent } from './StudentManagement/student-entry/student-entry.component';
import { CEAddFormComponent } from './StudentCandidateEnquiry/ce-add-form/ce-add-form.component';
import { CEEditFormComponent } from './StudentCandidateEnquiry/ce-edit-form/ce-edit-form.component';
import { CEMainPageComponent } from './StudentCandidateEnquiry/ce-main-page/ce-main-page.component';
import { StudentDetailComponent } from './StudentManagement/student-detail/student-detail.component';
import { RelationshipComponent } from './StudentMaster/relationship/relationship.component';
import { ActivityCategoryComponent } from './StudentMaster/activity-category/activity-category.component';
import { SubCategoryComponent } from './StudentMaster/sub-category/sub-category.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PageLoaderComponent,
    SidebarComponent,
    RightSidebarComponent,

    BloodgroupComponent,
    CasteComponent,
    CommunityComponent,
    NationalityComponent,
    ReligionComponent,

    AcademicYearComponent,
    UserDesignationComponent,
    AdmissionTypeComponent,
    InstitutionComponent,
    AdmissionCategoryComponent,
    BoardOfEducationComponent,
   CourseProgramComponent,
    CourseCategoryComponent,

    // Student Master
	  DegreeComponent,
    MotherTongueComponent,
    ReferralTypeComponent,
    AddressTypeComponent,
    InstitutionTypeComponent,
    CourseTypeComponent,
    PaymentMethodComponent,
    MediumComponent,
    ScholarshipCategoryComponent,
    BankComponent,
    QualificationTypeComponent,

    // Staff Master
    GenderComponent,
    MaritalStatusComponent,
    DepartmentComponent,
    StaffTypeComponent,
    StaffRoleComponent,
    PayTypeComponent,
    SalutationComponent,
    FeeTypeComponent,
    ModeOfEnquiryComponent,



    QualificationTypeComponent,

    // Vehicle Management
    VehicleMasterComponent,
    DriverMasterComponent,
    FillingStationsComponent,
    VehicleExpensesComponent,
    StageDetailsComponent,
    StaffProfileComponent,
    StaffDetailsComponent,

    VehicleTransactionComponent,
    ExpensesEntryComponent,
    FuelEntryComponent,

// Candidate Enquiry
BatchComponent,
CEAddFormComponent,
CEEditFormComponent,
CEMainPageComponent,
ConvertToStudentComponent,
//StudentManagement
StudentProfileComponent,
StudentEntryComponent,
StudentDetailComponent,
RelationshipComponent,
ActivityCategoryComponent,
SubCategoryComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    FileUploadModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    OrderModule,
    ArchwizardModule,
    MatSnackBarModule
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    DynamicScriptLoaderService,
    RequestService,
    { provide: 'moment', useValue: moment }],
  bootstrap: [AppComponent]
})
export class AppModule { }
