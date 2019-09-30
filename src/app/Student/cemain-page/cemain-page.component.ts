import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-cemain-page',
  templateUrl: './cemain-page.component.html',
  styleUrls: ['./cemain-page.component.scss']
})
export class CEmainPageComponent implements OnInit {
  basicdetails: any;
  ce_basicdetails: Object;

  constructor( private router: Router,
    private request: RequestService,) { }
openNew(){
    this.router.navigate(['enquiry'], {
      queryParams: {
        edit: false
      }
    });
  }
// To display the data
viewData() {
  this.request.getBasicDetails().subscribe((response) => {
    this.ce_basicdetails = response;
    console.log(this.ce_basicdetails);
  }, (error) => {
    console.log(error);
  });
 }
  ngOnInit() {
    this.viewData();
  }

}
