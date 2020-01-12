import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from "@angular/forms";
import { DatePipe } from '@angular/common';
import { Router, ActivatedRoute } from "@angular/router";
import { RequestService } from "../../services/request.service";
import { DynamicScriptLoaderService } from "../../services/dynamic-script-loader.service";
import { AuthService } from "../../services/auth.service";
declare const $: any;
declare const swal: any;
@Component({
  selector: 'app-student-attendence',
  templateUrl: './student-attendence.component.html',
  styleUrls: ['./student-attendence.component.css'],
  providers: [DatePipe]
})
export class StudentAttendenceComponent implements OnInit {

  userInfo: any;
  IdValue: any;
  institutionValue: any;
  staffFirstNameValue: any;
  staffLastNameValue: any;
  staffcodeValue: any;
  academicYear: FormControl;
  attendenceDate: FormControl;
  section: FormControl;
  semester: FormControl;
  semesters: any;
  sections: any;
  academicYears: any;
  batcheBycourseprograms: any;
  academicyearByBatch: any;
  courseprogram: FormControl;
  batch: FormControl;
  courseprogrambyIns: any;
  semestersByIns: any;
  semestersByYear: any;
  institution: any;
  id: any;
  attendenceDay: any;
  filteredPeriodSubject: any;

  studentsAttendenceEntry: any;
  studentsAttendenceEntry1: any;
  studentsAttendenceEntry2: any;

  attendenceInfo: any;
  attendenceIDExist: any;
  attendenceExist: any;

  constructor(
    private formBuilder: FormBuilder,
    private dynamicScriptLoader: DynamicScriptLoaderService,
    private request: RequestService,
    private router: Router, private datePipe: DatePipe
  ) {

    this.courseprogram = new FormControl("", Validators.required);
    this.semester = new FormControl("", Validators.required);
    this.batch = new FormControl("", Validators.required);
    this.section = new FormControl("", Validators.required);
    this.academicYear = new FormControl("", Validators.required);

    this.attendenceDate = new FormControl("", Validators.required);
    //Get institution & department  value from localstorage
    this.userInfo = localStorage.getItem('userData');
    this.userInfo = JSON.parse(this.userInfo);
    this.institutionValue = this.userInfo.institution;
    this.staffFirstNameValue = this.userInfo.firstName;
    this.staffLastNameValue = this.userInfo.lastName;
    this.staffcodeValue = this.userInfo.staffCode;
    this.id = this.userInfo._id;
    // this.institutionValue = this.IdValue;

    this.attendenceInfo = localStorage.getItem('userData');

    this.courseprogram = new FormControl('');
    this.batch = new FormControl('');
    this.academicYear = new FormControl('');
    this.section = new FormControl('');
    this.semester = new FormControl('');
  }
  loadCourseProgramByIns(Institution: any) {
    if (Institution) {
      this.request.getCourseprogramByIns(Institution).subscribe((response: any) => {
        this.courseprogrambyIns = response;
        // console.log('CourseProgramByIns', this.courseprogrambyIns);
      }, (error) => {
        console.log(error);
      });
    } else
      this.courseprogrambyIns = null;
  }
  // Bind institution data
  // loadAcademicYear() {
  //   this.request.getAcademicYear().subscribe(
  //     (response: any) => {
  //       console.log(response);
  //       this.academicYears = response;
  //     },
  //     error => {
  //       console.log(error);
  //     }
  //   );
  // }
  onCourseProgramChange(courseprogram: any) {
    // console.log('courseprogram', courseprogram);
    if (courseprogram) {
      this.request.getBatchByCoursePrgram(courseprogram).subscribe((response: any) => {
        this.batcheBycourseprograms = response;
        //  console.log('BatchBycourseprogram', this.batcheBycourseprograms);
      }, (error) => {
        console.log(error);
      });
    } else
      this.batcheBycourseprograms = null;
  }
  onBatchChange(batch: any) {
    //console.log('Batch', batch);
    if (batch) {
      this.request.fetchAcademicyearByBatch(batch).subscribe((response: any) => {
        this.academicyearByBatch = response;
        //  console.log('AcademicYearByBatch', this.academicyearByBatch);
      }, (error) => {
        console.log(error);
      });
    } else
      this.academicyearByBatch = null;
  }
  onAcademicYearChange(academicYear: any) {
    // console.log('AcademicYear', academicYear);
    if (academicYear) {
      this.request.getSemesterbyAcademicYear(academicYear).subscribe((response: any) => {
        this.semestersByYear = response;
        //console.log('SemesterByYear', this.semestersByYear);
      }, (error) => {
        console.log(error);
      });
    } else
      this.semestersByYear = null;
  }
  onSemesterChange(semester: any) {
    console.log('Semester', semester);
    if (semester) {
      this.request.getSectionbySemester(semester).subscribe((response: any) => {
        this.sections = response;
        // console.log('SectionBySemester', this.sections);
      }, (error) => {
        console.log(error);
      });
    } else
      this.sections = null;
  }



