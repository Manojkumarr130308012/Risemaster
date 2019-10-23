import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { RequestService } from '../../services/request.service';
import { ActivatedRoute } from '@angular/router';
import { FileSelectDirective, FileUploader } from 'ng2-file-upload';
const URL = 'http://localhost:3000/staffFileUpload/upload';
declare const $: any;
declare const M: any;
declare const swal: any;

@Component({
  selector: 'app-staff-details',
  templateUrl: './staff-details.component.html',
  styleUrls: ['./staff-details.component.scss']
})
export class StaffDetailsComponent implements OnInit {

  staffprofile: any;
  staffprofiles: any;
  staffCode: any;
  stafftype: any;
  staffrole: any;
  salutation: any;
  firstName: any;
  lastName: any;
  designation: any;
  doj: any;
  gender: any;
  dob: any;
  employeeCode: any;
  paytype: any;
  emailId: any;
  mobileNo: any;
  emergencyNo: any;
  maritalstatus: any;
  bloodgroup: any;

  staffCode2: any;
  stafftype2: any;
  staffrole2: any;
  salutation2: any;
  firstName2: any;
  lastName2: any;
  designation2: any;
  doj2: any;
  gender2: any;
  dob2: any;
  employeeCode2: any;
  paytype2: any;
  emailId2: any;
  mobileNo2: any;
  emergencyNo2: any;
  maritalstatus2: any;
  bloodgroup2: any;

  photoValue: any;
  public uploader: FileUploader = new FileUploader({ url: URL, itemAlias: 'photo' });
  getfileLoc: any;
  photoLocation: any;
  photoLocationValue: any;
  photoLocation2: any;

  public institution: any;
  institutionValue: any;
  institutions;
  public message: string;
  Id: any;
  stafftypes;
  staffroles;
  salutations;
  genders;
  paytypes;
  maritalstatuses;
  bloodgroups;

  public edit = false;
  IdValue: any;
  id: any;
  editStaffdetails;
  staffCodeValue: any;
  stafftypeValue: any;
  staffroleValue: any;
  salutationValue: any;
  firstNameValue: any;
  lastNameValue: any;
  designationValue: any;
  dojValue: any;
  genderValue: any;
  dobValue: any;
  employeeCodeValue: any;
  paytypeValue: any;
  emailIdValue: any;
  mobileNoValue: any;
  emergencyNoValue: any;
  maritalstatusValue: any;
  bloodgroupValue: any;

  // Contact
  addContactForm: FormGroup;
  editContactForm: FormGroup;
  submitted = false;
  addressType: any;
  address1: any;
  address2:any;
  city: any;
  district: any;
  state: any;
  country: any;
  pin: any;
  addressTypes;
  staffcontacts;
  addresstypes: any;
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

  // Identity
  addIdentityForm: FormGroup;
  editIdentityForm: FormGroup;
  identityType: any;
  identityValue: any;
  issueAuthority:any;
  validFrom: any;
  validTo: any;
  staffidentities;
  editIdentity: any;
  identityTypeValue: any;
  identityValueValue: any;
  issueAuthorityValue: any;
  validFromValue: any;
  validToValue: any;
  IdValue3: any;

  // Work Profile
  editWorkProfileForm: FormGroup;
  abbrevation: any;
  dor: any;
  reason: any;
  abbrevation2: any;
  dor2: any;
  reason2: any;
  abbrevationValue: any;
  dorValue: any;
  reasonValue: any;
  editWorkProfile: any;

  // Experience
  addExperienceForm: FormGroup;
  editExperienceForm: FormGroup;
  organization: any;
  expDesignation: any;
  natureOfExperience: any;
  place: any;
  fromDate: any;
  toDate: any;
  experiences;
  editExperience: any;
  organizationValue: any;
  expDesignationValue: any;
  natureOfExperienceValue: any;
  placeValue: any;
  fromDateValue: any;
  toDateValue: any;
  IdValue4: any;

  // Education
  addEducationForm: FormGroup;
  editEducationForm: FormGroup;
  degree: any;
  specialization: any;
  institutionType: any;
  institutionName: any;
  eyop: any;
  modeOfStudy: any;
  epercentage: any;
  educations;
  editEducation: any;
  degreeValue: any;
  specializationValue: any;
  institutionTypeValue: any;
  institutionNameValue: any;
  eyopValue: any;
  modeOfStudyValue: any;
  epercentageValue: any;
  IdValue5: any;

  // Course
  addCourseForm: FormGroup;
  editCourseForm: FormGroup;
  courseType: any;
  cInstitutionType: any;
  cInstitutionName: any;
  modeOfCourse: any;
  durationOfCourse: any;
  uom: any;
  cyop: any;
  cpercentage: any;
  courses;
  editCourse: any;
  courseTypeValue: any;
  cInstitutionTypeValue: any;
  cInstitutionNameValue: any;
  modeOfCourseValue: any;
  durationOfCourseValue: any;
  uomValue: any;
  cyopValue: any;
  cpercentageValue: any;
  IdValue6: any;

