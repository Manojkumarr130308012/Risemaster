import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';
import { Router, ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-timetable-entry',
  templateUrl: './timetable-entry.component.html',
  styleUrls: ['./timetable-entry.component.scss']
})
export class TimetableEntryComponent implements OnInit {
  section: any;
  day: any;
  period: any;

  constructor(private router: Router,
    private request: RequestService,
    private route: ActivatedRoute) {
      this.route.queryParams.subscribe((params: any) => {
        this.section = params.section;
        this.day = params.day;
        this.period = params.period;
      });
     }
  addNew(){
       this.router.navigate(['timetable-add'], {
        queryParams: {
          section: this.section,
          day: this.day,
          period: this.period,
          id:0
        }
      });
  }
  ngOnInit() {
  }

}
