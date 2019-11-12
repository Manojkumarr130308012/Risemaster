import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-ce-main-page',
  templateUrl: './ce-main-page.component.html',
  styleUrls: ['./ce-main-page.component.scss']
})
export class CEMainPageComponent implements OnInit {
  basicdetails: any;
  ce_basicdetails: Object;
  Id: any;
  paymentdetails: Object;
  followups: Object;
  enquiryDate: any;
  
  constructor( private router: Router,
    private request: RequestService) { 
    
    }

openNew(){
    this.router.navigate(['addCandidate']);
  }
  onEdit(basicdetail) {
    this.Id=basicdetail._id;
    console.log(this.Id);
    this.router.navigate(['editCandidate'], {
       queryParams: {  
           edit: true,      
           id: basicdetail._id,
         }
        });
  }
  onConvert(basicdetail) {
    this.Id=basicdetail._id;
    console.log(this.Id);
    this.router.navigate(['convertToStudent'], {
       queryParams: {      
           id: basicdetail._id,
         }
        });
  }
// To display the data
viewData() {
  this.request.getBasicDetails().subscribe(response => {
    this.ce_basicdetails = response;
    console.log('BasicDetails', this.ce_basicdetails);
  }, (error) => {
    console.log(error);
  });
 }
  ngOnInit() {
    this.viewData();
  }

}