  constructor(
    private formBuilder: FormBuilder,
    private request: RequestService,
    private router: Router,
    private route: ActivatedRoute) {
    this.route.queryParams.subscribe((params: any) => {
      this.edit = params.edit;
      this.id = params.id;
    });
    // Edit Form
    this.staffCode2 = new FormControl('', Validators.required);
    this.stafftype2 = new FormControl('', Validators.required);
    this.staffrole2 = new FormControl('', Validators.required);
    this.salutation2 = new FormControl('', Validators.required);
    this.firstName2 = new FormControl('', Validators.required);
    this.lastName2 = new FormControl('', Validators.required);
    this.designation2 = new FormControl('', Validators.required);
    this.doj2 = new FormControl('', Validators.required);
    this.gender2 = new FormControl('', Validators.required);
    this.dob2 = new FormControl('', Validators.required);
    this.employeeCode2 = new FormControl('', Validators.required);
    this.paytype2 = new FormControl('', Validators.required);
    this.emailId2 = new FormControl('', Validators.required);
    this.mobileNo2 = new FormControl('', Validators.required);
    this.emergencyNo2 = new FormControl('', Validators.required);
    this.maritalstatus2 = new FormControl('', Validators.required);
    this.bloodgroup2 = new FormControl('', Validators.required);
    this.photoLocation2 = new FormControl('', Validators.required);

    // this.abbrevation2 = new FormControl('', Validators.required);
    // this.dor2 = new FormControl('', Validators.required);
    // this.reason2 = new FormControl('', Validators.required);

    //Add addContact Form Group
    this.editWorkProfileForm = this.formBuilder.group({
      staffCode:['', Validators.required],
      employeeCode:['', Validators.required],
      stafftype:['', Validators.required],
      staffrole:['', Validators.required],
      designation:['', Validators.required],
      abbrevation:[''],
      doj:['', Validators.required],
      dor:[''],
      reason:[''],
  });

    //Add addContact Form Group
    this.addContactForm = this.formBuilder.group({
      addressType:['', Validators.required],
      address1:['', Validators.required],
      address2:['', Validators.required],
      city:['', Validators.required],
      state:['', Validators.required],
      district:['', Validators.required],
      country:['', Validators.required],
      pin:['', Validators.required],
  });
  //Add editContact Form Group
  this.editContactForm = this.formBuilder.group({
    addressType:['', Validators.required],
    address1:['', Validators.required],
    address2:['', Validators.required],
    city:['', Validators.required],
    state:['', Validators.required],
    district:['', Validators.required],
    country:['', Validators.required],
    pin:['', Validators.required],
});
//Add addIdentity Form Group
this.addIdentityForm = this.formBuilder.group({
  identityType:['', Validators.required],
  identityValue:['', Validators.required],
  issueAuthority:['', Validators.required],
  validFrom:['', Validators.required],
  validTo:['', Validators.required],
});
//Edit editIdentity Form Group
this.editIdentityForm = this.formBuilder.group({
  identityType:['', Validators.required],
  identityValue:['', Validators.required],
  issueAuthority:['', Validators.required],
  validFrom:['', Validators.required],
  validTo:['', Validators.required],
});
//Add addExperience Form Group
this.addExperienceForm = this.formBuilder.group({
  organization:['', Validators.required],
  expDesignation:['', Validators.required],
  natureOfExperience:['', Validators.required],
  place:['', Validators.required],
  fromDate:['', Validators.required],
  toDate:['', Validators.required]
});
//Edit editExperience Form Group
this.editExperienceForm = this.formBuilder.group({
  organization:['', Validators.required],
  expDesignation:['', Validators.required],
  natureOfExperience:['', Validators.required],
  place:['', Validators.required],
  fromDate:['', Validators.required],
  toDate:['', Validators.required]
});
//Add addEducation Form Group
this.addEducationForm = this.formBuilder.group({
  degree:['', Validators.required],
  specialization:['', Validators.required],
  institutionType:['', Validators.required],
  institutionName:['', Validators.required],
  eyop:['', Validators.required],
  modeOfStudy:['', Validators.required],
  epercentage:['', Validators.required]
});
//Edit editEducation Form Group
this.editEducationForm = this.formBuilder.group({
  degree:['', Validators.required],
  specialization:['', Validators.required],
  institutionType:['', Validators.required],
  institutionName:['', Validators.required],
  eyop:['', Validators.required],
  modeOfStudy:['', Validators.required],
  epercentage:['', Validators.required]
});
//Add addCourse Form Group
this.addCourseForm = this.formBuilder.group({
  courseType:['', Validators.required],
  cInstitutionType:['', Validators.required],
  cInstitutionName:['', Validators.required],
  modeOfCourse:['', Validators.required],
  durationOfCourse:['', Validators.required],
  uom:['', Validators.required],
  cyop:['', Validators.required],
  cpercentage:['', Validators.required]
});
//Edit editCourse Form Group
this.editCourseForm = this.formBuilder.group({
  courseType:['', Validators.required],
  cInstitutionType:['', Validators.required],
  cInstitutionName:['', Validators.required],
  modeOfCourse:['', Validators.required],
  durationOfCourse:['', Validators.required],
  uom:['', Validators.required],
  cyop:['', Validators.required],
  cpercentage:['', Validators.required]
});
  }

