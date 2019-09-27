import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder } from '@angular/forms';
import { DynamicScriptLoaderService } from '../../services/dynamic-script-loader.service';
import { RequestService } from '../../services/request.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FileUploader } from 'ng2-file-upload';
import { CourseCategoryComponent } from '../../Master/course-category/course-category.component';
const URL = 'http://localhost:3000/uploadStudentPhoto/upload';
declare const $: any;
declare const swal: any;

@Component({
  selector: 'app-candidate-enquiry',
  templateUrl: './candidate-enquiry.component.html',
  styleUrls: ['./candidate-enquiry.component.scss']
})
export class CandidateEnquiryComponent implements OnInit {
  
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

 //Address Details
 addresstype: any;
 flatNo:any;
 streetLane:any;
 area:any;
 city:any;
 district:any;
 pincode:any;
 state:any;
 country:any;
  addressdetails: any;
  addressformgroup: any;
  addressEditformgroup: any;
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

  //Payment Details
  paymentDate: any;
  paymentmethod:any;
  bank: any;
  chequeDDDate: any;
  chequeDDNumber: any;
  advanceFeeType: any;
  amount: any;
  paymentdetails: any;
  Id: any;
  editpaymentDetailsdata: any;
  paymentDateValue: any;
  paymentMethodValue: any;
  bankValue: any;
  chequeDDDateValue: any;
  chequeDDNumberValue: any;
  advanceFeeTypeValue: any;
  amountValue: any;
  IdValue: any;
  submitted = false;
  editForm: any;
  registerForm: any;

  //followups
  dateOfEnquiry: any;
  modeOfEnquiry: any;
  description: any;
  nextEnquiryDate: any;
  nextEnquiryTime: any;
  followupsaddform: any;
  followupseditform: any;
  followups: any;
  editFollowupsdata: any;
  dateOfEnquiryValue: any;
  modeOfEnquiryValue: any;
  descriptionValue: any;
  nextEnquiryDateValue: any;
  nextEnquiryTimeValue: any;

  //qualificationDetails
  qualificationtype: FormControl;

  //LoadDetails
  paymentMethods: any;
  addressTypes: any;
  qualificationTypes: any;
  genders: any;
  institutions: any;
  boards: any;
  admissiontypes: any;
  referralTypes: any;
  coursecategories: any;
  courseprograms: any;
  nationalities: any;
  religions: any;
  communities: any;
  castes: any;
  scholarshipCategories: any;
  degreeDetails: Object;
  diplomaDetails: Object;
  hscDetails: Object;
  sslcDetails: Object;
  coursetypes: any;
  institutionTypes: any;
  media: any;

