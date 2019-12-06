import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators, FormControl} from '@angular/forms';
import { FileUploader } from 'ng2-file-upload';
declare const $: any;
declare const swal: any;

const URL = 'http://localhost:3000/ce-qd-fileupload/upload';
const url = 'http://localhost:3000/student-certi-upload/upload';
@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.scss']
})
export class StudentDetailComponent implements OnInit {
  studentDetails: any;
  id: any;
  submitted = false;
  //Contact
  addressType: any;
  address1: any;
  address2: any;
  taluk: any;
  villageName: any;
  city: any;
  district: any;
  state: any;
  country: any;
  pin: any;
  addressType2: any;
  address12: any;
  address22: any;
  taluk2: any;
  villageName2: any;
  city2: any;
  district2: any;
  state2: any;
  country2: any;
  pin2: any;
  stuId: any;
  addContactForm: any;
  editContactForm: any;
  studentContacts: any;
  message: any;
  editContact: any;
  addressTypeValue: any;
  address1Value: any;
  address2Value: any;
  cityValue: any;
  districtValue: any;
  stateValue: any;
  countryValue: any;
  pinValue: any;
  IdValue2: any;
  villageNameValue: any;
  talukValue: any;
  addresstypes: any;
  //Identity
  studentIdentities: any;
  addIdentityForm: any;
  editIdentityForm: any;
  studentidentities: any;
  editIdentity: any;
  identityTypeValue: any;
  IdValue3: any;
  //Medical
  addMedicalForm: any;
  editMedicalForm: any;
  studentmedicals: any;
  IdValue4: any;
  height: any;
  weight:  any;
  hairColor: any;
  eyeColor: any;
  complexion: any;
  bloodGroup: any;
  colorBlind:any;
  identityType: any;
  markDetail: any;
  height2: any;
  weight2:  any;
  hairColor2: any;
  eyeColor2: any;
  complexion2: any;
  bloodGroup2: any;
  colorBlind2:any;
  identityType2: any;
  markDetail2: any;
  editMedical: any;
  heightValue: any;
  weightValue: any;
  hairColorValue: any;
  eyeColorValue: any;
  complexionValue: any;
  bloodGroupValue: any;
  colorBlindValue: any;
  markDetailsValue: any;
  bloodgroups: any;
  mf: any;
  medicallyFit: any;
  medicallyFitValue: any;
  addIdentityMarkForm: any;
  editIdentityMarkForm: any;
  studentidentityMarks: any;
  editIdentityMark: any;
  markDetailValue: any;
  IdValue5: any;
  //Other Details
  addOtherForm: any;
  editOther: any;
  editOtherForm: any;
  studentothers: any;
  IdValue6: any;
  motherAge: any;
  placeOfBirth: any;
  dateOfLeave: any;
  overAllRank: any;
  universityAppNo: any;
  universityAdmiNo: any;
  challanNo: any;
  challandate: any;
  challanAmount: any;
  motherAge2: any;
  placeOfBirth2: any;
  dateOfLeave2: any;
  overAllRank2: any;
  universityAppNo2: any;
  universityAdmiNo2: any;
  challanNo2: any;
  challandate2: any;
  challanAmount2: any;
  motherAgeValue: any;
  placeOfBirthValue: any;
  dateOfLeaveValue: any;
  overAllRankValue: any;
  universityAppNoValue: any;
  universityAdmiNoValue: any;
  challanNoValue: any;
  challandateValue: any;
  challanAmountValue: any;
  optOutPla: any;
  optOutValue: any;
  //Guardian
  addGuardianForm: any;
  editGuardianForm: any;
  editGuardian: any;
  studentGuardians: any;
  relationship: any;
  firstName: any;
  lastName: any;
  flatNo: any;
  areaLocality: any;
  mobileNo: any;
  pincode: any;
  relationship2: any;
  firstName2: any;
  lastName2: any;
  flatNo2: any;
  areaLocality2: any;
  mobileNo2: any;
  pincode2: any;
  relationshipValue: any;
  firstNameValue: any;
  lastNameValue: any;
  flatNoValue: any;
  areaLocalityValue: any;
  mobileNoValue: any;
  pincodeValue: any;
  IdValue7: any;
  relationships: any;
  //Extracurricular
  studentExtras: any;
  addExtraForm: any;
  editExtra: any;
  editExtraForm: any;
  activityCate: any;
  subCate: any;
  level: any;
  fromDate: any;
  toDate: any;
  year: any;
  venue: any;
  description: any;
  awardDetail: any;
  remark: any;
  activityCate2: any;
  subCate2: any;
  level2: any;
  fromDate2: any;
  toDate2: any;
  year2: any;
  venue2: any;
  description2: any;
  awardDetail2: any;
  remark2: any;
  activityCateValue: any;
  subCateValue: any;
  levelValue: any;
  fromDateValue: any;
  toDateValue: any;
  yearValue: any;
  venueValue: any;
  descriptionValue: any;
  awardDetailValue: any;
  remarkValue: any;
  IdValue8: any;
  activitycats: any;
  subcats: any;
  subcategories: any;
  //Qualification 
  studentQualifications: Object;
  addQualificationForm: any;
  editQualification: any;
  editQualificationForm: any;
  qualificationType: any;
  courseType: any;
  courseName: any;
  courseStartDate: any;
  courseEndDate: any;
  board: any;
  medium: any;
  institution: any;
  yearOfPassing: any;
  markObtained: any;
  maxMark: any;
  organisationType: any;
  certificateNo: any;
  registerNo: any;
  placeOfIssue: any;
  certificateIssuedate: any;
  tmrCode: any;
  tmrDate: any;
  groupCode: any;
  photoLoctaion: any;
  qualificationTypeValue: any;
  courseTypeValue: any;
  courseNameValue: any;
  courseStartDateValue: any;
  courseEndDateValue: any;
  boardValue: any;
  mediumValue: any;
  institutionValue: any;
  yearOfPassingValue: any;
  markObtainedValue: any;
  maxMarkValue: any;
  organisationTypeValue: any;
  certificateNoValue: any;
  registerNoValue: any;
  placeOfIssueValue: any;
  certificateIssuedateValue: any;
  tmrCodeValue: any;
  tmrDateValue: any;
  groupCodeValue: any;
  photoLoctaionValue: any;
  qualificationType2: any;
  courseType2: any;
  courseName2: any;
  courseStartDate2: any;
  courseEndDate2: any;
  board2: any;
  medium2: any;
  institution2: any;
  yearOfPassing2: any;
  markObtained2: any;
  maxMark2: any;
  organisationType2: any;
  certificateNo2: any;
  registerNo2: any;
  placeOfIssue2: any;
  certificateIssuedate2: any;
  tmrCode2: any;
  tmrDate2: any;
  groupCode2: any;
  photoLoctaion2: any;
  cutOff2: any;
  percentage2: any;
  IdValue9: any;
  cutOffValue: any;
  percentageValue: any;
  boards: any;
  coursetypes: any;
  media: any;
  qualificationTypes: any;
  public uploader: FileUploader = new FileUploader({ url: URL, itemAlias: 'photo' });
  getfileLoc: any;
  cutOff: FormControl;
  percentage: FormControl;
  studentCertificates: Object;
  addCertificateForm: any;
  editCertificate: any;
  editCertificateForm: any;
  getfileLoc2: any;
  certificateTypeValue: any;
  fileUploadValue: any;
  IdValue: any;
  certificateType2: any;
  certificateType: any;
  fileUpload2: any;
  public uploader2: FileUploader = new FileUploader({ url: url, itemAlias: 'file' });
  certificateTypes: any;
  fileUpload: FormControl;
  Id: any;
  editDetails: any;
  stuDetail: any;

  
  constructor(
    private request: RequestService,
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
  ){
    this.route.queryParams.subscribe((params: any) => {
      this.id = params.id;
    })

//AddForm - StudentAddress
this.addContactForm = this.formBuilder.group({
  addressType: ['', Validators.required],
  address1: ['', Validators.required],
  address2: ['', Validators.required],
  villageName: [''],
  taluk: [''],
  city: ['', Validators.required],
  district: ['', Validators.required],
  pin: ['', Validators.required],
  state: ['', Validators.required],
  country: ['', Validators.required],
});
//EDitForm - StudentAddress
this.editContactForm = this.formBuilder.group({
  addressType2: ['', Validators.required],
  address12: ['', Validators.required],
  address22: ['', Validators.required],
  villageName2: ['', Validators.required],
  taluk2: [''],
  city2: [''],
  district2: ['', Validators.required],
  pin2: ['', Validators.required],
  state2: ['', Validators.required],
  country2: ['', Validators.required],
});
//Add addIdentity Form Group
this.addIdentityForm = this.formBuilder.group({
  identityType:['', Validators.required]
});
//Edit editIdentity Form Group
this.editIdentityForm = this.formBuilder.group({
  identityType2:['', Validators.required]
});
//AddForm - StudentMedical
this.addMedicalForm = this.formBuilder.group({
  height: [''],
  weight: [''],
  hairColor: [''],
  eyeColor: [''],
  complexion: [''],
  bloodGroup: [''],
  colorBlind: [''],
  medicallyFit: [''],
 
});
//EditForm - StudentMedical
this.editMedicalForm = this.formBuilder.group({
  height2: [''],
  weight2: [''],
  hairColor2: [''],
  eyeColor2: [''],
  complexion2: [''],
  bloodGroup2: [''],
  colorBlind2: [''],
  medicallyFit2: [''],
});
//Add addIdentity Form Group
this.addIdentityMarkForm = this.formBuilder.group({
  identityType: ['', Validators.required],
  markDetail: ['', Validators.required],
});
//Edit editIdentity Form Group
this.editIdentityMarkForm = this.formBuilder.group({
   identityType2: ['', Validators.required],
  markDetail2: ['', Validators.required],
});
//AddForm - StudentOtherDetails
this.addOtherForm = this.formBuilder.group({
  motherAge: [''],
  placeOfBirth: [''],
  dateOfLeave: [''],
  overAllRank: [''],
  universityAppNo: [''],
  universityAdmiNo: [''],
  challanNo: [''],
  challandate: [''],
  challanAmount: [''],
  optOut: ['']
});
//EditForm - StudentOtherDetails
this.editOtherForm = this.formBuilder.group({
  motherAge2: [''],
  placeOfBirth2: [''],
  dateOfLeave2: [''],
  overAllRank2: [''],
  universityAppNo2: [''],
  universityAdmiNo2: [''],
  challanNo2: [''],
  challandate2: [''],
  challanAmount2: [''],
  optOut2: ['']
});
//AddForm - StudentGuardian
this.addGuardianForm = this.formBuilder.group({
  relationship: ['', Validators.required],
  firstName: ['', Validators.required],
  lastName: [''],
  addressType: ['', Validators.required],
  flatNo: [''],
  areaLocality: [''],
  mobileNo: ['', Validators.required],
  city: [''],
  district: ['', Validators.required],
  pincode: ['', Validators.required],
  state: [''],
  country: [''],
});
//EditForm - StudentGuardian
this.editGuardianForm = this.formBuilder.group({
  relationship2: ['', Validators.required],
  firstName2: ['', Validators.required],
  lastName2: [''],
  addressType2: ['', Validators.required],
  flatNo2: [''],
  areaLocality2: [''],
  mobileNo2: ['', Validators.required],
  city2: [''],
  district2: ['', Validators.required],
  pincode2: ['', Validators.required],
  state2: [''],
  country2: [''],
});
//AddForm - Student ExtraCurricular
this.addExtraForm = this.formBuilder.group({
  activityCate: ['', Validators.required],
  subCate: [],
  level: [''],
  fromDate: [''],
  toDate: [''],
  year: [''],
  venue: [''],
  description: [''],
  awardDetail: [''],
  remark: ['']
});
//EditForm -Student ExtraCurricular
this.editExtraForm = this.formBuilder.group({
  activityCate2: ['', Validators.required],
  subCate2: [],
  level2: [''],
  fromDate2: [''],
  toDate2: [''],
  year2: [''],
  venue2: [''],
  description2: [''],
  awardDetail2: [''],
  remark2: [''],
});
//AddForm - Student Qualification
this.qualificationType = new FormControl('', Validators.required);
this.courseType = new FormControl('', Validators.required);
this.courseName = new FormControl('', Validators.required);
this.courseStartDate = new FormControl('');
this.courseEndDate = new FormControl('');
this.board = new FormControl('', Validators.required);
this.medium = new FormControl();
this.institution = new FormControl('');
this.city = new FormControl('');
this.taluk = new FormControl('');
this.district = new FormControl('');
this.state = new FormControl('');
this.country = new FormControl('');
this.pincode = new FormControl('');
this.yearOfPassing = new FormControl('', Validators.required);
this.markObtained = new FormControl('');
this.maxMark = new FormControl('');
this.organisationType = new FormControl();
this.certificateNo = new FormControl('');
this.registerNo = new FormControl('');
this.placeOfIssue = new FormControl('');
this.certificateIssuedate = new FormControl('');
this.tmrCode = new FormControl('');
this.tmrDate = new FormControl('');
this.groupCode = new FormControl('');
this.cutOff = new FormControl('');
this.percentage = new FormControl('');
this.photoLoctaion = new FormControl('');

//EditForm -Student Qualification
this.qualificationType2 = new FormControl('', Validators.required);
this.courseType2 = new FormControl('', Validators.required);
this.courseName2 = new FormControl('', Validators.required);
this.courseStartDate2 = new FormControl('');
this.courseEndDate2 = new FormControl('');
this.board2 = new FormControl('', Validators.required);
this.medium2 = new FormControl();
this.institution2 = new FormControl('');
this.city2 = new FormControl('');
this.taluk2 = new FormControl('');
this.district2 = new FormControl('');
this.state2 = new FormControl('');
this.country2 = new FormControl('');
this.pincode2 = new FormControl('');
this.yearOfPassing2 = new FormControl('', Validators.required);
this.markObtained2 = new FormControl('');
this.maxMark2 = new FormControl('');
this.organisationType2 = new FormControl();
this.certificateNo2 = new FormControl('');
this.registerNo2 = new FormControl('');
this.placeOfIssue2 = new FormControl('');
this.certificateIssuedate2 = new FormControl('');
this.tmrCode2 = new FormControl('');
this.tmrDate2 = new FormControl('');
this.groupCode2 = new FormControl('');
this.cutOff2 = new FormControl('');
this.percentage2 = new FormControl('');
this.photoLoctaion2 = new FormControl('');
//AddForm - Certificate
this.certificateType = new FormControl('');
this.registerNo = new FormControl('');
this.certificateNo = new FormControl('');
this.fileUpload = new FormControl('');
//EditForm - Certificate
this.certificateType2 = new FormControl('');
this.registerNo2 = new FormControl('');
this.certificateNo2 = new FormControl('');
this.fileUpload2 = new FormControl('');
  }
   //to upload qualificationfile
 submit() {
  this.uploader.uploadAll();
}
  viewStudentDetailById(id: any) {
    if(id) {
      this.request.fetchStudentDetailsById(id).subscribe((response) => {
        this.studentDetails = response;
        console.log('StudentDetailById', this.studentDetails);
      }, (error) => {
        console.log(error);
      });
    }
  }
  
