import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router,  ActivatedRoute  } from '@angular/router';
import { RequestService } from '../../services/request.service';
import { DynamicScriptLoaderService } from '../../services/dynamic-script-loader.service';
import { AuthService } from "../../services/auth.service";
declare const $: any;
declare const M: any;
declare const swal: any;

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.scss']
})
export class CommunityComponent implements OnInit {

  registerForm: FormGroup;
  editForm: FormGroup;
  submitted = false;
  public community: any;

  private communities: any;
  Id: any;
  IdValue: any;
  community2: FormControl;
  editCommunity: any;
  communityValue: any;
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
        community:['', Validators.required]
    });
    // Edit Form
    this.editForm = this.formBuilder.group({
      community2:['', Validators.required]
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
this.request.addCommunity(this.registerForm.value).subscribe((res: any) => {
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

// To display community
  viewData() {
  this.request.getCommunity().subscribe((response) => {
    this.communities = response;
    console.log(this.communities);
  }, (error) => {
    console.log(error);
  });
  }

  // To delete community
  deleteCommunity(id: any) {
    this.request.deleteCommunity(id).subscribe(res => {
      console.log(id);
      this.viewData();
    console.log('Deleted');

    this.router.navigate(['community']);
    });
  }

  // To edit community
  onEdit(community){
    this.Id=community._id;
    this.request.fetchCommunityBy(this.Id).subscribe((response) => {
      this.editCommunity=response[0];
      console.log(response);
      this.communityValue=this.editCommunity.community;
      this.IdValue=this.editCommunity._id;

      this.editForm = this.formBuilder.group({
        community2:[this.communityValue, Validators.required]
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
      community: this.editForm.get('community2').value,

  }
this.request.updateCommunity(this.IdValue,edata).subscribe((res : any) => {
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
    //this.auth.isValidUser();
  this.startScript();
  M.updateTextFields();
 this.viewData();
 this.loadModal();
  }
}
