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
  selector: 'app-interested',
  templateUrl: './interested.component.html',
  styleUrls: ['./interested.component.scss']
})
export class InterestedComponent implements OnInit {
  registerForm: FormGroup;
  editForm: FormGroup;
  submitted = false;
  public Interests: any; public Interests2: any;
  public Interestss: any;
  Id: any;
  IdValue: any;
  editInterestsgroup: any;
  InterestsValue: any;
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
        Interests:['', Validators.required]
    });
    // Edit Form
      this.editForm = this.formBuilder.group({
        Interests2:['', Validators.required]
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
    this.request.addInterests(this.registerForm.value).subscribe((res: any) => {
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
  this.request.getInterests().subscribe((response) => {
    this.Interestss = response;
    console.log(this.Interestss);
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
        this.request.deleteInterests(id).subscribe(res => {
          console.log(id);
          this.viewData();
        console.log('Deleted');
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
    this.request.fetchInterestsById(this.Id).subscribe((response) => {
      this.editInterestsgroup=response[0];
      console.log(response);
        this.InterestsValue=this.editInterestsgroup.Interests;
        this.IdValue=this.editInterestsgroup._id;

        this.editForm = this.formBuilder.group({
          Interests2:[this.InterestsValue, Validators.required]
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
        Interests: this.editForm.get('Interests2').value

    }
  this.request.updateInterests(this.IdValue,edata).subscribe((res : any) => {
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
   // //this.auth.isValidUser();
  this.startScript();
  M.updateTextFields();
 this.viewData();
 this.loadModal();
  }
}