  public setMessage(message) {
    return this.message = message;
  }

   ///////StudentContact////////
   viewStudentConatctById(stuId : string) {
    if (stuId){
    this.request.getStudentcontactById(stuId).subscribe((response) => {
       this.studentContacts = response;
       console.log('StudentContactbyStuId', this.studentContacts);
       }, (error) => {
         console.log(error);
       });
     } else
        this.studentContacts = null;
   }
 
   deletecontact(id: any) {
     this.request.deleteStaffContact(id).subscribe(res => {
      //  console.log(id);
       this.viewStudentConatctById(this.id);
     console.log('Deleted');
     });
   }
 
 onAddContact() {
       this.submitted = true;
       if (this.addContactForm.invalid) {
           return;
       }
       let newstudentContact = {
         addressType : this.addContactForm.get('addressType').value,
         address1 : this.addContactForm.get('address1').value,
         address2 : this.addContactForm.get('address2').value,
         city : this.addContactForm.get('city').value,
         taluk : this.addContactForm.get('taluk').value,
         villageName : this.addContactForm.get('villageName').value,
         district : this.addContactForm.get('district').value,
         state : this.addContactForm.get('state').value,
         country : this.addContactForm.get('country').value,
         pin : this.addContactForm.get('pin').value,
         stuId : this.id
         }
      this.request.addStudentcontact(newstudentContact).subscribe((res: any) => {
       if (res.status == 'error') {
         this.setMessage(res.error);
       }
       else if (res.status == 'success') {
         swal("Added Sucessfully");
         this.viewStudentConatctById(this.id);
         this.loadstudentContact();
       }
       }, (error) => {
         this.setMessage(error);
       });
         console.log(newstudentContact);
   }
 
