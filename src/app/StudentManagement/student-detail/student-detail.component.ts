import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators} from '@angular/forms';
declare const $: any;
declare const M: any;
declare const swal: any;
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
  villageName: ['', Validators.required],
  taluk: ['', Validators.required],
  city: ['', Validators.required],
  district: ['', Validators.required],
  pin: ['', Validators.required],
  state: ['', Validators.required],
  country: ['', Validators.required],
});
this.editContactForm = this.formBuilder.group({
  addressType: ['', Validators.required],
  address1: ['', Validators.required],
  address2: ['', Validators.required],
  villageName: ['', Validators.required],
  taluk: ['', Validators.required],
  city: ['', Validators.required],
  district: ['', Validators.required],
  pin: ['', Validators.required],
  state: ['', Validators.required],
  country: ['', Validators.required],
});
//Add addIdentity Form Group
this.addIdentityForm = this.formBuilder.group({
  identityType:['', Validators.required]
});
//Edit editIdentity Form Group
this.editIdentityForm = this.formBuilder.group({
  identityType:['', Validators.required]
});
//AddForm - StudentAddress
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
this.editMedicalForm = this.formBuilder.group({
  height: [''],
  weight: [''],
  hairColor: [''],
  eyeColor: [''],
  complexion: [''],
  bloodGroup: [''],
  colorBlind: [''],
  medicallyFit: [''],
});
//Add addIdentity Form Group
this.addIdentityMarkForm = this.formBuilder.group({
  identityType: ['', Validators.required],
  markDetail: ['', Validators.required],
});
//Edit editIdentity Form Group
this.editIdentityMarkForm = this.formBuilder.group({
   identityType: ['', Validators.required],
  markDetail: ['', Validators.required],
});
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
         addressType:[this.addressTypeValue, Validators.required],
         address1:[this.address1Value, Validators.required],
         address2:[this.address2Value, Validators.required],
         city:[this.cityValue, Validators.required],
         taluk:[this.talukValue, Validators.required],
         villageName:[this.villageNameValue, Validators.required],
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
   this.request.updateStudentcontact(this.IdValue2,this.editContactForm.value).subscribe((res : any) => {
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
  console.log(response);
      this.identityTypeValue=this.editIdentity.identityType;
      this.IdValue3=this.editIdentity._id;

  this.editIdentityForm = this.formBuilder.group({
    identityType:[this.identityTypeValue, Validators.required]
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
this.request.updateStudentIdentity(this.IdValue3,this.editIdentityForm.value).subscribe((res : any) => {
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
if (this.addMedicalForm.invalid) {
    return;
}
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
  console.log(response);
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
    height: [this.heightValue],
    weight: [this.weightValue],
    hairColor: [this.hairColorValue],
    eyeColor: [this.eyeColorValue],
    complexion: [this.complexionValue],
    bloodGroup: [this.bloodGroupValue],
    colorBlind: [this.colorBlindValue],
    medicallyFit: [this.colorBlindValue],
    });
  console.log(this.editMedicalForm.value);
});
}
onEditMedicalSubmit() {
this.submitted = true;
console.log(this.editMedicalForm.value);
if (this.editMedicalForm.invalid) {
    return;
  }
this.request.updateStudentMedical(this.IdValue4,this.editMedicalForm.value).subscribe((res : any) => {
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
$('#addmedicalModal').modal('hide'); //or  $('#IDModal').modal('hide');
$('#addmedicalModal').on('hidden.bs.modal', function () {
$(this).find('form').trigger('reset');
});

$('#editmedicalModal').modal('hide'); //or  $('#IDModal').modal('hide');
$('#editmedicalModal').on('hidden.bs.modal', function () {
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
  this.loadStudentIdentity();
}
}, (error) => {
  this.setMessage(error);
});
  console.log(newstudentIdentityMark);
}

onEditIdentityMark(id: any){
this.request.fetchStudentIdentityMarkById(id).subscribe((response) => {
  this.editIdentityMark=response[0];
  console.log(response);
      this.identityTypeValue=this.editIdentityMark.identityType;
      this.markDetailValue=this.editIdentityMark.markDetail;
      this.IdValue5=this.editIdentityMark._id;

  this.editIdentityMarkForm = this.formBuilder.group({
    identityType: [this.identityTypeValue, Validators.required],
    markDetail: [this.markDetailValue, Validators.required]
    });
  console.log(this.editIdentityMarkForm.value);
});
}
onEditIdentityMarkSubmit() {
this.submitted = true;
console.log(this.editIdentityMarkForm.value);
if (this.editIdentityMarkForm.invalid) {
    return;
  }
this.request.updateStudentIdentityMark(this.IdValue5,this.editIdentityMarkForm.value).subscribe((res : any) => {
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

  ngOnInit() {
    this.viewStudentDetailById(this.id);
    this.viewStudentConatctById(this.id);
    this.loadAddressType();
    this.viewStudentIdentityById(this.id);
    this.loadBloodgroup();
    this.viewStudentMedicalById(this.id);
    this.viewStudentIdentityMarkById(this.id);
    }

}
