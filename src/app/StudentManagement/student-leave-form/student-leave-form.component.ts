import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { RequestService } from '../../services/request.service';
import { ActivatedRoute } from '@angular/router';

import { DatePipe } from '@angular/common';
import { DynamicScriptLoaderService } from "../../services/dynamic-script-loader.service";
import { AuthService } from "../../services/auth.service";
declare const $: any;
declare const M: any;
declare const swal: any;

@Component({
  selector: 'app-student-leave-form',
  templateUrl: './student-leave-form.component.html',
  styleUrls: ['./student-leave-form.component.css'],
  providers: [DatePipe]
})
export class StudentLeaveFormComponent implements OnInit {

  public leaveType: any;
  public leaveFromDate: any;
  public leaveToDate: any;
  session: any;
  reason : any;
  message: any;
  userInfo: any;

  IdValue: any;
  institutionValue: any;
  batch: any;
  studentId: any;
  academicYear: any;
  requestDate: any;
  section: any;
  semester: any;
  courseProgram: any;

  constructor(  private formBuilder: FormBuilder,
    private request: RequestService,
    private router: Router,
    private route: ActivatedRoute,
    private datePipe: DatePipe) {

      this.leaveType = new FormControl('', Validators.required);
      this.leaveFromDate = new FormControl('', Validators.required);
      this.leaveToDate = new FormControl('', Validators.required);
      this.reason = new FormControl('', Validators.required);

      this.userInfo = localStorage.getItem('userData');
    this.userInfo = JSON.parse(this.userInfo);
    this.institutionValue = this.userInfo.institution;
    this.courseProgram = this.userInfo.courseprogram;
    this.batch = this.userInfo.batch;
    this.studentId = this.userInfo._id;
    this.section = this.userInfo.section;
    }
    onChange(event: any) {
      this.session = event.target.value;

      console.log('this.session', this.session);
    }

    public setMessage(message) {
      return this.message = message;
    }


    addStudentLeave(){
      const leaveDetails={
        leaveType: this.leaveType.value,
        fromDate: this.leaveFromDate.value,
        toDate: this.leaveToDate.value,
        session: this.session,
        reason: this.reason.value,
        requestDate: this.datePipe.transform(new Date(),"yyyy-MM-dd"),
        studentId: this.studentId,
        institution: this.institutionValue,
        courseprogram: this.courseProgram,
        batch: this.batch,
        section: this.section
      //  academicYear:
      // academicyear
      };

      this.request.addStudentLeaveDetails(leaveDetails).subscribe((response: any) => {
        console.log(response);
       if (response.status == 'success') {
         swal("Added Sucessfully");
         this.router.navigate(['student-leave-form']);

       }
       else if (response.status == 'error') {
         this.setMessage(response.error);
         swal(response.error);
         console.log(response.error);
       }
       }, (error) => {
         this.setMessage(error);
       });
    }

  ngOnInit() {
     //jQuery Validation
     $(function () {
      $("#form_advanced_validation").validate({
        highlight: function (input) {
          $(input)
            .parents(".form-line")
            .addClass("error");
        },
        unhighlight: function (input) {
          $(input)
            .parents(".form-line")
            .removeClass("error");
        },
        errorPlacement: function (error, element) {
          $(element)
            .parents(".form-group")
            .append(error);
        }
      });


    });
  }

}
