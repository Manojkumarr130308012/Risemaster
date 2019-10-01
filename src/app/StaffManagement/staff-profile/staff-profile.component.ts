import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { RequestService } from '../../services/request.service';
import { DynamicScriptLoaderService } from '../../services/dynamic-script-loader.service';
import { FileSelectDirective, FileUploader} from 'ng2-file-upload';
const URL = 'http://localhost:3000/driverFileUpload/upload';
declare const $: any;
declare const M: any;
declare const swal: any;

@Component({
  selector: 'app-staff-profile',
  templateUrl: './staff-profile.component.html',
  styleUrls: ['./staff-profile.component.scss']
})
export class StaffProfileComponent implements OnInit {

  registerForm: FormGroup;
  editForm: FormGroup;
  submitted = false;
  public staffprofile: any;
  public staffprofiles: any;
  public staffCode: any;
  public stafftype: any;
  public staffrole: any;
  public salutation: any;
  public firstName: any;
  public lastName: any;
  public designation: any;
  public doj: any;
  public gender: any;
  public dob: any;
  public employeeCode: any;
  public paytype: any;
  public emailId: any;
  public mobileNo: any;
  public emergencyNo: any;
  public maritalstatus: any;
  public bloodgroup: any;

  photoValue: any;
  public uploader: FileUploader = new FileUploader({url: URL, itemAlias: 'photo'});
  getfileLoc: any;
  photoLocation: any;
  photoLocationValue: any;

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

  constructor(
    private formBuilder: FormBuilder,
    private dynamicScriptLoader: DynamicScriptLoaderService,
    private request: RequestService,
    private router: Router
  ) {
    // Add Form
    this.registerForm = this.formBuilder.group({
      staffCode:['', Validators.required],
      stafftype:['', Validators.required],
      staffrole:['', Validators.required],
      salutation:['', Validators.required],
      firstName:['', Validators.required],
      lastName:['', Validators.required],
      designation:['', Validators.required],
      doj:['', Validators.required],
      gender:['', Validators.required],
      dob:['', Validators.required],
      employeeCode:['', Validators.required],
      paytype:['', Validators.required],
      emailId:['', Validators.required],
      mobileNo:['', Validators.required],
      emergencyNo:['', Validators.required],
      maritalstatus:['', Validators.required],
      bloodgroup:['', Validators.required],
    });
  }

  public setMessage(message) {
    return this.message = message;
  }


  photosubmit() {
    this.uploader.uploadAll();
      }

  // Bind institution data
  loadInstitution()  {
    this.request.getInstitution().subscribe((response : any) => {
      console.log(response);
    this.institutions = response;
    }, (error) => {
      console.log(error);
    });
  }

  // Bind staff type data
  loadStaffType()  {
    this.request.getStafftype().subscribe((response : any) => {
      console.log(response);
    this.stafftypes = response;
    }, (error) => {
      console.log(error);
    });
  }

  // Bind staff role data
  loadStaffRole()  {
    this.request.getStaffrole().subscribe((response : any) => {
      console.log(response);
    this.staffroles = response;
    }, (error) => {
      console.log(error);
    });
  }

  // Bind Salutation data
  loadSalutation()  {
    this.request.getSalutation().subscribe((response : any) => {
      console.log(response);
    this.salutations = response;
    }, (error) => {
      console.log(error);
    });
  }

  // Bind gender data
  loadGender()  {
    this.request.getGender().subscribe((response : any) => {
      console.log(response);
    this.genders = response;
    }, (error) => {
      console.log(error);
    });
  }

  // Bind paytype data
  loadPaytype()  {
    this.request.getPaytype().subscribe((response : any) => {
      console.log(response);
    this.paytypes = response;
    }, (error) => {
      console.log(error);
    });
  }
  // Bind maritalstatus data
  loadMaritalstatus()  {
    this.request.getMaritalstatus().subscribe((response : any) => {
      console.log(response);
    this.maritalstatuses = response;
    }, (error) => {
      console.log(error);
    });
  }
  // Bind bloodgroup data
  loadBloodgroup()  {
    this.request.getBloodgroup().subscribe((response : any) => {
      console.log(response);
    this.bloodgroups = response;
    }, (error) => {
      console.log(error);
    });
  }

   //Add form validation and function
   onAddSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
        return;
    }
  this.registerForm.value;
this.request.addSaffProfile(this.registerForm.value).subscribe((res: any) => {
  if (res.status == 'Success') {
    swal("Added Sucessfully");
  this.loadModal();
  this.viewData();
  }
  else if (res.status == 'error') {
    this.setMessage(res.err);
  }
}, (error) => {
  this.setMessage(error);
});
console.log(this.registerForm.value);
}

open(staffprofile) {
  this.Id=staffprofile._id;
  console.log(this.Id);
  this.router.navigate(['staff-details'], {
     queryParams: {  
         edit: true,      
         id: staffprofile._id,
       }
      });
}

// To display station
viewData() {
  this.request.getStaffProfile().subscribe((response) => {
    console.log('profile',response);
    this.staffprofiles = response;
    console.log(this.staffprofiles);
  }, (error) => {
    console.log(error);
  });
  }

  // convenience getter for easy access to form fields
get f() { return this.registerForm.controls; }

loadModal(){

  $('#addModal').modal('hide'); //or  $('#IDModal').modal('hide');
  $('#addModal').on('hidden.bs.modal', function () {
  $(this).find('form').trigger('reset');
 });

 $('#editModal').modal('hide'); //or  $('#IDModal').modal('hide');
 $('#editModal').on('hidden.bs.modal', function () {
 $(this).find('form').trigger('reset');
});
}

  ngOnInit() {
    M.updateTextFields();
    this.loadModal();
    this.loadInstitution();
    this.viewData();
    this.loadStaffType();
    this.loadStaffRole();
    this.loadSalutation();
    this.loadGender();
    this.loadPaytype();
    this.loadMaritalstatus();
    this.loadBloodgroup();

    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
 this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
          console.log('ImageUpload:uploaded:', item, status, response);
          const resPath = JSON.parse(response);
          this.getfileLoc = resPath.driverFileResult1;
         };
  }

}

