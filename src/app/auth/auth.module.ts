import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {   MatSnackBarModule} from '@angular/material';

import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { DynamicScriptLoaderService } from '../services/dynamic-script-loader.service';

import { RequestService } from '../../app/services/request.service';
import { HttpClientModule } from '@angular/common/http';

import { AuthRoutingModule } from './auth-routing.module';

import { StaffLoginComponent } from '../auth/StaffLogin/StaffLogin.component';

@NgModule({
  declarations: [
    StaffLoginComponent
  ],
  imports: [
    CommonModule,AuthRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,  MatSnackBarModule
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    DynamicScriptLoaderService,
    RequestService],

})
export class AuthModule { }


