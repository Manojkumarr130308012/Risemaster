import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestService } from '../../services/request.service';
import { DynamicScriptLoaderService } from '../../services/dynamic-script-loader.service';
import {  Validators, FormGroup, FormBuilder} from '@angular/forms';
declare const $: any;
declare const swal: any;
@Component({
  selector: 'app-course-type',
  templateUrl: './course-type.component.html',
  styleUrls: ['./course-type.component.scss']
})
export class CourseTypeComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
   public Id: any;
   public courseType: any;
   qualificationType: any;
   maxMark: any;
   editCourseTypedata;
   public courseTypeValue: any;
   public qualificationTypeValue: any;
   public maxMarkValue: any;
   public IdValue: any;
   courseTypes;
  editForm: FormGroup;
  message: any;
  qualificationtypes: any;
  constructor(private formBuilder: FormBuilder,
    private dynamicScriptLoader: DynamicScriptLoaderService,
    private request: RequestService,
    private router: Router) {
      //Add Form Group
      this.registerForm = this.formBuilder.group({
        courseType:['', Validators.required],
        qualificationType:['', Validators.required],
        maxMark:['', Validators.required],
    });
    //Edit Form Group
    this.editForm = this.formBuilder.group({
      courseType:['', Validators.required],
      qualificationType:['', Validators.required],
      maxMark:['', Validators.required],
  });
}
// To display  courseType
    viewData() {
      this.request.getCourseType().subscribe((response) => {
        this.courseTypes = response;
        console.log(this.courseTypes);
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
     this.request.addCourseType(this.registerForm.value).subscribe((res: any) => {
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
  deleteCourseType(id: any) {
    this.request.deleteCourseType(id).subscribe(res => {
      swal(" Deleted Successfully "); 
      this.viewData();
    });
  }
  
//Edit Function
  onEdit(courseType) {
    this.Id = courseType._id;
    this.request.fetchCourseTypeById(this.Id).subscribe((response) => {
      this.editCourseTypedata = response[0];
      // console.log(response);
      this.courseTypeValue = this.editCourseTypedata.courseType;
      this.qualificationTypeValue = this.editCourseTypedata.qualificationType;
      this.maxMarkValue = this.editCourseTypedata.maxMark;
      this.IdValue = this.editCourseTypedata._id;

      this.editForm = this.formBuilder.group({
        courseType:[this.courseTypeValue, Validators.required],
        qualificationType:[this.qualificationTypeValue, Validators.required],
        maxMark:[this.maxMarkValue, Validators.required],
    });
    // console.log(this.editForm.value);
    });
  }
  loadQualificationType() {
    this.request.getQualificationType().subscribe((response : any) => {
    this.qualificationtypes = response;
    console.log(response);
    }, (error) => {
    console.log(error);
    });
    }
  onEditSubmit() {
    this.submitted = true;
    // console.log(this.editForm.value);
    if (this.editForm.invalid) {
        return;
    }
  
  this.request.updateCourseType(this.IdValue, this.editForm.value).subscribe((response: any) => {
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
    this.loadQualificationType();
  }
}

