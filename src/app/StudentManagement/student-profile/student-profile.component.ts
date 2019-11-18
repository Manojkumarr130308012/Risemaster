import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder} from '@angular/forms';
@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.scss']
})
export class StudentProfileComponent implements OnInit {
  batches: any;
  degrees: any;
  institutions: any;
  degreesbyIns: any;
  studentDetails: any;
  batcheByDegrees: any;
  stuId: any;
  studentDets: Object;

  constructor(
    private request: RequestService,
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
  ) { }
  loadBatch() {
    this.request.getbatch().subscribe((response: any) => {
      this.batches = response;
      console.log('Batches' ,this.batches);
    }, (error) => {
      console.log(error);
    });
  }
  loadDegree() {
    this.request.getDegree().subscribe((response: any) => {
      this.degrees = response;
      console.log('DegreeProgram' ,this.degrees);
    }, (error) => {
      console.log(error);
    });
  }
  loadInstitution() {
    this.request.getInstitution().subscribe((response: any) => {
      this.institutions = response;
      console.log('Institution' ,this.institutions);
    }, (error) => {
      console.log(error);
    });
  }
  viewData() {
    this.request.getStudentDetails().subscribe((response) => {
      this.studentDetails = response;
      console.log('StudentDetail', this.studentDetails);
    }, (error) => {
      console.log(error);
    });
  } 
  addNew() {
    this.router.navigate(['studentEntry']);
  }
  onDegreeChange(degree: any) {
    if (degree) {
      this.request.getBatchByDegree(degree).subscribe((response: any) => {
        this.batcheByDegrees = response;
        console.log('BatchByDegree',  this.batcheByDegrees);
      }, (error) => {
        console.log(error);
      });
    } else
      this.batcheByDegrees = null;
  }
  open(studentdetail) {
    this.stuId=studentdetail._id;
    console.log('StudentID', this.stuId);
    this.router.navigate(['studentDetail'], {
       queryParams: {
           id: studentdetail._id,
         }
        });
  }
  onBatchChange(batch : string) {
      if (batch){
        console.log(batch);
      this.request.getStudentDetailByBatch(batch).subscribe((response) => {
        //  console.log('depres',response);
        this.studentDets = response;
        console.log(this.studentDets);
      }, (error) => {
        console.log(error);
      });
      } else
      this.studentDets = null;
  }
  ngOnInit() {
    this.loadBatch();
    this.loadDegree();
    this.loadInstitution();
    this.viewData();
  
  }

}
