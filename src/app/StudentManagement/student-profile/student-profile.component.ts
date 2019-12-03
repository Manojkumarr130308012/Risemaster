import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.scss']
})
export class StudentProfileComponent implements OnInit {
  batches: any;
  courseprograms: any;
  institutions: any;
  courseprogramsbyIns: any;
  studentDetails: any;
  batcheBycourseprograms: any;
  stuId: any;
  studentDets: any;
  courseprogramByIns: any;
  courseprogrambyIns: any;
  batch: any;
  courseprogram: any;
  institution: any;
  constructor(
    private request: RequestService,
    private router: Router
  ) {
    this.courseprogram = new FormControl('');
    this.batch = new FormControl('');
    this.institution = new FormControl('');
  }
  loadBatch() {
    this.request.getbatch().subscribe((response: any) => {
      this.batches = response;
      console.log('Batches', this.batches);
    }, (error) => {
      console.log(error);
    });
  }

  loadInstitution() {
    this.request.getInstitution().subscribe((response: any) => {
      this.institutions = response;
      console.log('Institution', this.institutions);
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
 
  open(studentdetail) {
    this.stuId = studentdetail._id;
    console.log('StudentID', this.stuId);
    this.router.navigate(['studentDetail'], {
      queryParams: {
        id: studentdetail._id,
      }
    });
  }
  
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////
  // Filter by Institution
  onInstitutionChange(Institution: any) {
    console.log('institution', Institution)
    if (Institution) {
      this.request.getCourseprogramByIns(Institution).subscribe((response: any) => {
        this.courseprogrambyIns = response;
        console.log('CourseProgramByIns', this.courseprogrambyIns);
      }, (error) => {
        console.log(error);
      });

    } else

      this.courseprogrambyIns = null;
  }
   // Filter by Batch
  onBatchChange(batch: string) {
    if (batch) {
      console.log(batch);
      this.request.getStudentDetailByBatch(batch).subscribe((response) => {
        this.studentDets = response;
        console.log('StudentDetailsByBAtch', this.studentDets);
      }, (error) => {
        console.log(error);
      });
    } else
      this.studentDets = null;
  }
  // Filter by CourseProgram
  onCourseProgramChange(courseprogram: any) {
    if (courseprogram) {
      this.request.getBatchByCoursePrgram(courseprogram).subscribe((response: any) => {
        this.batcheBycourseprograms = response;
        console.log('BatchBycourseprogram', this.batcheBycourseprograms);
      }, (error) => {
        console.log(error);
      });
    } else
      this.batcheBycourseprograms = null;
  }
  ngOnInit() {
    this.loadBatch();
    this.loadInstitution();
    this.viewData();

  }

}
