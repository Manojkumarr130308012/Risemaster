import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { RequestService } from "../../services/request.service";
import { DynamicScriptLoaderService } from "../../services/dynamic-script-loader.service";
import { AuthService } from "../../services/auth.service";
declare const $: any;
declare const swal: any;
@Component({
  selector: 'app-timetable-main',
  templateUrl: './timetable-main.component.html',
  styleUrls: ['./timetable-main.component.scss']
})
export class TimetableMainComponent implements OnInit {
  userInfo: any;
  IdValue: any;
  institutionValue: any;
  academicYear: FormControl;
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

  constructor(
    private formBuilder: FormBuilder,
    private dynamicScriptLoader: DynamicScriptLoaderService,
    private request: RequestService,
    private router: Router,
  ) { 
     //Get institution & department  value from localstorage
     this.userInfo = localStorage.getItem('userData');
     this.userInfo = JSON.parse(this.userInfo);
     this.IdValue = this.userInfo.institution;
     this.institutionValue = this.IdValue;

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
        console.log('CourseProgramByIns',  this.courseprogrambyIns);
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
      console.log('courseprogram' ,courseprogram);
      if (courseprogram) {
        this.request.getBatchByCoursePrgram(courseprogram).subscribe((response: any) => {
          this.batcheBycourseprograms = response;
          console.log('BatchBycourseprogram',  this.batcheBycourseprograms);
        }, (error) => {
          console.log(error);
        });
      } else
        this.batcheBycourseprograms = null;
    }
    onBatchChange(batch: any) {
      console.log('Batch' ,batch);
      if (batch) {
        this.request.fetchAcademicyearByBatch(batch).subscribe((response: any) => {
          this.academicyearByBatch = response;
          console.log('AcademicYearByBatch',  this.academicyearByBatch);
        }, (error) => {
          console.log(error);
        });
      } else
        this.academicyearByBatch = null;
    }
    onAcademicYearChange(academicYear: any) {
      console.log('AcademicYear' ,academicYear);
      if (academicYear) {
        this.request.getSectionbyAcademicYear(academicYear).subscribe((response: any) => {
          this.semestersByYear = response;
          console.log('SemesterByYear',  this.semestersByYear);
        }, (error) => {
          console.log(error);
        });
      } else
        this.semestersByYear = null;
    }
  onSemesterChange(semester: any) {
    console.log('Semester' ,semester);
    if (semester) {
      this.request.getSectionbySemester(semester).subscribe((response: any) => {
        this.sections = response;
        console.log('SectionBySemester',  this.sections);
      }, (error) => {
        console.log(error);
      });
    } else
      this.sections = null;
  }
  openTimeTable() {
  const timetable = {
    courseprogram: this.courseprogram.value,
    batch: this.batch.value,
    academicYear:  this.academicYear.value,
    semester:this.semester.value,
    section:this.section.value
  }
  console.log('TimeTable', timetable);
  console.log('SectionId...', timetable.section);
  localStorage.setItem('timetable', JSON.stringify(timetable));
  this.router.navigate(['time-table'], {
    queryParams: {
      section: timetable.section
    }
  });
}
  ngOnInit() {
    // this.loadAcademicYear();
    this.loadCourseProgramByIns(this.institutionValue);
  }

}