   onEditContact(id: any){
     this.request.fetchStudentcontactById(id).subscribe((response) => {
       this.editContact=response[0];
      //  console.log(response);
           this.addressTypeValue=this.editContact.addressType;
           this.address1Value=this.editContact.address1;
           this.address2Value=this.editContact.address2;
           this.cityValue=this.editContact.city;
           this.villageNameValue=this.editContact.villageName;
           this.talukValue=this.editContact.taluk;
           this.districtValue=this.editContact.district;
           this.stateValue=this.editContact.state;
           this.countryValue=this.editContact.country;
           this.pinValue=this.editContact.pin;
           this.IdValue2=this.editContact._id;
 
 
       this.editContactForm = this.formBuilder.group({
         addressType2:[this.addressTypeValue, Validators.required],
         address12:[this.address1Value, Validators.required],
         address22:[this.address2Value, Validators.required],
         city2:[this.cityValue, Validators.required],
         taluk2:[this.talukValue],
         villageName2:[this.villageNameValue],
         district2:[this.districtValue, Validators.required],
         state2:[this.stateValue, Validators.required],
         country2:[this.countryValue, Validators.required],
         pin2:[this.pinValue, Validators.required],
       });
       console.log(this.editContactForm.value);
     });
   }
   onEditContactSubmit() {
     this.submitted = true;
     if (this.editContactForm.invalid) {
      return;
    }
       let edata2 = {
        addressType : this.editContactForm.get('addressType2').value,
        address1 : this.editContactForm.get('address12').value,
        address2 : this.editContactForm.get('address22').value,
        city : this.editContactForm.get('city2').value,
        taluk : this.editContactForm.get('taluk2').value,
        villageName : this.editContactForm.get('villageName2').value,
        district : this.editContactForm.get('district2').value,
        state : this.editContactForm.get('state2').value,
        country : this.editContactForm.get('country2').value,
        pin : this.editContactForm .get('pin2').value
        }
   this.request.updateStudentcontact(this.IdValue2,edata2).subscribe((res : any) => {
     if (res.status == 'success') {
       swal("Updated Sucessfully");
        this.loadstudentContact();
       this.viewStudentConatctById(this.id);
     }
     else if (res.status == 'error') {
       this.setMessage(res.error);
     }
 
   }, (error) => {
     console.log(error);
     this.setMessage(error);
   });
 }
 loadAddressType() {
  this.request.getAddressType().subscribe((response: any) => {
    this.addresstypes = response;
    console.log('AddressType', this.addresstypes)
  }, (error) => {
    console.log(error);
  });
}
 // convenience getter for easy access to form fields
 get f() { return this.addContactForm.controls; }
 get f2() { return this.editContactForm.controls; }
 
 private loadstudentContact(){
   $('#addcontactModal').modal('hide'); //or  $('#IDModal').modal('hide');
   $('#addcontactModal').on('hidden.bs.modal', function () {
   $(this).find('form').trigger('reset');
  });
 
  $('#editcontactModal').modal('hide'); //or  $('#IDModal').modal('hide');
  $('#editcontactModal').on('hidden.bs.modal', function () {
  $(this).find('form').trigger('reset');
 });
 }
  ///////StudentIdentity////////
viewStudentIdentityById(stuId : string) {
  if (stuId){
  this.request.getStudentIdentityById(stuId).subscribe((response) => {
     this.studentidentities = response;
     console.log('StudentIdentityById',this.studentidentities);
     }, (error) => {
       console.log(error);
     });
   } else
      this.studentidentities = null;
 }

 deleteIdentity(id: any) {
this.request.deleteStudentIdentity(id).subscribe(res => {
console.log(id);
this.viewStudentIdentityById(this.id);
swal("Deleted");
});
}

onAddIdentity() {
this.submitted = true;
if (this.addIdentityForm.invalid) {
    return;
}
let newstudentIdentity = {
  identityType : this.addIdentityForm.get('identityType').value,
  stuId : this.id
  }
this.request.addStudentIdentity(newstudentIdentity).subscribe((res: any) => {
if (res.status == 'error') {
  this.setMessage(res.error);
}
else if (res.status == 'success') {
  swal("Added Sucessfully");
  this.viewStudentIdentityById(this.id);
  this.loadStudentIdentity();
}
}, (error) => {
  this.setMessage(error);
});
  console.log(newstudentIdentity);
}

onEditIdentity(id: any){
this.request.fetchStudentIdentityById(id).subscribe((response) => {
  this.editIdentity=response[0];
  // console.log(response);
      this.identityTypeValue=this.editIdentity.identityType;
      this.IdValue3=this.editIdentity._id;

  this.editIdentityForm = this.formBuilder.group({
    identityType2:[this.identityTypeValue, Validators.required]
    });
  console.log(this.editIdentityForm.value);
});
}
onEditIdentitySubmit() {
this.submitted = true;
console.log(this.editIdentityForm.value);
let edata3 = {
  identityType : this.editIdentityForm.get('identityType2').value
  }
this.request.updateStudentIdentity(this.IdValue3,edata3).subscribe((res : any) => {
if (res.status == 'success') {
  swal("Updated Sucessfully");
  this.viewStudentIdentityById(this.id);
  this.loadStudentIdentity();
}
else if (res.status == 'error') {
  this.setMessage(res.error);
}

}, (error) => {
console.log(error);
this.setMessage(error);
});
}

// convenience getter for easy access to form fields
get s() { return this.addIdentityForm.controls; }
get s2() { return this.editIdentityForm.controls; }

private loadStudentIdentity(){
$('#addidentityModal').modal('hide'); //or  $('#IDModal').modal('hide');
$('#addidentityModal').on('hidden.bs.modal', function () {
$(this).find('form').trigger('reset');
});

$('#editidentityModal').modal('hide'); //or  $('#IDModal').modal('hide');
$('#editidentityModal').on('hidden.bs.modal', function () {
$(this).find('form').trigger('reset');
});
}

