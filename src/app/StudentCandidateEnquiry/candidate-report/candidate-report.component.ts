import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder } from '@angular/forms';
import { RequestService } from '../../services/request.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-candidate-report',
  templateUrl: './candidate-report.component.html',
  styleUrls: ['./candidate-report.component.scss']
})
export class CandidateReportComponent implements OnInit {
  institutions: any;
  coursecategories: any;
  admissiontypes: any;
  coursetypes: any;
  admissioncategories: any;
  courseprograms: any;
  academicYears: any;
  institution: any;
  coursecategory: any;
  admissiontype: any;
  fromDate: any;
  toDate: any;
  courseprogram: any;
  academicYear: any;
  confirmedStatus: any;

  constructor( private request: RequestService,
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,) { }
  loadInstitution() {
    this.request.getInstitution().subscribe((response: any) => {
      console.log('Institution', response);
      this.institutions = response;
    }, (error) => {
      console.log(error);
    });
  }
  loadCourseCategory() {
    this.request.getCoursecategory().subscribe((response: any) => {
      this.coursecategories = response;
      console.log('CourseCategory', response);
    }, (error) => {
      console.log(error);
    });
  }
  loadAdmissionType() {
    this.request.getAdmissiontype().subscribe((response: any) => {
      this.admissiontypes = response;
      console.log('AdmissionType',response);
    }, (error) => {
      console.log(error);
    });
  }
  loadAcademicYear() {
    this.request.getAcademicYear().subscribe((response: any) => {
      this.academicYears = response;
      console.log('Academic Year', this.academicYears);
    }, (error) => {
      console.log(error);
    });
  }
  loadCourseType() {
    this.request.getCourseType().subscribe((response: any) => {
      this.coursetypes = response;
      console.log('CourseType' ,response);
    }, (error) => {
      console.log(error);
    });
  }
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////
  // Filter CourseCategory, AdmissionType, AdmissionCategory by Institution
  onInstitutionChange(Institution: any) {
    console.log('institution', Institution)
    if (Institution) {
      this.request.getCoursecategorybyIns(Institution).subscribe((response: any) => {
        console.log('courseCategory', response);
        this.coursecategories = response;
      }, (error) => {
        console.log(error);
      });
      this.request.getAdmissionTypeByIns(Institution).subscribe((response: any) => {
        console.log('admissionType', response);
        this.admissiontypes = response;
      }, (error) => {
        console.log(error);
      });
      this.request.getAdmissionCategoryByIns(Institution).subscribe((response: any) => {
        console.log('admissionCategory', response);
        this.admissioncategories = response;
      }, (error) => {
        console.log(error);
      });
    } else

    this.coursecategories = null;
    this.admissiontypes = null;
    this.admissioncategories = null;
  }
  // Filter CourseProgram by CourseCategory
  onCourseCategoryChange(CourseCategory: any) {
    console.log('courseCategory', CourseCategory)
    if (CourseCategory) {
      this.request.getCourseProbycourCat(CourseCategory).subscribe((response: any) => {
        console.log(response);
        this.courseprograms = response;
      }, (error) => {
        console.log(error);
      });

    } else

      this.courseprograms = null;
  }
  ngOnInit() {
    this.loadAdmissionType();
    this.loadCourseCategory();
    this.loadInstitution();
    this.loadCourseType();
    this.loadAcademicYear();
  }

}
