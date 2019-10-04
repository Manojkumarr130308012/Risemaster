import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder } from '@angular/forms';
import { DynamicScriptLoaderService } from '../../services/dynamic-script-loader.service';
import { RequestService } from '../../services/request.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FileUploader } from 'ng2-file-upload';
import { StorageService } from 'src/app/services/storage.service';

const URL = 'http://localhost:3000/uploadStudentPhoto/upload';
declare const $: any;
declare const swal: any;
@Component({
  selector: 'app-cetabpage',
  templateUrl: './cetabpage.component.html',
  styleUrls: ['./cetabpage.component.scss']
})
export class CEtabpageComponent implements OnInit {
  
//Basic Details
firstName: any;
lastName: any;
dob: any;
gender: any; 
aadharNo: any;
regNo12th: any;
mark12th: any;
email: any;
sMobileNumber: any;
fFirstName: any;
fLastName: any;
fMobileNumber: any;
institution: any;
board: any;
referenceType: any;
referenceBy: any;
applicatonNo: any;
admissionType: any;
admissionCategory: any;
coursecategory: any;
courseProgram: any;
scholarshipCategory: any;
remark: any;
nationality: any;
religion: any;
community: any;
caste: any;
motherTongue: any;
fEmail: any;
fOccupation: any;
fAnnualIncome: any;
mName: any;
mEmail: any;
mMobileNo: any;
mOccupation: any;
mAnnualIncome: any;
pPanNumber: any;
pAadharNumber: any;
relativeName: any;
public uploader: FileUploader = new FileUploader({ url: URL, itemAlias: 'photo' });
sPhoto: any;
getfileLoc: any;
 message: any;
 basicdetails: any;
  Id: any;
  ceID: any;
  response: any;
  constructor(private dynamicScriptLoader: DynamicScriptLoaderService,
    private request: RequestService,
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private storage: StorageService,) { 
      // Add Form - BasicDetail
     
     this.firstName = new FormControl('', Validators.required);
     this.lastName = new FormControl('', Validators.required);
     this.dob = new FormControl('', Validators.required);
     this.gender = new FormControl('', Validators.required);
     this.aadharNo = new FormControl('', Validators.required);
     this.regNo12th = new FormControl('', Validators.required);
     this.mark12th = new FormControl('', Validators.required);
     this.email = new FormControl('', Validators.required);
     this.sMobileNumber = new FormControl('', Validators.required);
     this.fFirstName = new FormControl('', Validators.required);
     this.fLastName = new FormControl('', Validators.required);
     this.fMobileNumber = new FormControl('', Validators.required);
     this.institution = new FormControl('', Validators.required);
     this.board = new FormControl('', Validators.required);
     this.referenceType = new FormControl('', Validators.required);
     this.referenceBy = new FormControl('', Validators.required);
     this.applicatonNo = new FormControl('', Validators.required);
     this.admissionType = new FormControl('', Validators.required);
     this.admissionCategory = new FormControl('', Validators.required);
     this.coursecategory = new FormControl('', Validators.required);
     this.courseProgram = new FormControl('', Validators.required);
     this.scholarshipCategory = new FormControl('', Validators.required);
     this.remark = new FormControl('', Validators.required);
     this.nationality = new FormControl('', Validators.required);
     this.religion = new FormControl('', Validators.required);
     this.community = new FormControl('', Validators.required);
     this.caste = new FormControl('', Validators.required);
this.motherTongue = new FormControl('', Validators.required);
this.fEmail = new FormControl('', Validators.required);
this.fOccupation = new FormControl('', Validators.required);
this.fAnnualIncome = new FormControl('', Validators.required);
this.mName = new FormControl('', Validators.required);
this.mEmail = new FormControl('', Validators.required);
this.mMobileNo = new FormControl('', Validators.required);
this.mOccupation = new FormControl('', Validators.required);
this.mAnnualIncome = new FormControl('', Validators.required);
this.pPanNumber = new FormControl('', Validators.required);
this.pAadharNumber = new FormControl('', Validators.required);
this.relativeName = new FormControl('', Validators.required);
this.sPhoto = new FormControl('', Validators.required);
    }
    //to upload logo
  submit() {
    this.uploader.uploadAll();
  }
  // Error Message 
  public setMessage(message) {
    return this.message = message;
  }
// To add the basicDetails
addbasicdetails() {
  const newBasicDetails = {
    firstName: this.firstName.value,
    lastName: this.lastName.value,
    dob:this.dob.value,
    gender: this.gender.value,
    aadharNo: this.aadharNo.value,
    regNo12th: this.regNo12th.value,
    mark12th: this.mark12th.value,
    email: this.email.value,
    sMobileNumber: this.sMobileNumber.value,
    fFirstName: this.fFirstName.value,
    fLastName: this.fLastName.value,
    fMobileNumber: this.fMobileNumber.value,
    institution: this.institution.value,
    board: this.board.value,
    referenceType: this.referenceType.value,
    referenceBy: this.referenceBy.value,
    applicatonNo: this.applicatonNo.value,
    admissionType: this.admissionType.value,
    admissionCategory: this.admissionCategory.value,
    coursecategory: this.coursecategory.value,
    courseProgram:this.courseProgram.value,
    scholarshipCategory: this.scholarshipCategory.value,
    remark: this.remark.value,
    nationality: this.nationality.value,
    religion: this.religion.value,
    community:this.community.value,
    caste: this.caste.value,
    motherTongue: this.motherTongue.value,
    fEmail: this.fEmail.value,
    fOccupation: this.fOccupation.value,
    fAnnualIncome:this.fAnnualIncome.value,
    mName: this.mName.value,
    mEmail: this.mEmail.value,
    mMobileNo: this.mMobileNo.value,
    mOccupation: this.mOccupation.value,
    mAnnualIncome: this.mAnnualIncome.value,
    pPanNumber: this.pPanNumber.value,
    pAadharNumber:this.pAadharNumber.value,
    relativeName: this.relativeName.value,
    sPhoto: this.getfileLoc
  };
  this.request.addBasicDetails(newBasicDetails).subscribe((response: any) => {
    console.log(response);
   
    if (response.status == 'error') {
      this.setMessage(response.err);
      this.storage.clear();
    }
    else if (response.status == 'success') {
     
      swal("Added Sucessfully");
      this.viewData();
      this.storage.set(response.data);
      this.router.navigate(['CEMain']);
    }
  }, (error) => {
    this.setMessage(error);
  });
  console.log(newBasicDetails);
 
 }
  // To display the data
viewData() {
  this.request.getBasicDetails().subscribe((response) => {
    this.basicdetails = response;
    console.log(this.basicdetails);
  }, (error) => {
    console.log(error);
  });
 }
//  onNext(basicdetail) {
//   this.Id=basicdetail._id;
//   console.log(this.Id);
//  }
  ngOnInit() {
    this.viewData();
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      console.log('ImageUpload:uploaded:', item, status, response);
      const resPath = JSON.parse(response);
      this.getfileLoc = resPath.result;
    };
    //jQuery Validation
    $(function () {
      $('#form_advanced_validation').validate({

        highlight: function (input) {
          $(input).parents('.form-line').addClass('error');
        },
        unhighlight: function (input) {
          $(input).parents('.form-line').removeClass('error');
        },
        errorPlacement: function (error, element) {
          $(element).parents('.form-group').append(error);
        }
      });
    });
  }

}
