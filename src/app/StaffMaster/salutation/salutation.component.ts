import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router,  ActivatedRoute  } from '@angular/router';
import { RequestService } from '../../services/request.service';
import { DynamicScriptLoaderService } from '../../services/dynamic-script-loader.service';
declare const $: any;
declare const M: any;
declare const swal: any;

@Component({
  selector: 'app-salutation',
  templateUrl: './salutation.component.html',
  styleUrls: ['./salutation.component.scss']
})
export class SalutationComponent implements OnInit {

  registerForm: FormGroup;
  editForm: FormGroup;
  submitted = false;
  public salutation: any;
  private salutations: any;
  Id: any;
  IdValue: any;
  editSalutation: any;
  salutationValue: any;
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
        salutation:['', Validators.required]
    });
    // Edit Form
    this.editForm = this.formBuilder.group({
      salutation:['', Validators.required]
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
  this.request.addSalutation(this.registerForm.value).subscribe((res: any) => {
    if (res.status == 'success') {
      swal("Added Sucessfully");
    this.loadModal();
    this.viewData();
    }
    else if (res.status == 'error') {
      this.setMessage(res.error);
    }
  }, (error) => {
    this.setMessage(error);
  });
  console.log(this.registerForm.value);
  }

  // To display salutation
  viewData() {
  this.request.getSalutation().subscribe((response) => {
    this.salutations = response;
    console.log(this.salutations);
  }, (error) => {
    console.log(error);
  });
  }

  // To delete salutation
  deleteSalutation(id: any) {
    this.request.deleteSalutation(id).subscribe(res => {
      console.log(id);
      this.viewData();
    console.log('Deleted');
   
    this.router.navigate(['salutation']);
    });
  }

  // To edit salutation
  onEdit(salutation){
    this.Id=salutation._id;
    this.request.fetchSalutationBy(this.Id).subscribe((response) => {     
      this.editSalutation=response[0];     
      console.log(response);
      this.salutationValue=this.editSalutation.salutation; 
      this.IdValue=this.editSalutation._id;

      this.editForm = this.formBuilder.group({
        salutation:[this.salutationValue, Validators.required]
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
this.request.updateSalutation(this.IdValue,this.editForm.value).subscribe((res : any) => {
  if (res.status == 'success') {
    swal("Updated Sucessfully");     
    this.loadModal();
    this.viewData();
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