  public setMessage(message) {
    return this.message = message;
  }

  photosubmit() {
    this.uploader.uploadAll();
  }

  // Bind institution data
  loadInstitution() {
    this.request.getInstitution().subscribe((response: any) => {
      console.log(response);
      this.institutions = response;
    }, (error) => {
      console.log(error);
    });
  }

  // Bind staff type data
  loadStaffType() {
    this.request.getStafftype().subscribe((response: any) => {
      console.log(response);
      this.stafftypes = response;
    }, (error) => {
      console.log(error);
    });
  }

  // Bind staff role data
  loadStaffRole() {
    this.request.getStaffrole().subscribe((response: any) => {
      console.log(response);
      this.staffroles = response;
    }, (error) => {
      console.log(error);
    });
  }

  // Bind Salutation data
  loadSalutation() {
    this.request.getSalutation().subscribe((response: any) => {
      console.log(response);
      this.salutations = response;
    }, (error) => {
      console.log(error);
    });
  }

  // Bind gender data
  loadGender() {
    this.request.getGender().subscribe((response: any) => {
      console.log(response);
      this.genders = response;
    }, (error) => {
      console.log(error);
    });
  }

  // Bind paytype data
  loadPaytype() {
    this.request.getPaytype().subscribe((response: any) => {
      console.log(response);
      this.paytypes = response;
    }, (error) => {
      console.log(error);
    });
  }
  // Bind maritalstatus data
  loadMaritalstatus() {
    this.request.getMaritalstatus().subscribe((response: any) => {
      console.log(response);
      this.maritalstatuses = response;
    }, (error) => {
      console.log(error);
    });
  }
  // Bind bloodgroup data
  loadBloodgroup() {
    this.request.getBloodgroup().subscribe((response: any) => {
      console.log(response);
      this.bloodgroups = response;
    }, (error) => {
      console.log(error);
    });
  }

  viewStaffProfile(id: string) {
    console.log('id', id)
    if (id) {
      this.request.getStaffProfilebyIdValue(id).subscribe((response) => {
        console.log('res', response);
        this.staffprofiles = response;
        console.log(this.staffprofiles);
      }, (error) => {
        console.log(error);
      });
    }
  }

  // To edit staff details
  onEdit(staffprofile) {
    console.log(this.id);
    this.Id = staffprofile._id;
    console.log('id', this.Id);
    this.request.getStaffProfilebyIdValue(this.Id).subscribe((response) => {
      console.log('data', response);
      this.editStaffdetails = response[0];
      this.staffCodeValue = this.editStaffdetails.staffCode;
      this.stafftypeValue = this.editStaffdetails.stafftype;
      this.staffroleValue = this.editStaffdetails.staffrole;
      this.salutationValue = this.editStaffdetails.salutation;
      this.firstNameValue = this.editStaffdetails.firstName;
      this.lastNameValue = this.editStaffdetails.lastName;
      this.designationValue = this.editStaffdetails.designation;
      this.dojValue = this.editStaffdetails.doj;
      this.genderValue = this.editStaffdetails.gender;
      this.dobValue = this.editStaffdetails.dob;
      this.employeeCodeValue = this.editStaffdetails.employeeCode;
      this.paytypeValue = this.editStaffdetails.paytype;
      this.emailIdValue = this.editStaffdetails.emailId;
      this.mobileNoValue = this.editStaffdetails.mobileNo;
      this.emergencyNoValue = this.editStaffdetails.emergencyNo;
      this.maritalstatusValue = this.editStaffdetails.maritalstatus;
      this.bloodgroupValue = this.editStaffdetails.bloodgroup;
      this.photoLocationValue = this.editStaffdetails.photoLocation;
      this.IdValue = this.editStaffdetails._id;

      this.staffCode2 = new FormControl(this.staffCodeValue, [Validators.required]);
      this.stafftype2 = new FormControl(this.stafftypeValue, [Validators.required]);
      this.staffrole2 = new FormControl(this.staffroleValue, [Validators.required]);
      this.salutation2 = new FormControl(this.salutationValue, [Validators.required]);
      this.firstName2 = new FormControl(this.firstNameValue, [Validators.required]);
      this.lastName2 = new FormControl(this.lastNameValue, [Validators.required]);
      this.designation2 = new FormControl(this.designationValue, [Validators.required]);
      this.doj2 = new FormControl(this.dojValue, [Validators.required]);
      this.gender2 = new FormControl(this.genderValue, [Validators.required]);
      this.dob2 = new FormControl(this.dobValue, [Validators.required]);
      this.employeeCode2 = new FormControl(this.employeeCodeValue, [Validators.required]);
      this.paytype2 = new FormControl(this.paytypeValue, [Validators.required]);
      this.emailId2 = new FormControl(this.emailIdValue, [Validators.required]);
      this.mobileNo2 = new FormControl(this.mobileNoValue, [Validators.required]);
      this.emergencyNo2 = new FormControl(this.emergencyNoValue, [Validators.required]);
      this.maritalstatus2 = new FormControl(this.maritalstatusValue, [Validators.required]);
      this.bloodgroup2 = new FormControl(this.bloodgroupValue, [Validators.required]);
      this.photoLocation2 = new FormControl(this.photoLocationValue, [Validators.required]);
    });
  }
  updateStaffProfile() {
    const staffprofile = {
      staffCode: this.staffCode2.value,
      stafftype: this.stafftype2.value,
      staffrole: this.staffrole2.value,
      salutation: this.salutation2.value,
      firstName: this.firstName2.value,
      lastName: this.lastName2.value,
      designation: this.designation2.value,
      doj: this.doj2.value,
      gender: this.gender2.value,
      dob: this.dob2.value,
      employeeCode: this.employeeCode2.value,
      paytype: this.paytype2.value,
      emailId: this.emailId2.value,
      mobileNo: this.mobileNo2.value,
      emergencyNo: this.emergencyNo2.value,
      maritalstatus: this.maritalstatus2.value,
      bloodgroup: this.bloodgroup2.value,
      photoLocation: this.getfileLoc,

    }
    this.request.updateStaffProfile(this.IdValue, staffprofile).subscribe((res: any) => {
      if (res.status == 'success') {
        swal("Updated Sucessfully");
        this.getfileLoc="";
        this.loadModal();
        this.viewStaffProfile(this.id);
      }
      else if (res.status == 'error') {
        this.setMessage(res.err);
      }

    }, (err) => {
      console.log(err);
      this.setMessage(err);
    });
  }

