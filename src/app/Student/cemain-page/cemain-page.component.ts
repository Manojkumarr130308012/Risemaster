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
  Id: any;
  paymentdetails: Object;
  followups: Object;

  constructor( private router: Router,
    private request: RequestService,) { }
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
// To display the data
viewData() {
  this.request.getBasicDetails().subscribe((response) => {
    this.ce_basicdetails = response;
    console.log('BasicDetails', this.ce_basicdetails);
  }, (error) => {
    console.log(error);
  });
 }
 viewPaymentData() {
  this.request.getPaymentDetails().subscribe((response) => {
    this.paymentdetails = response;
    console.log('PaymentDetails', this.paymentdetails);
  }, (error) => {
    console.log(error);
  });
 }
 viewFollowupsData() {
  this.request.getFollowups().subscribe((response) => {
    this.followups = response;
    console.log('followups', this.followups);
  }, (error) => {
    console.log(error);
  });
 }
  ngOnInit() {
    this.viewData();
    this.viewPaymentData();
    this.viewFollowupsData();
  }

}
