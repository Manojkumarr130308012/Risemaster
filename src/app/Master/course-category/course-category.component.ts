import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { RequestService } from '../../services/request.service';
import { DynamicScriptLoaderService } from '../../services/dynamic-script-loader.service';
declare const $: any;
declare const M: any;
declare const swal: any;

@Component({
    selector: 'app-course-category',
    templateUrl: './course-category.component.html',
    styleUrls: ['./course-category.component.scss']
  })
  export class CourseCategoryComponent implements OnInit {

  registerForm: FormGroup;
  editForm: FormGroup;
  submitted = false;
  public coursecategory: any;
  public institution: any;
  private coursecategories: any;
  Id: any;
  IdValue: any;
  editCoursecategory: any;
  coursecategoryValue: any;
  institutionValue: any;
  institutions;
  public message: string;

  constructor(
    private formBuilder: FormBuilder,
    private dynamicScriptLoader: DynamicScriptLoaderService,
    private request: RequestService,
    private router: Router,
   ) {
       // Add Form
      this.registerForm = this.formBuilder.group({
        institution:['', Validators.required],
        coursecategory:['', Validators.required]
     });
     // Edit Form
     this.editForm = this.formBuilder.group({
      institution:['', Validators.required],
      coursecategory:['', Validators.required]
     });
     }
     
     public setMessage(message) {
      return this.message = message;
    }

   // Bind institution data
     loadCoursecategory()  {
      this.request.getInstitution().subscribe((response : any) => {
        console.log(response);
      this.institutions = response;
      }, (error) => {
        console.log(error);
      });
  }
  
  //Add form validation and function
  onAddSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
        return;
    }
this.request.addCoursecategory(this.registerForm.value).subscribe((res: any) => {
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

// To display course category
  viewData() {
  this.request.getCoursecategory().subscribe((response) => {
    this.coursecategories = response;
    console.log(this.coursecategories);
  }, (error) => {
    console.log(error);
  });
  }

  // To delete course category
  deleteCoursecategory(id: any) {
    this.request.deleteCoursecategory(id).subscribe(res => {
      console.log(id);
      this.viewData();
    console.log('Deleted');
   
    this.router.navigate(['course-category']);
    });
  }

  // To edit course category
  onEdit(coursecategory){
    this.Id=coursecategory._id;
    this.request.fetchCoursecategoryBy(this.Id).subscribe((response) => {          
      this.editCoursecategory=response[0];     
      console.log(response);
      this.institutionValue=this.editCoursecategory.institution;
      this.coursecategoryValue=this.editCoursecategory.coursecategory;
      this.IdValue=this.editCoursecategory._id;
     
      this.editForm = this.formBuilder.group({
        institution:[this.institutionValue, Validators.required],
          coursecategory:[this.coursecategoryValue, Validators.required]
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
  this.request.updateCoursecategory(this.IdValue,this.editForm.value).subscribe((res : any) => {
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
 this. loadCoursecategory();
}
}