import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router,  ActivatedRoute  } from '@angular/router';
import { RequestService } from '../../services/request.service';
import { DynamicScriptLoaderService } from '../../services/dynamic-script-loader.service';
declare const $: any;
declare const M: any;
declare const swal: any;

@Component({
  selector: 'app-caste',
  templateUrl: './caste.component.html',
  styleUrls: ['./caste.component.scss']
})
export class CasteComponent implements OnInit {

  registerForm: FormGroup;
  editForm: FormGroup;
  submitted = false;
  public caste: any;
  private castes: any;
  Id: any;
  IdValue: any;
  editCaste: any;
  casteValue: any;
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
        caste:['', Validators.required]
    });
    // Edit Form
    this.editForm = this.formBuilder.group({
      caste:['', Validators.required]
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
  this.request.addCaste(this.registerForm.value).subscribe((res: any) => {
    if (res.status == 'success') {
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

  // To display caste
  viewData() {
  this.request.getCaste().subscribe((response) => {
    this.castes = response;
    console.log(this.castes);
  }, (error) => {
    console.log(error);
  });
  }

  // To delete caste
  deleteCaste(id: any) {
    this.request.deleteCaste(id).subscribe(res => {
      console.log(id);
      this.viewData();
    console.log('Deleted');
   
    this.router.navigate(['caste']);
    });
  }

  // To edit caste
  onEdit(caste){
    this.Id=caste._id;
    this.request.fetchCasteBy(this.Id).subscribe((response) => {     
      this.editCaste=response[0];     
      console.log(response);
      this.casteValue=this.editCaste.caste; 
      this.IdValue=this.editCaste._id;

      this.editForm = this.formBuilder.group({
        caste:[this.casteValue, Validators.required]
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
this.request.updateCaste(this.IdValue,this.editForm.value).subscribe((res : any) => {
  if (res.status == 'success') {
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