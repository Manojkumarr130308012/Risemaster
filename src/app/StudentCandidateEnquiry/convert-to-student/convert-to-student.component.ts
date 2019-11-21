import { Component, OnInit } from '@angular/core';
import { RequestService } from '../../services/request.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { DynamicScriptLoaderService } from 'src/app/services/dynamic-script-loader.service';
declare const swal: any;
declare const $: any;
@Component({
  selector: 'app-convert-to-student',
  templateUrl: './convert-to-student.component.html',
  styleUrls: ['./convert-to-student.component.scss']
})
export class ConvertToStudentComponent implements OnInit {
  institutions: any;
  basicdetails: any;
  basicDet: any;
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
  message: any;
  converts: any;
  stuId: any;
  studentDetails: Object;
  boarding: any;
  boardingStartDate: any;
  maritalStatus: any;
  bloodGroup: any;
  admissionDate: any;
  admissionNo: any;
  joinDate: any;
  secondLanguage: any;
  Idvalue1: any;
  hostels: any;
  hostelsbyIns: any;
  degreesbyIns: any;
  constructor(
    private request: RequestService,
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private dynamicScriptLoader: DynamicScriptLoaderService
  ) {
    this.route.queryParams.subscribe((params: any) => {
      this.canId = params.id;
    });
    this.id = this.canId;

    //add Form Group - addressDetails
 this.convertToStudent = this.formBuilder.group({
  degree: ['', Validators.required],
  batch: ['', Validators.required],
  semester: [''],
  languageSubject: [''],
  boardingType: ['', Validators.required],
  financialCategory: ['', Validators.required],
  joiningDate: ['', Validators.required],
  hostel: [''],
  rout: [''],
  busstop: [''],
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
  loadHostel() {
    this.request.getHostel().subscribe((response: any) => {
      this.hostels = response;
      console.log('Hostel' ,this.hostels);
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
  loadHostelByIns(institution) {
    this.request.getHostelbyIns(institution).subscribe((response: any) => {
      this.hostelsbyIns = response;
      console.log('HostelByIns', this.hostelsbyIns);
    }, (error) => {
      console.log(error);
    });
  }
  loadDegreeByIns(institution) {
    this.request.getDegreeByIns(institution).subscribe((response: any) => {
      this.degreesbyIns = response;
      console.log('DegreeByIns', this.degreesbyIns);
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
      this.loadHostelByIns(this.institutiond);
      this.loadDegreeByIns(this.institutiond);
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
  async startScript() {
		await this.dynamicScriptLoader.load('form.min', 'bootstrap-colorpicker').then(data => {
			this.loadData();
		}).catch(error => console.log(error));
	}
 // Error Message
 public setMessage(message) {
  return this.message = message;
}
  private loadData() {
   	//Select2
		$(".select2").select2();
	}

  addToStudentDetail(id) {
    const newDetails = {
      degree: this.convertToStudent.get('degree').value,
      batch: this.convertToStudent.get('batch').value,
     semester: this.convertToStudent.get('semester').value,
      languageSubject: this.convertToStudent.get('languageSubject').value,
      boardingType: this.convertToStudent.get('boardingType').value,
     financialCategory: this.convertToStudent.get('financialCategory').value,
     joiningDate: this.convertToStudent.get('joiningDate').value,
     hostel: this.convertToStudent.get('hostel').value,
     rout: this.convertToStudent.get('rout').value,
     busstop: this.convertToStudent.get('busstop').value,
     checkbox1: this.convertToStudent.get('checkbox1').value,
     canId: this.canId
    }
    this.request.addConvertToStudent(newDetails).subscribe((response: any) => {
      if (response.status == 'error') {
        this.setMessage(response.error);
      }
      else if (response.status == 'success') {
        this.viewConvertData(this.canId);
        this.conToStudent(id);
      }
    }, (error) => {
      this.setMessage(error);
    });
  }
  conToStudent(id) {
    this.Idvalue1 = id;
    this.request.fetchBasicDetailsById(id).subscribe((response) => {
      this.basicDet = response;
      console.log('ForConvertTOStudnet', this.basicDet);
 ///////////////////////////////////////////////
 const newStudentDetail = {
  degree: this.basicDet[0].ConvertToStudentDetails[0].degree,
  batch: this.basicDet[0].ConvertToStudentDetails[0].batch,
  firstName: this.basicDet[0].firstName,
  lastName: this.basicDet[0].lastName,
  gender: this.basicDet[0].gender,
  dob: this.basicDet[0].dob,
  mobileNo: this.basicDet[0].sMobileNumber,
  emailId: this.basicDet[0].email,
  ffirstName: this.basicDet[0].fFirstName,
  flastName: this.basicDet[0].fLastName,
  foccupation: this.basicDet[0].fOccupation,
  fannualIncome: this.basicDet[0].fAnnualIncome,
  fmobileNo: this.basicDet[0].fMobileNumber,
  paadharNO: this.basicDet[0].pAadharNumber,
  mfirstName: this.basicDet[0].mName,
  mlastName: this.basicDet[0].mName,
  moccupation: this.basicDet[0].mOccupation,
  mannualIncome: this.basicDet[0].mAnnualIncome,
  mmobileNo: this.basicDet[0].mMobileNo,
  nationality: this.basicDet[0].nationality,
  religion: this.basicDet[0].religion,
  caste: this.basicDet[0].caste,
  community: this.basicDet[0].community,
  institution: this.basicDet[0].institution,
  admissionCategory: this.basicDet[0].admissionCategory,
  admissionType: this.basicDet[0].admissiontype,
 financialCategory: this.basicDet[0].ConvertToStudentDetails[0].financialCategory,
  boarding: this.basicDet[0].ConvertToStudentDetails[0].boardingType,
  applicationNo: this.basicDet[0].applicatonNo,
  joinDate: this.basicDet[0].ConvertToStudentDetails[0].joiningDate,
  referalType: this.basicDet[0].referenceType,
  referal: this.basicDet[0].referenceBy,
  motherTongue: this.basicDet[0].motherTongue,
  sPhoto: this.basicDet[0].sPhoto,
  status: "Confirmed"
}
this.request.addStudentDetails(newStudentDetail).subscribe((response: any) => { 
 console.log(response);
if (response.status == 'success') {
  swal("Converted To Student Successfully");
  this.router.navigate(['studentProfile']);
  this.viewData();
  //update status in basic details as Confirmed 
  const updatestatus = {
    status: "Confirmed"
  }
  this.request.updateBasicDetails(this.Idvalue1,updatestatus).subscribe((response: any) => {
    console.log('UpdateStatus', response);
  });
}
else if (response.status == 'error') {
  this.setMessage(response.error);
  swal(response.error);
  console.log(response.error);
}
}, (error) => {
  this.setMessage(error);
});
///////////////////////////////////////////////////////////////
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
  viewConvertData(canId) {
    if (canId){
    this.request.getConvertToStudentById(canId).subscribe((response) => {
      this.converts = response;
      console.log('ConvertToStudentById', this.converts);
    }, (error) => {
      console.log(error);
    });
  } else
  this.converts = null;
  }
  ngOnInit() {
    this.viewBasicDetailsById(this.id);
    this.viewCEcourseprogram(this.canId);
    this.viewConvertData(this.canId);
    this.loadDegree();
    this.loadBatch();
    this.loadHostel();
  }

}