import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { DynamicScriptLoaderService } from '../../services/dynamic-script-loader.service';
import { RequestService } from '../../services/request.service';
import { Router } from '@angular/router';
import { FileUploader } from 'ng2-file-upload';
const URL = 'http://localhost:3000/upload/upload';
declare const $: any;
declare const swal: any;
@Component({
  selector: 'app-institution',
  templateUrl: './institution.component.html',
  styleUrls: ['./institution.component.scss']
})
export class InstitutionComponent implements OnInit {
  institution_name: any;
  institution_code: any;
  tagline: any;
  address: any;
  phone: any;
  mobile:any;
  website:any;
  email:any;
  principal: any;
  ao:any;
  // logo:any;
  institutions: any;
  institution_code2: any;
  institution_name2: any;
  tagline2: any;
  address2: any;
  phone2: any;
  mobile2: any;
  website2: any;
  email2: any;
  principal2: any;
  ao2: any;
  editInstitutiondata: any;
  Id: any;
  institutionNameValue: any;
  institutionCodeValue: any;
  taglineValue: any;
  addressValue: any;
  phoneValue: any;
  mobileValue: any;
  websiteValue: any;
  emailValue: any;
  principalValue: any;
  aoValue: any;
  logoValue: any;
  IdValue: any;
  public uploader: FileUploader = new FileUploader({url: URL, itemAlias: 'photo'});
  getfileLoc: any;
  logoLocation: any;
  logoLocationValue: any;
 // logoLocation2: FormControl;
  message: any;
  edata: any;
  constructor(
    private dynamicScriptLoader: DynamicScriptLoaderService,
    private request: RequestService,
    private router: Router
  ) { 
     // Add Form
     this.institution_name = new FormControl('', Validators.required);
     this.institution_code = new FormControl('', Validators.required);
     this.tagline = new FormControl('', Validators.required);
     this.address = new FormControl('', Validators.required);
     this.phone = new FormControl('', Validators.required);
     this.mobile = new FormControl('', Validators.required);
     this.website = new FormControl('', Validators.required);
     this.email = new FormControl('', Validators.required);
     this.principal = new FormControl('', Validators.required);
     this.ao = new FormControl('', Validators.required);
     this.logoLocation = new FormControl('', Validators.required);
    
    // Edit Form
    this.institution_name2 = new FormControl('', Validators.required);
    this.institution_code2 = new FormControl('', Validators.required);
    this.tagline2 = new FormControl('', Validators.required);
    this.address2 = new FormControl('', Validators.required);
    this.phone2 = new FormControl('', Validators.required);
    this.mobile2 = new FormControl('', Validators.required);
    this.website2 = new FormControl('', Validators.required);
    this.email2 = new FormControl('', Validators.required);
    this.principal2 = new FormControl('', Validators.required);
    this.ao2 = new FormControl('', Validators.required);
   // this.logoLocation2 = new FormControl('', Validators.required);
  }

