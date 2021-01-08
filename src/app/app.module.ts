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

//firebase

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { environment } from '../environments/environment';



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
import { MemberComponent } from './Master/member/member.component';
import { EventsComponent } from './Master/events/events.component';
import { SpeakerComponent } from './Master/speaker/speaker.component';
import { TrackerComponent } from './Master/tracker/tracker.component';
import { AgendaComponent } from './Master/agenda/agenda.component';
import { EventimagesComponent } from './Master/eventimages/eventimages.component';
import { UploadTaskComponent } from './Master/upload-task/upload-task.component';
import { EventlinkComponent } from './Master/eventlink/eventlink.component';
import { SponsorComponent } from './Master/sponsor/sponsor.component';
import { BannerComponent } from './Master/banner/banner.component';
import { NewsComponent } from './Master/news/news.component';

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
    DistrictComponent,
    MemberComponent,
    EventsComponent,
    SpeakerComponent,
    TrackerComponent,
    AgendaComponent,
    EventimagesComponent,
    UploadTaskComponent,
    EventlinkComponent,
    SponsorComponent,
    BannerComponent,NewsComponent,
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
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule, // for database
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    DynamicScriptLoaderService,
    RequestService,
    { provide: 'moment', useValue: moment }],
  bootstrap: [AppComponent]
})
export class AppModule { }