  //Equivalent -SSLC
  sslcformgroup: any;
  sslccourseType:any;
  sslcinstitutionType: any;
  sslcschoolCollege: any;
  sslcmedium: any;
  sslcicity: any;
  sslctaluk: any;
  sslcdistrict: any;
  sslcstate: any;
  sslccountry: any;
  sslcyearOfPassing: any;
  sslcmarkObtained: any;
  sslcmaxMark: any;
  sslcpercentage: any;
  sslcorganisationType: any;
  //Equivalent - HSC
  hscformgroup: any;
  hsccourseType:any;
  hscinstitutionType: any;
  hscschoolCollege: any;
  hscmedium: any;
  hsccity: any;
  hsctaluk: any;
  hscdistrict: any;
  hscstate: any;
  hsccountry: any;
  hscyearOfPassing: any;
  hscmarkObtained: any;
  hscmaxMark: any;
  hscpercentage: any;
  hscorganisationType: any;
  //Equivalent - Diploma
  diplomaformgroup: any;
  diplomacourseType:any;
  diplomainstitutionType: any;
  diplomaschoolCollege: any;
  diplomamedium: any;
  diplomacity: any;
  diplomataluk: any;
  diplomadistrict: any;
  diplomastate: any;
  diplomacountry: any;
  diplomayearOfPassing: any;
  diplomamarkObtained: any;
  diplomamaxMark: any;
  diplomapercentage: any;
  diplomaorganisationType: any;
  //Equivalent - Degree
  degreeformgroup: any;
  degreecourseType:any;
  degreeinstitutionType: any;
  degreeschoolCollege: any;
  degreemedium: any;
  degreecity: any; 
  degreetaluk: any;
  degreedistrict: any;
  degreestate: any;
  degreecountry: any;
  degreeyearOfPassing: any;
  degreemarkObtained: any;
  degreemaxMark: any;
  degreepercentage: any;
  degreeorganisationType: any;
  cecourseprograms: any;
  
  
  constructor(
    private dynamicScriptLoader: DynamicScriptLoaderService,
    private request: RequestService,
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute) { 
    
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

     //
    //  this.courseProgram = new FormControl('', Validators.required);
     //

  //add Form Group - addressDetails
this.addressformgroup = this.formBuilder.group({
  addresstype:['', Validators.required],
  flatNo: ['', Validators.required],
  streetLane: ['', Validators.required],
  area: ['', Validators.required],
  city: ['', Validators.required],
  district: ['', Validators.required],
  pincode: ['', Validators.required], 
  state: ['', Validators.required], 
  country: ['', Validators.required], 
  });
   //Edit Form Group - addressDetails
  this.addressEditformgroup = this.formBuilder.group({
    addresstype:['', Validators.required],
    flatNo: ['', Validators.required],
    streetLane: ['', Validators.required],
    area: ['', Validators.required],
    city: ['', Validators.required],
    district: ['', Validators.required],
    pincode: ['', Validators.required], 
    state: ['', Validators.required], 
    country: ['', Validators.required], 
    });
 //Add Form Group - paymentDetails
 this.registerForm = this.formBuilder.group({
  paymentDate:['', Validators.required],
  paymentmethod: ['', Validators.required],
  bank: ['', Validators.required],
  chequeDDDate: ['', Validators.required],
  chequeDDNumber: ['', Validators.required],
  advanceFeeType: ['', Validators.required],
  amount: ['', Validators.required], 
  });

 //Edit Form Group - paymentDetails
this.editForm = this.formBuilder.group({
  paymentDate:['', Validators.required],
  paymentmethod: ['', Validators.required],
  bank: ['', Validators.required],
  chequeDDDate: ['', Validators.required],
  chequeDDNumber: ['', Validators.required],
  advanceFeeType: ['', Validators.required],
  amount: ['', Validators.required], 
  });

  //Add Form Group - FollowUps
 this.followupsaddform = this.formBuilder.group({
  dateOfEnquiry:['', Validators.required],
  modeOfEnquiry: ['', Validators.required],
  description: ['', Validators.required],
  nextEnquiryDate: ['', Validators.required],
  nextEnquiryTime: ['', Validators.required], 
  });

 //Edit Form Group - FollowUps
this.followupseditform = this.formBuilder.group({
  dateOfEnquiry:['', Validators.required],
  modeOfEnquiry: ['', Validators.required],
  description: ['', Validators.required],
  nextEnquiryDate: ['', Validators.required],
  nextEnquiryTime: ['', Validators.required],
  });

// Qualification Details
this.qualificationtype = new FormControl('', Validators.required);

//QulaificationType - Equivalent
//Add Form Group - SSLC
this.sslcformgroup = this.formBuilder.group({
  sslccourseType:['', Validators.required],
  sslcinstitutionType: ['', Validators.required],
  sslcschoolCollege: ['', Validators.required],
  sslcmedium: ['', Validators.required],
  sslccity: ['', Validators.required], 
  sslctaluk: ['', Validators.required], 
  sslcdistrict: ['', Validators.required], 
  sslcstate: ['', Validators.required], 
  sslccountry: ['', Validators.required], 
  sslcyearOfPassing: ['', Validators.required], 
  sslcmarkObtained: ['', Validators.required], 
  sslcmaxMark: ['', Validators.required], 
  sslcpercentage: ['', Validators.required], 
  sslcorganisationType: ['', Validators.required], 
  });
  //Add Form Group - HSC
this.hscformgroup = this.formBuilder.group({
  hsccourseType:['', Validators.required], 
  hscinstitutionType: ['', Validators.required], 
  hscschoolCollege: ['', Validators.required], 
  hscmedium: ['', Validators.required], 
  hsccity: ['', Validators.required], 
  hsctaluk:['', Validators.required], 
  hscdistrict: ['', Validators.required], 
  hscstate: ['', Validators.required], 
  hsccountry: ['', Validators.required], 
  hscyearOfPassing:['', Validators.required], 
  hscmarkObtained: ['', Validators.required], 
  hscmaxMark: ['', Validators.required], 
  hscpercentage: ['', Validators.required], 
  hscorganisationType: ['', Validators.required], 
  });
  //Add Form Group - HSC
this.diplomaformgroup = this.formBuilder.group({
  diplomacourseType:['', Validators.required],
  diplomainstitutionType: ['', Validators.required],
  diplomaschoolCollege: ['', Validators.required],
  diplomamedium: ['', Validators.required],
  diplomacity: ['', Validators.required],
  diplomataluk: ['', Validators.required],
  diplomadistrict: ['', Validators.required],
  diplomastate: ['', Validators.required],
  diplomacountry: ['', Validators.required],
  diplomayearOfPassing: ['', Validators.required],
  diplomamarkObtained: ['', Validators.required],
  diplomamaxMark: ['', Validators.required],
  diplomapercentage: ['', Validators.required],
  diplomaorganisationType: ['', Validators.required],
  });
   //Add Form Group - HSC
this.degreeformgroup = this.formBuilder.group({
  degreecourseType:['', Validators.required],
  degreeinstitutionType: ['', Validators.required],
  degreeschoolCollege: ['', Validators.required],
  degreemedium: ['', Validators.required],
  degreecity: ['', Validators.required],
  degreetaluk:['', Validators.required],
  degreedistrict: ['', Validators.required],
  degreestate:['', Validators.required],
  degreecountry: ['', Validators.required],
  degreeyearOfPassing: ['', Validators.required],
  degreemarkObtained:['', Validators.required],
  degreemaxMark: ['', Validators.required],
  degreepercentage: ['', Validators.required],
  degreeorganisationType: ['', Validators.required],
  });
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
  admissionType: this.admissionType.value,
  admissionCategory: this.admissionCategory.value,
  coursecategory: this.coursecategory.value,
  courseProgram: this.courseProgram.value,
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
  sPhoto: this.getfileLoc
 };
 this.request.addBasicDetails(newBasicDetails).subscribe((res: any) => {
  console.log(newBasicDetails);
  this.viewData();
  });
   
}
// convenience getter for easy access to form fields
get f() { return this.addressformgroup.controls; }
addaddressdetails() {
  this.submitted = true;
  if (this.addressformgroup.invalid) {
    return;
    }
  this.request.addAddressDetails(this.addressformgroup.value).subscribe((res: any) => {
   console.log(this.addressformgroup.value);
   this.viewAddressData();
   });
    
 }
 addpaymentdetails() {
  if (this.registerForm.invalid) {
    return;
    }
  this.request.addPaymentDetails(this.registerForm.value).subscribe((res: any) => {
   console.log(this.registerForm.value);
   this.viewPaymentData();
   });
    
 }
 addFollowups() {
  if (this.followupsaddform.invalid) {
    return;
    }
  this.request.addFollowups(this.followupsaddform.value).subscribe((res: any) => {
   console.log(this.followupsaddform.value);
   this.viewFollowupsData();
   });
 }
 addsslcdetails() {
  if (this.sslcformgroup.invalid) {
    return;
    }
  this.request.addSSLCDetails(this.sslcformgroup.value).subscribe((res: any) => {
   console.log(this.sslcformgroup.value);
   this.viewSSLCDetails ();
   });
 }
 addhscdetails() {
  if (this.hscformgroup.invalid) {
    return;
    }
  this.request.addHSCDetails(this.hscformgroup.value).subscribe((res: any) => {
   console.log(this.hscformgroup.value);
   this.viewHSCDetails();
   });
 }
 adddiplomadetails() {
  if (this.diplomaformgroup.invalid) {
    return;
    }
  this.request.addDiplomaDetails(this.diplomaformgroup.value).subscribe((res: any) => {
   console.log(this.diplomaformgroup.value);
   this.viewDiplomaDetails();
   });
 }
 adddegreedetails() {
  if (this.degreeformgroup.invalid) {
    return;
    }
  this.request.addDegreeDetails(this.degreeformgroup.value).subscribe((res: any) => {
   console.log(this.degreeformgroup.value);
   this.viewDegreeDetails();
   });
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
viewAddressData() {
  this.request.getAddressDetails().subscribe((response) => {
    this.addressdetails = response;
    console.log(this.addressdetails);
  }, (error) => {
    console.log(error);
  });
 }
 viewPaymentData() {
  this.request.getPaymentDetails().subscribe((response) => {
    this.paymentdetails = response;
    console.log(this.paymentdetails);
  }, (error) => {
    console.log(error);
  });
 }
 viewFollowupsData() {
  this.request.getFollowups().subscribe((response) => {
    this.followups = response;
    console.log(this.followups);
  }, (error) => {
    console.log(error);
  });
 }
 viewSSLCDetails() {
  this.request.getSSLCDetails().subscribe((response) => {
    this.sslcDetails = response;
    console.log(this.sslcDetails);
  }, (error) => {
    console.log(error);
  });
 }
 viewHSCDetails() {
  this.request.getHSCDetails().subscribe((response) => {
    this.hscDetails = response;
    console.log(this.hscDetails);
  }, (error) => {
    console.log(error);
  });
 }
 viewDiplomaDetails() {
  this.request.getDiplomaDetails().subscribe((response) => {
    this.diplomaDetails = response;
    console.log(this.diplomaDetails);
  }, (error) => {
    console.log(error);
  });
 }
 viewDegreeDetails() {
  this.request.getDegreeDetails().subscribe((response) => {
    this.degreeDetails = response;
    console.log(this.degreeDetails);
  }, (error) => {
    console.log(error);
  });
 }
 

//Edit Function -paymentDetails
onEdit(paymentdetail) {
  this.Id = paymentdetail._id;
  this.request.fetchPaymentDetailsById(this.Id).subscribe((response) => {
  this.editpaymentDetailsdata = response[0];
  console.log(response);
  this.paymentDateValue = this.editpaymentDetailsdata.paymentDate;
  this.paymentMethodValue = this.editpaymentDetailsdata.paymentmethod;
  this.bankValue = this.editpaymentDetailsdata.bank;
  this.chequeDDDateValue = this.editpaymentDetailsdata.chequeDDDate;
  this.chequeDDNumberValue = this.editpaymentDetailsdata.chequeDDNumber;
  this.advanceFeeTypeValue = this.editpaymentDetailsdata.advanceFeeType;
  this.amountValue = this.editpaymentDetailsdata.amount;
  this.IdValue = this.editpaymentDetailsdata._id;
  
  this.editForm = this.formBuilder.group({
    paymentDate:[this.paymentDateValue, Validators.required],
    paymentmethod: [this.paymentMethodValue, Validators.required],
  bank: [this.bankValue, Validators.required],
  chequeDDDate: [this.chequeDDDateValue, Validators.required],
  chequeDDNumber: [this.chequeDDNumberValue, Validators.required],
  advanceFeeType: [this.advanceFeeTypeValue, Validators.required],
  amount: [this.amountValue, Validators.required]
  });
  console.log(this.editForm.value);
  });
  }
  onEditSubmit() {
    this.submitted = true;
    console.log(this.editForm.value);
    if (this.editForm.invalid) {
    return;
    }
    this.request.updatePaymentDetails(this.IdValue, this.editForm.value).subscribe((response: any) => {
      console.log(response);
    this.viewPaymentData();
    this.loadModal();
    });
    
    }

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
  
  this.addressEditformgroup = this.formBuilder.group({
    addresstype:[this.addressTypeValue, Validators.required],
    flatNo: [this.flatNoValue, Validators.required],
    streetLane: [this.streetLaneValue, Validators.required],
  area: [this.areaValue, Validators.required],
  city: [this.cityValue, Validators.required],
  district: [this.districtValue, Validators.required],
  pincode: [this.pincodeValue, Validators.required],
  state: [this.stateValue, Validators.required],
  country: [this.countryValue, Validators.required]
  });
  console.log(this.addressEditformgroup.value);
  });
  }
  onEditAdressSubmit() {
    this.submitted = true;
    console.log(this.addressEditformgroup.value);
    if (this.addressEditformgroup.invalid) {
    return;
    }
    this.request.updateAddressDetails(this.IdValue, this.addressEditformgroup.value).subscribe((response: any) => {
      console.log(response);
    this.viewAddressData();
    this.loadModal();
    });
    }
    //Edit Function -followups
