import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RequestService } from 'src/app/services/request.service';
@Component({
  selector: 'app-timetable-add',
  templateUrl: './timetable-add.component.html',
  styleUrls: ['./timetable-add.component.scss']
})
export class TimetableAddComponent implements OnInit {
  sections: any;
  section: any;
  day: any;
  period: any;
  id: any;

  constructor(
    private request: RequestService,
    private router: Router,
    private route: ActivatedRoute
  ) { 
    this.route.queryParams.subscribe((params: any) => {
      this.section = params.section;
      this.day = params.day;
      this.period = params.period;
      this.id = params.id;
    });
  }

  loadSubjectWithStaff(section) {
    this.request.getSectionStaffbySec(section).subscribe((response: any) => {
      this.sections = response;
      console.log('SectionsDeatilsBySection', this.sections);
    }, (error) => {
      console.log(error);
    });
  }

  ngOnInit() {
    this.loadSubjectWithStaff(this.section);
  }

}
