import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { RequestService } from '../../services/request.service';
import { ActivatedRoute } from '@angular/router';
declare const $: any;
declare const M: any;
declare const swal: any;
@Component({
  selector: 'app-student-attendence-entry',
  templateUrl: './student-attendence-entry.component.html',
  styleUrls: ['./student-attendence-entry.component.css']
})
export class StudentAttendenceEntryComponent implements OnInit {

  Id: any;
  IdValue: any;
  sectionId: any;
  attendenceDate: any;
  period: any;
  studentDetails: any;

  studentDetail;
  attendenceDetails;
  attendence: any;
  //attendencegroup = 'Present';

  constructor(
    private formBuilder: FormBuilder,
    private request: RequestService,
    private router: Router,
    private route: ActivatedRoute) {
    this.route.queryParams.subscribe((params: any) => {
      // this.edit = params.edit;
      this.sectionId = params.section;
      this.attendenceDate = params.date,
      this.period = params.period
    });
  }

  submitAttendence() {
    //console.log('studentDetail', studentDetail);
    // console.log('attendencegroup', attendencegroup);
//var table = $('#tableExport').tableToJSON();

   /* var myTableArray = [];
    $("table#tableExport tr").each(function () {
      var arrayOfThisRow = [];
      var tableData = $(this).find('td');
      console.log('tableData',tableData);
      if (tableData.length > 0) {
        tableData.each(function () { arrayOfThisRow.push($(this).text()); });
        console.log('arrayOfThisRow',arrayOfThisRow);
        myTableArray.push(arrayOfThisRow);
        console.log('myTableArray',myTableArray);
        var jsonValue= JSON.parse( JSON.stringify(myTableArray));
        console.log('jsonValue',jsonValue);
      }
    });*/

   // alert(JSON.stringify(table));

  }

  viewStudenceAttendenceDetails(sectionId: string, attendenceDate: string , period: any) {

    if (sectionId) {

      const attendenceDetails = {
        section: sectionId,
        attendenceDate: attendenceDate,
        period: period
      }

      this.request.getStudentAttendenceDetails(attendenceDetails).subscribe((response) => {
        console.log(response);
        this.studentDetails = response;

        console.log('this.studentDetails',this.studentDetails);
      }, (error) => {
        console.log(error);
      });

      /* this.attendenceDetails = [
         "Present",
         "Absent"];*/
       this.attendenceDetails={
        attendencePresent:"Present",
        attendenceAbsent:"Absent"
       }

    } else

      this.studentDetails = null;
  }

  onChange(event: any, id) {
    this.attendence = event.target.value;
    this.Id= id;
    //console.log('this.attendence', this.attendence);
   // console.log('id', id);
   const attendence={
     studentAttendence: this.attendence
   }

   this.request.updateAttedenceDetails(this.Id, attendence).subscribe((response: any) => {
    if (response.status == 'success') {
      swal("Updated Sucessfully");
      console.log('response',response);
      this.viewStudenceAttendenceDetails(this.sectionId, this.attendenceDate, this.period);
    }
    else if (response.status == 'error') {
      swal(response.error);
    }

  }, (error) => {
    console.log(error);
  });


  }



  ngOnInit() {

    this.viewStudenceAttendenceDetails(this.sectionId, this.attendenceDate, this.period);

  }
}


