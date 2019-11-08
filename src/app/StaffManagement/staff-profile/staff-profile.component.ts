import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { RequestService } from '../../services/request.service';
import { DynamicScriptLoaderService } from '../../services/dynamic-script-loader.service';
import { FileSelectDirective, FileUploader } from 'ng2-file-upload';
const URL = 'http://localhost:3000/staffFileUpload/upload';
declare const $: any;
declare const M: any;
declare const swal: any;

@Component({
  selector: 'app-staff-profile',
  templateUrl: './staff-profile.component.html',
  styleUrls: ['./staff-profile.component.scss']
})
export class StaffProfileComponent implements OnInit {

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
  public uploader: FileUploader = new FileUploader({ url: URL, itemAlias: 'photo' });
  getfileLoc: any;
  photoLocation: any;
  photoLocationValue: any;
  photoLocation2: FormControl;

  public institution: any;
  institutionValue: any;
  institutions;
  departments;
  departmentsdrop;
  public message: string;
  Id: any;
  stafftypes;
  staffroles;
  salutations;
  genders;
  paytypes;
  maritalstatuses;
  bloodgroups;
  department: any;

  constructor(
    private formBuilder: FormBuilder,
    private dynamicScriptLoader: DynamicScriptLoaderService,
    private request: RequestService,
    private router: Router
  ) {
    // Add Form
    this.department= new FormControl('', Validators.required);
    this.staffCode = new FormControl('', Validators.required);
    this.stafftype= new FormControl('', Validators.required);

    this.institution= new FormControl('', Validators.required);
    this.department= new FormControl('', Validators.required);


    this.staffrole= new FormControl('', Validators.required);
    this.salutation= new FormControl('', Validators.required);
    this.firstName= new FormControl('', Validators.required);
    this.lastName= new FormControl('', Validators.required);
    this.designation= new FormControl('', Validators.required);
    this.doj= new FormControl('', Validators.required);
    this.gender= new FormControl('', Validators.required);
    this.dob= new FormControl('', Validators.required);
    this.employeeCode= new FormControl('', Validators.required);
    this.paytype= new FormControl('', Validators.required);
    this.emailId= new FormControl('', Validators.required);
    this.mobileNo= new FormControl('', Validators.required);
    this.emergencyNo= new FormControl('', Validators.required);
    this.maritalstatus= new FormControl('', Validators.required);
    this.bloodgroup= new FormControl('', Validators.required);
    this.photoLocation= new FormControl('', Validators.required);

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

  // Bind departments data
  loadDepartment()  {
    this.request.getDepartment().subscribe((response : any) => {
      console.log('departmentsdrop',response);
    this.departmentsdrop = response;
    }, (error) => {
      console.log(error);
    });
  }

  // Filter departments data
  onInstitutionChange(Institution: string) {
    console.log('institution',Institution)
     if (Institution) {
       this.request.getDetartmentbyIns(Institution).subscribe((response: any) => {
         console.log(response);
         this.departments = response;


       }, (error) => {
         console.log(error);
       });
     } else{
         this.departments = null;
    }
    if (Institution) {
         this.request.getStaffProfileByIns(Institution).subscribe((response: any) => {
          console.log('staffbyIns',response);
         this.staffprofiles = response;
         }, (error) => {
          console.log(error);
        });
      }
    }

    onDepartmentChange(department : string) {
      if (department){
        console.log(department);
      this.request.getStaffProfileByDep(department).subscribe((response) => {
         console.log('depres',response);
        this.staffprofiles = response;
        console.log(this.staffprofiles);
      }, (error) => {
        console.log(error);
      });
      } else
      this.staffprofiles = null;
    }

    // To display staff
viewData() {
  this.request.getStaffProfile().subscribe((response) => {
    // this.viewStaffProfile(this.department);
    this.staffprofiles = response;
    console.log(this.staffprofiles);
  }, (error) => {
    console.log(error);
  });
  }

 /* viewDepartment(department : string) {
    if (department){
      console.log(department);
    this.request.getStaffProfileByDep(department).subscribe((response) => {
       console.log('depres',response);
      this.staffprofiles = response;
      console.log(this.staffprofiles);
    }, (error) => {
      console.log(error);
    });
    } else
    this.staffprofiles = null;
  }*/

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
   addStaffprofile() {
    const newStaffprofile = {
      institution: this.institution.value,
      department: this.department.value,
      staffCode: this.staffCode.value,
      stafftype: this.stafftype.value,
      staffrole: this.staffrole.value,
      salutation: this.salutation.value,
      firstName: this.firstName.value,
      lastName: this.lastName.value,
      designation: this.designation.value,
      doj: this.doj.value,
      gender: this.gender.value,
      dob: this.dob.value,
      employeeCode: this.employeeCode.value,
      paytype: this.paytype.value,
      emailId: this.emailId.value,
      mobileNo: this.mobileNo.value,
      emergencyNo: this.emergencyNo.value,
      maritalstatus: this.maritalstatus.value,
      bloodgroup: this.bloodgroup.value,
      photoLocation: this.getfileLoc,
    };


this.request.addStaffProfile(newStaffprofile).subscribe((res: any) => {
  if (res.status == 'success') {
    swal("Added Sucessfully");
    this.getfileLoc="";
  this.loadModal();
  this.viewData();
  // this.viewDepartment(this.department);
  }
  else if (res.status == 'error') {
    this.setMessage(res.err);
  }
}, (error) => {
  this.setMessage(error);
});
console.log(newStaffprofile);
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

  ngOnInit() {
    M.updateTextFields();
    this.loadModal();
    this.loadInstitution();
    this.loadDepartment();
    this.viewData();
    // this.viewDepartment(this.department);
    // this.onDepartmentChange(this.department);
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
      this.getfileLoc = resPath.staffFileResult;
    };

  //jQuery Validation
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

}
}

