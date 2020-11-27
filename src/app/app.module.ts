import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';

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

import { CountryComponent } from './Master/country/country.component';
import { StateComponent } from './Master/state/state.component';
import { RegionComponent } from './Master/region/region.component';
import { GenderComponent } from './Master/gender/gender.component';
import { InterestedComponent } from './Master/interested/interested.component';
import { MembershipCategoryComponent } from './Master/membership-category/membership-category.component';
import { MembershipTypeComponent } from './Master/membership-type/membership-type.component';
import { CityComponent } from './Master/city/city.component';
import { MemberclassComponent } from './Master/memberclass/memberclass.component';
import { CitymasterComponent } from './Master/citymaster/citymaster.component';
import { MembershipcostComponent } from './Master/membershipcost/membershipcost.component';
import { CountrymasComponent } from './Master/countrymas/countrymas.component';
import { ChapterComponent } from './Master/chapter/chapter.component';
import { DistrictComponent } from './Master/district/district.component';

// import { MembershipclassificationComponent } from './Master/membershipclassification/membershipclassification.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PageLoaderComponent,
    SidebarComponent,
    RightSidebarComponent,
    CountryComponent,
    StateComponent,
    RegionComponent,
    GenderComponent,
    InterestedComponent,
    MembershipCategoryComponent,
    MembershipTypeComponent,
    CityComponent,
    MemberclassComponent,
    CitymasterComponent,
    MembershipcostComponent,
    CountrymasComponent,
    ChapterComponent,
    DistrictComponent
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
    MatSnackBarModule,
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    DynamicScriptLoaderService,
    RequestService,
    { provide: 'moment', useValue: moment }],
  bootstrap: [AppComponent]
})
export class AppModule { }
