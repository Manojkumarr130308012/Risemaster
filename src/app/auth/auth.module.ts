import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { StudentLoginComponent } from './studentLogin/studentLogin.component';



import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [StudentLoginComponent],
  imports: [
    CommonModule,AuthRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class AuthModule { }