onEditfollowups(followup) {
  this.Id = followup._id;
  this.request.fetchFollowupsById(this.Id).subscribe((response) => {
  this.editFollowupsdata = response[0];
  console.log(response);
  this.dateOfEnquiryValue = this.editFollowupsdata.dateOfEnquiry;
  this.modeOfEnquiryValue = this.editFollowupsdata.modeOfEnquiry;
  this.descriptionValue = this.editFollowupsdata.description;
  this.nextEnquiryDateValue = this.editFollowupsdata.nextEnquiryDate;
  this.nextEnquiryTimeValue = this.editFollowupsdata.nextEnquiryTime;
  this.IdValue = this.editFollowupsdata._id;
  
  this.followupseditform = this.formBuilder.group({
    dateOfEnquiry:[this.dateOfEnquiryValue, Validators.required],
    modeOfEnquiry: [this.modeOfEnquiryValue, Validators.required],
    description: [this.descriptionValue, Validators.required],
    nextEnquiryDate: [this.nextEnquiryDateValue, Validators.required],
    nextEnquiryTime: [this.nextEnquiryTimeValue, Validators.required]
  });
  console.log(this.followupseditform.value);
  });
  }
  onEditSubmitfollowups() {
    // this.submitted = true;
    console.log(this.followupseditform.value);
    if (this.followupseditform.invalid) {
    return;
    }
    this.request.updateFollowups(this.IdValue, this.followupseditform.value).subscribe((response: any) => {
      console.log(response);
    this.viewFollowupsData();
    this.loadModal();
    });
    
    }
    //To delete the basicdetails data
