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
  degree: any;
  batch: any;
  semester: any;
  languageSubject: any;
  boardingType: any;
  checkbox1: any;
  financialCategory: any;
  joiningDate: any;
  hostel: any;
  rout: any;
  busstop: any;
  batcheByDegree: any;
  batcheByDegrees: any;
  institutiond: any;
  cecourseprograms: Object;
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
  rout: ['', Validators.required],
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
      this.institutiond = response[0].institutiond[0]._id;
      console.log('Institution' , this.institutiond); 
      this.loadCourseCategoryByIns(this.institutiond);
      console.log('BasicDetailsById', this.basicdetails);
    }, (error) => {
      console.log(error);
    });
   }
   onDegreeChange(degree: any) {
    console.log('Degree' ,degree)
    if (degree) {
      this.request.getBatchByDegree(degree).subscribe((response: any) => {
        this.batcheByDegrees = response;
        console.log('BatchByDegree',  this.batcheByDegrees);
      }, (error) => {
        console.log(error);
      });
    } else
      this.batcheByDegree = null;
  }
  viewCEcourseprogram(canId) {
    if (canId){
    this.request.getCEcourseprogramById(canId).subscribe((response) => {
      this.cecourseprograms = response;
      console.log('CECourseProgramById', this.cecourseprograms);
    }, (error) => {
      console.log(error);
    });
  } else
  this.cecourseprograms = null;
  }
  cancel() {
    this.router.navigate(['candidateEnquiry']);
  }
  ngOnInit() {
    this.viewBasicDetailsById(this.id);
    this.viewCEcourseprogram(this.canId);
    this.loadDegree();
    this.loadBatch();
  }

}
