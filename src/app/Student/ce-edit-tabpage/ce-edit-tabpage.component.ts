import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { FileUploader } from 'ng2-file-upload';
import { analyzeAndValidateNgModules } from '@angular/compiler';

const URL = 'http://localhost:3000/uploadStudentPhoto/upload';
declare const $: any;
declare const swal: any;
@Component({
  selector: 'app-ce-edit-tabpage',
  templateUrl: './ce-edit-tabpage.component.html',
  styleUrls: ['./ce-edit-tabpage.component.scss']
})
export class CeEditTabpageComponent implements OnInit {
  submitted = false;
  editBasicDetails: any;
  firstName;
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
  admissiontype: any;
  admissionCategory: any;
  coursecategory: any;
  courseprogram: any;
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
  sPhoto: any;
  public uploader: FileUploader = new FileUploader({ url: URL, itemAlias: 'photo' });
  getfileLoc: any;
  message: any;
  admissiontypes: any;
  basicdetails: any;
  IdValue: any;
  CandDetails;
  firstNameValue = '';
  lastNameValue = '';
  dobValue = '';
  genderValue = '';
  aadharNoValue = '';
  regNo12thValue = '';
  mark12thValue = '';
  emailValue = '';
  sMobileNumberValue = '';
  fFirstNameValue = '';
  fLastNameValue = '';
  fMobileNumberValue = '';
  institutionValue = '';
  boardValue = '';
  referenceTypeValue = '';
  referenceByValue = '';
  applicatonNoValue = '';
  admissiontypeValue = '';
  admissionCategoryValue = '';
  coursecategoryValue = '';
  courseprogramValue = '';
  scholarshipCategoryValue = '';
  remarkValue = '';
  nationalityValue = '';
  religionValue = '';
  communityValue = '';
  casteValue = '';
  motherTongueValue = '';
  fEmailValue = '';
  fOccupationValue = '';
  fAnnualIncomeValue = '';
  mNameValue = '';
  mEmailValue = '';
  mMobileNoValue = '';
  mOccupationValue = '';
  mAnnualIncomeValue = '';
  pPanNumberValue = '';
  pAadharNumberValue = '';
  relativeNameValue = '';
  sPhotoValue = '';
  can: string;
  addressAddForm: any;
  addressEditForm: any;
  qdAddForm: any;
  qdEditForm: any;
  paymentAddForm: any;
  paymentEditForm: any;
  followupsaddform: any;
  followupseditform: any;
  
  ///////////////////////Address Details//////////////////////////
  addresstype: any;
  flatNo: any;
  streetLane: any;
  area: any;
  city: any;
  district: any;
  pincode: any;
  state: any;
  country: any;
  addressdetails: any;
  editaddressDetailsdata: any;
  addressTypeValue: any;
  flatNoValue: any;
  streetLaneValue: any;
  areaValue: any;
  cityValue: any;
  districtValue: any;
  pincodeValue: any;
  stateValue: any;
  countryValue: any;
  Id: any;
  addresstype3: any;
  flatNo3: any;
  area3: any;
  city3: any;
  district3: any;
  pincode3: any;
  state3: any;
  country3: any;
  streetLane3: any;
  ///////////////DataBinding Load Data////////////////////
  addressTypes: any;
  userInfo: string;
  genders: any;
  institutions: any;
  boards: any;
  referralTypes: any;
  scholarshipCategories: any;
  coursecategories: any;
  courseprograms: any;
  nationalities: any;
  religions: any;
  communities: any;
  castes: any;
  coursetypes: any;
  institutionTypes: any;
  media: any;
  paymentMethods: any;
  qualificationTypes: any;
  motherTongues: any;
  ///////////////Qualification Details//////////////////////////
  qualificationType: any;
  courseType: any;
  institutionType: any;
  schoolCollege: any;
  medium: any;
  taluk: any;
  yearOfPassing: any;
  markObtained: any;
  maxMark: any;
  percentage: any;
  organisationType: any;
  qualificationType2: any;
  courseType2: any;
  institutionType2: any;
  schoolCollege2: any;
  medium2: any;
  taluk2: any;
  yearOfPassing2: any;
  markObtained2: any;
  maxMark2: any;
  percentage2: any;
  organisationType2: any;
  qualificationdetails: any;
  admissioncategories: any;