deleteBasicDetails(id: any) {
  this.request.deleteBasicDetails(id).subscribe(res => {
  swal(" Deleted Successfully "); 
  this.viewData();
  });
  }
    //To delete the paymentdetails data
deletePaymentDetails(id: any) {
  this.request.deletePaymentDetails(id).subscribe(res => {
  swal(" Deleted Successfully "); 
  this.viewPaymentData();
  });
  }
   //To delete the addressdetails data
deleteAddressDetails(id: any) {
  this.request.deleteAddressDetails(id).subscribe(res => {
  swal(" Deleted Successfully "); 
  this.viewAddressData();
  });
  }
   //To delete the followups data
deleteFollowups(id: any) {
  this.request.deleteFollowups(id).subscribe(res => {
  swal(" Deleted Successfully "); 
  this.viewFollowupsData();
  });
  }

//DropDown DataBinding
loadPaymentMethod() {
  this.request.getPaymentMethod().subscribe((response : any) => {
  this.paymentMethods = response;
  console.log(response);
  }, (error) => {
  console.log(error);
  });
  }
  loadAddressType() {
    this.request.getAddressType().subscribe((response : any) => {
    this.addressTypes = response;
    console.log(response);
    }, (error) => {
    console.log(error);
    });
    }
    loadQualificationType() {
      this.request.getQualificationType().subscribe((response : any) => {
      this.qualificationTypes = response;
      console.log(response);
      }, (error) => {
      console.log(error);
      });
      }
      loadGender() {
      this.request.getGender().subscribe((response : any) => {
      this.genders = response;
      console.log(response);
      }, (error) => {
      console.log(error);
      });
      }
      // loadInstitution() {
      //   this.request.getInstitution().subscribe((response : any) => {
      //   this.institutions = response;
      //   console.log(response);
      //   }, (error) => {
      //   console.log(error);
      //   });
      //   }
        loadBoard() {
          this.request.getBoard().subscribe((response : any) => {
          this.boards = response;
          console.log(response);
          }, (error) => {
          console.log(error);
          });
          }
          loadAdmissionType() {
            this.request.getAdmissiontype().subscribe((response : any) => {
            this.admissiontypes = response;
            console.log(response);
            }, (error) => {
            console.log(error);
            });
            }
            loadRefferalType() {
              this.request.getReferralType ().subscribe((response : any) => {
              this.referralTypes = response;
              console.log(response);
              }, (error) => {
              console.log(error);
              });
              }
            loadScholarshipCategory() {
             this.request.getScholarshipCategory().subscribe((response : any) => {
            this.scholarshipCategories = response;
            console.log(response);
             }, (error) => {
            console.log(error);
            });
            }
            // loadCourseCategory() {
            // this.request.getCoursecategory().subscribe((response : any) => {
            // this.coursecategories = response;
            // console.log(response);
            // }, (error) => {
            // console.log(error);
            // });
            //  }
            loadCourseProgram() {
            this.request.getCourseprogram().subscribe((response : any) => {
            this.courseprograms = response;
            console.log(response);
             }, (error) => {
             console.log(error);
             });
              }
            loadNationality() {
            this.request.getNationality().subscribe((response : any) => {
            this.nationalities = response;
            console.log(response);
            }, (error) => {
            console.log(error);
             });
            }
           loadReligion() {
           this.request.getReligion().subscribe((response : any) => {
            this.religions = response;
            console.log(response);
            }, (error) => {
            console.log(error);
            });
            }
            loadCommunity() {
            this.request.getCommunity().subscribe((response : any) => {
            this.communities = response;
            console.log(response);
            }, (error) => {
            console.log(error);
            });
            }
            loadCaste() {
            this.request.getCaste().subscribe((response : any) => {
            this.castes = response;
            console.log(response);
            }, (error) => {
            console.log(error);
            });
            }
            loadCourseType() {
              this.request.getCourseType().subscribe((response : any) => {
              this.coursetypes = response;
              console.log(response);
              }, (error) => {
              console.log(error);
              });
              }
              loadInstitutionType() {
                this.request.getInstitutionType().subscribe((response : any) => {
                this.institutionTypes = response;
                console.log(response);
                }, (error) => {
                console.log(error);
                });
                }
                loadMedium() {
                  this.request.getMedium().subscribe((response : any) => {
                  this.media = response;
                  console.log(response);
                  }, (error) => {
                  console.log(error);
                  });
                  }

    private loadModal() {
      $('#addModal').modal('hide'); //or $('#IDModal').modal('hide');
      $('#addModal').on('hidden.bs.modal', function () {
      $(this).find('form').trigger('reset');
      })
      $('#editModal').modal('hide'); //or $('#IDModal').modal('hide');
      $('#editModal ').on('hidden.bs.modal', function () {
      $(this).find('form').trigger('reset');
      })
      }
      ///////////////////////////////////////////////////////////////////////////////////
