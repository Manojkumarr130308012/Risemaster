import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { DynamicScriptLoaderService } from '../services/dynamic-script-loader.service';

import { RequestService } from '../../app/services/request.service';
import { HttpClientModule } from '@angular/common/http';

import { AuthRoutingModule } from './auth-routing.module';

import { LoginadminComponent } from '../auth/loginadmin/loginadmin.component';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [LoginadminComponent],
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