  admissionCatgeories: any;
  editqualificationDetails: any;
  qualificationTypeValue: any;
  courseTypeValue: any;
  institutionTypeValue: any;
  schoolCollegeValue: any;
  mediumValue: any;
  talukValue: any;
  yearOfPassingValue: any;
  markObtainedValue: any;
  maxMarkValue: any;
  percentageValue: any;
  organisationTypeValue: any;

///////////////////////////////////////Payment Details////////////////////////
//Payment Details
paymentDate: any;
paymentmethod:any;
bank: any;
chequeDDDate: any;
chequeDDNumber: any;
advanceFeeType: any;
amount: any;
paymentDate2: any;
paymentmethod2:any;
bank2: any;
chequeDDDate2: any;
chequeDDNumber2: any;
advanceFeeType2: any;
amount2: any;
paymentdetails: any;
editpaymentDetailsdata: any;
paymentDateValue: any;
paymentMethodValue: any;
bankValue: any;
chequeDDDateValue: any;
chequeDDNumberValue: any;
advanceFeeTypeValue: any;
amountValue: any;
  followups: any;
  paymentmethodValue: any;
  editfollowupsdata: any;
  dateOfEnquiryValue: any;
  modeOfEnquiryValue: any;
  descriptionValue: any;
  nextEnquiryDateValue: any;
  nextEnquiryTimeValue: any;