  private loadModal() {

    $('#addModal').modal('hide'); //or  $('#IDModal').modal('hide');
    $('#addModal').on('hidden.bs.modal', function () {
      $(this).find('form').trigger('reset');
      //$('#form_advanced_validation').trigger('reset');
      var v = $('#form_advanced_validation').validate();
      v.resetForm();
      $('.progress .progress-bar').css('width', 0);
      $('.progress .progress-bar').html('');

    })
    $('#editModal').modal('hide'); //or  $('#IDModal').modal('hide');
    $('#editModal ').on('hidden.bs.modal', function () {
      $(this).find('form').trigger('reset');
      var v = $('#form_advanced_validation1').validate();
      v.resetForm();
      $('.progress .progress-bar').css('width', 0);
      $('.progress .progress-bar').html('');
    })
  }

  // Contact Form 
  loadAddressType() {
    this.request.getAddressType().subscribe((response: any) => {
      console.log(response);
      this.addresstypes = response;
    }, (error) => {
      console.log(error);
    });
  }

viewStaffContactById(id : string) {
   if (id){
   this.request.getStaffContactById(id).subscribe((response) => {
      console.log(response);
      this.staffcontacts = response;
      }, (error) => {
        console.log(error);
      });
    } else
       this.staffcontacts = null;
  }

deleteStaffContact(id: any) {
    this.request.deleteStaffContact(id).subscribe(res => {
      console.log(id);
      this.viewStaffContactById(this.id);
    console.log('Deleted');
    });
  }

onAddContact() {
      this.submitted = true;
      if (this.addContactForm.invalid) {
          return;
      }
      let newstaffContact = {
        addressType : this.addContactForm.get('addressType').value,
        address1 : this.addContactForm.get('address1').value,
        address2 : this.addContactForm.get('address2').value,
        city : this.addContactForm.get('city').value,
        district : this.addContactForm.get('district').value,
        state : this.addContactForm.get('state').value,
        country : this.addContactForm.get('country').value,
        pin : this.addContactForm.get('pin').value,
        id : this.id,
        }
     this.request.addStaffContact(newstaffContact).subscribe((res: any) => {
      if (res.status == 'error') {
        this.setMessage(res.error);
      }
      else if (res.status == 'success') {
        swal("Added Sucessfully");
        this.viewStaffContactById(this.id);
        this.loadStaffContact();
      }
      }, (error) => {
        this.setMessage(error);
      });
        console.log(newstaffContact);
  }