// Bind institution data
loadInstitution() {
  this.request.getInstitution().subscribe((response: any) => {
    console.log(response);
    this.institutions = response;
  }, (error) => {
    console.log(error);
  });
}
// Bind coursecategory data
onInstitutionChange(Institution: string) {
  console.log('institution',Institution)
  //this.loadCourseCategory(Institution);
   if (Institution) {
     this.request.getCoursecategorybyIns(Institution).subscribe((response: any) => {
       console.log(response);
       this.coursecategories = response;
     }, (error) => {
       console.log(error);
     });

   } else 

     this.coursecategories = null;
  }
   ///////////////////////////////////////////////////////////////////////////////////
  addCEcourseProgram()
  {
    const newcoursePro = {
      courseProgram: this.courseProgram.value,
    };
    this.request.addCEcourseProgram(newcoursePro).subscribe((res: any) => {
     console.log(newcoursePro);
     this.viewCEcourseProgram();
    //  this.courseProgram.value="";
     });
  }
  //To delete the basicdetails data
  deleteCEcourseProgram(id: any) {
    console.log(id);
  this.request.deleteCEcourseProgram(id).subscribe(res => {
  swal(" Deleted Successfully "); 
  this.viewCEcourseProgram();
  });
  }
  viewCEcourseProgram() {
    this.request.getCEcourseProgram().subscribe((response) => {
      this.cecourseprograms = response;
      console.log(this.cecourseprograms);
    }, (error) => {
      console.log(error);
    });
   }
    ///////////////////////////////////////////////////////////////////////////////////
     ///////////////////////////////////////////////////////////////////////////////////
