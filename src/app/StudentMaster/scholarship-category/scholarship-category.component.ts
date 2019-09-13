import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestService } from '../../services/request.service';
import { DynamicScriptLoaderService } from '../../services/dynamic-script-loader.service';
import {  Validators, FormGroup, FormBuilder} from '@angular/forms';

declare const $: any;
declare const swal: any;
@Component({
  selector: 'app-scholarship-category',
  templateUrl: './scholarship-category.component.html',
  styleUrls: ['./scholarship-category.component.scss']
})
export class ScholarshipCategoryComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
   public Id: any;
   public scholarshipCategory: any;
   editScholarshipCategorydata;
   public scholarshipCategoryValue: any;
   public IdValue: any;
   scholarshipCategories;
  editForm: FormGroup;
  message: any;
  constructor(private formBuilder: FormBuilder,
    private dynamicScriptLoader: DynamicScriptLoaderService,
    private request: RequestService,
    private router: Router) {
      //Add Form Group
      this.registerForm = this.formBuilder.group({
        scholarshipCategory:['', Validators.required],
    });
    //Edit Form Group
    this.editForm = this.formBuilder.group({
      scholarshipCategory:['', Validators.required],
  });
}

public setMessage(message) {
  return this.message = message;
}
// To display  ScholarshipCategory
    viewData() {
      this.request.getScholarshipCategory().subscribe((response) => {
        this.scholarshipCategories = response;
        console.log(this.scholarshipCategories);
      }, (error) => {
        console.log(error);
      });
      }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }
  //Add form validation and function
  onAddSubmit() {
      this.submitted = true;
      if (this.registerForm.invalid) {
          return;
      }
     this.request.addScholarshipCategory(this.registerForm.value).subscribe((res: any) => {
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
  deleteScholarshipCategory(id: any) {
    this.request.deleteScholarshipCategory(id).subscribe(res => {
      swal(" Deleted Successfully "); 
      this.viewData();
    });
  }
  
//Edit Function
  onEdit(scholarshipCategory) {
    this.Id = scholarshipCategory._id;
    this.request.fetchScholarshipCategoryById(this.Id).subscribe((response) => {
      this.editScholarshipCategorydata = response[0];
      // console.log(response);
      this.scholarshipCategoryValue = this.editScholarshipCategorydata.scholarshipCategory;
      this.IdValue = this.editScholarshipCategorydata._id;

      this.editForm = this.formBuilder.group({
        scholarshipCategory:[this.scholarshipCategoryValue, Validators.required],
    });
    // console.log(this.editForm.value);
    });
  }
  onEditSubmit() {
    this.submitted = true;
    // console.log(this.editForm.value);
    if (this.editForm.invalid) {
        return;
    }
  
  this.request.updateScholarshipCategory(this.IdValue, this.editForm.value).subscribe((response: any) => {
    if (response.status == 'Success') {
      swal("Updated Sucessfully");       
      
      this.viewData();
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
  }
}

