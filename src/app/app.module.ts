import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule} from '@angular/material';

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


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PageLoaderComponent,
    SidebarComponent,
    RightSidebarComponent,
    CountryComponent,
    StateComponent


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
