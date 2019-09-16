import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DynamicScriptLoaderService } from '../../services/dynamic-script-loader.service';
import { RequestService } from '../../services/request.service';
import { Router } from '@angular/router';
declare const $: any;
declare const swal: any;
@Component({
  selector: 'app-medium',
  templateUrl: './medium.component.html',
  styleUrls: ['./medium.component.scss']
})
export class MediumComponent implements OnInit {

  
  registerForm: FormGroup;
  submitted = false;
   public Id: any;
   public medium: any;
   editMediumdata;
   public mediumValue: any;
   public IdValue: any;
   mediums;
  editForm: FormGroup;
  message: any;
  constructor(private formBuilder: FormBuilder,
    private dynamicScriptLoader: DynamicScriptLoaderService,
    private request: RequestService,
    private router: Router) {
      //Add Form Group
      this.registerForm = this.formBuilder.group({
        medium:['', Validators.required],
    });
    //Edit Form Group
    this.editForm = this.formBuilder.group({
      medium:['', Validators.required],
  });
}
// To display  medium
    viewData() {
      this.request.getMedium().subscribe((response) => {
        this.mediums = response;
        console.log(this.mediums);
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
     this.request.addMedium(this.registerForm.value).subscribe((res: any) => {
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
        console.log(this.registerForm.value);
  }

  
  //To delete the data
  deleteMedium(id: any) {
    this.request.deleteMedium(id).subscribe(res => {
      swal(" Deleted Successfully "); 
      this.viewData();
    });
  }
  
//Edit Function
  onEdit(medium) {
    this.Id = medium._id;
    this.request.fetchMediumById(this.Id).subscribe((response) => {
      this.editMediumdata = response[0];
      // console.log(response);
      this.mediumValue = this.editMediumdata.medium;
      this.IdValue = this.editMediumdata._id;

      this.editForm = this.formBuilder.group({
        medium:[this.mediumValue, Validators.required],
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
  
  this.request.updateMedium(this.IdValue, this.editForm.value).subscribe((response: any) => {
    if (response.status == 'Success') {
      swal("Updated Sucessfully");       
      
      this.viewData();
      this.loadModal();
    }
    else if (response.status == 'error') {       
      this.setMessage(response.err);
    }      
   
  }, (err) => {
    console.log(err);
    this.setMessage(err);
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

