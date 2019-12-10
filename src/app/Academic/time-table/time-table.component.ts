import { Component, OnInit } from "@angular/core";
import { DynamicScriptLoaderService } from "../../services/dynamic-script-loader.service";
import { RequestService } from "../../services/request.service";
import { AuthService } from "../../services/auth.service";

import {
  FormControl,
  Validators,
  FormGroup,
  FormBuilder
} from "@angular/forms";
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

  periods : any;
  weekdays : any;
  items: any;
  section: any;

  constructor( private request: RequestService,
     private router: Router,
     private auth: AuthService,
     private route: ActivatedRoute) {
     this.route.queryParams.subscribe((params: any) => {
      this.section = params.section;
    });
    console.log('SectionId-Timetable', this.section);
   }

  viewTimeTablePeriods() {
    this.request.fetchPeriods().subscribe((response) => {
      console.log('fetchPeriods',response);
      this.periods = response;
      console.log(this.periods);
    }),
    error => {
      console.log(error);
    }
  }

   viewWeekdays() {
    this.request.fetchweekdays().subscribe((response) => {
     console.log('fetchweekdays',response);
      this.weekdays = response;
      console.log(this.weekdays);
    }),
    error => {
      console.log(error);
    }
  }

  onSelect(item1, item2){
    //timetable-entry
    console.log('item',item1);
    console.log('item2',item2);
    this.router.navigate(['timetable-entry'], {
      queryParams: {
        section: this.section,
        day: item1,
        period: item2
      }
    });
  }

  ngOnInit() {
    this.viewTimeTablePeriods();

    this.viewWeekdays();
  }

}