  open(filteredDetail) {
    let sectionid = filteredDetail.sectionid;
    let subjectid = filteredDetail.subject;
    let period = filteredDetail.period;
    let attendenceDate = this.attendenceDate.value;

    // console.log('sectionid', sectionid);
    this.viewStudenceAttendenceDetails(sectionid, subjectid, period);


  }

  viewStudenceAttendenceDetails(sectionId: string, subjectid: string, period) {

    if (sectionId) {
      this.request.getStudentDetailsbySection(sectionId).subscribe((response) => {
        // console.log('studentDetails', response);
        this.studentsAttendenceEntry1 = response;
        this.studentsAttendenceEntry2 = [{
          attendenceDate: this.attendenceDate.value,
          attendenceDay: this.attendenceDay,
          period: period,
          staffId: this.id,
          subjectId: subjectid,
          academicYear: this.academicYear.value,
          studentAttendence: 'Present',
        }];
        // console.log('studentsAttendenceEntry1', this.studentsAttendenceEntry1);
        const newStudentsAttendenceEntry = this.studentsAttendenceEntry1.map(o => {
          return {
            courseprogram: o.courseprogram, batch: o.batch, institution: o.institution,
            semester: o.semester, section: o.section, regNo: o.regNo, rollNo: o.rollNo, studentId: o._id, attendenceDate: this.studentsAttendenceEntry2[0].attendenceDate, attendenceDay: this.studentsAttendenceEntry2[0].attendenceDay,
            period: this.studentsAttendenceEntry2[0].period,
            staffId: this.studentsAttendenceEntry2[0].staffId,
            subjectId: this.studentsAttendenceEntry2[0].subjectId,
            academicYear: this.studentsAttendenceEntry2[0].academicYear,
            studentAttendence: this.studentsAttendenceEntry2[0].studentAttendence
          }
        });

        // console.log('newArray', newStudentsAttendenceEntry);


        this.studentsAttendenceEntry = newStudentsAttendenceEntry;
        // console.log('this.studentsAttendenceEntry', this.studentsAttendenceEntry);

        this.request.filterStudentAttendenceEntryExist(this.studentsAttendenceEntry2).subscribe(response => {
          // console.log('filterStudentAttendenceEntryExist', response);
          this.attendenceExist = response[0];
          // console.log('this.attendenceExist', this.attendenceExist);
          if (response[0] != undefined) {
            this.attendenceIDExist = response[0]._id;
            this.router.navigate(['student-attendence-entry'], {
              queryParams: {
                section: sectionId,
                date: this.attendenceDate.value,
                period: period

              }
            });
          }
          else {
          this.attendenceIDExist = null;


          }

          if (this.attendenceIDExist == null) {
            //  console.log('this.studentsAttendenceEntry2', this.studentsAttendenceEntry);
            this.request.addStudentstoAttendenceEntry(this.studentsAttendenceEntry).subscribe((response2: any) => {
              if (response2.status == 'error') {
                console.log(response2.error);
                swal(response2.error);
              }
              else if (response2.status == 'success') {
                swal("Added Sucessfully");
                // console.log('added to attendence', response2);

                this.router.navigate(['student-attendence-entry'], {
                  queryParams: {
                    section: sectionId,
                    date: this.attendenceDate.value,
                    period: period

                  }
                });
              }

            }, (error) => {
              console.log(error);
            });
          }

        },
          error => {
            console.log(error);
          }
        );
      });
    }


  }

  loadTimeTabledata() {
    let attendenceDate = this.attendenceDate.value;
    //console.log('attendenceDate', attendenceDate);
    this.attendenceDay = this.datePipe.transform(attendenceDate, "EEEE");
    const filterPeriodSubject = {
      sectionid: this.section.value,
      day: this.attendenceDay,
      staff: this.id
    }

    this.request.filterPeriodSubject(filterPeriodSubject).subscribe(response => {
      this.filteredPeriodSubject = response;
      // console.log('this.filteredPeriodSubject', this.filteredPeriodSubject);

    },
      error => {
        console.log(error);
      }
    );

  }

  openAttendenceEntry() {
    this.loadTimeTabledata();

    const AttendenceEntry = {
      attendenceDay: this.attendenceDay,
      courseprogram: this.courseprogram.value,
      batch: this.batch.value,
      academicYear: this.academicYear.value,
      semester: this.semester.value,
      section: this.section.value,
      institution: this.institutionValue,
      staffName: this.staffFirstNameValue + ' ' + this.staffLastNameValue,
      staffCode: this.staffcodeValue,
      staffId: this.id,
      attendenceDate: this.attendenceDate.value
    }
    //console.log('AttendenceEntry', AttendenceEntry);
    // console.log('SectionId...', AttendenceEntry.section);
    localStorage.setItem('getAttendence', JSON.stringify(AttendenceEntry));
    /* this.router.navigate(['student-attendence-entry'], {
       queryParams: {
         section: AttendenceEntry.section
       }
     });*/



  }
  ngOnInit() {
    // this.loadAcademicYear();
    this.loadCourseProgramByIns(this.institutionValue);

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
