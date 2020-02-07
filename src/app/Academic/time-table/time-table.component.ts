import { Component, OnInit } from "@angular/core";
import {
  FormControl,
  Validators,
  FormGroup,
  FormBuilder
} from "@angular/forms";
import { DynamicScriptLoaderService } from "../../services/dynamic-script-loader.service";
import { RequestService } from "../../services/request.service";
import { AuthService } from "../../services/auth.service";
import { Router, ActivatedRoute } from "@angular/router";
declare const $: any;
declare const M: any;
declare const swal: any;

@Component({
  selector: 'app-time-table',
  templateUrl: './time-table.component.html',
  styleUrls: ['./time-table.component.scss']
})
export class TimeTableComponent implements OnInit {

  periods: any;
  weekdays: any;
  items: any;
  //  section: any;

  sections: any;
  sectionid: any;
  day: any;
  period: any;

  staff: any;
  subject: any;
  subjectName: any;
  subjectStaffs: any;

  timetableInfo: any;
  timetableInfo2: any;
  timetable: any;
  insValue: any;
  courseProgramValue: any;
  academicYearValue: any;
  sectionValue: any;
  semesterValue: any;

  ins: any;

  subjectCheckbox: any;
  subjectExist: any;

  subjectIDExist: any;


  constructor(private request: RequestService,
    private router: Router,
    private auth: AuthService,
    private route: ActivatedRoute, private formBuilder: FormBuilder) {

    this.timetableInfo = localStorage.getItem('getTimeTable');

    this.timetableInfo = JSON.parse(this.timetableInfo);

    this.insValue = this.timetableInfo.institution;
    //this.ins= this.insValue;
    this.courseProgramValue = this.timetableInfo.courseprogram;
    this.academicYearValue = this.timetableInfo.academicYear;
    this.sectionValue = this.timetableInfo.section;
    this.semesterValue = this.timetableInfo.semester;

    this.route.queryParams.subscribe((params: any) => {
      this.sectionid = params.section;
      this.day = params.day;
      this.period = params.period;    
    });

  }

  viewTimeTablePeriods() {
    this.request.fetchPeriods().subscribe((response) => {
      this.periods = response;
      // console.log(this.periods);
    }),
      error => {
        console.log(error);
      }
  }

  viewWeekdays() {
    this.request.fetchweekdays().subscribe((response) => {

      this.weekdays = response;
      // console.log(this.weekdays);
    }),
      error => {
        console.log(error);
      }
  }

  Getperiods(period, weekday) {

    return period;


  }

  GetSubjectDetails( period: any, weekday: any): any {
    let result = this.subjectStaffs.filter(x => x.period == period && x.day == weekday);
    return result;

  }


  fetchtimeTablebySection(sectionid) {
    //fetch subject / staff and bind map to time table cell
    const filterSubjectStaff = {
      sectionid: sectionid
    };
    this.request.getTimeTablebySec(filterSubjectStaff).subscribe(response => {
      this.subjectStaffs = response;
       //console.log('Section_Staff-By-Section', this.subjectStaffs);
    },
      error => {
        console.log(error);
      }
    );

  }

  loadSubjectWithStaff(sectionid) {
    this.request.getSectionStaffbySec(sectionid).subscribe((response: any) => {
      this.sections = response;
      // console.log('SectionsDetails BySection', this.sections);
    }, (error) => {
      console.log(error);
    });
  }

  onSelect(day, period) {

    this.day = day;
    this.period = period;

    this.router.navigate([], {
      queryParams: {
        section: this.sectionid,
        day: day,
        period: period
      }
    });
    this.loadSubjectWithStaff(this.sectionid);
  }

  onSelectSubjectwithStaff(subjectCode, staff) {
    this.subject = subjectCode;
    this.staff = staff;
  }

  addPeriodSubject() {
    const newPeriodData = {
      sectionid: this.sectionid,
      staff: this.staff,
      subject: this.subject,
      period: this.period,
      day: this.day,
      institution: this.insValue,
      courseProgram: this.courseProgramValue,
      academicYear: this.academicYearValue,
      semester: this.semesterValue
    };

    let period = this.period;
    let day = this.day;


    const filterSubjectExist = {
      period: period,
      day: day
    };

   // console.log('filterSubjectExist', filterSubjectExist);

    this.request.filterSubExist(filterSubjectExist).subscribe(response => {
      this.subjectExist=response[0];
      if(response[0] != undefined){
      this.subjectIDExist=response[0]._id;}
      else{this.subjectIDExist= null}

      if(this.subjectIDExist != null || this.subjectIDExist != ''){
      this.DeleteExistOne(this.subjectIDExist);
      }
      else if(this.subjectIDExist == null) {

      this.request.addSubjecttoTimeTable(newPeriodData).subscribe((response: any) => {
        if (response.status == 'error') {
          console.log(response.error);
          swal(response.error);
        }
        else if (response.status == 'success') {

          swal("Added Sucessfully");
          this.fetchtimeTablebySection(this.sectionid);
          this.loadModal();
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
  }

    DeleteExistOne(subjectIDExist: any){

      this.request.deleteExistSubject(subjectIDExist).subscribe((res : any) => {
        if (res.status == 'success') {
        swal(" Deleted Successfully ");
        }
       // this.fetchtimeTablebySection(this.sectionid);

       const newPeriodData = {
        sectionid: this.sectionid,
        staff: this.staff,
        subject: this.subject,
        period: this.period,
        day: this.day,
        institution: this.insValue,
        courseProgram: this.courseProgramValue,
        academicYear: this.academicYearValue,
        semester: this.semesterValue
      };
     // console.log('newPeriodData',newPeriodData);
      this.request.addSubjecttoTimeTable(newPeriodData).subscribe((response: any) => {
        if (response.status == 'error') {
          console.log(response.error);
          swal(response.error);
        }
        else if (response.status == 'success') {
         // console.log(response);
          swal("Added Sucessfully");
          this.fetchtimeTablebySection(this.sectionid);
          this.loadModal();
        }

      }, (error) => {
        console.log(error);
      });

    });
  }



  loadModal() {
    $("#addModal").modal("hide"); //or  $('#IDModal').modal('hide');
    $("#addModal").on("hidden.bs.modal", function () {
      $(this)
        .find("form")
        .trigger("reset");
    });
  }



  ngOnInit() {
    this.viewTimeTablePeriods();

    this.viewWeekdays();
    this.fetchtimeTablebySection(this.sectionid);
  }

}
