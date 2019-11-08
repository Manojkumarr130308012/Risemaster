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
   // Filter Degree data
  //  onInstitutionChange(Institution: string) {
  //   console.log('institution',Institution)
  //    if (Institution) {
  //      this.request.getDegreeByIns(Institution).subscribe((response: any) => {
  //        this.degreesbyIns = response;
  //        console.log('DegreeByIns',this.degreesbyIns);
  //      }, (error) => {
  //        console.log(error);
  //      });
  //    } else 
  //        this.degrees = null;
  //   }

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
  ngOnInit() {
    this.loadBatch();
    this.loadDegree();
    this.loadInstitution();
    this.viewData();
  //   //jQuery Validation
  // $(function () {
  //   $('#form_advanced_validation').validate({

  //     highlight: function (input) {
  //       $(input).parents('.form-line').addClass('error');
  //     },
  //     unhighlight: function (input) {
  //       $(input).parents('.form-line').removeClass('error');
  //     },
  //     errorPlacement: function (error, element) {
  //       $(element).parents('.form-group').append(error);
  //     }
  //   });
  // });
  }

}
