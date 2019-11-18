import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router,  ActivatedRoute  } from '@angular/router';
import { RequestService } from '../../services/request.service';
import { DynamicScriptLoaderService } from '../../services/dynamic-script-loader.service';
declare const $: any;
declare const M: any;
declare const swal: any;

@Component({
  selector: 'app-religion',
  templateUrl: './religion.component.html',
  styleUrls: ['./religion.component.scss']
})
export class ReligionComponent implements OnInit {

  registerForm: FormGroup;
  editForm: FormGroup;
  submitted = false;
  public religion: any;
  private religions: any;
  Id: any;
  IdValue: any;
  religion2: FormControl;
  editReligion: any;
  religionValue: any;
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
        religion:['', Validators.required]
    });
    // Edit Form
    this.editForm = this.formBuilder.group({
      religion2:['', Validators.required]
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
  this.request.addReligion(this.registerForm.value).subscribe((res: any) => {
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

  // To display religion
  viewData() {
  this.request.getReligion().subscribe((response) => {
    this.religions = response;
    console.log(this.religions);
  }, (error) => {
    console.log(error);
  });
  }

  // To deleted religion
  deleteReligion(id: any) {
    this.request.deleteReligion(id).subscribe(res => {
    swal("Deleted Sucessfully");
    this.viewData();

    });
  }

  // To edit religion
  onEdit(religion){
    this.Id=religion._id;
    this.request.fetchReligionBy(this.Id).subscribe((response) => {
      this.editReligion=response[0];
      console.log(response);
      this.religionValue=this.editReligion.religion;
      this.IdValue=this.editReligion._id;

      this.editForm = this.formBuilder.group({
        religion2:[this.religionValue, Validators.required]
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
    const edata = {
      religion: this.editForm.get('religion2').value,

  }
this.request.updateReligion(this.IdValue,edata).subscribe((res : any) => {
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

get f2() {
  return this.editForm.controls;
}

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
