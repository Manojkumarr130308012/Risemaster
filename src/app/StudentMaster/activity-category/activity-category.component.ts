import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DynamicScriptLoaderService } from '../../services/dynamic-script-loader.service';
import { RequestService } from '../../services/request.service';
import { Router } from '@angular/router';
declare const $: any;
declare const swal: any;
@Component({
  selector: 'app-activity-category',
  templateUrl: './activity-category.component.html',
  styleUrls: ['./activity-category.component.scss']
})
export class ActivityCategoryComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
   public Id: any;
   public activityCategory: any;
   public activityCategory2: any;
   editActivityCategorydata;
   public activityCategoryValue: any;
   public IdValue: any;
   activityCategories;
  editForm: FormGroup;
  message: any;
  constructor(private formBuilder: FormBuilder,
    private dynamicScriptLoader: DynamicScriptLoaderService,
    private request: RequestService,
    private router: Router) {
      //Add Form Group
      this.registerForm = this.formBuilder.group({
        activityCategory:['', Validators.required],
    });
    //Edit Form Group
    this.editForm = this.formBuilder.group({
      activityCategory2:['', Validators.required],
  });
}
// To display  ActivityCategory
    viewData() {
      this.request.getActivityCat().subscribe((response) => {
        this.activityCategories = response;
        console.log(this.activityCategories);
      }, (error) => {
        console.log(error);
      });
      }
      public setMessage(message) {
        return this.message = message;
      }
  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }
  get f2() { return this.editForm.controls; }
  //Add form validation and function
  onAddSubmit() {
      this.submitted = true;
      if (this.registerForm.invalid) {
          return;
      }
     this.request.addActivityCat(this.registerForm.value).subscribe((res: any) => {
      if (res.status == 'error') {
        this.setMessage(res.error);
      }
      else if (res.status == 'success') {

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
  onDelete(id: any) {
    this.request.deleteActivityCat(id).subscribe(res => {
      swal(" Deleted Successfully ");
      this.viewData();
    });
  }

//Edit Function
  onEdit(activityCategory) {
    this.Id = activityCategory._id;
    this.request.fetchActivityCatById(this.Id).subscribe((response) => {
      this.editActivityCategorydata = response[0];
      // console.log(response);
      this.activityCategoryValue = this.editActivityCategorydata.activityCategory;
      this.IdValue = this.editActivityCategorydata._id;

      this.editForm = this.formBuilder.group({
        activityCategory2:[this.activityCategoryValue, Validators.required],
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

    const edata = {
      activityCategory: this.editForm.get('activityCategory2').value

  }

  this.request.updateActivityCat(this.IdValue, edata).subscribe((response: any) => {
    if (response.status == 'success') {
      swal("Updated Sucessfully");

      this.viewData();
      this.loadModal();
    }
    else if (response.status == 'error') {
      this.setMessage(response.error);
    }

  }, (error) => {
    console.log(error);
    this.setMessage(error);
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
