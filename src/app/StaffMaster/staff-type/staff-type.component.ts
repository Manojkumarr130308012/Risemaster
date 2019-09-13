import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router,  ActivatedRoute  } from '@angular/router';
import { RequestService } from '../../services/request.service';
import { DynamicScriptLoaderService } from '../../services/dynamic-script-loader.service';
declare const $: any;
declare const M: any;
declare const swal: any;

@Component({
  selector: 'app-staff-type',
  templateUrl: './staff-type.component.html',
  styleUrls: ['./staff-type.component.scss']
})
export class StaffTypeComponent implements OnInit {

  registerForm: FormGroup;
  editForm: FormGroup;
  submitted = false;
  public stafftype: any;
  private stafftypes: any;
  Id: any;
  IdValue: any;
  editStafftype: any;
  stafftypeValue: any;
  public message: string;

  constructor(
    private formBuilder: FormBuilder,
    private dynamicScriptLoader: DynamicScriptLoaderService,
    private request: RequestService,
    private router: Router,
    private activeRoute:  ActivatedRoute) 
    {
       // Add Form
      this.registerForm = this.formBuilder.group({
        stafftype:['', Validators.required]
    });
    // Edit Form
    this.editForm = this.formBuilder.group({
      stafftype:['', Validators.required]
    });
     }
     
     public setMessage(message) {
      return this.message = message;
    }

     //Add form validation and function
     onAddSubmit() {
      this.submitted = true;
      if (this.registerForm.invalid) {
          return;
      }
    this.registerForm.value;
  this.request.addStafftype(this.registerForm.value).subscribe((res: any) => {
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

  // To display stafftype
  viewData() {
  this.request.getStafftype().subscribe((response) => {
    this.stafftypes = response;
    console.log(this.stafftypes);
  }, (error) => {
    console.log(error);
  });
  }

  // To delete stafftype
  deleteStafftype(id: any) {
    this.request.deleteStafftype(id).subscribe(res => {
      console.log(id);
      this.viewData();
    console.log('Deleted');
   
    this.router.navigate(['staff-type']);
    });
  }

  // To edit stafftype
  onEdit(stafftype){
    this.Id=stafftype._id;
    this.request.fetchStafftypeBy(this.Id).subscribe((response) => {     
      this.editStafftype=response[0];     
      console.log(response);
      this.stafftypeValue=this.editStafftype.stafftype; 
      this.IdValue=this.editStafftype._id;

      this.editForm = this.formBuilder.group({
        stafftype:[this.stafftypeValue, Validators.required]
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
this.request.updateStafftype(this.IdValue,this.editForm.value).subscribe((res : any) => {
    if (res.status == 'Success') {
      swal("Updated Sucessfully");     
      this.loadModal();
      this.viewData();
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
get f() { return this.registerForm.controls; }
      
  async startScript() {
    await this.dynamicScriptLoader.load('dataTables.buttons', 'buttons.flash', 'jszip', 'pdfmake', 'vfs_fonts', 'pdfmake', 'buttons.html5', 'buttons.print', 'form.min').then(data => {
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
  this.startScript();
  M.updateTextFields();
 this.viewData();
 this.loadModal();
  }
}
