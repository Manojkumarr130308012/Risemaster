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
  studentContacts: Object;
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
  }
  viewStudentDetail(id: any) {
    console.log('StudId', id);
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
   viewStudentConatctById(id : string) {
    if (id){
    this.request.getStudentcontactById(id).subscribe((response) => {
       this.studentContacts = response;
       console.log('StudentContactbyStuId', this.studentContacts);
       }, (error) => {
         console.log(error);
       });
     } else
        this.studentContacts = null;
   }
 
   deleteStudentcontact(id: any) {
     this.request.deleteStaffContact(id).subscribe(res => {
       console.log(id);
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
         studId : this.id,
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
     console.log('conid', id);
     this.request.fetchStudentcontactById(id).subscribe((response) => {
       this.editContact=response[0];
       console.log(response);
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
    console.log(response);
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
  ngOnInit() {
    this.viewStudentDetail(this.id);
    this.viewStudentConatctById(this.id);
    this.loadAddressType();
    }

}
