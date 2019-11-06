import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder } from '@angular/forms';
import { DynamicScriptLoaderService } from '../../services/dynamic-script-loader.service';
import { RequestService } from '../../services/request.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FileUploader } from 'ng2-file-upload';
import { DatePipe } from '@angular/common';

const URL = 'http://localhost:3000/uploadStudentPhoto/upload';
const url = 'http://localhost:3000/ce-qd-fileupload/fileupload';
declare const $: any;
declare const swal: any;
@Component({
  selector: 'app-ce-add-form',
  templateUrl: './ce-add-form.component.html',
  styleUrls: ['./ce-add-form.component.scss']
})
export class CEAddFormComponent implements OnInit {

  submitted = false;
  ///////////////////Basic Details
  firstName: any;
  lastName: any;
  dob: any;
  enquiryDate: any;
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
  public uploader: FileUploader = new FileUploader({ url: URL, itemAlias: 'photo' });
  sPhoto: any;
  getfileLoc: any;
  message: any;
  admissiontypes: any;
  basicdetails: any;

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
  addressAddForm: any;
  IdValue: any;
  Id: any;
  addressEditForm: any;
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
  userInfo: any;
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
  // qdAddForm: any;
  qualificationdetails: any;
  admissioncategories: any;
  fileValue: any;
  public uploader2: FileUploader = new FileUploader({ url: url, itemAlias: 'file' });
  getfileLoc2: any;
  fileLocation: any;
  fileLocationValue: any;
  fileLocation2: FormControl;
  admissionCatgeories: any;
  // qdEditForm: any;
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
  can: any;
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
  paymentAddForm: any;
  paymentEditForm: any;
  followupsaddform: any;
  followupseditform: any;
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
  editqdDetailsdata: any;
  city2: any;
  district2: any;
  state2: any;
  country2: any;
  canInfo: any;
  editFollowupsdata: any;
  canId: any;
  modeOfEnquiries: any;
  feestypes: any;
  feetypes: any;