// Bind institution data
loadCourseCategory() {
  this.request.getCoursecategory().subscribe((response: any) => {
    console.log(response);
    this.coursecategories = response;
  }, (error) => {
    console.log(error);
  });
}
// Bind coursecategory data
onCourseCategoryChange(CourseCategory: string) {
  console.log('courseCategory',CourseCategory)
  //this.loadCourseCategory(Institution);
   if (CourseCategory) {
     this.request.getCoursecategorybycourPro(CourseCategory).subscribe((response: any) => {
       console.log(response);
       this.courseprograms = response;
     }, (error) => {
       console.log(error);
     });

   } else 

     this.courseprograms = null;
  }
  
    ///////////////////////////////////////////////////////////////////////////////////
  ngOnInit() {
    this.viewData();
    this.viewAddressData();
    this.viewPaymentData();
    this.viewFollowupsData();
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
    this.viewSSLCDetails ();
    this.viewHSCDetails();
    this.viewDiplomaDetails();
    this.viewDegreeDetails();
    this.loadCourseType();
    this.loadInstitutionType();
    this.loadMedium();
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      console.log('ImageUpload:uploaded:', item, status, response);
      const resPath = JSON.parse(response);
      this.getfileLoc = resPath.result;
    };
this.viewCEcourseProgram();
  }
}
