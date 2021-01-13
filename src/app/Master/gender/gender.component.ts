import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router,  ActivatedRoute  } from '@angular/router';
import { RequestService } from '../../services/request.service';
import { DynamicScriptLoaderService } from '../../services/dynamic-script-loader.service';
import { AuthService } from "../../services/auth.service";
declare const $: any;
declare const M: any;

import Swal from 'sweetalert2/dist/sweetalert2.js';
@Component({
  selector: 'app-gender',
  templateUrl: './gender.component.html',
  styleUrls: ['./gender.component.scss']
})
export class GenderComponent implements OnInit {

  registerForm: FormGroup;
  editForm: FormGroup;
  submitted = false;
  public gender: any; public gender2: any;
  public genders: any;
  Id: any;
  IdValue: any;
  editgendergroup: any;
  genderValue: any;
  public message: string;

  constructor(
    private formBuilder: FormBuilder,
    private dynamicScriptLoader: DynamicScriptLoaderService,
    private request: RequestService,
    private router: Router,
    private activeRoute:  ActivatedRoute,
    private auth: AuthService)
    {
      // Add Form
      this.registerForm = this.formBuilder.group({
        gender:['', Validators.required]
    });
    // Edit Form
      this.editForm = this.formBuilder.group({
        gender2:['', Validators.required]
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
    this.request.addgender(this.registerForm.value).subscribe((res: any) => {
      if (res.status == 'success') {
        Swal.fire("Added Sucessfully");
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

    // To display bloodgroup
  viewData() {
  this.request.getgender().subscribe((response) => {
    this.genders = response;
    console.log(this.genders);
  }, (error) => {
    console.log(error);
  });
  }

  // To delete bloodgroup
  deleteBloodgroup(id: any) {
    Swal.fire({  
      title: 'Are you sure want to Delete?',  
      text: 'You will not be able to recover this Data',  
      icon: 'warning',  
      showCancelButton: true,  
      confirmButtonText: 'Delete',  
      cancelButtonText: 'Cancel'  
    }).then((result) => {  
      if (result.value) {   
        this.request.deletegender(id).subscribe(res => {
          console.log(id);
          this.viewData();
        });
        Swal.fire(  
          'Deleted! Sucessfully',  
        )  
      } else if (result.dismiss === Swal.DismissReason.cancel) {  
        Swal.fire(  
          'Cancelled',   
        )  
      }  
    }) 




   
  }

  // To edit bloodgroup
  onEdit(bloodgroup){
    this.Id=bloodgroup._id;
    this.request.fetchgenderById(this.Id).subscribe((response) => {
      this.editgendergroup=response[0];
      console.log(response);
        this.genderValue=this.editgendergroup.gender;
        this.IdValue=this.editgendergroup._id;

        this.editForm = this.formBuilder.group({
          gender2:[this.genderValue, Validators.required]
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
        gender: this.editForm.get('gender2').value

    }
  this.request.updategender(this.IdValue,edata).subscribe((res : any) => {
    if (res.status == 'success') {
      Swal.fire("Updated Sucessfully");
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
get f2() { return this.editForm.controls; }


  async startScript() {
    await this.dynamicScriptLoader.load('dataTables.buttons', 'buttons.flash', 'jszip', 'pdfmake', 'vfs_fonts', 'pdfmake', 'buttons.html5', 'buttons.print', 'form.min').then(data => {
      this.loadData();
    }).catch(error => console.log(error));
  }
  private loadData() {
    $('#tableExport').DataTable({
      dom: 'Bfrtip',
      buttons: [
        'excel', 'pdf'
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
   // //this.auth.isValidUser();
  this.startScript();
  M.updateTextFields();
 this.viewData();
 this.loadModal();
  }
}
