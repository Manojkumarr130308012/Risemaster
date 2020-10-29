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
  selector: 'app-exammarkreport',
  templateUrl: './exammarkreport.component.html',
  styleUrls: ['./exammarkreport.component.scss'],
  providers: [DatePipe]
})
export class ExammarkreportComponent implements OnInit {

 
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
  exam: any;

  batcheBycourseprograms: any;
  academicyearByBatch: any;
  academicYearBycourseprogram: any;
  examcourseprogram:any;
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
  attendenceDayId: any;

  period: any;
  periods: any;
  studentList: any;
  studentAttendenceDetails: any;
  studentmarkDetails:any;
  AttendenceCountDetails: any;
  staffSubjects: any;
  stumarkdetails:any;
  constructor(private formBuilder: FormBuilder,
    private dynamicScriptLoader: DynamicScriptLoaderService,
    private request: RequestService,
    private router: Router, private datePipe: DatePipe) {

    this.courseprogram = new FormControl("", Validators.required);
    this.semester = new FormControl("", Validators.required);
    this.batch = new FormControl("", Validators.required);
    this.section = new FormControl("", Validators.required);
    this.academicYear = new FormControl("", Validators.required);
    this.exam = new FormControl("", Validators.required);
    // this.attendenceDate = new FormControl("", Validators.required);
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

  onCourseProgramChange(courseprogram: any) {
    // console.log('courseprogram', courseprogram);
    if (courseprogram) {
      this.request.fetchAcademicYear().subscribe((response: any) => {
        this.academicYearBycourseprogram = response;
        //  console.log('BatchBycourseprogram', this.batcheBycourseprograms);
      }, (error) => {
        console.log(error);
      });
      this.request.fetchexam().subscribe((response: any) => {
        this.examcourseprogram = response;
        //  console.log('BatchBycourseprogram', this.batcheBycourseprograms);
      }, (error) => {
        console.log(error);
      });
    } else
      this.academicYearBycourseprogram = null;
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



  loadTimeTabledata() {
    // let attendenceDate = this.attendenceDate.value;
    //console.log('attendenceDate', attendenceDate);
    // this.attendenceDay = this.datePipe.transform(attendenceDate, "EEEE");
    this.request.filterattendenceDayId(this.attendenceDay).subscribe(response => {
    this.attendenceDayId = response[0]._id;
     // console.log('this.attendenceDayId', this.attendenceDayId);
    },
      error => {
        console.log(error);
      }
    );

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

  openAttendenceReport() {
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
      staffId: this.id
      // attendenceDate: this.attendenceDate.value
    }


    //console.log('AttendenceEntry', AttendenceEntry);
    // console.log('SectionId...', AttendenceEntry.section);
    localStorage.setItem('getAttendenceReport', JSON.stringify(AttendenceEntry));
    /* this.router.navigate(['student-attendence-entry'], {
       queryParams: {
         section: AttendenceEntry.section
       }
     });*/
    // this.viewstudentList(this.section.value);
    // this.fetchStudentAttendencebySection(this.section.value);

    this.fetchStudentAttendencemarkdetails(this.section.value,this.exam.value);
    this.fetchStudentmarkdetails(this.section.value);

  }

  viewTimeTablePeriods() {
    this.request.fetchPeriods().subscribe((response) => {
      this.periods = response;
       console.log(this.periods);
    }),
      error => {
        console.log(error);
      }
  }


  viewstudentList(section) {
    this.request.getStudentDetailsbySection(section).subscribe((response) => {
      console.log('getStudentDetailsbySection', response);
      this.studentList = response;

    }),
      error => {
        console.log(error);
      }
  }

  Getperiods(period, student) {
    return period;
  }

  fetchStudentAttendencedetails2(sectionid) {
    const filterStudentAttendence = {
      section: sectionid,
      attendenceDate: this.attendenceDate.value

    };
    this.request.fetchStudentAttendenceDetails2(filterStudentAttendence).subscribe(response => {
      this.studentAttendenceDetails = response;
     console.log('StudentAttendenchhhhhhhhhebySec', this.studentAttendenceDetails);
      // this.fetchSubjectStaffDetails(this.semester.value, this.section.value, this.attendenceDayId );
      // this.fetchAttendenceCount(this.semester.value,this.section.value,this.attendenceDay, this.attendenceDate.value);
    },
      error => {
        console.log(error);
      }
    );

  }
  fetchStudentAttendencemarkdetails(sectionid,examid) {
    const filterStudentAttendence = {
      section: sectionid,
      exam:examid
    };
    this.request.getStudentmarkDetails2(filterStudentAttendence).subscribe(response => {
      this.studentAttendenceDetails = response;
     console.log('StudentAttendenchhhhhhhhhebySec', this.studentAttendenceDetails);
      // this.fetchSubjectStaffDetails(this.semester.value, this.section.value, this.attendenceDayId );
      // this.fetchAttendenceCount(this.semester.value,this.section.value,this.attendenceDay, this.attendenceDate.value);
    },
      error => {
        console.log(error);
      }
    );

  }
  fetchStudentmarkdetails(sectionid) {
    const filterStudentAttendence = {
      section: sectionid
    };
    this.request.fetchStudentmarkDetails2(filterStudentAttendence).subscribe(response => {
      this.studentmarkDetails = response;

      this.stumarkdetails=this.studentmarkDetails.result;
     console.log('studentAttendenceDetails',this.stumarkdetails);
      // this.fetchSubjectStaffDetails(this.semester.value, this.section.value, this.attendenceDayId );
      // this.fetchAttendenceCount(this.semester.value,this.section.value,this.attendenceDay, this.attendenceDate.value);
    },
      error => {
        console.log(error);
      }
    );

  }
  fetchStudentAttendencebySection(sectionid) {
    const filterStudentAttendence = {
      section: sectionid,
    };

    this.request.getStudentmarkDetails2(filterStudentAttendence).subscribe(response => {
      this.studentAttendenceDetails = response;
      console.log('StudentAttendencebySec', this.studentAttendenceDetails);
      this.fetchSubjectStaffDetails(this.semester.value, this.section.value, this.attendenceDayId );
      this.fetchAttendenceCount(this.semester.value,this.section.value,this.attendenceDay, this.attendenceDate.value);
    },
      error => {
        console.log(error);
      }
    );

  }

  fetchAttendenceCount(semester,section,attendenceDay, attendenceDate){

    console.log('fetchCount', semester,section,attendenceDay);

    const filterAttendence = {
      semester: semester,
      section: section,
      attendenceDay:attendenceDay,
      attendenceDate: attendenceDate
    };


    this.request.getAttendenceCountDetails(filterAttendence).subscribe(response => {
      this.AttendenceCountDetails = response;
      console.log('AttendenceCount', this.AttendenceCountDetails);

    },
      error => {
        console.log(error);
      }
    );

  }


  GetStudentAttendenceDetails(period: any, student: any): any {
    let result = this.studentAttendenceDetails.filter(x => x.period == period && x.studentId == student);
    return result;
  }

  GetAttendencePresentCount(period: any, staff: any, subject: any){
    console.log('GetAttendencePresentCount',period,staff,  subject);
    let result2 = this.AttendenceCountDetails.filter(x => x.periodDetails[0].periodName == period && x.staffDetails[0].staffCode == staff && x.subjectDetails[0].subjectCode == subject && x.studentAttendence =='Present');
    console.log('AttendenceCountDetails', this.AttendenceCountDetails);
    console.log('Presentresult',result2);
    let count=Object.keys(result2).length;
    return count;
    console.log('GetAttendencePresentCount2',count);
  }

  GetAttendenceAbsentCount(period: any, staff: any, subject: any){
    let result = this.AttendenceCountDetails.filter(x => x.periodDetails[0].periodName == period && x.staffDetails[0].staffCode == staff && x.subjectDetails[0].subjectCode == subject && x.studentAttendence =='Absent');
    console.log('AttendenceCountAbsentDetails', this.AttendenceCountDetails);
    console.log('Absentresult',result);
    let count=Object.keys(result).length;
    return count;
  }

  fetchSubjectStaffDetails(semester: any, section: any, day: any) {
    const filterSubjectStaff = {
      semester: semester,
      section: section,
      attendenceDay: day

    };
    this.request.getPeriodSubjectStaff(filterSubjectStaff).subscribe(response => {
      this.staffSubjects = response;
      console.log('staffSubjects', this.staffSubjects);
    },
      error => {
        console.log(error);
      }
    );


  }



  ngOnInit() {
    // this.loadAcademicYear();
    this.loadCourseProgramByIns(this.institutionValue);
    this.viewTimeTablePeriods();


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
