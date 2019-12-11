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
  id: any;
  staff: any;
  subject: any;
  subjectName: any;
  SubjectStaffs: any;

  timetableInfo:  any;
  timetable:  any;
  insValue: any;
  courseProgramValue: any;
  academicYearValue: any;
  sectionValue: any;
  semesterValue: any;

  ins: any;


  constructor(private request: RequestService,
    private router: Router,
    private auth: AuthService,
    private route: ActivatedRoute, private formBuilder: FormBuilder) {

      this.timetableInfo = localStorage.getItem('getTimeTable');
      
      this.timetableInfo = JSON.parse(this.timetableInfo);
      
      this.insValue = this.timetableInfo.institution;
      this.ins= this.insValue;
      //this.courseProgramValue = this.timetableInfo.courseprogram;
      //this.academicYearValue = this.timetableInfo.academicYear;
      //this.sectionValue = this.timetableInfo.section;
      //this.semesterValue = this.timetableInfo.semester;

    this.route.queryParams.subscribe((params: any) => {
      this.sectionid = params.section;      
    this.day = params.day;
    this.period = params.period;
      // this.day = params.day;
      //this.period = params.period;
      // this.id = params.id;
    });

    console.log('SectionId-Timetable', this.sectionid);

  console.log('this.ins',this.ins);
   

  }

  viewTimeTablePeriods() {
    this.request.fetchPeriods().subscribe((response) => {
      console.log('fetchPeriods', response);
      this.periods = response;
      console.log(this.periods);
    }),
      error => {
        console.log(error);
      }
  }

  viewWeekdays() {
    this.request.fetchweekdays().subscribe((response) => {
      console.log('fetchweekdays', response);
      this.weekdays = response;
      console.log(this.weekdays);
    }),
      error => {
        console.log(error);
      }
  }


  loadSubjectWithStaff(sectionid) {
    this.request.getSectionStaffbySec(sectionid).subscribe((response: any) => {
      this.sections = response;
      console.log('SectionsDetails BySection', this.sections);
    }, (error) => {
      console.log(error);
    });
  }

  onSelect(day, period) {

    this.day = day;
    this.period = period;
    // //timetable-entry
    // console.log('item', day);
    // console.log('item2', period);
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
    
    
    console.log('newPeriodData',newPeriodData);
    this.request.addSubjecttoTimeTable(newPeriodData).subscribe((response: any) => {
      if (response.status == 'error') {
        console.log(response.error);
        swal(response.error);
      
      }
      else if (response.status == 'success') {
        console.log(response);
        swal("Added Sucessfully");
        //  this.viewPeriod();
        this.loadModal();
      }

    }, (error) => {

    console.log(error);

    });
  }
fetchtimeTablebySection(sectionid, day, period){
//fetch subjaect / staff and bind to time table cell
const filterSubjectStaff = {
  sectionid: sectionid

};

  this.request.getTimeTablebySec(filterSubjectStaff).subscribe(response => {
    this.SubjectStaffs = response;
    console.log('Section_Staff-By-Section', this.SubjectStaffs);
  },
  error => {
    console.log(error);
  }
);

}


  loadModal() {
    $("#addModal").modal("hide"); //or  $('#IDModal').modal('hide');
    $("#addModal").on("hidden.bs.modal", function() {
      $(this)
        .find("form")
        .trigger("reset");
    });
  }



  ngOnInit() {
    this.viewTimeTablePeriods();

    this.viewWeekdays();
    this.fetchtimeTablebySection(this.sectionid, this.day,this.period);
  }

}
