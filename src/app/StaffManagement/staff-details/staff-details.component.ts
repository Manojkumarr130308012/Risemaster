import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { RequestService } from '../../services/request.service';
import { ActivatedRoute } from '@angular/router';
import { FileSelectDirective, FileUploader} from 'ng2-file-upload';
const URL = 'http://localhost:3000/driverFileUpload/upload';
declare const $: any;
declare const M: any;
declare const swal: any;

@Component({
  selector: 'app-staff-details',
  templateUrl: './staff-details.component.html',
  styleUrls: ['./staff-details.component.scss']
})
export class StaffDetailsComponent implements OnInit {

  registerForm: FormGroup;
  editForm: FormGroup;
  submitted = false;
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
  

  constructor(
    private formBuilder: FormBuilder,
    private request: RequestService,
    private router: Router,
    private route: ActivatedRoute)
   {
    this.route.queryParams.subscribe((params: any) => {
      this.edit = params.edit;
      this.id = params.id;
     });

    
      // Edit Form
    this.editForm = this.formBuilder.group({
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

    viewData()  {
      this.request.getStaffDetails().subscribe((response : any) => {
        this.viewStaffProfile(this.id);
        console.log(response);
      this.staffprofiles = response;
      }, (error) => {
        console.log(error);
      });
    }

    viewStaffProfile(id : string) {
      console.log('id',id)
   if (id){
      this.request.getStaffProfilebyIdValue(id).subscribe((response) => {
        this.staffprofiles = response;
        console.log(this.staffprofiles);
      }, (error) => {
        console.log(error);
      });
      }
    }

     // To edit staff details
     onEdit(staffprofile){
      console.log(this.id);
      this.Id=staffprofile._id;
      console.log('id',this.Id);
    this.request.getStaffProfilebyIdValue(this.Id).subscribe((response) => { 
       console.log('data',response); 
       this.editStaffdetails = response[0];     
        this.staffCodeValue=this.editStaffdetails.staffCode; 
        console.log('staffcode',this.editStaffdetails.staffCode);
        this.stafftypeValue=this.editStaffdetails.stafftype; 
        this.staffroleValue=this.editStaffdetails.staffrole; 
        this.salutationValue=this.editStaffdetails.salutation;
        this.firstNameValue=this.editStaffdetails.firstName;
        this.lastNameValue=this.editStaffdetails.lastName;
        this.designationValue=this.editStaffdetails.designation;
        this.dojValue=this.editStaffdetails.doj;
        this.genderValue=this.editStaffdetails.gender;
        this.dobValue=this.editStaffdetails.dob;
        this.employeeCodeValue=this.editStaffdetails.employeeCode;
        this.paytypeValue=this.editStaffdetails.paytype;
        this.emailIdValue=this.editStaffdetails.emailId;
        this.mobileNoValue=this.editStaffdetails.mobileNo;
        this.emergencyNoValue=this.editStaffdetails.emergencyNo;
        this.maritalstatusValue=this.editStaffdetails.maritalstatus;
        this.bloodgroupValue=this.editStaffdetails.bloodgroup;
        this.photoLocationValue=this.editStaffdetails.photoLocation;
        this.IdValue=this.editStaffdetails._id;
      
      this.editForm = this.formBuilder.group({
          staffCode:[this.staffCodeValue, Validators.required],
          stafftype:[this.stafftypeValue, Validators.required],
          staffrole:[this.staffroleValue, Validators.required],
          salutation:[this.salutationValue, Validators.required],
          firstName:[this.firstNameValue, Validators.required],
          lastName:[this.lastNameValue, Validators.required],
          designation:[this.designationValue, Validators.required],
          doj:[this.dojValue, Validators.required],
          gender:[this.genderValue, Validators.required],
          dob:[this.dobValue, Validators.required],
          employeeCode:[this.employeeCodeValue, Validators.required],
          paytype:[this.paytypeValue, Validators.required],
          emailId:[this.emailIdValue, Validators.required],
          mobileNo:[this.mobileNoValue, Validators.required],
          emergencyNo:[this.emergencyNoValue, Validators.required],
          maritalstatus:[this.maritalstatusValue, Validators.required],
          bloodgroup:[this.bloodgroupValue, Validators.required],
          photoLocation:[this.photoLocationValue, Validators.required],
          
           });
      console.log(this.editForm.value);
    });
  }
  onEditSubmit() {
    this.submitted = true;
    console.log(this.editForm.value);
    // if (this.editForm.invalid) {
    //     return;
    //   }
  this.request.updateStaffProfile(this.IdValue,this.editForm.value).subscribe((res : any) => {
    if (res.status == 'Success') {
      swal("Updated Sucessfully");     
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

// convenience getter for easy access to form fields
get f() { return this.editForm.controls; }

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