  constructor(private dynamicScriptLoader: DynamicScriptLoaderService,
    private request: RequestService,
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private datePipe: DatePipe
   ) { 
       // Add Form - BasicDetail 
    this.firstName = new FormControl('', Validators.required);
    this.lastName = new FormControl('', Validators.required);
    this.dob = new FormControl('', Validators.required);
    this.gender = new FormControl('', Validators.required);
    this.aadharNo = new FormControl('');
    this.regNo12th = new FormControl('');
    this.mark12th = new FormControl('');
    this.email = new FormControl('');
    this.sMobileNumber = new FormControl('');
    this.fFirstName = new FormControl('');
    this.fLastName = new FormControl('');
    this.fMobileNumber = new FormControl('');
    this.institution = new FormControl('', Validators.required);
    this.board = new FormControl('');
    this.referenceType = new FormControl('', Validators.required);
    this.referenceBy = new FormControl('');
    this.applicatonNo = new FormControl('', Validators.required);
    this.admissiontype = new FormControl('');
    this.admissionCategory = new FormControl('');
    this.scholarshipCategory = new FormControl('');
    this.remark = new FormControl('');
    this.nationality = new FormControl('');
    this.religion = new FormControl('');
    this.community = new FormControl('');
    this.caste = new FormControl('');
    this.motherTongue = new FormControl('');
    this.fEmail = new FormControl('');
    this.fOccupation = new FormControl('');
    this.fAnnualIncome = new FormControl('');
    this.mName = new FormControl('');
    this.mEmail = new FormControl('');
    this.mMobileNo = new FormControl('');
    this.mOccupation = new FormControl('');
    this.mAnnualIncome = new FormControl('');
    this.pPanNumber = new FormControl('');
    this.pAadharNumber = new FormControl('');
    this.relativeName = new FormControl('');
    this.sPhoto = new FormControl('');

    this.route.queryParams.subscribe((params: any) => {
      this.canId = params.id;
    });
    //courseProgram
    this.coursecategory = new FormControl('', Validators.required);
     this.courseprogram = new FormControl('', Validators.required);

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
// Add Form controller - Qualification Details

  this.qualificationType = new FormControl('', Validators.required);
  this.courseType = new FormControl('', Validators.required);
  this.institutionType = new FormControl('', Validators.required);
  this.schoolCollege = new FormControl('', Validators.required);
  this.medium = new FormControl('', Validators.required);
  this.city = new FormControl('', Validators.required);
  this.taluk = new FormControl('', Validators.required);
  this.district = new FormControl('', Validators.required);
  this.state = new FormControl('', Validators.required);
  this.country = new FormControl('', Validators.required);
  this.yearOfPassing = new FormControl('', Validators.required);
  this.markObtained = new FormControl('', Validators.required);
  this.maxMark = new FormControl('', Validators.required);
  this.percentage = new FormControl('', Validators.required);
  this.organisationType = new FormControl('', Validators.required);
  this.fileLocation = new FormControl('', Validators.required);
// Edit Form controller - Qualification Details

  this.qualificationType2 = new FormControl('', Validators.required);
  this.courseType2 = new FormControl('', Validators.required);
  this.institutionType2 = new FormControl('', Validators.required);
  this.schoolCollege2 = new FormControl('', Validators.required);
  this.medium2 = new FormControl('', Validators.required);
  this.city2 = new FormControl('', Validators.required);
  this.taluk2 = new FormControl('', Validators.required);
  this.district2 = new FormControl('', Validators.required);
  this.state2 = new FormControl('', Validators.required);
  this.country2 = new FormControl('', Validators.required);
  this.yearOfPassing2 = new FormControl('', Validators.required);
  this.markObtained2 = new FormControl('', Validators.required);
  this.maxMark2 = new FormControl('', Validators.required);
  this.percentage2 = new FormControl('', Validators.required);
  this.organisationType2 = new FormControl('', Validators.required);
  this.fileLocation2 = new FormControl('', Validators.required);

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
    //to upload logo
  submit() {
    this.uploader.uploadAll();
  }
  filesubmit() {
    this.uploader2.uploadAll();
  }
  // Error Message 
  public setMessage(message) {
    return this.message = message;
  }
// To add the basicDetails
addbasicdetails() {
  this.enquiryDate = this.datePipe.transform(new Date(),"dd-MM-yyyy");
  const newBasicDetails = {
    firstName: this.firstName.value,
    lastName: this.lastName.value,
    dob: this.dob.value,
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
    admissiontype: this.admissiontype.value,
    admissionCategory: this.admissionCategory.value, 
    scholarshipCategory: this.scholarshipCategory.value,
    remark: this.remark.value,
    nationality: this.nationality.value,
    religion: this.religion.value,
    community: this.community.value,
    caste: this.caste.value,
    motherTongue: this.motherTongue.value,
    fEmail: this.fEmail.value,
    fOccupation: this.fOccupation.value,
    fAnnualIncome: this.fAnnualIncome.value,
    mName: this.mName.value,
    mEmail: this.mEmail.value,
    mMobileNo: this.mMobileNo.value,
    mOccupation: this.mOccupation.value,
    mAnnualIncome: this.mAnnualIncome.value,
    pPanNumber: this.pPanNumber.value,
    pAadharNumber: this.pAadharNumber.value,
    relativeName: this.relativeName.value,
    sPhoto: this.getfileLoc,
    enquiryDate: this.enquiryDate
  };
  this.request.addBasicDetails(newBasicDetails).subscribe((response: any) => {
    if (response.status == 'error') {
      this.setMessage(response.error);
    }
    else if (response.status == 'success') {
      swal("Added Sucessfully"); 
      this.viewData();
      this.router.navigate([], {
        queryParams: {    
            id: response._id,
          }
         }); 
    }
  }, (error) => {
    this.setMessage(error);
  });
  console.log(newBasicDetails);
}

//Add CourseProgram
 addCEcourseProgram() {
  const newcourseProgram = {
    coursecategory: this.coursecategory.value,
    courseprogram:this.courseprogram.value,
    canId: this.canId
  };
  this.request.addCEcourseprogram(newcourseProgram).subscribe((response: any) => {
    if (response.status == 'success') {
      swal("Added Sucessfully");
      this.viewCEcourseprogram(this.canId);
    }
    else if (response.status == 'error') {       
      this.setMessage(response.error);
    }  
  }, (error) => {
    this.setMessage(error);
  });
  console.log(newcourseProgram);
}
//Display courseProogram
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
//Delete courseProgram
deleteCEcourseProgram(id: any) {
  this.request.deleteCEcourseprogram(id).subscribe(res => {
  swal(" Deleted Successfully "); 
  this.viewCEcourseprogram(this.canId);
  });
  }
  // To display the data
viewData() {
  this.request.getBasicDetails().subscribe((response) => {
    this.basicdetails = response;
    console.log('BasicDetails', this.basicdetails);
  }, (error) => {
    console.log(error);
  });
 }
 /////////////////////////////////////////////////////Address Details////////////////////////////////////////////////
// convenience getter for easy access to form fields
get f() { return this.addressAddForm.controls; }
addaddressdetails() {
  this.submitted = true;
  if (this.addressAddForm.invalid) {
    return;
    }
    
    let newAddress = {
      addresstype: this.addressAddForm.get('addresstype').value,
      flatNo:  this.addressAddForm.get('flatNo').value,
      area: this.addressAddForm.get('area').value,
      streetLane: this.addressAddForm.get('streetLane').value,
      city: this.addressAddForm.get('city').value,
      district: this.addressAddForm.get('district').value,
      pincode: this.addressAddForm.get('pincode').value,
      state: this.addressAddForm.get('state').value,
      country: this.addressAddForm.get('country').value,
      canId: this.canId
    }

  this.request.addAddressDetails(newAddress).subscribe((res: any) => {
    if (res.status == 'error') {
      this.setMessage(res.error);
    }
    else if (res.status == 'success') {
      swal("Added Sucessfully"); 
      this.viewAddressData(this.canId);
      this.loadModal();
    }
  }, (error) => {
    this.setMessage(error);
  });
    console.log(newAddress);
}
   
// View the address Details
viewAddressData(canId) {
  if (canId){
  this.request.getAddressDetailsById(canId).subscribe((response) => {
    this.addressdetails = response;
    console.log('AddressDetailsById', this.addressdetails);
  }, (error) => {
    console.log(error);
  });
} else
this.addressdetails = null;
}
    // convenience getter for easy access to form fields
    get f2() { return this.addressEditForm.controls; }
    //Edit Function -addressDetails
    onEditAddress(addressdetail) {
      this.Id = addressdetail._id;
      this.request.fetchAddressDetailsById(this.Id).subscribe((response) => {
        this.editaddressDetailsdata = response[0];
        console.log(response);
        this.addressTypeValue = this.editaddressDetailsdata.addresstype;
        this.flatNoValue = this.editaddressDetailsdata.flatNo;
        this.streetLaneValue = this.editaddressDetailsdata.streetLane;
        this.areaValue = this.editaddressDetailsdata.area;
        this.cityValue = this.editaddressDetailsdata.city;
        this.districtValue = this.editaddressDetailsdata.district;
        this.pincodeValue = this.editaddressDetailsdata.pincode;
        this.stateValue = this.editaddressDetailsdata.state;
        this.countryValue = this.editaddressDetailsdata.country;
        this.IdValue = this.editaddressDetailsdata._id;
  
        this.addressEditForm = this.formBuilder.group({
          addresstype3: [this.addressTypeValue, Validators.required],
          flatNo3: [this.flatNoValue, Validators.required],
          streetLane3: [this.streetLaneValue, Validators.required],
          area3: [this.areaValue, Validators.required],
          city3: [this.cityValue, Validators.required],
          district3: [this.districtValue, Validators.required],
          pincode3: [this.pincodeValue, Validators.required],
          state3: [this.stateValue, Validators.required],
          country3: [this.countryValue, Validators.required]
        });
        console.log(this.addressEditForm.value);
      });
    }
    onEditAdressSubmit() {
      this.submitted = true;
      console.log(this.addressEditForm.value);
      const edata = {
        addresstype: this.addressEditForm.get('addresstype3').value,
        flatNo: this.addressEditForm.get('flatNo3').value,
        area: this.addressEditForm.get('area3').value,
        city: this.addressEditForm.get('city3').value,
        streetLane: this.addressEditForm.get('streetLane3').value,
        district: this.addressEditForm.get('district3').value,
        pincode: this.addressEditForm.get('pincode3').value,
        state: this.addressEditForm.get('state3').value,
        country: this.addressEditForm.get('country3').value,
      };
      this.request.updateAddressDetails(this.IdValue, edata).subscribe((response: any) => {
        if (response.status == 'success') {
          swal("Updated Sucessfully");       
          this.viewAddressData(this.canId);
         this.loadModal();
        }
        else if (response.status == 'error') {       
          this.setMessage(response.error);
        }      
       
      }, (error) => {
        console.log(error);
        this.setMessage(error);
      });
    
          }
       //To delete the addressdetails data
deleteAddressDetails(id: any) {
  this.request.deleteAddressDetails(id).subscribe(res => {
  swal(" Deleted Successfully "); 
  this.viewAddressData(this.canId);
  });
  }

////////////////////////////////////////////////////////////////Qualification Details///////////////////////////////////////////
// convenience getter for easy access to form fields
// get f3() { return this.qdAddForm.controls; }
addQualificationDetails() {
  this.submitted = true;
    let newQualificationDetail ={
      qualificationType: this.qualificationType.value,
      courseType: this.courseType.value,
      institutionType: this.institutionType.value,
      schoolCollege: this.schoolCollege.value,
      medium: this.medium.value,
      city: this.city.value,
      taluk: this.taluk.value,
      district: this.district.value,
      state: this.state.value,
      country: this.country.value,
      yearOfPassing: this.yearOfPassing.value,
      markObtained: this.markObtained.value,
      maxMark: this.maxMark.value,
      percentage: this.percentage.value,
      organisationType: this.organisationType.value,
      fileLocation: this.getfileLoc2,
      canId: this.canId
    }
  this.request.addQualificationDetails(newQualificationDetail).subscribe((res: any) => {
    if (res.status == 'success') {
   swal("Added Sucessfully");  
        this.getfileLoc2=""; 
        this.loadModal();
        this.viewQualificationDetails(this.canId);
      }
      else if (res.status == 'error') {
        this.setMessage(res.error);
      }
    }, (error) => {
      this.setMessage(error);
    });
    console.log(newQualificationDetail);
  }
// View the Qualification Details
viewQualificationDetails(canId) {
  if (canId){
  this.request.getQualificationDetailsById(canId).subscribe((response) => {
    this.qualificationdetails = response;
    console.log('QualificationDetailsById', this.qualificationdetails);
  }, (error) => {
    console.log(error);
  });
} else
this.qualificationdetails = null;
}
  //Edit Function -addressDetails
  onEditQualification(qualificationdetail) {
    this.Id = qualificationdetail._id;
    this.request.fetchQualificationById(this.Id).subscribe((response) => {
    this.editqdDetailsdata = response[0];
    console.log(response);
    this.qualificationTypeValue = this.editqdDetailsdata.qualificationType;
    this.courseTypeValue = this.editqdDetailsdata.courseType;
    this.institutionTypeValue = this.editqdDetailsdata.institutionType;
    this.schoolCollegeValue = this.editqdDetailsdata.schoolCollege;
    this.mediumValue = this.editqdDetailsdata.medium;
    this.cityValue = this.editqdDetailsdata.city;
    this.talukValue = this.editqdDetailsdata.taluk;
    this.districtValue = this.editqdDetailsdata.district;
    this.stateValue = this.editqdDetailsdata.state;
    this.countryValue = this.editqdDetailsdata.country;
    this.yearOfPassingValue = this.editqdDetailsdata.yearOfPassing;
    this.markObtainedValue = this.editqdDetailsdata.markObtained;
    this.maxMarkValue = this.editqdDetailsdata.maxMark;
    this.percentageValue = this.editqdDetailsdata.percentage;
    this.organisationTypeValue = this.editqdDetailsdata.organisationType;
    this.fileLocationValue = this.editqdDetailsdata.fileLocation;
    this.IdValue = this.editqdDetailsdata._id;
  
    this.qualificationType2 = new FormControl(this.qualificationTypeValue, Validators.required);
    this.courseType2 = new FormControl(this.courseTypeValue, Validators.required);
    this.institutionType2 = new FormControl(this.institutionTypeValue, Validators.required);
    this.schoolCollege2 = new FormControl(this.schoolCollegeValue, Validators.required);
    this.medium2 = new FormControl(this.mediumValue, Validators.required);
    this.city2 = new FormControl(this.cityValue, Validators.required);
    this.taluk2 = new FormControl(this.talukValue, Validators.required);
    this.district2 = new FormControl(this.districtValue, Validators.required);
    this.state2 = new FormControl(this.stateValue, Validators.required);
    this.country2 = new FormControl( this.countryValue, Validators.required);
    this.yearOfPassing2 = new FormControl(this.yearOfPassingValue, Validators.required);
    this.markObtained2 = new FormControl(this.markObtainedValue, Validators.required);
    this.maxMark2 = new FormControl(this.maxMarkValue, Validators.required);
    this.percentage2 = new FormControl(this.percentageValue, Validators.required);
    this.organisationType2 = new FormControl(this.organisationTypeValue, Validators.required);
    this.fileLocation2 = new FormControl(this.fileLocationValue, Validators.required);
    
    });
    }
    // convenience getter for easy access to form fields
    // get f4() { return this.qdEditForm.controls; }
    onEditQualificationSubmit() {
      this.submitted = true;
      const edata = {
        qualificationType: this.qualificationType2.value,
      courseType: this.courseType2.value,
      institutionType: this.institutionType2.value,
      schoolCollege: this.schoolCollege2.value,
      medium: this.medium2.value,
      city: this.city2.value,
      taluk: this.taluk2.value,
      district: this.district2.value,
      state: this.state2.value,
      country: this.country2.value,
      yearOfPassing: this.yearOfPassing2.value,
      markObtained: this.markObtained2.value,
      maxMark: this.maxMark2.value,
      percentage: this.percentage2.value,
      organisationType: this.organisationType2.value,
      fileLocation: this.getfileLoc2
      };
      this.request.updateQualificationDetails(this.IdValue, edata).subscribe((response: any) => {
        if (response.status == 'success') {
          swal("Updated Sucessfully");       
          
          this.viewQualificationDetails(this.canId);
          this.loadModal();
        }
        else if (response.status == 'error') {       
          this.setMessage(response.error);
        }      
       
      }, (error) => {
        console.log(error);
        this.setMessage(error);
      });
    
      }
      
  //To delete the addressdetails data
  deleteQualificationDetails(id: any) {
    this.request.deleteQualificationDetails(id).subscribe(res => {
      swal(" Deleted Successfully ");
      this.viewQualificationDetails(this.canId);
    });
  }
////////////////////////////////////////////////////////////////Payment Details/////////////////////////////////////////////////
 // convenience getter for easy access to form fields
 get f5() { return this.paymentAddForm.controls; }
addpaymentdetails() {
  this.submitted = true;
  if (this.paymentAddForm.invalid) {
    return;
  }

   let newpaymentdetails ={
    paymentDate: this.paymentAddForm.get('paymentDate').value,
    paymentmethod: this.paymentAddForm.get('paymentmethod').value,
    bank: this.paymentAddForm.get('bank').value,
    chequeDDDate: this.paymentAddForm.get('chequeDDDate').value,
    chequeDDNumber: this.paymentAddForm.get('chequeDDNumber').value,
    advanceFeeType: this.paymentAddForm.get('advanceFeeType').value,
    amount: this.paymentAddForm.get('amount').value,
    canId: this.canId
  }
  this.request.addPaymentDetails(newpaymentdetails).subscribe((res: any) => {
    if (res.status == 'error') {
      this.setMessage(res.error);
    }
    else if (res.status == 'success') { 
     
      swal("Added Sucessfully");
      this.viewPaymentData(this.canId);
      this.loadModal();
    }
    }, (error) => {
      this.setMessage(error);
    });
      console.log(newpaymentdetails);
}
viewPaymentData(canId) {
  if (canId){
  this.request.getPaymentDetailsById(canId).subscribe((response) => {
    this.paymentdetails = response;
    console.log('PaymentDetailsById', this.paymentdetails);
  }, (error) => {
    console.log(error);
  });
} else
this.paymentdetails = null;
}
 
 
// convenience getter for easy access to form fields
get f6() { return this.paymentEditForm.controls; }
//Edit Function -addressDetails
onEditPayment(paymentsdetails) {
  this.Id = paymentsdetails._id;
  this.request.fetchPaymentDetailsById(this.Id).subscribe((response) => {
    this.editpaymentDetailsdata = response[0];
    console.log(response);
    this.paymentDateValue = this.editpaymentDetailsdata.paymentDate;
    this.paymentmethodValue = this.editpaymentDetailsdata.paymentmethod;
    this.bankValue = this.editpaymentDetailsdata.bank;
    this.chequeDDDateValue = this.editpaymentDetailsdata.chequeDDDate;
    this.chequeDDNumberValue = this.editpaymentDetailsdata.chequeDDNumber;
    this.advanceFeeTypeValue = this.editpaymentDetailsdata.advanceFeeType;
    this.amountValue = this.editpaymentDetailsdata.amount;
    this.IdValue = this.editpaymentDetailsdata._id;

    this.paymentEditForm = this.formBuilder.group({
      paymentDate2: [this.paymentDateValue, Validators.required],
      paymentmethod2: [this.paymentmethodValue, Validators.required],
      bank2: [this.bankValue, Validators.required],
      chequeDDDate2: [this.chequeDDDateValue, Validators.required],
      chequeDDNumber2: [this.chequeDDNumberValue, Validators.required],
      advanceFeeType2: [this.advanceFeeTypeValue, Validators.required],
      amount2: [this.amountValue, Validators.required]
    });
    console.log(this.paymentEditForm.value);
  });
}
onEditPaymentSubmit() {
  this.submitted = true;
  console.log(this.paymentEditForm.value);
  const edata = {
    paymentDate: this.paymentEditForm.get('paymentDate2').value,
    paymentmethod: this.paymentEditForm.get('paymentmethod2').value,
    bank: this.paymentEditForm.get('bank2').value,
    chequeDDNumber: this.paymentEditForm.get('chequeDDNumber2').value,
    chequeDDDate: this.paymentEditForm.get('chequeDDDate2').value,
    advanceFeeType: this.paymentEditForm.get('advanceFeeType2').value,
    amount: this.paymentEditForm.get('amount2').value,
  };
  this.request.updatePaymentDetails(this.IdValue, edata).subscribe((response: any) => {
    if (response.status == 'success') {
      swal("Updated Sucessfully");       
      
      this.viewPaymentData(this.canId);
     this.loadModal();
    }
    else if (response.status == 'error') {       
      this.setMessage(response.error);
    }      
   
  }, (error) => {
    console.log(error);
    this.setMessage(error);
  });

      }
     //To delete the paymentdetails data
deletePaymentDetails(id: any) {
  this.request.deletePaymentDetails(id).subscribe(res => {
  swal(" Deleted Successfully "); 
  this.viewPaymentData(this.canId);
  });
  }
////////////////////////////////////////////////////////////////Followups///////////////////////////////////////////////////////
 // convenience getter for easy access to form fields
get f7() { return this.followupsaddform.controls; }
addFollowups() {
  this.submitted = true;
  if (this.followupsaddform.invalid) {
    return;
    }
    let newfollowups ={
      dateOfEnquiry: this.followupsaddform.get('dateOfEnquiry').value,
      modeOfEnquiry: this.followupsaddform.get('modeOfEnquiry').value,
      description: this.followupsaddform.get('description').value,
      nextEnquiryDate: this.followupsaddform.get('nextEnquiryDate').value,
      nextEnquiryTime: this.followupsaddform.get('nextEnquiryTime').value,
      canId: this.canId
    }

  this.request.addFollowups(newfollowups).subscribe((res: any) => {
    if (res.status == 'error') {
      this.setMessage(res.error);
    }
    else if (res.status == 'success') {
      swal("Added Sucessfully"); 
      this.viewFollowupsData(this.canId);
      this.loadModal(); 
    }
  }, (error) => {
    this.setMessage(error);
  });
    console.log(newfollowups);
}

viewFollowupsData(canId) {
  if (canId){
  this.request.getFollowupsById(canId).subscribe((response) => {
    this.followups = response;
    console.log('FollowupsById', this.followups);
  }, (error) => {
    console.log(error);
  });
} else
this.followups = null;
}
  // convenience getter for easy access to form fields
get f8() { return this.followupseditform.controls; }
//Edit Function -addressDetails
onEditFollowups(followupDetails) {
  this.Id = followupDetails._id;
  this.request.fetchFollowupsById(this.Id).subscribe((response) => {
    this.editfollowupsdata = response[0];
    console.log(response);
    this.dateOfEnquiryValue = this.editfollowupsdata.dateOfEnquiry;
    this.modeOfEnquiryValue = this.editfollowupsdata.modeOfEnquiry;
    this.descriptionValue = this.editfollowupsdata.description;
    this.nextEnquiryDateValue = this.editfollowupsdata.nextEnquiryDate;
    this.nextEnquiryTimeValue = this.editfollowupsdata.nextEnquiryTime;
    this.IdValue = this.editfollowupsdata._id;

    this.followupseditform = this.formBuilder.group({
      dateOfEnquiry2: [this.dateOfEnquiryValue, Validators.required],
      modeOfEnquiry2: [this.modeOfEnquiryValue, Validators.required],
      description2: [this.descriptionValue, Validators.required],
      nextEnquiryDate2: [this.nextEnquiryDateValue, Validators.required],
      nextEnquiryTime2: [this.nextEnquiryTimeValue, Validators.required],
    });
    console.log(this.followupseditform.value);
  });
}
onEditFollowupsSubmit() {
  this.submitted = true;
  console.log(this.followupseditform.value);
  const edata = {
    dateOfEnquiry: this.followupseditform.get('dateOfEnquiry2').value,
    modeOfEnquiry: this.followupseditform.get('modeOfEnquiry2').value,
    description: this.followupseditform.get('description2').value,
    nextEnquiryDate: this.followupseditform.get('nextEnquiryDate2').value,
    nextEnquiryTime: this.followupseditform.get('nextEnquiryTime2').value,
  };
  this.request.updateFollowups(this.IdValue, edata).subscribe((response: any) => {
    if (response.status == 'success') {
      swal("Updated Sucessfully");       
      
      this.viewFollowupsData(this.canId);
     this.loadModal();
    }
    else if (response.status == 'error') {       
      this.setMessage(response.error);
    }      
   
  }, (error) => {
    console.log(error);
    this.setMessage(error);
  });

  }
  //To delete the followups data
  deleteFollowups(id: any) {
    this.request.deleteFollowups(id).subscribe(res => {
      swal(" Deleted Successfully ");
      this.viewFollowupsData(this.canId);
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
  //////////////////Load Details///////////////////////
  loadAddressType() {
    this.request.getAddressType().subscribe((response: any) => {
      this.addressTypes = response;
      console.log('AddressType', response);
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
  
  loadInstitution() {
    this.request.getInstitution().subscribe((response: any) => {
      console.log('Institution', response);
      this.institutions = response;
    }, (error) => {
      console.log(error);
    });
  }
  loadBoard() {
    this.request.getBoard().subscribe((response: any) => {
      this.boards = response;
      console.log('Board',response);
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
  loadScholarshipCategory() {
    this.request.getScholarshipCategory().subscribe((response: any) => {
      this.scholarshipCategories = response;
      console.log('ScholarshipCategory' ,response);
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
  loadAdmissionCategory() {
    this.request.getAdmissionCategory().subscribe((response: any) => {
      this.admissioncategories = response;
      console.log('AdmissionCategory' ,response);
    }, (error) => {
      console.log(error);
    });
  }
  loadCourseProgram() {
    this.request.getCourseprogram().subscribe((response: any) => {
      this.courseprograms = response;
      console.log('CourseProgram' ,response);
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
  loadCourseType() {
    this.request.getCourseType().subscribe((response: any) => {
      this.coursetypes = response;
      console.log('CourseType' ,response);
    }, (error) => {
      console.log(error);
    });
  }
  loadInstitutionType() {
    this.request.getInstitutionType().subscribe((response: any) => {
      this.institutionTypes = response;
      console.log('InstitutionType' ,response);
    }, (error) => {
      console.log(error);
    });
  }
  loadMedium() {
    this.request.getMedium().subscribe((response: any) => {
      this.media = response;
      console.log('Medium' ,response);
    }, (error) => {
      console.log(error);
    });
  }
  loadPaymentMethod() {
    this.request.getPaymentMethod().subscribe((response: any) => {
      this.paymentMethods = response;
      console.log('PaymentMethod' ,response);
    }, (error) => {
      console.log(error);
    });
  }
  loadQualificationType() {
    this.request.getQualificationType().subscribe((response: any) => {
      this.qualificationTypes = response;
      console.log('QualificationType' ,response);
    }, (error) => {
      console.log(error);
    });
  }
  loadMotherTongue() {
    this.request.getMotherTongue().subscribe((response: any) => {
      this.motherTongues = response;
      console.log('MotherTongue' ,response);
    }, (error) => {
      console.log(error);
    });
  }
  loadModeofEnquiry() {
    this.request.getModeofenquiry().subscribe((response: any) => {
      this.modeOfEnquiries = response;
      console.log('ModeOfEnquiry' ,this.modeOfEnquiries);
    }, (error) => {
      console.log(error);
    });
  }
  loadFeesType() {
    this.request.getFeetype().subscribe((response: any) => {
      this.feetypes = response;
      console.log('Fees-Type' ,this.feetypes);
    }, (error) => {
      console.log(error);
    });
  }

  private loadModal() {
    $('#addModaladdress').modal('hide'); //or $('#IDModal').modal('hide');
    $('#addModaladdress').on('hidden.bs.modal', function () {
    $(this).find('form').trigger('reset');
    })
    $('#editModaladdress').modal('hide'); //or $('#IDModal').modal('hide');
    $('#editModaladdress ').on('hidden.bs.modal', function () {
    $(this).find('form').trigger('reset');
    })

    $('#addModalqd').modal('hide'); //or $('#IDModal').modal('hide');
    $('#addModalqd').on('hidden.bs.modal', function () {
    $(this).find('form').trigger('reset');
    })
    $('#editModalqd').modal('hide'); //or $('#IDModal').modal('hide');
    $('#editModalqd ').on('hidden.bs.modal', function () {
    $(this).find('form').trigger('reset');
    })

    $('#addPaymentModal').modal('hide'); //or $('#IDModal').modal('hide');
    $('#addPaymentModal').on('hidden.bs.modal', function () {
    $(this).find('form').trigger('reset');
    })
    $('#editPaymentModal').modal('hide'); //or $('#IDModal').modal('hide');
    $('#editPaymentModal ').on('hidden.bs.modal', function () {
    $(this).find('form').trigger('reset');
    })

    $('#addModalfollowups').modal('hide'); //or $('#IDModal').modal('hide');
    $('#addModalfollowups').on('hidden.bs.modal', function () {
    $(this).find('form').trigger('reset');
    })
    $('#editFollowupsModal').modal('hide'); //or $('#IDModal').modal('hide');
    $('#editFollowupsModal ').on('hidden.bs.modal', function () {
    $(this).find('form').trigger('reset');
    })
    }
    complete(){
      this.router.navigate(['candidateEnquiry']);
    }
    goBackToMain() {
      this.router.navigate(['candidateEnquiry']);
    }
  ngOnInit() {
    this.viewData(); 
    this.viewAddressData(this.canId);
    this.viewQualificationDetails(this.canId);
    this.viewPaymentData(this.canId);
    this.viewFollowupsData(this.canId);
    this.viewCEcourseprogram(this.canId);
    this.loadPaymentMethod();
    this.loadAddressType();
    this.loadQualificationType();
    this.loadGender();
    this.loadInstitution();
    this.loadBoard();
    this.loadAdmissionType();
    this.loadScholarshipCategory();
    this.loadRefferalType();
    this.loadCourseCategory();
    this.loadCourseProgram();
    this.loadNationality();
    this.loadReligion();
    this.loadCommunity();
    this.loadCaste();
    this.loadCourseType();
    this.loadInstitutionType();
    this.loadAdmissionCategory();
    this.loadMotherTongue();
    this.loadMedium();
    this.loadModeofEnquiry();
    this.loadFeesType();
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      console.log('ImageUpload:uploaded:', item, status, response);
      const resPath = JSON.parse(response);
      this.getfileLoc = resPath.result;
    };
    this.uploader2.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader2.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      console.log('ImageUpload:uploaded:', item, status, response);
      const resPath = JSON.parse(response);
     this.getfileLoc2 = resPath.qdFileResult2;
    };

    //jQuery Validation form BasicDetails (Form-Control)
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
     //jQuery Validation form qdadd (Form-Control)
     $(function () {
      $('#qdAddForm').validate({

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
     //jQuery Validation form qdEdit (Form-Control)
     $(function () {
      $('#qdEditForm').validate({

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
