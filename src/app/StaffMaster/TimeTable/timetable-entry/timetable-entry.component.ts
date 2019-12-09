import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-timetable-entry',
  templateUrl: './timetable-entry.component.html',
  styleUrls: ['./timetable-entry.component.scss']
})
export class TimetableEntryComponent implements OnInit {

  constructor(private router: Router,
    private request: RequestService) { }
  addNew(){
    this.router.navigate(['timetable-add'], {
      queryParams: {
          id:0
        }
       });
  }
  ngOnInit() {
  }

}