 ///////StudentMedicalInfromation////////
 viewStudentMedicalById(stuId : string) {
  if (stuId){
  this.request.getStudentMedicalById(stuId).subscribe(response => {
     this.studentmedicals = response;
     console.log('StudentMedicalById',this.studentmedicals);
     }, (error) => {
       console.log(error);
     });
   } else
      this.studentmedicals = null;
 }

 deleteMedical(id: any) {
this.request.deleteStudentMedical(id).subscribe(res => {
console.log(id);
this.viewStudentMedicalById(this.id);
swal("Deleted");
});
}
// For ChceckBOx
medicallyFit1(event: any) {
  this.mf= event;
}
onAddMedical() {
this.submitted = true;
let newstudentMedical = {
  height: this.addMedicalForm.get('height').value,
  weight: this.addMedicalForm.get('weight').value,
  hairColor: this.addMedicalForm.get('hairColor').value,
  eyeColor: this.addMedicalForm.get('eyeColor').value,
  complexion: this.addMedicalForm.get('complexion').value,
  bloodGroup: this.addMedicalForm.get('bloodGroup').value,
  colorBlind: this.addMedicalForm.get('colorBlind').value,
  medicallyFit: this.mf,
  stuId: this.id,
  }
this.request.addStudentMedical(newstudentMedical).subscribe((res: any) => {
if (res.status == 'error') {
  this.setMessage(res.error);
}
else if (res.status == 'success') {
  swal("Added Sucessfully");
  this.viewStudentMedicalById(this.id);
  this.loadStudentMedical();
}
}, (error) => {
  this.setMessage(error);
});
  console.log(newstudentMedical);
}

onEditMedical(id: any){
this.request.fetchStudentMedicalById(id).subscribe((response) => {
  this.editMedical=response[0];
  // console.log(response);
  this.heightValue=this.editMedical.height;
  this.weightValue=this.editMedical.weight;
  this.hairColorValue=this.editMedical.hairColor;
  this.eyeColorValue=this.editMedical.eyeColor;
  this.complexionValue=this.editMedical.complexion;
  this.bloodGroupValue=this.editMedical.bloodGroup;
  this.colorBlindValue=this.editMedical.colorBlind;
  this.medicallyFitValue=this.editMedical.medicallyFit;
  this.IdValue4=this.editMedical._id;

  this.editMedicalForm = this.formBuilder.group({
    height2: [this.heightValue],
    weight2: [this.weightValue],
    hairColor2: [this.hairColorValue],
    eyeColor2: [this.eyeColorValue],
    complexion2: [this.complexionValue],
    bloodGroup2: [this.bloodGroupValue],
    colorBlind2: [this.colorBlindValue],
    medicallyFit2: [this.colorBlindValue],
    });
  console.log(this.editMedicalForm.value);
});
}
onEditMedicalSubmit() {
this.submitted = true;
console.log(this.editMedicalForm.value);
  let edata4 = {
    height: this.editMedicalForm.get('height2').value,
    weight: this.editMedicalForm.get('weight2').value,
    hairColor: this.editMedicalForm.get('hairColor2').value,
    eyeColor: this.editMedicalForm.get('eyeColor2').value,
    complexion: this.editMedicalForm.get('complexion2').value,
    bloodGroup: this.editMedicalForm.get('bloodGroup2').value,
    colorBlind: this.editMedicalForm.get('colorBlind2').value,
    medicallyFit: this.mf,
    stuId: this.id,
    }
this.request.updateStudentMedical(this.IdValue4,edata4).subscribe((res : any) => {
if (res.status == 'success') {
  swal("Updated Sucessfully");
  this.viewStudentMedicalById(this.id);
  this.loadStudentMedical();
}
else if (res.status == 'error') {
  this.setMessage(res.error);
}

}, (error) => {
console.log(error);
this.setMessage(error);
});
}


private loadStudentMedical(){
$('#addMedicalModal').modal('hide'); //or  $('#IDModal').modal('hide');
$('#addMedicalModal').on('hidden.bs.modal', function () {
$(this).find('form').trigger('reset');
});

$('#editMedicalModal').modal('hide'); //or  $('#IDModal').modal('hide');
$('#editMedicalModal').on('hidden.bs.modal', function () {
$(this).find('form').trigger('reset');
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
 ///////StudentIdentityMark////////
 viewStudentIdentityMarkById(stuId : string) {
  if (stuId){
  this.request.getStudentIdentityMarkById(stuId).subscribe((response) => {
     this.studentidentityMarks = response;
     console.log('StudentIdentityMarkById',this.studentidentityMarks);
     }, (error) => {
       console.log(error);
     });
   } else
      this.studentidentityMarks = null;
 }

 deleteIdentityMark(id: any) {
this.request.deleteStudentIdentityMark(id).subscribe(res => {
console.log(id);
this.viewStudentIdentityMarkById(this.id);
swal("Deleted");
});
}

onAddIdentityMark() {
this.submitted = true;
if (this.addIdentityMarkForm.invalid) {
    return;
}
let newstudentIdentityMark = {
  identityType : this.addIdentityMarkForm.get('identityType').value,
  markDetail: this.addIdentityMarkForm.get('markDetail').value,
  stuId : this.id
  }
this.request.addStudentIdentityMark(newstudentIdentityMark).subscribe((res: any) => {
if (res.status == 'error') {
  this.setMessage(res.error);
}
else if (res.status == 'success') {
  swal("Added Sucessfully");
  this.viewStudentIdentityMarkById(this.id);
  this.loadStudentIdentityMark();
}
}, (error) => {
  this.setMessage(error);
});
  console.log(newstudentIdentityMark);
}

onEditIdentityMark(id: any){
this.request.fetchStudentIdentityMarkById(id).subscribe((response) => {
  this.editIdentityMark=response[0];
  // console.log(response);
      this.identityTypeValue=this.editIdentityMark.identityType;
      this.markDetailValue=this.editIdentityMark.markDetail;
      this.IdValue5=this.editIdentityMark._id;

  this.editIdentityMarkForm = this.formBuilder.group({
    identityType2: [this.identityTypeValue, Validators.required],
    markDetail2: [this.markDetailValue, Validators.required]
    });
  console.log(this.editIdentityMarkForm.value);
});
}
onEditIdentityMarkSubmit() {
this.submitted = true;
if (this.editIdentityMarkForm.invalid) {
  return;
}
console.log(this.editIdentityMarkForm.value);
let edata5 = {
  identityType : this.editIdentityMarkForm.get('identityType2').value,
  markDetail: this.editIdentityMarkForm.get('markDetail2').value
  }
this.request.updateStudentIdentityMark(this.IdValue5,edata5).subscribe((res : any) => {
if (res.status == 'success') {
  swal("Updated Sucessfully");
  this.viewStudentIdentityMarkById(this.id);
  this.loadStudentIdentityMark();
}
else if (res.status == 'error') {
  this.setMessage(res.error);
}

}, (error) => {
console.log(error);
this.setMessage(error);
});
}

// convenience getter for easy access to form fields
get m() { return this.addIdentityMarkForm.controls; }
get m2() { return this.editIdentityMarkForm.controls; }

private loadStudentIdentityMark(){
$('#addIdentityDetail').modal('hide'); //or  $('#IDModal').modal('hide');
$('#addIdentityDetail').on('hidden.bs.modal', function () {
$(this).find('form').trigger('reset');
});

$('#editIdentityDetail').modal('hide'); //or  $('#IDModal').modal('hide');
$('#editIdentityDetail').on('hidden.bs.modal', function () {
$(this).find('form').trigger('reset');
});
}


 ///////StudentOther Details////////
 viewStudentOtherById(stuId : string) {
  if (stuId){
  this.request.getStudentOtherById(stuId).subscribe((response) => {
     this.studentothers = response;
     console.log('StudentOtherById',this.studentothers);
     }, (error) => {
       console.log(error);
     });
   } else
      this.studentothers = null;
 }

 deleteOther(id: any) {
this.request.deleteStudentOther(id).subscribe(res => {
console.log(id);
this.viewStudentOtherById(this.id);
swal("Deleted");
});
}
// For ChceckBOx
optOut1(event: any) {
  this.optOutPla= event;
}
onAddOther() {
this.submitted = true;
if (this.addOtherForm.invalid) {
    return;
}
let newstudentOther = {
  motherAge: this.addOtherForm.get('motherAge').value,
  placeOfBirth:this.addOtherForm.get('placeOfBirth').value, 
  dateOfLeave: this.addOtherForm.get('dateOfLeave').value,
  overAllRank: this.addOtherForm.get('overAllRank').value,
  universityAppNo: this.addOtherForm.get('universityAppNo').value,
  universityAdmiNo: this.addOtherForm.get('universityAdmiNo').value,
  challanNo: this.addOtherForm.get('challandate').value,
  challandate: this.addOtherForm.get('challandate').value,
  challanAmount: this.addOtherForm.get('challanAmount').value,
  optOut: this.optOutPla,
  stuId : this.id
  }
this.request.addStudentOther(newstudentOther).subscribe((res: any) => {
if (res.status == 'error') {
  this.setMessage(res.error);
}
else if (res.status == 'success') {
  swal("Added Sucessfully");
  this.viewStudentOtherById(this.id);
  this.loadStudentOther();
}
}, (error) => {
  this.setMessage(error);
});
  console.log(newstudentOther);
}

onEditOther(id: any){
this.request.fetchStudentOtherById(id).subscribe((response) => {
  this.editOther=response[0];
  // console.log(response);
  this.motherAgeValue = this.editOther.motherAge;
  this.placeOfBirthValue = this.editOther.placeOfBirth;
  this.dateOfLeaveValue = this.editOther.dateOfLeave;
  this.overAllRankValue = this.editOther.overAllRank;
  this.universityAppNoValue = this.editOther.universityAppNo;
  this.universityAdmiNoValue = this.editOther.universityAdmiNo;
  this.challanNoValue = this.editOther.challanNo;
  this.challandateValue = this.editOther.challandate;
  this.challanAmountValue = this.editOther.challanAmount;
  this.optOutValue = this.editOther.optOut;
  this.IdValue6 = this.editOther._id;

  this.editOtherForm = this.formBuilder.group({
    motherAge2: [this.motherAgeValue],
    placeOfBirth2: [this.placeOfBirthValue],
    dateOfLeave2: [this.dateOfLeaveValue],
    overAllRank2: [this.overAllRankValue],
    universityAppNo2: [this.universityAppNoValue],
    universityAdmiNo2: [this.universityAdmiNoValue],
    challanNo2: [this.challanNoValue],
    challandate2: [this.challandateValue],
    challanAmount2: [this.challanAmountValue],
    optOut2: [this.optOutValue]
    });
  console.log(this.editOtherForm.value);
});
}
onEditOtherSubmit() {
this.submitted = true;
console.log(this.editOtherForm.value);
let edata6 = {
  motherAge: this.editOtherForm.get('motherAge2').value,
  placeOfBirth:this.editOtherForm.get('placeOfBirth2').value, 
  dateOfLeave: this.editOtherForm.get('dateOfLeave2').value,
  overAllRank: this.editOtherForm.get('overAllRank2').value,
  universityAppNo: this.editOtherForm.get('universityAppNo2').value,
  universityAdmiNo: this.editOtherForm.get('universityAdmiNo2').value,
  challanNo: this.editOtherForm.get('challandate2').value,
  challandate: this.editOtherForm.get('challandate2').value,
  challanAmount: this.editOtherForm.get('challanAmount2').value,
  optOut: this.optOutPla,
  }
this.request.updateStudentOther(this.IdValue6,edata6).subscribe((res : any) => {
if (res.status == 'success') {
  swal("Updated Sucessfully");
  this.viewStudentOtherById(this.id);
  this.loadStudentOther();
}
else if (res.status == 'error') {
  this.setMessage(res.error);
}

}, (error) => {
console.log(error);
this.setMessage(error);
});
}

// convenience getter for easy access to form fields
get o() { return this.addOtherForm.controls; }
get o2() { return this.editOtherForm.controls; }

private loadStudentOther(){
$('#addOtherModal').modal('hide'); //or  $('#IDModal').modal('hide');
$('#addOtherModal').on('hidden.bs.modal', function () {
$(this).find('form').trigger('reset');
});

$('#editOtherModal').modal('hide'); //or  $('#IDModal').modal('hide');
$('#editOtherModal').on('hidden.bs.modal', function () {
$(this).find('form').trigger('reset');
});
}

///////Student Guardian Details////////
viewStudentGuardianById(stuId : string) {
  if (stuId){
  this.request.getStudentGuardianById(stuId).subscribe(response => {
     this.studentGuardians = response;
     console.log('StudentGuardianById', this.studentGuardians);
     }, (error) => {
       console.log(error);
     });
   } else
      this.studentGuardians = null;
 }

 deleteGuardian(id: any) {
this.request.deleteStudentGuardian(id).subscribe(res => {
this.viewStudentGuardianById(this.id);
swal("Deleted");
});
}

onAddGuardian() {
this.submitted = true;
if (this.addGuardianForm.invalid) {
    return;
}
let newstudentGuardian = {
  relationship: this.addGuardianForm.get('relationship').value,
  firstName: this.addGuardianForm.get('firstName').value,
  lastName: this.addGuardianForm.get('lastName').value,
  addressType: this.addGuardianForm.get('addressType').value,
  flatNo: this.addGuardianForm.get('flatNo').value,
  areaLocality: this.addGuardianForm.get('areaLocality').value,
  mobileNo: this.addGuardianForm.get('mobileNo').value,
  city: this.addGuardianForm.get('city').value,
  district: this.addGuardianForm.get('district').value,
  pincode: this.addGuardianForm.get('pincode').value,
  state: this.addGuardianForm.get('state').value,
  country: this.addGuardianForm.get('country').value,
  stuId : this.id
  }
this.request.addStudentGuardian(newstudentGuardian).subscribe((res: any) => {
if (res.status == 'error') {
  this.setMessage(res.error);
}
else if (res.status == 'success') {
  swal("Added Sucessfully");
  this.viewStudentGuardianById(this.id);
  this.loadStudentGuardian();
}
}, (error) => {
  this.setMessage(error);
});
  console.log(newstudentGuardian);
}

onEditGuardian(id: any){
this.request.fetchStudentGuardianById(id).subscribe((response) => {
  this.editGuardian = response[0];
  // console.log(response);
  this.relationshipValue = this.editGuardian.relationship;
  this.firstNameValue = this.editGuardian.firstName;
  this.lastNameValue = this.editGuardian.lastName;
  this.addressTypeValue = this.editGuardian.addressType;
  this.flatNoValue = this.editGuardian.flatNo;
  this.areaLocalityValue = this.editGuardian.areaLocality;
  this.mobileNoValue = this.editGuardian.mobileNo;
  this.cityValue = this.editGuardian.city;
  this.districtValue = this.editGuardian.district;
  this.pincodeValue = this.editGuardian.pincode;
  this.stateValue = this.editGuardian.state;
  this.countryValue = this.editGuardian.country;
  this.IdValue7 = this.editGuardian._id;

  this.editGuardianForm = this.formBuilder.group({
    relationship2: [this.relationshipValue, Validators.required],
    firstName2: [this.firstNameValue, Validators.required],
    lastName2: [this.lastNameValue],
    addressType2: [this.addressTypeValue, Validators.required],
    flatNo2: [this.flatNoValue],
    areaLocality2: [this.areaLocalityValue],
    mobileNo2: [this.mobileNoValue, Validators.required],
    city2: [this.cityValue],
    district2: [this.districtValue, Validators.required],
    pincode2: [this.pincodeValue, Validators.required],
    state2: [this.stateValue],
    country2: [this.countryValue]
    });
  console.log(this.editGuardianForm.value);
});
}
onEditGuardianSubmit() {
this.submitted = true;
if (this.editGuardianForm.invalid) {
  return;
}
console.log(this.editGuardianForm.value);
let edata7 = {
  relationship: this.editGuardianForm.get('relationship2').value,
  firstName: this.editGuardianForm.get('firstName2').value,
  lastName: this.editGuardianForm.get('lastName2').value,
  addressType: this.editGuardianForm.get('addressType2').value,
  flatNo: this.editGuardianForm.get('flatNo2').value,
  areaLocality: this.editGuardianForm.get('areaLocality2').value,
  mobileNo: this.editGuardianForm.get('mobileNo2').value,
  city: this.editGuardianForm.get('city2').value,
  district: this.editGuardianForm.get('district2').value,
  pincode: this.editGuardianForm.get('pincode2').value,
  state: this.editGuardianForm.get('state2').value,
  country: this.editGuardianForm.get('country2').value
  }
this.request.updateStudentGuardian(this.IdValue7,edata7).subscribe((res : any) => {
if (res.status == 'success') {
  swal("Updated Sucessfully");
  this.viewStudentGuardianById(this.id);
  this.loadStudentGuardian();
}
else if (res.status == 'error') {
  this.setMessage(res.error);
}

}, (error) => {
console.log(error);
this.setMessage(error);
});
}
loadRelationship() {
  this.request.getRelationship().subscribe((response: any) => {
    this.relationships = response;
    console.log('Relationship', this.relationships)
  }, (error) => {
    console.log(error);
  });
}
// convenience getter for easy access to form fields
get g() { return this.addGuardianForm.controls; }
get g2() { return this.editGuardianForm.controls; }

private loadStudentGuardian(){
$('#addGuardianModal').modal('hide'); //or  $('#IDModal').modal('hide');
$('#addGuardianModal').on('hidden.bs.modal', function () {
$(this).find('form').trigger('reset');
});

$('#editGuardianModal').modal('hide'); //or  $('#IDModal').modal('hide');
$('#editGuardianModal').on('hidden.bs.modal', function () {
$(this).find('form').trigger('reset');
});
}

///////Student Extra Curricular////////
viewStudentExtraById(stuId : string) {
  if (stuId){
  this.request.getStudentExtraById(stuId).subscribe(response => {
     this.studentExtras = response;
     console.log('StudentExtraById', this.studentExtras);
     }, (error) => {
       console.log(error);
     });
   } else
      this.studentExtras = null;
 }

 deleteExtra(id: any) {
this.request.deleteStudentExtra(id).subscribe(res => {
this.viewStudentExtraById(this.id);
swal("Deleted");
});
}

onAddExtra() {
this.submitted = true;
if (this.addExtraForm.invalid) {
    return;
}
let newstudentExtra = {
  activityCate: this.addExtraForm.get('activityCate').value,
  subCate:this.addExtraForm.get('subCate').value,
  level: this.addExtraForm.get('level').value,
  fromDate: this.addExtraForm.get('fromDate').value,
  toDate: this.addExtraForm.get('toDate').value,
  year: this.addExtraForm.get('year').value,
  venue: this.addExtraForm.get('venue').value,
  description: this.addExtraForm.get('description').value,
  awardDetail: this.addExtraForm.get('awardDetail').value,
  remark: this.addExtraForm.get('remark').value,
  stuId : this.id
  }
this.request.addStudentExtra(newstudentExtra).subscribe((res: any) => {
if (res.status == 'error') {
  this.setMessage(res.error);
}
else if (res.status == 'success') {
  swal("Added Sucessfully");
  this.viewStudentExtraById(this.id);
  this.loadStudentExtra();
}
}, (error) => {
  this.setMessage(error);
});
  console.log(newstudentExtra);
}

onEditExtra(id: any){
this.request.fetchStudentExtraById(id).subscribe((response) => {
  this.editExtra = response[0];
 
  this.activityCateValue = this.editExtra.activityCate;
  this.subCateValue = this.editExtra.subCate;
  this.levelValue = this.editExtra.level;
  this.fromDateValue = this.editExtra.fromDate;
  this.toDateValue = this.editExtra.toDate;
  this.yearValue = this.editExtra.year;
  this.venueValue = this.editExtra.venue;
  this.descriptionValue = this.editExtra.description;
  this.awardDetailValue = this.editExtra.awardDetail;
  this.remarkValue = this.editExtra.remark;
  this.IdValue8 = this.editExtra._id;

  this.editExtraForm = this.formBuilder.group({
    activityCate2: [this.activityCateValue, Validators.required],
    subCate2:[this.subCateValue],
    level2: [this.levelValue],
    fromDate2: [this.fromDateValue],
    toDate2: [this.toDateValue],
    year2: [this.yearValue],
    venue2: [this.venueValue],
    description2: [this.descriptionValue],
    awardDetail2: [this.awardDetailValue],
    remark2: [this.remarkValue],
    });
  console.log(this.editExtraForm.value);
});
}
onEditExtraSubmit() {
this.submitted = true;
if (this.editExtraForm.invalid) {
  return;
}
console.log(this.editExtraForm.value);
let edata8 = {
  activityCate: this.editExtraForm.get('activityCate2').value,
  subCate:this.editExtraForm.get('subCate2').value,
  level: this.editExtraForm.get('level2').value,
  fromDate: this.editExtraForm.get('fromDate2').value,
  toDate: this.editExtraForm.get('toDate2').value,
  year: this.editExtraForm.get('year2').value,
  venue: this.editExtraForm.get('venue2').value,
  description: this.editExtraForm.get('description2').value,
  awardDetail: this.editExtraForm.get('awardDetail2').value,
  remark: this.editExtraForm.get('remark2').value
  }
this.request.updateStudentExtra(this.IdValue8,edata8).subscribe((res : any) => {
if (res.status == 'success') {
  swal("Updated Sucessfully");
  this.viewStudentExtraById(this.id);
  this.loadStudentExtra();
}
else if (res.status == 'error') {
  this.setMessage(res.error);
}

}, (error) => {
console.log(error);
this.setMessage(error);
});
}

// convenience getter for easy access to form fields
get e() { return this.addExtraForm.controls; }
get e2() { return this.editExtraForm.controls; }

private loadStudentExtra(){
$('#addExtraModal').modal('hide'); //or  $('#IDModal').modal('hide');
$('#addExtraModal').on('hidden.bs.modal', function () {
$(this).find('form').trigger('reset');
});

$('#editExtraModal').modal('hide'); //or  $('#IDModal').modal('hide');
$('#editExtraModal').on('hidden.bs.modal', function () {
$(this).find('form').trigger('reset');
});
}
loadActivityCategory()  {
  this.request.getActivityCat().subscribe((response : any) => {
  this.activitycats = response;
  console.log('ActivityCategory',this.activitycats);
  }, (error) => {
    console.log(error);
  });
}
 // Filter SubCategory by AcitivityCategory
 onActivityCatChange(acitivityCate: any) {
  if (acitivityCate) {
    this.request.fetchSubCatByActCat(acitivityCate).subscribe(response => {
      this.subcategories = response;
      console.log('SubCatByActCat', this.subcategories);
    }, (error) => {
      console.log(error);
    });
  } else
  this.subcategories = null;
}
///////Student Qualification////////
viewStudentQualificationById(stuId : string) {
  if (stuId){
  this.request.getStudentQualificationById(stuId).subscribe(response => {
     this.studentQualifications = response;
     console.log('StudentQulaificationById', this.studentQualifications);
     }, (error) => {
       console.log(error);
     });
   } else
      this.studentQualifications = null;
 }

 deleteQualification(id: any) {
this.request.deleteStudentQualification(id).subscribe(res => {
this.viewStudentQualificationById(this.id);
swal("Deleted");
});
}

onAddQualification() {
let newstudentQualification = {
  qualificationType: this.qualificationType.value,
  courseType:  this.courseType.value,
  courseName: this.courseName.value,
  courseStartDate: this.courseStartDate.value,
  courseEndDate: this.courseEndDate.value,
  board: this.board.value,
  medium: this.medium.value,
  institution: this.institution.value,
  city: this.city.value,
  taluk: this.taluk.value,
  district: this.district.value,
  state: this.state.value,
  country: this.country.value,
  pincode: this.pincode.value,
  yearOfPassing: this.yearOfPassing.value,
  markObtained: this.markObtained.value,
  maxMark: this.maxMark.value,
  organisationType: this.organisationType.value,
  certificateNo: this.certificateNo.value,
  registerNo: this.registerNo.value,
  placeOfIssue: this.placeOfIssue.value,
  certificateIssuedate: this.certificateIssuedate.value,
  tmrCode: this.tmrCode.value,
  tmrDate: this.tmrDate.value,
  groupCode: this.groupCode.value,
  cutOff: this.cutOff.value,
  percentage: this.percentage.value,
  photoLoctaion: this.getfileLoc,
  stuId : this.id
  }
this.request.addStudentQualification(newstudentQualification).subscribe((res: any) => {
if (res.status == 'error') {
  this.setMessage(res.error);
}
else if (res.status == 'success') {
  swal("Added Sucessfully");
  this.getfileLoc="";
  this.viewStudentQualificationById(this.id);
  this.loadStudentQualification();
}
}, (error) => {
  this.setMessage(error);
});
  console.log(newstudentQualification);
}

onEditQualification(id: any){
this.request.fetchStudentQualificationById(id).subscribe((response) => {
  this.editQualification = response[0];
 
  this.qualificationTypeValue = this.editQualification.qualificationType;
  this.courseTypeValue = this.editQualification.courseType;
  this.courseNameValue = this.editQualification.courseName;
  this.courseStartDateValue = this.editQualification.courseStartDate;
  this.courseEndDateValue = this.editQualification.courseEndDate;
  this.boardValue = this.editQualification.board;
  this.mediumValue = this.editQualification.medium;
  this.institutionValue = this.editQualification.institution;
  this.cityValue = this.editQualification.city;
  this.talukValue = this.editQualification.taluk;
  this.districtValue = this.editQualification.district;
  this.stateValue = this.editQualification.state;
  this.countryValue = this.editQualification.country;
  this.pincodeValue = this.editQualification.pincode;
  this.yearOfPassingValue = this.editQualification.yearOfPassing;
  this.markObtainedValue = this.editQualification.markObtained;
  this.maxMarkValue = this.editQualification.maxMark;
  this.organisationTypeValue = this.editQualification.organisationType;
  this.certificateNoValue = this.editQualification.certificateNo;
  this.registerNoValue = this.editQualification.registerNo;
  this.placeOfIssueValue = this.editQualification.placeOfIssue;
  this.certificateIssuedateValue = this.editQualification.certificateIssuedate;
  this.tmrCodeValue = this.editQualification.tmrCode;
  this.tmrDateValue = this.editQualification.tmrDate;
  this.groupCodeValue = this.editQualification.groupCode;
  this.cutOffValue = this.editQualification.cutOff;
  this.percentageValue = this.editQualification.percentage;
  this.photoLoctaionValue = this.editQualification.photoLoctaion;
  this.IdValue9 = this.editQualification._id;

this.qualificationType2 = new FormControl(this.qualificationTypeValue, Validators.required);
this.courseType2 = new FormControl(this.courseTypeValue, Validators.required);
this.courseName2 = new FormControl(this.courseNameValue, Validators.required);
this.courseStartDate2 = new FormControl(this.courseStartDateValue);
this.courseEndDate2 = new FormControl( this.courseEndDateValue);
this.board2 = new FormControl( this.boardValue, Validators.required);
this.medium2 = new FormControl(this.mediumValue);
this.institution2 = new FormControl(this.institutionValue);
this.city2 = new FormControl(this.cityValue);
this.taluk2 = new FormControl( this.talukValue);
this.district2 = new FormControl(this.districtValue);
this.state2 = new FormControl(this.stateValue);
this.country2 = new FormControl( this.countryValue);
this.pincode2 = new FormControl(this.pincodeValue);
this.yearOfPassing2 = new FormControl(this.yearOfPassingValue, Validators.required);
this.markObtained2 = new FormControl( this.markObtainedValue);
this.maxMark2 = new FormControl(this.maxMarkValue);
this.organisationType2 = new FormControl(this.organisationTypeValue);
this.certificateNo2 = new FormControl(this.certificateNoValue);
this.registerNo2 = new FormControl(this.registerNoValue);
this.placeOfIssue2 = new FormControl(this.placeOfIssueValue);
this.certificateIssuedate2 = new FormControl(this.certificateIssuedateValue);
this.tmrCode2 = new FormControl(this.tmrCodeValue);
this.tmrDate2 = new FormControl( this.tmrDateValue);
this.groupCode2 = new FormControl( this.groupCodeValue);
this.cutOff2 = new FormControl(this.cutOffValue);
this.percentage2 = new FormControl(this.percentageValue);
this.photoLoctaion2 = new FormControl(this.photoLoctaionValue);

});
}
onEditQualificationSubmit() {
  let edata = {
    qualificationType: this.qualificationType2.value,
    courseType:  this.courseType2.value,
    courseName: this.courseName2.value,
    courseStartDate: this.courseStartDate2.value,
    courseEndDate: this.courseEndDate2.value,
    board: this.board2.value,
    medium: this.medium2.value,
    institution: this.institution2.value,
    city: this.city2.value,
    taluk: this.taluk2.value,
    district: this.district2.value,
    state: this.state2.value,
    country: this.country2.value,
    pincode: this.pincode2.value,
    yearOfPassing: this.yearOfPassing2.value,
    markObtained: this.markObtained2.value,
    maxMark: this.maxMark2.value,
    organisationType: this.organisationType2.value,
    certificateNo: this.certificateNo2.value,
    registerNo: this.registerNo2.value,
    placeOfIssue: this.placeOfIssue2.value,
    certificateIssuedate: this.certificateIssuedate2.value,
    tmrCode: this.tmrCode2.value,
    tmrDate: this.tmrDate2.value,
    groupCode: this.groupCode2.value,
    cutOff: this.cutOff2.value,
    percentage: this.percentage2.value,
    photoLoctaion: this.getfileLoc
    }
this.request.updateStudentQualification(this.IdValue9,edata).subscribe((res : any) => {
if (res.status == 'success') {
  this.getfileLoc="";
  swal("Updated Sucessfully");
  console.log(res);
  this.viewStudentQualificationById(this.id);
  this.loadStudentQualification();
}
else if (res.status == 'error') {
  this.setMessage(res.error);
}

}, (error) => {
console.log(error);
this.setMessage(error);
});
}

private loadStudentQualification(){
$('#addQualificationModal').modal('hide'); //or  $('#IDModal').modal('hide');
$('#addQualificationModal').on('hidden.bs.modal', function () {
$(this).find('form').trigger('reset');
});

$('#editQualificationModal').modal('hide'); //or  $('#IDModal').modal('hide');
$('#editQualificationModal').on('hidden.bs.modal', function () {
$(this).find('form').trigger('reset');
});
}
loadBoard() {
  this.request.getBoard().subscribe((response: any) => {
    this.boards = response;
    console.log('Board', this.boards);
  }, (error) => {
    console.log(error);
  });
}
loadCourseType() {
  this.request.getCourseType().subscribe((response: any) => {
    this.coursetypes = response;
    console.log('CourseType' ,this.coursetypes);
  }, (error) => {
    console.log(error);
  });
}
loadMedium() {
  this.request.getMedium().subscribe((response: any) => {
    this.media = response;
    console.log('Medium' , this.media);
  }, (error) => {
    console.log(error);
  });
}
loadQualificationType() {
  this.request.getQualificationType().subscribe((response: any) => {
    this.qualificationTypes = response;
    console.log('QualificationType' ,this.qualificationTypes);
  }, (error) => {
    console.log(error);
  });
}
///////Student-Certificate////////
viewStudentCertificateById(stuId : string) {
  if (stuId){
  this.request.getStudentCertificateById(stuId).subscribe((response) => {
     this.studentCertificates = response;
     console.log('StudentCertificateById',this.studentCertificates);
     }, (error) => {
       console.log(error);
     });
   } else
      this.studentCertificates = null;
 }

 deleteCertificate(id: any) {
this.request.deleteStudentCertificate(id).subscribe(res => {
console.log(id);
this.viewStudentCertificateById(this.id);
swal("Deleted");
});
}

//Fileupolad 
filesubmit() {
  this.uploader2.uploadAll();
}

onAddCertificate() {
let newstudentCertificate = {
  certificateType: this.certificateType.value,
  registerNo: this.registerNo.value,
  certificateNo: this.certificateNo.value,
  fileUpload: this.getfileLoc2,
  stuId : this.id
  }
this.request.addStudentCertificate(newstudentCertificate).subscribe((res: any) => {
if (res.status == 'error') {
  this.setMessage(res.error);
}
else if (res.status == 'success') {
  swal("Added Sucessfully");
  this.getfileLoc2="";
  this.viewStudentCertificateById(this.id);
  this.loadStudentCertificate();
}
}, (error) => {
  this.setMessage(error);
});
  console.log(newstudentCertificate);
}

onEditCertificate(id: any){
this.request.fetchStudentCertificateById(id).subscribe((response) => {
  this.editCertificate=response[0];
  // console.log(response);
      this.certificateTypeValue = this.editCertificate.certificateType;
      this.registerNoValue = this.editCertificate.registerNo;
      this.certificateNoValue = this.editCertificate.certificateNo;
      this.fileUploadValue = this.editCertificate.fileUpload;
      this.IdValue = this.editCertificate._id;

 
    this.certificateType2= new FormControl(this.certificateTypeValue, Validators.required),
    this.registerNo2= new FormControl(this.registerNoValue, Validators.required),
    this.certificateNo2= new FormControl(this.certificateNoValue, Validators.required),
    this.fileUpload2= new FormControl(this.fileUploadValue, Validators.required)
});
}
onEditCertificateSubmit() {
  let edata = {
    certificateType : this.certificateType2.value,
    registerNo: this.registerNo2.value,
    certificateNo: this.certificateNo2.value,
    fileUpload: this.getfileLoc2,
    }
this.request.updateStudentCertificate(this.IdValue,edata).subscribe((res : any) => {
if (res.status == 'success') {
  swal("Updated Sucessfully");
   this.getfileLoc2="";
  this.viewStudentCertificateById(this.id);
  this.loadStudentCertificate();
}
else if (res.status == 'error') {
  this.setMessage(res.error);
}

}, (error) => {
console.log(error);
this.setMessage(error);
});
}


private loadStudentCertificate(){
$('#addCertificateModal').modal('hide'); //or  $('#IDModal').modal('hide');
$('#addCertificateModal').on('hidden.bs.modal', function () {
$(this).find('form').trigger('reset');
});

$('#editCertificateModal').modal('hide'); //or  $('#IDModal').modal('hide');
$('#editCertificateModal').on('hidden.bs.modal', function () {
$(this).find('form').trigger('reset');
});
}
loadCertificateType() {
  this.request.getCertificateType().subscribe((response: any) => {
    this.certificateTypes = response;
    console.log('CertificateType' ,this.certificateTypes);
  }, (error) => {
    console.log(error);
  });
}
  onEdit(id: any) {
    this.Id = id;
    this.router.navigate(['studentEdit'], {
      queryParams: {
        edit: true,
        id: this.Id,
      }
    });
  }
  ngOnInit() {
    this.viewStudentDetailById(this.id);
    this.viewStudentConatctById(this.id);
    this.loadAddressType();
    this.viewStudentIdentityById(this.id);
    this.loadBloodgroup();
    this.viewStudentMedicalById(this.id);
    this.viewStudentIdentityMarkById(this.id);
    this.viewStudentOtherById(this.id);
    this.loadRelationship();
    this.viewStudentGuardianById(this.id);
    this.loadActivityCategory();
    this.viewStudentExtraById(this.id);
    this.loadAddressType();
    this.loadMedium();
    this.loadQualificationType();
    this.loadCourseType();
    this.loadBoard();
    this.viewStudentQualificationById(this.id);
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      console.log('ImageUpload:uploaded:', item, status, response);
      const resPath = JSON.parse(response);
      this.getfileLoc = resPath.qdFileResult1;
    };
    this.loadCertificateType();
    this.viewStudentCertificateById(this.id);
    this.uploader2.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader2.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      console.log('ImageUpload:uploaded:', item, status, response);
      const resPath = JSON.parse(response);
     this.getfileLoc2 = resPath.fileResult;
    };

     //jQuery Validation form qdEdit (Form-Control)
     $(function () {
      $('#qualificationDetailAdd').validate({
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
    $(function () {
      $('#qualificationDetailEdit').validate({

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
     $(function () {
      $('#certificateadd').validate({

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
    $(function () {
      $('#certificateedit').validate({

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
