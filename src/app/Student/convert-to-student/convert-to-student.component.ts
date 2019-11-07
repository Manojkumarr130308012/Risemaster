import { Component, OnInit } from '@angular/core';
import { RequestService } from '../../services/request.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-convert-to-student',
  templateUrl: './convert-to-student.component.html',
  styleUrls: ['./convert-to-student.component.scss']
})
export class ConvertToStudentComponent implements OnInit {
  institutions: any;
  basicdetails: any;
  canId: any;
  id: any;
  convertToStudent: any;
  degrees: any;
  batches: any;
  coursecategoriesbyIns: any;
  institution: any;

  constructor(
    private request: RequestService,
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
  ) {
    this.route.queryParams.subscribe((params: any) => {
      this.canId = params.id;
    });
    this.id = this.canId;

    //add Form Group - addressDetails
 this.convertToStudent = this.formBuilder.group({
  degree: ['', Validators.required],
  batch: ['', Validators.required],
  semester: ['', Validators.required],
  languageSubject: ['', Validators.required],
  boardingType: ['', Validators.required],
  financialCategory: ['', Validators.required],
  joiningDate: ['', Validators.required],
  hostel: ['', Validators.required],
  route: ['', Validators.required],
  busstop: ['', Validators.required],
  checkbox1: ['', Validators.required],
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
  loadBatch() {
    this.request.getbatch().subscribe((response: any) => {
      this.batches = response;
      console.log('Batches' ,this.batches);
    }, (error) => {
      console.log(error);
    });
  }
  loadCourseCategoryByIns(institution) {
    this.request.getCoursecategorybyIns(institution).subscribe((response: any) => {
      this.coursecategoriesbyIns = response;
      console.log('CourseCategoryByIns', this.coursecategoriesbyIns);
    }, (error) => {
      console.log(error);
    });
  }
  viewBasicDetailsById(id) {
    this.request.fetchBasicDetailsById(id).subscribe((response) => {
      this.basicdetails = response;
      this.institution = response[0].institution[0]._id;
      console.log('Institution' , this.institution);
      this.loadCourseCategoryByIns(this.institution);
      console.log('BasicDetailsById', this.basicdetails);
    }, (error) => {
      console.log(error);
    });
   }
  ngOnInit() {
    this.viewBasicDetailsById(this.id);
    this.loadDegree();
    this.loadBatch();
  }

}