  //to upload logo
  submit() {
    this.uploader.uploadAll();
      }
 // Error Message 
 public setMessage(message) {
  return this.message = message;
}
// To add the data
addinstitution() {
 const newInstitution = {
  institution_name: this.institution_name.value,
  institution_code: this.institution_code.value,
  tagline: this.tagline.value,
  address: this.address.value,
  phone: this.phone.value,
  mobile: this.mobile.value,
  website: this.website.value,
  email: this.email.value,
  principal: this.principal.value,
  ao: this.ao.value,
  logoLocation: this.getfileLoc
 };
 this.request.addInstitution(newInstitution).subscribe((res: any) => {
  if (res.status == 'error') {
    this.setMessage(res.err);
  }
  else if (res.status == 'Success') {
    
    swal("Added Sucessfully");
    this.viewData();
    this.loadModal();
  }
  }, (error) => {
    this.setMessage(error);
  });
    console.log(newInstitution);
}
// To display the data
viewData() {
 this.request.getInstitution().subscribe((response) => {
   this.institutions = response;
   console.log(this.institutions);
 }, (error) => {
   console.log(error);
 });
}

// Edit Functione
onEdit(institution) {
  this.Id = institution._id;
  console.log(this.Id);
  this.request.fetchInstitutionById(this.Id).subscribe(response => {
    this.editInstitutiondata = response[0];
    console.log(response);
    this.institutionNameValue = this.editInstitutiondata.institution_name;
    this.institutionCodeValue = this.editInstitutiondata.institution_code;
    this.taglineValue = this.editInstitutiondata.tagline;
    this.addressValue = this.editInstitutiondata.address;
    this.phoneValue = this.editInstitutiondata.phone;
    this.mobileValue = this.editInstitutiondata.mobile;
    this.websiteValue = this.editInstitutiondata.website;
    this.emailValue = this.editInstitutiondata.email;
    this.principalValue = this.editInstitutiondata.principal;
    this.aoValue = this.editInstitutiondata.ao;
    this.logoLocationValue = this.editInstitutiondata.logoLocation;
    this.IdValue = this.editInstitutiondata._id;

    console.log(this.logoLocationValue);

    this.institution_name2 = new FormControl(this.institutionNameValue, [Validators.required]);
    this.institution_code2 = new FormControl(this.institutionCodeValue, [Validators.required]);
    this.tagline2 = new FormControl(this.taglineValue, [Validators.required]);
    this.address2 = new FormControl(this.addressValue, [Validators.required]);
    this.phone2 = new FormControl(this.phoneValue, [Validators.required]);
    this.mobile2 = new FormControl(this.mobileValue, [Validators.required]);
    this.website2 = new FormControl(this.websiteValue, [Validators.required]);
    this.email2 = new FormControl(this.emailValue, [Validators.required]);
    this.principal2 = new FormControl(this.principalValue, [Validators.required]);
    this.ao2 = new FormControl(this.aoValue, [Validators.required]);
  //  this.logoLocation2 = new FormControl(this.logoLocationValue, [Validators.required]);
    
  });
}

//To delete the data
deleteInstitution(id: any) {
  this.request.deleteInstitution(id).subscribe(res => {
    swal(" Deleted Successfully ");
    this.viewData();
  });
}

// To update the data
updateInstitution() {
  const edata = {
    institution_name: this.institution_name2.value,
    institution_code: this.institution_code2.value,
    tagline: this.tagline2.value,
    address: this.address2.value,
    phone: this.phone2.value,
    mobile: this.mobile2.value,
    website: this.website2.value,
    email: this.email2.value,
    principal: this.principal2.value,
    ao: this.ao2.value,
    logoLocation: this.getfileLoc
  };
  this.request.updateInstitution(this.IdValue, edata).subscribe((response: any) => {
    if ((this.edata.value != '') ) { 
      swal("update Sucessfully");
      this.viewData();
      this.loadModal();
    }
    else  if ((this.edata.value == '')) {
      this.setMessage(response.err);
    }
    
  }, (error) => {
    this.setMessage(error);
  });
    
}

async startScript() {
  await this.dynamicScriptLoader.load('dataTables.buttons', 'buttons.flash', 'jszip', 'pdfmake', 'vfs_fonts', 'pdfmake', 'buttons.html5', 'buttons.print').then(data => {
    this.loadData();
  }).catch(error => console.log(error));
}
private loadData() {
  $('#tableExport').DataTable({
    dom: 'Bfrtip',
    buttons: [
      'copy', 'csv', 'excel', 'pdf', 'print'
    ]
  });
}
private loadModal() {
  $('#addModal').modal('hide'); //or  $('#IDModal').modal('hide');
  $('#addModal').on('hidden.bs.modal', function () {
    $(this).find('form').trigger('reset');
    //$('#form_advanced_validation').trigger('reset');
    var v =$('#form_advanced_validation').validate();
    v.resetForm();
   
 })
 $('#editModal').modal('hide'); //or  $('#IDModal').modal('hide');
  $('#editModal ').on('hidden.bs.modal', function () {
    $(this).find('form').trigger('reset');  
    var v =$('#form_advanced_validation1').validate();
    v.resetForm();
 })
}
  ngOnInit() {
    this.startScript();
    this.viewData();
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
         console.log('ImageUpload:uploaded:', item, status, response);
         const resPath = JSON.parse(response);
         this.getfileLoc = resPath.result;
         alert('File uploaded successfully');
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
        
  }

 
  
}

