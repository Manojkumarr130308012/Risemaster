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

  courseprogram: any;
  batch: any;
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
  paadharNO: any;
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
  firstGraduate: any;
  scholarshipApplicable: any;
  parentExServiceMan: any;
  minoritygroup: any;
  physicallyChallengedPerson: any;
  andhamanAndNicobarNative: any;
  fg: any;
  sa: any;
  pxsm: any;
  mg: any;
  pcp: any;
  aan: any;
  institution: any;
  institutions: any;
  id: any;
  batcheBycourseprograms: any;
  batches: any;
  courseprograms: any;
  courseprogramByIns: any;
  courseprogrambyIns: any;
  constructor(
    private request: RequestService,
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
  ) {
    this.courseprogram = new FormControl('', Validators.required);
    this.batch = new FormControl('', Validators.required);
    this.rollNo = new FormControl('', Validators.required);
    this.regNo = new FormControl('');
    this.firstName = new FormControl('', Validators.required);
    this.lastName = new FormControl('', Validators.required);
    this.gender = new FormControl('', Validators.required);
    this.dob = new FormControl('', Validators.required);
    this.maritalStatus = new FormControl();
    this.mobileNo = new FormControl('', Validators.required);
    this.bloodGroup = new FormControl();
    this.emailId = new FormControl('', Validators.required);
    this.ffirstName = new FormControl('');
    this.flastName = new FormControl('');
    this.foccupation = new FormControl('');
    this.fannualIncome = new FormControl('');
    this.fmobileNo = new FormControl('');
    this.paadharNO = new FormControl('');
    this.mfirstName = new FormControl('');
    this.mlastName = new FormControl('');
    this.moccupation = new FormControl('');
    this.mannualIncome = new FormControl('');
    this.mmobileNo = new FormControl('');
    this.nationality = new FormControl();
    this.religion = new FormControl();
    this.caste = new FormControl();
    this.community = new FormControl('', Validators.required);
    this.institution = new FormControl('', Validators.required);
    this.admissionCategory = new FormControl('', Validators.required);
    this.admissionType = new FormControl('', Validators.required);
    this.financialCategory = new FormControl('', Validators.required);
    this.boarding = new FormControl('', Validators.required);
    this.boardingStartDate = new FormControl('');
    this.applicationNo = new FormControl('');
    this.admissionDate = new FormControl('');
    this.admissionNo = new FormControl('');
    this.joinDate = new FormControl('');
    this.referalType = new FormControl();
    this.referal = new FormControl('');
    this.motherTongue = new FormControl();
    this.secondLanguage = new FormControl();
    this.sPhoto = new FormControl('');
    this.firstGraduate = new FormControl();
    this.scholarshipApplicable = new FormControl();
    this.parentExServiceMan = new FormControl();
    this.minoritygroup = new FormControl();
    this.physicallyChallengedPerson = new FormControl();
    this.andhamanAndNicobarNative = new FormControl();
  }
     //to upload Photo
  submit() {
    this.uploader.uploadAll();
  }
  // Error Message 
  public setMessage(message) {
    return this.message = message;
  }
  firstGraduate1(event: any) {
    // console.log('FG', event);
    this.fg = event;
  }
  scholarshipApplicable1(event1: any) {
    // console.log('SA', event);
    this.sa = event1;
  }
  parentExServiceMan1(event2: any) {
    // console.log('PXSM', event);
    this.pxsm = event2;
  }
  minoritygroup1(event3: any) {
    // console.log('MG', event);
    this.mg = event3;
  }
  physicallyChallengedPerson1(event4: any) {
    // console.log('PCP', event);
    this.pcp = event4;
  }
  andhamanAndNicobarNative1(event5: any) {
    // console.log('AAN', event);
    this.aan = event5;
  }
  addStudentDetails() {
    const newStudentDetail = {
      courseprogram: this.courseprogram.value,
      batch: this.batch.value,
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
      paadharNO: this.paadharNO.value,
      mfirstName: this.mfirstName.value,
      mlastName: this.mlastName.value,
      moccupation: this.moccupation.value,
      mannualIncome: this.mannualIncome.value,
      mmobileNo: this.mmobileNo.value,
      nationality: this.nationality.value,
      religion: this.religion.value,
      caste: this.caste.value,
      community: this.community.value,
      institution: this.institution.value,
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
      firstGraduate: this.fg,
      scholarshipApplicable: this.sa,
      parentExServiceMan: this.pxsm,
      minoritygroup: this.mg,
      physicallyChallengedPerson: this.pcp,
      andhamanAndNicobarNative: this.aan,
      sPhoto: this.getfileLoc

    };
    this.request.addStudentDetails(newStudentDetail).subscribe((response: any) => { 
     console.log(response);
    if (response.status == 'success') {
      swal("Added Sucessfully");
      this.router.navigate(['studentProfile']);
      this.viewData();
    }
    else if (response.status == 'error') {
      this.setMessage(response.error);
      swal(response.error);
      console.log(response.error);
    }
    }, (error) => {
      this.setMessage(error);
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
 //Load the data from database
  loadGender() {
    this.request.getGender().subscribe((response: any) => {
      this.genders = response;
      // console.log('Gender', response);
    }, (error) => {
      console.log(error);
    });
  }
  loadNationality() {
    this.request.getNationality().subscribe((response: any) => {
      this.nationalities = response;
      // console.log('Nationality' ,response);
    }, (error) => {
      console.log(error);
    });
  }
  loadReligion() {
    this.request.getReligion().subscribe((response: any) => {
      this.religions = response;
      // console.log('Religion' ,response);
    }, (error) => {
      console.log(error);
    });
  }
  loadCommunity() {
    this.request.getCommunity().subscribe((response: any) => {
      this.communities = response;
      // console.log('Community' ,response);
    }, (error) => {
      console.log(error);
    });
  }
  loadCaste() {
    this.request.getCaste().subscribe((response: any) => {
      this.castes = response;
      // console.log('Caste' ,response);
    }, (error) => {
      console.log(error);
    });
  }
  loadAdmissionType() {
    this.request.getAdmissiontype().subscribe((response: any) => {
      this.admissiontypes = response;
      // console.log('AdmissionType',response);
    }, (error) => {
      console.log(error);
    });
  }
  loadRefferalType() {
    this.request.getReferralType().subscribe((response: any) => {
      this.referralTypes = response;
      // console.log('ReferenceType', response);
    }, (error) => {
      console.log(error);
    });
  }
  loadAdmissionCategory() {
    this.request.getAdmissionCategory().subscribe((response: any) => {
      this.admissioncategories = response;
      // console.log('AdmissionCategory' ,response);
    }, (error) => {
      console.log(error);
    });
  }
  loadMotherTongue() {
    this.request.getMotherTongue().subscribe((response: any) => {
      this.motherTongues = response;
      // console.log('MotherTongue' ,this.motherTongues);
    }, (error) => {
      console.log(error);
    });
  }
  loadSecondLanguage() {
    this.request.getMotherTongue().subscribe((response: any) => {
      this.secondLanguages = response;
      // console.log('MotherTongue' ,this.secondLanguages);
    }, (error) => {
      console.log(error);
    });
  }
  loadMaritalstatus()  {
    this.request.getMaritalstatus().subscribe((response : any) => {
    this.maritalstatuses = response;
    // console.log('MaritalStatus', this.maritalstatuses);
    }, (error) => {
      console.log(error);
    });
  }
  loadBloodgroup()  {
    this.request.getBloodgroup().subscribe((response : any) => {
    this.bloodgroups = response;
    // console.log('BloodGroup',this.bloodgroups);
    }, (error) => {
      console.log(error);
    });
  }
  loadInstitution() {
    this.request.getInstitution().subscribe((response: any) => {
      // console.log('Institution', response);
      this.institutions = response;
    }, (error) => {
      console.log(error);
    });
  }
  loadBatch() {
    this.request.getbatch().subscribe((response: any) => {
      this.batches = response;
      // console.log('Batches' ,this.batches);
    }, (error) => {
      console.log(error);
    });
  }
  
///////////////////////////////////////////////////////////////////////////////////////////////////////////
  // Filter AdmissionType, AdmissionCategory by Institution
  onInstitutionChange(Institution: any) {
    // console.log('institution', Institution)
    if (Institution) {
      this.request.getAdmissionTypeByIns(Institution).subscribe((response: any) => {
        // console.log('admissionType', response);
        this.admissiontypes = response;
      }, (error) => {
        console.log(error);
      });
      this.request.getCourseprogramByIns(Institution).subscribe((response: any) => {
        this.courseprogrambyIns = response;
        console.log('CourseProgramByIns',  this.courseprogrambyIns);
      }, (error) => {
        console.log(error);
      });
      this.request.getAdmissionCategoryByIns(Institution).subscribe((response: any) => {
        // console.log('admissionCategory', response);
        this.admissioncategories = response;
      }, (error) => {
        console.log(error);
      });
    } else

    this.admissiontypes = null;
    this.admissioncategories = null;
    this.courseprogrambyIns = null;
  }
   // Filter Batch by Degree
   onCourseProgramChange(courseprogram: any) {
    console.log('courseprogram' ,courseprogram)
    if (courseprogram) {
      this.request.getBatchByCoursePrgram(courseprogram).subscribe((response: any) => {
        this.batcheBycourseprograms = response;
        console.log('BatchBycourseprogram',  this.batcheBycourseprograms);
      }, (error) => {
        console.log(error);
      });
    } else
      this.batcheBycourseprograms = null;
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
    this.loadInstitution();
    this.loadBatch();
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      console.log('ImageUpload:uploaded:', item, status, response);
      const resPath = JSON.parse(response);
      this.getfileLoc = resPath.result;
    };
    //jQuery Validation form Details (Form-Control)
    $(function () {
      $('#studentEntry').validate({

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