  onEditContact(id: any){
    console.log('conid', id);
    this.request.fetchStaffContactById(id).subscribe((response) => {     
      this.editContact=response[0];     
      console.log(response);
          this.addressTypeValue=this.editContact.addressType;
          this.address1Value=this.editContact.address1;
          this.address2Value=this.editContact.address2;
          this.cityValue=this.editContact.city;
          this.districtValue=this.editContact.district;
          this.stateValue=this.editContact.state;
          this.countryValue=this.editContact.country;
          this.pinValue=this.editContact.pin;
          this.IdValue2=this.editContact._id;
      
          
      this.editContactForm = this.formBuilder.group({
        addressType:[this.addressTypeValue, Validators.required],
        address1:[this.address1Value, Validators.required],
        address2:[this.address2Value, Validators.required],
        city:[this.cityValue, Validators.required],
        district:[this.districtValue, Validators.required],
        state:[this.stateValue, Validators.required],
        country:[this.countryValue, Validators.required],
        pin:[this.pinValue, Validators.required],
      });
      console.log(this.editContactForm.value);
    });
  }
  onEditContactSubmit() {
    this.submitted = true;
    console.log(this.editContactForm.value);
    if (this.editContactForm.invalid) {
        return;
      }
      console.log('edit',this.IdValue2);
  this.request.updateStaffContact(this.IdValue2,this.editContactForm.value).subscribe((res : any) => {
    if (res.status == 'success') {
      swal("Updated Sucessfully");     
      this.loadStaffContact();
      this.viewStaffContactById(this.id);
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
get f() { return this.addContactForm.controls; }
get f2() { return this.editContactForm.controls; }

private loadStaffContact(){
  $('#addcontactModal').modal('hide'); //or  $('#IDModal').modal('hide');
  $('#addcontactModal').on('hidden.bs.modal', function () {
  $(this).find('form').trigger('reset');
 });

 $('#editcontactModal').modal('hide'); //or  $('#IDModal').modal('hide');
 $('#editcontactModal').on('hidden.bs.modal', function () {
 $(this).find('form').trigger('reset');
});
}

// Identity Form 

  viewStaffIdentityById(id : string) {
    if (id){
    this.request.getStaffIdentityById(id).subscribe((response) => {
       console.log('viewStaffIdentityById',response);
       this.staffidentities = response;
       }, (error) => {
         console.log(error);
       });
     } else
        this.staffidentities = null;
   }

deleteStaffIdentity(id: any) {
this.request.deleteStaffIdentity(id).subscribe(res => {
  console.log(id);
  this.viewStaffIdentityById(this.id);
console.log('Deleted');
});
}

onAddIdentity() {
  this.submitted = true;
  if (this.addIdentityForm.invalid) {
      return;
  }
  let newstaffIdentity = {
    identityType : this.addIdentityForm.get('identityType').value,
    identityValue : this.addIdentityForm.get('identityValue').value,
    issueAuthority : this.addIdentityForm.get('issueAuthority').value,
    validFrom : this.addIdentityForm.get('validFrom').value,
    validTo : this.addIdentityForm.get('validTo').value,
    id : this.id,
    }
 this.request.addStaffIdentity(newstaffIdentity).subscribe((res: any) => {
   console.log('idy', res);
  if (res.status == 'error') {
    this.setMessage(res.error);
  }
  else if (res.status == 'success') {
    swal("Added Sucessfully");
    this.viewStaffIdentityById(this.id);
    this.loadStaffIdentity();
  }
  }, (error) => {
    this.setMessage(error);
  });
    console.log(newstaffIdentity);
}

onEditIdentity(id: any){
  console.log('idnyid', id);
  this.request.fetchStaffIdentityById(id).subscribe((response) => {     
    this.editIdentity=response[0];     
    console.log(response);
        this.identityTypeValue=this.editIdentity.identityType;
        this.identityValueValue=this.editIdentity.identityValue;
        this.issueAuthorityValue=this.editIdentity.issueAuthority;
        this.validFromValue=this.editIdentity.validFrom;
        this.validToValue=this.editIdentity.validTo;
        this.IdValue3=this.editIdentity._id;
      
    this.editIdentityForm = this.formBuilder.group({
      identityType:[this.identityTypeValue, Validators.required],
      identityValue:[this.identityValueValue, Validators.required],
      issueAuthority:[this.issueAuthorityValue, Validators.required],
      validFrom:[this.validFromValue, Validators.required],
      validTo:[this.validToValue, Validators.required],
    });
    console.log(this.editIdentityForm.value);
  });
}
onEditIdentitySubmit() {
  this.submitted = true;
  console.log(this.editIdentityForm.value);
  if (this.editIdentityForm.invalid) {
      return;
    }
this.request.updateStaffIdentity(this.IdValue3,this.editIdentityForm.value).subscribe((res : any) => {
  console.log('idy', res);
  if (res.status == 'success') {
    swal("Updated Sucessfully");     
    this.viewStaffIdentityById(this.id);
    this.loadStaffIdentity();
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

private loadStaffIdentity(){
  $('#addidentityModal').modal('hide'); //or  $('#IDModal').modal('hide');
  $('#addidentityModal').on('hidden.bs.modal', function () {
  $(this).find('form').trigger('reset');
 });

 $('#editidentityModal').modal('hide'); //or  $('#IDModal').modal('hide');
 $('#editidentityModal').on('hidden.bs.modal', function () {
 $(this).find('form').trigger('reset');
});
}

// Work Profile
viewStaffWorkprofile(id: string) {
  console.log('id', id)
  if (id) {
    this.request.getStaffWorkprofilebyIdValue(id).subscribe((response) => {
      console.log('res', response);
      this.staffprofiles = response;
      console.log(this.staffprofiles);
    }, (error) => {
      console.log(error);
    });
  }
}

onEditWorkProfile(staffprofile){
  console.log(this.id);
    this.request.getStaffProfilebyIdValue(this.id).subscribe((response) => {
      console.log('data', response);    
    this.editWorkProfile=response[0];     
    console.log(response);
        this.staffCodeValue=this.editWorkProfile.staffCode;
        this.employeeCodeValue=this.editWorkProfile.employeeCode;
        this.stafftypeValue=this.editWorkProfile.stafftype;
        this.staffroleValue=this.editWorkProfile.staffrole;
        this.designationValue=this.editWorkProfile.designation;
        this.abbrevationValue=this.editWorkProfile.abbrevation;
        this.dojValue=this.editWorkProfile.doj;
        this.dorValue=this.editWorkProfile.dor;
        this.reasonValue=this.editWorkProfile.reason;
        this.IdValue=this.editWorkProfile._id;
      
    this.editWorkProfileForm = this.formBuilder.group({
      staffCode:[this.staffCodeValue, Validators.required],
      employeeCode:[this.employeeCodeValue, Validators.required],
      stafftype:[this.stafftypeValue, Validators.required],
      staffrole:[this.staffroleValue, Validators.required],
      designation:[this.designationValue, Validators.required],
      abbrevation:[this.abbrevationValue],
      doj:[this.dojValue, Validators.required],
      dor:[this.dorValue],
      reason:[this.reasonValue],
    });
    console.log(this.editWorkProfileForm.value);
  });
}
onEditWorkProfileSubmit() {
  this.submitted = true;
  console.log(this.editWorkProfileForm.value);
  if (this.editWorkProfileForm.invalid) {
      return;
    }
    this.request.updateStaffWorkProfile(this.IdValue, this.editWorkProfileForm.value).subscribe((res: any) => {
  console.log('wp', res);
  if (res.status == 'success') {
    swal("Updated Sucessfully");     
    this.viewStaffWorkprofile(this.id);
    this.loadStaffWorkprofile();
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
get w() { return this.editWorkProfileForm.controls; }

private loadStaffWorkprofile() {
  $('#editworkprofileModal').modal('hide'); //or  $('#IDModal').modal('hide');
 $('#editworkprofileModal').on('hidden.bs.modal', function () {
 $(this).find('form').trigger('reset');
});
}

  // Experience Form 

  viewStaffExperienceById(id : string) {
    if (id){
    this.request.getStaffExperienceById(id).subscribe((response) => {
       console.log('viewStaffExperienceById',response);
       this.experiences = response;
       }, (error) => {
         console.log(error);
       });
     } else
        this.experiences = null;
   }

deleteStaffExperience(id: any) {
this.request.deleteStaffExperience(id).subscribe(res => {
  console.log(id);
  this.viewStaffExperienceById(this.id);
console.log('Deleted');
});
}

onAddExperience() {
  this.submitted = true;
  if (this.addExperienceForm.invalid) {
      return;
  }
  let newstaffExperience = {
    organization : this.addExperienceForm.get('organization').value,
    expDesignation : this.addExperienceForm.get('expDesignation').value,
    natureOfExperience : this.addExperienceForm.get('natureOfExperience').value,
    place : this.addExperienceForm.get('place').value,
    fromDate : this.addExperienceForm.get('fromDate').value,
    toDate : this.addExperienceForm.get('toDate').value,
    id : this.id,
    }
 this.request.addStaffExperience(newstaffExperience).subscribe((res: any) => {
   console.log('idy', res);
  if (res.status == 'error') {
    this.setMessage(res.error);
  }
  else if (res.status == 'success') {
    swal("Added Sucessfully");
    this.viewStaffExperienceById(this.id);
    this.loadStaffExperience();
  }
  }, (error) => {
    this.setMessage(error);
  });
    console.log(newstaffExperience);
}

onEditExperience(id: any){
  console.log('expid', id);
  this.request.fetchStaffExperienceById(id).subscribe((response) => {     
    this.editExperience=response[0];     
    console.log(response);
        this.organizationValue=this.editExperience.organization;
        this.expDesignationValue=this.editExperience.expDesignation;
        this.natureOfExperienceValue=this.editExperience.natureOfExperience;
        this.placeValue=this.editExperience.place;
        this.fromDateValue=this.editExperience.fromDate;
        this.toDateValue=this.editExperience.toDate;
        this.IdValue4=this.editExperience._id;
      
    this.editExperienceForm = this.formBuilder.group({
      organization:[this.organizationValue, Validators.required],
      expDesignation:[this.expDesignationValue, Validators.required],
      natureOfExperience:[this.natureOfExperienceValue, Validators.required],
      place:[this.placeValue, Validators.required],
      fromDate:[this.fromDateValue, Validators.required],
      toDate:[this.toDateValue, Validators.required],
    });
    console.log(this.editExperienceForm.value);
  });
}
onEditExperienceSubmit() {
  this.submitted = true;
  console.log(this.editExperienceForm.value);
  if (this.editExperienceForm.invalid) {
      return;
    }
this.request.updateStaffExperience(this.IdValue4,this.editExperienceForm.value).subscribe((res : any) => {
  console.log('idy', res);
  if (res.status == 'success') {
    swal("Updated Sucessfully");     
    this.viewStaffExperienceById(this.id);
    this.loadStaffExperience();
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
get e() { return this.addExperienceForm.controls; }
get e2() { return this.editExperienceForm.controls; }

private loadStaffExperience(){
  $('#addExperienceModal').modal('hide'); //or  $('#IDModal').modal('hide');
  $('#addExperienceModal').on('hidden.bs.modal', function () {
  $(this).find('form').trigger('reset');
 });

 $('#editExperienceModal').modal('hide'); //or  $('#IDModal').modal('hide');
 $('#editExperienceModal').on('hidden.bs.modal', function () {
 $(this).find('form').trigger('reset');
});
}

// Education Form 

viewStaffEducationById(id : string) {
  if (id){
  this.request.getStaffEducationById(id).subscribe((response) => {
     console.log('viewStaffEducationById',response);
     this.educations = response;
     }, (error) => {
       console.log(error);
     });
   } else
      this.educations = null;
 }

deleteStaffEducation(id: any) {
this.request.deleteStaffEducation(id).subscribe(res => {
console.log(id);
this.viewStaffEducationById(this.id);
console.log('Deleted');
});
}

onAddEducation() {
this.submitted = true;
if (this.addEducationForm.invalid) {
    return;
}
let newstaffEducation = {
  degree : this.addEducationForm.get('degree').value,
  specialization : this.addEducationForm.get('specialization').value,
  institutionType : this.addEducationForm.get('institutionType').value,
  institutionName : this.addEducationForm.get('institutionName').value,
  eyop : this.addEducationForm.get('eyop').value,
  modeOfStudy : this.addEducationForm.get('modeOfStudy').value,
  epercentage : this.addEducationForm.get('epercentage').value,
  id : this.id,
  }
this.request.addStaffEducation(newstaffEducation).subscribe((res: any) => {
 console.log('edu', res);
if (res.status == 'error') {
  this.setMessage(res.error);
}
else if (res.status == 'success') {
  swal("Added Sucessfully");
  this.viewStaffEducationById(this.id);
  this.loadStaffEducation();
}
}, (error) => {
  this.setMessage(error);
});
  console.log(newstaffEducation);
}

onEditEducation(id: any){
console.log('eduid', id);
this.request.fetchStaffEducationById(id).subscribe((response) => {     
  this.editEducation=response[0];     
  console.log(response);
      this.degreeValue=this.editEducation.degree;
      this.specializationValue=this.editEducation.specialization;
      this.institutionTypeValue=this.editEducation.institutionType;
      this.institutionNameValue=this.editEducation.institutionName;
      this.eyopValue=this.editEducation.eyop;
      this.modeOfStudyValue=this.editEducation.modeOfStudy;
      this.epercentageValue=this.editEducation.epercentage;
      this.IdValue5=this.editEducation._id;
    
  this.editEducationForm = this.formBuilder.group({
    degree:[this.degreeValue, Validators.required],
    specialization:[this.specializationValue, Validators.required],
    institutionType:[this.institutionTypeValue, Validators.required],
    institutionName:[this.institutionNameValue, Validators.required],
    eyop:[this.eyopValue, Validators.required],
    modeOfStudy:[this.modeOfStudyValue, Validators.required],
    epercentage:[this.epercentageValue, Validators.required],
  });
  console.log(this.editEducationForm.value);
});
}
onEditEducationSubmit() {
this.submitted = true;
console.log(this.editEducationForm.value);
if (this.editEducationForm.invalid) {
    return;
  }
this.request.updateStaffEducation(this.IdValue5,this.editEducationForm.value).subscribe((res : any) => {
console.log('edu', res);
if (res.status == 'success') {
  swal("Updated Sucessfully");     
  this.viewStaffEducationById(this.id);
  this.loadStaffEducation();
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
get e3() { return this.addEducationForm.controls; }
get e4() { return this.editEducationForm.controls; }

private loadStaffEducation(){
$('#addEducationModal').modal('hide'); //or  $('#IDModal').modal('hide');
$('#addEducationModal').on('hidden.bs.modal', function () {
$(this).find('form').trigger('reset');
});

$('#editEducationModal').modal('hide'); //or  $('#IDModal').modal('hide');
$('#editEducationModal').on('hidden.bs.modal', function () {
$(this).find('form').trigger('reset');
});
}

// Course Form 

viewStaffCourseById(id : string) {
  if (id){
  this.request.getStaffCourseById(id).subscribe((response) => {
     console.log('viewStaffCourseById',response);
     this.courses = response;
     }, (error) => {
       console.log(error);
     });
   } else
      this.courses = null;
 }

deleteStaffCourse(id: any) {
this.request.deleteStaffCourse(id).subscribe(res => {
console.log(id);
this.viewStaffCourseById(this.id);
console.log('Deleted');
});
}

onAddCourse() {
this.submitted = true;
if (this.addCourseForm.invalid) {
    return;
}
let newstaffCourse = {
  courseType : this.addCourseForm.get('courseType').value,
  cInstitutionType : this.addCourseForm.get('cInstitutionType').value,
  cInstitutionName : this.addCourseForm.get('cInstitutionName').value,
  modeOfCourse : this.addCourseForm.get('modeOfCourse').value,
  durationOfCourse : this.addCourseForm.get('durationOfCourse').value,
  uom : this.addCourseForm.get('uom').value,
  cyop : this.addCourseForm.get('cyop').value,
  cpercentage : this.addCourseForm.get('cpercentage').value,
  id : this.id,
  }
this.request.addStaffCourse(newstaffCourse).subscribe((res: any) => {
 console.log('edu', res);
if (res.status == 'error') {
  this.setMessage(res.error);
}
else if (res.status == 'success') {
  swal("Added Sucessfully");
  this.viewStaffCourseById(this.id);
  this.loadStaffCourse();
}
}, (error) => {
  this.setMessage(error);
});
  console.log(newstaffCourse);
}

onEditCourse(id: any){
console.log('couid', id);
this.request.fetchStaffCourseById(id).subscribe((response) => {     
  this.editCourse=response[0];     
  console.log(response);
      this.courseTypeValue=this.editCourse.courseType;
      this.cInstitutionTypeValue=this.editCourse.cInstitutionType;
      this.cInstitutionNameValue=this.editCourse.cInstitutionName;
      this.modeOfCourseValue=this.editCourse.modeOfCourse;
      this.durationOfCourseValue=this.editCourse.durationOfCourse;
      this.uomValue=this.editCourse.uom;
      this.cyopValue=this.editCourse.cyop;
      this.cpercentageValue=this.editCourse.cpercentage;
      this.IdValue6=this.editCourse._id;
    
  this.editCourseForm = this.formBuilder.group({
    courseType:[this.courseTypeValue, Validators.required],
    cInstitutionType:[this.cInstitutionTypeValue, Validators.required],
    cInstitutionName:[this.cInstitutionNameValue, Validators.required],
    modeOfCourse:[this.modeOfCourseValue, Validators.required],
    durationOfCourse:[this.durationOfCourseValue, Validators.required],
    uom:[this.uomValue, Validators.required],
    cyop:[this.cyopValue, Validators.required],
    cpercentage:[this.cpercentageValue, Validators.required],
  });
  console.log(this.editCourseForm.value);
});
}
onEditCourseSubmit() {
this.submitted = true;
console.log(this.editCourseForm.value);
if (this.editCourseForm.invalid) {
    return;
  }
this.request.updateStaffCourse(this.IdValue6,this.editCourseForm.value).subscribe((res : any) => {
console.log('cou', res);
if (res.status == 'success') {
  swal("Updated Sucessfully");     
  this.viewStaffCourseById(this.id);
  this.loadStaffCourse();
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
get c() { return this.addCourseForm.controls; }
get c2() { return this.editCourseForm.controls; }

private loadStaffCourse(){
$('#addCourseModal').modal('hide'); //or  $('#IDModal').modal('hide');
$('#addCourseModal').on('hidden.bs.modal', function () {
$(this).find('form').trigger('reset');
});

$('#editCourseModal').modal('hide'); //or  $('#IDModal').modal('hide');
$('#editCourseModal').on('hidden.bs.modal', function () {
$(this).find('form').trigger('reset');
});
}

  ngOnInit() {
    M.updateTextFields();
    this.loadModal();
    this.loadInstitution();
    this.viewStaffProfile(this.id);
    this.loadStaffType();
    this.loadStaffRole();
    this.loadSalutation();
    this.loadGender();
    this.loadPaytype();
    this.loadMaritalstatus();
    this.loadBloodgroup();

    // Contact tab
    this.loadAddressType();
    this.loadStaffContact();
    this.viewStaffContactById(this.id);

    // Identity tab
    this.viewStaffIdentityById(this.id);
    this.loadStaffIdentity();

    // Work profile tab
    this.loadStaffWorkprofile();

    // Experience tab
    this.viewStaffExperienceById(this.id);
    this.loadStaffExperience();

    // Education tab
    this.viewStaffEducationById(this.id);
    this.loadStaffEducation();

    // Course tab
    this.viewStaffCourseById(this.id);
    this.loadStaffCourse();

    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      console.log('ImageUpload:uploaded:', item, status, response);
      const resPath = JSON.parse(response);
      this.getfileLoc = resPath.staffFileResult;
    };

    //jQuery Validation
    $(function () {
      $('#form_advanced_validation1').validate({

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
      $('#form_advanced_validation2').validate({

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
