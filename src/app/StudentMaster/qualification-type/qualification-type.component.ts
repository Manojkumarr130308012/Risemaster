import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestService } from '../../services/request.service';
import { DynamicScriptLoaderService } from '../../services/dynamic-script-loader.service';
import {  Validators, FormGroup, FormBuilder} from '@angular/forms';
declare const $: any;
declare const swal: any;

@Component({
  selector: 'app-qualification-type',
  templateUrl: './qualification-type.component.html',
  styleUrls: ['./qualification-type.component.scss']
})
export class QualificationTypeComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
   public Id: any;
   public qualificationType: any;
   public qualificationType2: any;
   editQualificationTypedata;
   public qualificationTypeValue: any;
   public IdValue: any;
   qualificationTypes;
  editForm: FormGroup;
  message: any;
  constructor(private formBuilder: FormBuilder,
    private dynamicScriptLoader: DynamicScriptLoaderService,
    private request: RequestService,
    private router: Router) {
      //Add Form Group
      this.registerForm = this.formBuilder.group({
        qualificationType:['', Validators.required],
    });
    //Edit Form Group
    this.editForm = this.formBuilder.group({
      qualificationType2:['', Validators.required],
  });
}
// To display  QualificationType
    viewData() {
      this.request.getQualificationType().subscribe((response) => {
        this.qualificationTypes = response;
        console.log(this.qualificationTypes);
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
     this.request.addQualificationType(this.registerForm.value).subscribe((res: any) => {
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
  deleteQualificationType(id: any) {
    this.request.deleteQualificationType(id).subscribe(res => {
      swal(" Deleted Successfully ");
      this.viewData();
    });
  }

//Edit Function
  onEdit(qualificationType) {
    this.Id = qualificationType._id;
    this.request.fetchQualificationTypeById(this.Id).subscribe((response) => {
      this.editQualificationTypedata = response[0];
      // console.log(response);
      this.qualificationTypeValue = this.editQualificationTypedata.qualificationType;
      this.IdValue = this.editQualificationTypedata._id;

      this.editForm = this.formBuilder.group({
        qualificationType2:[this.qualificationTypeValue, Validators.required],
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
      qualificationType: this.editForm.get('qualificationType2').value
  }

  this.request.updateQualificationType(this.IdValue, edata).subscribe((response: any) => {
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

