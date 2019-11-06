import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { FileUploader } from 'ng2-file-upload';

const URL = 'http://localhost:3000/uploadStudentPhoto/upload';
declare const $: any;
declare const swal: any;
@Component({
  selector: 'app-student-entry',
  templateUrl: './student-entry.component.html',
  styleUrls: ['./student-entry.component.scss']
})
export class StudentEntryComponent implements OnInit {

  rollNo: any;
  regNo: any;
  firstName: any;
  lastName: any;
  gender: any;
  dob: any;
  maritalStatus: any;
  mobileNo: any;
  bloodGroup: any;
  emailId: any;
  ffirstName: any;
  flastName: any;
  foccupation: any;
  fannualIncome: any;
  fmobileNo: any;
  mfirstName: any;
  mlastName: any;
  moccupation: any;
  mannualIncome: any;
  mmobileNo: any;
  nationality: any;
  religion: any;
  caste: any;
  community: any;
  admissionCategory: any;
  admissionType: any;
  financialCategory: any;
  boarding: any;
  boardingStartDate: any;
  applicationNo: any;
  admissionDate: any;
  admissionNo: any;
  joinDate: any;
  referalType: any;
  referal: any;
  motherTongue: any;
  secondLanguage: any;
  sPhoto: any;
  public uploader: FileUploader = new FileUploader({ url: URL, itemAlias: 'photo' });
  getfileLoc: any;
  studentDetails: Object;
  message: any;
  genders: any;
  nationalities: any;
  religions: any;
  communities: any;
  castes: any;
  admissiontypes: any;
  referralTypes: any;
  admissioncategories: any;
  motherTongues: any;
  secondLanguages: any;
  maritalstatuses: any;
  bloodgroups: any;
  constructor(
    private request: RequestService,
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
  ) {
    this.firstName = new FormControl('', Validators.required);
    this.rollNo = new FormControl('', Validators.required);
    this.regNo = new FormControl('', Validators.required);
    this.firstName = new FormControl('', Validators.required);
    this.lastName = new FormControl('', Validators.required);
    this.gender = new FormControl('', Validators.required);
    this.dob = new FormControl('', Validators.required);
    this.maritalStatus = new FormControl('', Validators.required);
    this.mobileNo = new FormControl('', Validators.required);
    this.bloodGroup = new FormControl('', Validators.required);
    this.emailId = new FormControl('', Validators.required);
    this.ffirstName = new FormControl('', Validators.required);
    this.flastName = new FormControl('', Validators.required);
    this.foccupation = new FormControl('', Validators.required);
    this.fannualIncome = new FormControl('', Validators.required);
    this.fmobileNo = new FormControl('', Validators.required);
    this.mfirstName = new FormControl('', Validators.required);
    this.mlastName = new FormControl('', Validators.required);
    this.moccupation = new FormControl('', Validators.required);
    this.mannualIncome = new FormControl('', Validators.required);
    this.mmobileNo = new FormControl('', Validators.required);
    this.nationality = new FormControl('', Validators.required);
    this.religion = new FormControl('', Validators.required);
    this.caste = new FormControl('', Validators.required);
    this.community = new FormControl('', Validators.required);
    this.admissionCategory = new FormControl('', Validators.required);
    this.admissionType = new FormControl('', Validators.required);
    this.financialCategory = new FormControl('', Validators.required);
    this.boarding = new FormControl('', Validators.required);
    this.boardingStartDate = new FormControl('', Validators.required);
    this.applicationNo = new FormControl('', Validators.required);
    this.admissionDate = new FormControl('', Validators.required);
    this.admissionNo = new FormControl('', Validators.required);
    this.joinDate = new FormControl('', Validators.required);
    this.referalType = new FormControl('', Validators.required);
    this.referal = new FormControl('', Validators.required);
    this.motherTongue = new FormControl('', Validators.required);
    this.secondLanguage = new FormControl('', Validators.required);
    // this.sPhoto = new FormControl('', Validators.required);
   }
     //to upload logo
  submit() {
    this.uploader.uploadAll();
  }
  // Error Message 
  public setMessage(message) {
    return this.message = message;
  }
  addStudentDetails() {
    const newStudentDetail = {
      rollNo: this.rollNo.value,
      regNo: this.regNo.value,
      firstName: this.firstName.value,
      lastName: this.lastName.value,
      gender: this.gender.value,
      dob: this.dob.value,
      maritalStatus: this.maritalStatus.value,
      mobileNo: this.mobileNo.value,
      bloodGroup: this.bloodGroup.value,
      emailId: this.emailId.value,
      ffirstName: this.ffirstName.value,
      flastName: this.flastName.value,
      foccupation: this.foccupation.value,
      fannualIncome: this.fannualIncome.value,
      fmobileNo: this.fmobileNo.value,
      mfirstName: this.mfirstName.value,
      mlastName: this.mlastName.value,
      moccupation: this.moccupation.value,
      mannualIncome: this.mannualIncome.value,
      mmobileNo: this.mmobileNo.value,
      nationality: this.nationality.value,
      religion: this.religion.value,
      caste: this.caste.value,
      community: this.community.value,
      admissionCategory: this.admissionCategory.value,
      admissionType: this.admissionType.value,
      financialCategory: this.financialCategory.value,
      boarding: this.boarding.value,
      boardingStartDate: this.boardingStartDate.value,
      applicationNo: this.applicationNo.value,
      admissionDate: this.admissionDate.value,
      admissionNo: this.admissionNo.value,
      joinDate: this.joinDate.value,
      referalType: this.referalType.value,
      referal: this.referal.value,
      motherTongue: this.motherTongue.value,
      secondLanguage: this.secondLanguage.value,
      sPhoto: this.getfileLoc,
    };
    this.request.addStudentDetails(newStudentDetail).subscribe((response: any) => { 
      console.log(response);
        swal("Added Sucessfully");
        this.viewData();
    }, (error) => {
      this.setMessage(error);
    });
    console.log(newStudentDetail);
  }
  viewData() {
    this.request.getStudentDetails().subscribe((response) => {
      this.studentDetails = response;
      console.log('StudentDetail', this.studentDetails);
    }, (error) => {
      console.log(error);
    });
  } 
  loadGender() {
    this.request.getGender().subscribe((response: any) => {
      this.genders = response;
      console.log('Gender', response);
    }, (error) => {
      console.log(error);
    });
  }
  loadNationality() {
    this.request.getNationality().subscribe((response: any) => {
      this.nationalities = response;
      console.log('Nationality' ,response);
    }, (error) => {
      console.log(error);
    });
  }
  loadReligion() {
    this.request.getReligion().subscribe((response: any) => {
      this.religions = response;
      console.log('Religion' ,response);
    }, (error) => {
      console.log(error);
    });
  }
  loadCommunity() {
    this.request.getCommunity().subscribe((response: any) => {
      this.communities = response;
      console.log('Community' ,response);
    }, (error) => {
      console.log(error);
    });
  }
  loadCaste() {
    this.request.getCaste().subscribe((response: any) => {
      this.castes = response;
      console.log('Caste' ,response);
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
  loadRefferalType() {
    this.request.getReferralType().subscribe((response: any) => {
      this.referralTypes = response;
      console.log('ReferenceType', response);
    }, (error) => {
      console.log(error);
    });
  }
  loadAdmissionCategory() {
    this.request.getAdmissionCategory().subscribe((response: any) => {
      this.admissioncategories = response;
      console.log('AdmissionCategory' ,response);
    }, (error) => {
      console.log(error);
    });
  }
  loadMotherTongue() {
    this.request.getMotherTongue().subscribe((response: any) => {
      this.motherTongues = response;
      console.log('MotherTongue' ,this.motherTongues);
    }, (error) => {
      console.log(error);
    });
  }
  loadSecondLanguage() {
    this.request.getMotherTongue().subscribe((response: any) => {
      this.secondLanguages = response;
      console.log('MotherTongue' ,this.secondLanguages);
    }, (error) => {
      console.log(error);
    });
  }
  loadMaritalstatus()  {
    this.request.getMaritalstatus().subscribe((response : any) => {
    this.maritalstatuses = response;
    console.log('MaritalStatus', this.maritalstatuses);
    }, (error) => {
      console.log(error);
    });
  }
  loadBloodgroup()  {
    this.request.getBloodgroup().subscribe((response : any) => {
    this.bloodgroups = response;
    console.log('BloodGroup',this.bloodgroups);
    }, (error) => {
      console.log(error);
    });
  }
  ngOnInit() {
    this.viewData();
    this.loadAdmissionCategory();
    this.loadAdmissionType();
    this.loadCaste();
    this.loadMotherTongue();
    this.loadGender();
    this.loadCommunity();
    this.loadNationality();
    this.loadRefferalType();
    this.loadReligion();
    this.loadSecondLanguage();
    this.loadMaritalstatus();
    this.loadBloodgroup();
  }

}
