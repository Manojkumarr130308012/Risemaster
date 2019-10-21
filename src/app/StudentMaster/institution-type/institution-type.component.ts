import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestService } from '../../services/request.service';
import { DynamicScriptLoaderService } from '../../services/dynamic-script-loader.service';
import {  Validators, FormGroup, FormBuilder} from '@angular/forms';

declare const $: any;
declare const swal: any;
@Component({
  selector: 'app-institution-type',
  templateUrl: './institution-type.component.html',
  styleUrls: ['./institution-type.component.scss']
})
export class InstitutionTypeComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
   public Id: any;
   public institutionType: any;
   editInstitutionTypedata;
   public institutionTypeValue: any;
   public IdValue: any;
   institutionTypes;
  editForm: FormGroup;
  message: any;

  constructor(private formBuilder: FormBuilder,
    private dynamicScriptLoader: DynamicScriptLoaderService,
    private request: RequestService,
    private router: Router) {
      //Add Form Group
      this.registerForm = this.formBuilder.group({
        institutionType:['', Validators.required],
    });
    //Edit Form Group
    this.editForm = this.formBuilder.group({
      institutionType:['', Validators.required],
  });
}
// To display  institutionType
    viewData() {
      this.request.getInstitutionType().subscribe((response) => {
        this.institutionTypes = response;
        console.log(this.institutionTypes);
      }, (error) => {
        console.log(error);
      });
      }
      public setMessage(message) {
        return this.message = message;
      }
  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }
  //Add form validation and function
  onAddSubmit() {
      this.submitted = true;
      if (this.registerForm.invalid) {
          return;
      }
     this.request.addInstitutionType(this.registerForm.value).subscribe((res: any)  => {
      if (res.status == 'error') {
        this.setMessage(res.error);
      }
      else if (res.status == 'success') {
        
        swal("Added Sucessfully");
        this.viewData();
        this.loadModal();
      }
      }, (error) => {
        this.setMessage(error);
      });
        console.log(this.registerForm.value);
  }
  
  //To delete the data
  deleteInstitutionType(id: any) {
    this.request.deleteInstitutionType(id).subscribe(res => {
      swal(" Deleted Successfully "); 
      this.viewData();
    });
  }
  
//Edit Function
  onEdit(institutionType) {
    this.Id = institutionType._id;
    this.request.fetchInstitutionTypeById(this.Id).subscribe((response) => {
      this.editInstitutionTypedata = response[0];
      // console.log(response);
      this.institutionTypeValue = this.editInstitutionTypedata.institutionType;
      this.IdValue = this.editInstitutionTypedata._id;

      this.editForm = this.formBuilder.group({
        institutionType:[this.institutionTypeValue, Validators.required],
    });
    // console.log(this.editForm.value);
    });
  }
  onEditSubmit() {
    this.submitted = true;
    // console.log(this.editForm.value);
    if (this.editForm.invalid) {
        return;
    }
  
  this.request.updateInstitutionType(this.IdValue, this.editForm.value).subscribe((response: any) => {
    if (response.status == 'success') {
      swal("Updated Sucessfully");       
      
      this.viewData();
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
        };
    private loadModal() {
      $('#addModal').modal('hide'); //or  $('#IDModal').modal('hide');
      $('#addModal').on('hidden.bs.modal', function () {
        $(this).find('form').trigger('reset');
     })
     $('#editModal').modal('hide'); //or  $('#IDModal').modal('hide');
      $('#editModal ').on('hidden.bs.modal', function () {
        $(this).find('form').trigger('reset');
     })
    }
  
  ngOnInit() {
    this.viewData();
    this.startScript();
  }
}


  