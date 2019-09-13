import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router,  ActivatedRoute  } from '@angular/router';
import { RequestService } from '../../services/request.service';
import { DynamicScriptLoaderService } from '../../services/dynamic-script-loader.service';
declare const $: any;
declare const M: any;
declare const swal: any;


@Component({
  selector: 'app-bloodgroup',
  templateUrl: './bloodgroup.component.html',
  styleUrls: ['./bloodgroup.component.scss']
})
export class BloodgroupComponent implements OnInit {

  registerForm: FormGroup;
  editForm: FormGroup;
  submitted = false;
  public bloodgroup: any;
  private bloodgroups: any;
  Id: any;
  IdValue: any;
  editBloodgroup: any;
  bloodgroupValue: any;
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
        bloodgroup:['', Validators.required]
    });
    // Edit Form
      this.editForm = this.formBuilder.group({
        bloodgroup:['', Validators.required]
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
    this.request.addBloodgroup(this.registerForm.value).subscribe((res: any) => {
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

    // To display bloodgroup
  viewData() {
  this.request.getBloodgroup().subscribe((response) => {
    this.bloodgroups = response;
    console.log(this.bloodgroups);
  }, (error) => {
    console.log(error);
  });
  }

  // To delete bloodgroup
  deleteBloodgroup(id: any) {
    this.request.deleteBloodgroup(id).subscribe(res => {
      console.log(id);
      this.viewData();
    console.log('Deleted');
   
    this.router.navigate(['bloodgroup']);
    });
  }

  // To edit bloodgroup
  onEdit(bloodgroup){
    this.Id=bloodgroup._id;
    this.request.fetchBloodgroupBy(this.Id).subscribe((response) => {          
      this.editBloodgroup=response[0];     
      console.log(response);
        this.bloodgroupValue=this.editBloodgroup.bloodgroup; 
        this.IdValue=this.editBloodgroup._id;

        this.editForm = this.formBuilder.group({
          bloodgroup:[this.bloodgroupValue, Validators.required]
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
  this.request.updateBloodgroup(this.IdValue,this.editForm.value).subscribe((res : any) => {
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