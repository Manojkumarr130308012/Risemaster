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
import { Router } from "@angular/router";
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

  constructor( private request: RequestService, private router: Router,private auth: AuthService) { }

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
    console.log('item',item1);
    console.log('item2',item2);

  }

  ngOnInit() {
    this.viewTimeTablePeriods();

    this.viewWeekdays();
  }

}