  dateOfEnquiry: any;
  modeOfEnquiry: any;
  description: any;
  nextEnquiryDate: any;
  nextEnquiryTime: any;
  dateOfEnquiry2: any;
  modeOfEnquiry2: any;
  description2: any;
  nextEnquiryDate2: any;
  nextEnquiryTime2: any;
  cecourseprograms: Object;
  constructor(
    private request: RequestService,
    private router: Router,
    private formBuilder: FormBuilder,
  ) {
    //add Form Group - addressDetails 
    this.addressAddForm = this.formBuilder.group({
      addresstype: ['', Validators.required],
      flatNo: ['', Validators.required],
      streetLane: ['', Validators.required],
      area: ['', Validators.required],
      city: ['', Validators.required],
      district: ['', Validators.required],
      pincode: ['', Validators.required],
      state: ['', Validators.required],
      country: ['', Validators.required],
    });
    // Edit Form Group - addressDetails 
    this.addressEditForm = this.formBuilder.group({
      addresstype3: ['', Validators.required],
      flatNo3: ['', Validators.required],
      streetLane3: ['', Validators.required],
      area3: ['', Validators.required],
      city3: ['', Validators.required],
      district3: ['', Validators.required],
      pincode3: ['', Validators.required],
      state3: ['', Validators.required],
      country3: ['', Validators.required],
    });
    // Add Form Group - Qualification Details
    this.qdAddForm = this.formBuilder.group({
      qualificationType: ['', Validators.required],
      courseType: ['', Validators.required],
      institutionType: ['', Validators.required],
      schoolCollege: ['', Validators.required],
      medium: ['', Validators.required],
      city: ['', Validators.required],
      taluk: ['', Validators.required],
      district: ['', Validators.required],
      state: ['', Validators.required],
      country: ['', Validators.required],
      yearOfPassing: ['', Validators.required],
      markObtained: ['', Validators.required],
      maxMark: ['', Validators.required],
      percentage: ['', Validators.required],
      organisationType: ['', Validators.required],
    });
     this.qdEditForm = this.formBuilder.group({
      qualificationType2: ['', Validators.required],
      courseType2: ['', Validators.required],
      institutionType2: ['', Validators.required],
      schoolCollege2: ['', Validators.required],
      medium2: ['', Validators.required],
      city2: ['', Validators.required],
      taluk2: ['', Validators.required],
      district2: ['', Validators.required],
      state2: ['', Validators.required],
      country2: ['', Validators.required],
      yearOfPassing2: ['', Validators.required],
      markObtained2: ['', Validators.required],
      maxMark2: ['', Validators.required],
      percentage2: ['', Validators.required],
      organisationType2 : ['', Validators.required],
    });
    //add Form Group - addressDetails 
    this.paymentAddForm = this.formBuilder.group({
      paymentDate: ['', Validators.required],
      paymentmethod: ['', Validators.required],
      bank: ['', Validators.required],
      chequeDDDate: ['', Validators.required],
      chequeDDNumber: ['', Validators.required],
      advanceFeeType: ['', Validators.required],
      amount: ['', Validators.required],
    });
    // Edit Form Group - addressDetails 
    this.paymentEditForm = this.formBuilder.group({
      paymentDate2: ['', Validators.required],
      paymentmethod2: ['', Validators.required],
      bank2: ['', Validators.required],
      chequeDDDate2: ['', Validators.required],
      chequeDDNumber2: ['', Validators.required],
      advanceFeeType2: ['', Validators.required],
      amount2: ['', Validators.required],
    });
    //Add Form Group - FollowUps
    this.followupsaddform = this.formBuilder.group({
      dateOfEnquiry: ['', Validators.required],
      modeOfEnquiry: ['', Validators.required],
      description: ['', Validators.required],
      nextEnquiryDate: ['', Validators.required],
      nextEnquiryTime: ['', Validators.required],
    });

    //Edit Form Group - FollowUps
    this.followupseditform = this.formBuilder.group({
      dateOfEnquiry2: ['', Validators.required],
      modeOfEnquiry2: ['', Validators.required],
      description2: ['', Validators.required],
      nextEnquiryDate2: ['', Validators.required],
      nextEnquiryTime2: ['', Validators.required],
    });
   }
  // to upload Image
  submit() {
    this.uploader.uploadAll();
  }
  // Error Message 
  public setMessage(message) {
    return this.message = message;
  }
  // updatebasicdetails(){
  //     this.submitted = true;
  //     console.log(this.editBasicDetails.value);
  //     const edata = {
  //       firstName: this.editBasicDetails.get('firstName2').value,
  //       lastName: this.editBasicDetails.get('lastName2').value,
  //       dob: this.editBasicDetails.get('dob2').value,
  //       gender: this.editBasicDetails.get('gender2').value,
  //       aadharNo: this.editBasicDetails.get('aadharNo2').value,
  //       regNo12th: this.editBasicDetails.get('regNo12th2').value,
  //       mark12th: this.editBasicDetails.get('mark12th2').value,
  //       email: this.editBasicDetails.get('email2').value,
  //       sMobileNumber: this.editBasicDetails.get('sMobileNumber2').value,
  //       fFirstName: this.editBasicDetails.get('fFirstName2').value,
  //       fLastName: this.editBasicDetails.get('fLastName2').value,
  //       fMobileNumber: this.editBasicDetails.get('fMobileNumber2').value,
  //       institution: this.editBasicDetails.get('institution2').value,
  //       board: this.editBasicDetails.get('board2').value,
  //       referenceType: this.editBasicDetails.get('referenceType2').value,
  //       referenceBy: this.editBasicDetails.get('referenceBy2').value,
  //       applicatonNo: this.editBasicDetails.get('applicatonNo2').value,
  //       admissiontype: this.editBasicDetails.get('admissiontype2').value,
  //       admissionCategory: this.editBasicDetails.get('admissionCategory2').value,
  //       coursecategory: this.editBasicDetails.get('coursecategory2').value,
  //       courseprogram: this.editBasicDetails.get('courseprogram2').value,
  //       scholarshipCategory: this.editBasicDetails.get('scholarshipCategory2').value,
  //       remark: this.editBasicDetails.get('remark2').value,
  //       nationality: this.editBasicDetails.get('nationality2').value,
  //       religion: this.editBasicDetails.get('religion2').value,
  //       community: this.editBasicDetails.get('community2').value,
  //       caste: this.editBasicDetails.get('caste2').value,
  //       motherTongue: this.editBasicDetails.get('motherTongue2').value,
  //       fEmail: this.editBasicDetails.get('fEmail2').value,
  //       fOccupation: this.editBasicDetails.get('fOccupation2').value,
  //       fAnnualIncome: this.editBasicDetails.get('fAnnualIncome2').value,
  //       mName: this.editBasicDetails.get('mName2').value,
  //       mEmail: this.editBasicDetails.get('mEmail2').value,
  //       mMobileNo: this.editBasicDetails.get('mMobileNo2').value,
  //       mOccupation: this.editBasicDetails.get('mOccupation2').value,
  //       mAnnualIncome: this.editBasicDetails.get('mAnnualIncome2').value,
  //       pPanNumber: this.editBasicDetails.get('pPanNumber2').value,
  //       pAadharNumber: this.editBasicDetails.get('pAadharNumber2').value,
  //       relativeName: this.editBasicDetails.get('relativeName2').value,
  //       sphoto: this.getfileLoc
  //     };
  //     this.request.updateBasicDetails(this.IdValue, edata).subscribe((response: any) => {
  //       if (response.status == 'success') {
  //         swal("Updated Sucessfully");       
          
  //         this.viewData();
  //        // this.loadModal();
  //       }
  //       else if (response.status == 'error') {       
  //         this.setMessage(response.error);
  //       }      
       
  //     }, (error) => {
  //       console.log(error);
  //       this.setMessage(error);
  //     });
    
  // }
  // To display the BasicDetails Data
  viewData() {
    this.request.getBasicDetails().subscribe((response) => {
      this.basicdetails = response;
      console.log('BasicDetails', this.basicdetails);
    }, (error) => {
      console.log(error);
    });
  }
  ngOnInit() {
  //  
  }
}
