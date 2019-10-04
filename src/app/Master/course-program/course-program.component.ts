import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { RequestService } from '../../services/request.service';
import { DynamicScriptLoaderService } from '../../services/dynamic-script-loader.service';
declare const $: any;
declare const M: any;
declare const swal: any;

@Component({
  selector: 'app-course-program',
  templateUrl: './course-program.component.html',
  styleUrls: ['./course-program.component.scss']
})
export class CourseProgramComponent implements OnInit {
   
  registerForm: FormGroup;
  editForm: FormGroup;
  submitted = false;
  public coursecategory: any;
  public courseprogram: any;
  public institution: any;
  private courseprograms: any;
  Id: any;
  IdValue: any;
  editCourseprogram: any;
  coursecategoryValue: any;
  courseprogramValue: any;
  institutionValue: any;
  institution_name: any;
  id: any;
  institutions;
  coursecategories:{};
  public message: string;

  constructor(
    private formBuilder: FormBuilder,
    private dynamicScriptLoader: DynamicScriptLoaderService,
    private request: RequestService,
    private router: Router,
  ) {
    // Add Form
    this.registerForm = this.formBuilder.group({
      institution: ['', Validators.required],
      coursecategory: ['', Validators.required],
      courseprogram: ['', Validators.required]
    });
    // Edit Form
    this.editForm = this.formBuilder.group({
      institution: ['', Validators.required],
      coursecategory: ['', Validators.required],
      courseprogram: ['', Validators.required]
    });
  }
  
  public setMessage(message) {
    return this.message = message;
  }

  // Bind institution data
  loadInstitution() {
    this.request.getInstitution().subscribe((response: any) => {
      console.log(response);
      this.institutions = response;
     // this.coursecategories = response;
    }, (error) => {
      console.log(error);
    });
  }
  // Bind coursecategory data
  onInstitutionChange(Institution: string) {
    console.log('institution',Institution)
    //this.loadCourseCategory(Institution);
     if (Institution) {
       this.request.getCoursecategorybyIns(Institution).subscribe((response: any) => {
         console.log(response);
         this.coursecategories = response;
       }, (error) => {
         console.log(error);
       });

     } else 

       this.coursecategories = null;
    }
  

 //Add form validation and function
  onAddSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    this.registerForm.value;
    this.request.addCourseprogram(this.registerForm.value).subscribe((res: any) => {
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


  // To display Courseprogram
  viewData() {
    this.request.getCourseprogram().subscribe((response) => {
      this.courseprograms = response;
      console.log(this.courseprograms);
    }, (error) => {
      console.log(error);
    });
  }

  // To delete Courseprogram
  deleteCourseprogram(id: any) {
    this.request.deleteCourseprogram(id).subscribe(res => {
      console.log(id);
      this.viewData();
      console.log('Deleted');

      this.router.navigate(['course-program']);
    });
  }

  // To edit Courseprogram
  onEdit(courseprogram) {
    this.Id = courseprogram._id;
    this.request.fetchCourseprogramBy(this.Id).subscribe((response) => {
      this.editCourseprogram = response[0];
      console.log(response);
      this.institutionValue = this.editCourseprogram.institution;
      this.coursecategoryValue = this.editCourseprogram.coursecategory;
      this.courseprogramValue = this.editCourseprogram.courseprogram;
      this.IdValue = this.editCourseprogram._id;

      this.editForm = this.formBuilder.group({
        institution: [this.institutionValue, Validators.required],
        coursecategory: [this.coursecategoryValue, Validators.required],
        courseprogram: [this.courseprogramValue, Validators.required]
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
    this.request.updateCourseprogram(this.IdValue, this.editForm.value).subscribe((res : any) => {
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

  loadModal() {

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
    this.loadInstitution();
   // this.loadCourseCategory();
  }
}