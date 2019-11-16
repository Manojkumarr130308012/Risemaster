import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestService } from '../../services/request.service';
import { DynamicScriptLoaderService } from '../../services/dynamic-script-loader.service';
import {  Validators, FormGroup, FormBuilder} from '@angular/forms';

declare const $: any;
declare const swal: any;
@Component({
  selector: 'app-certificate-type',
  templateUrl: './certificate-type.component.html',
  styleUrls: ['./certificate-type.component.scss']
})
export class CertificateTypeComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
   public Id: any;
   public certificateType: any;
   public certificateType2: any;
   editCertificateTypedata;
   public certificateTypeValue: any;
   public IdValue: any;
   certificateTypes;
  editForm: FormGroup;
  message: any;
  constructor(private formBuilder: FormBuilder,
    private dynamicScriptLoader: DynamicScriptLoaderService,
    private request: RequestService,
    private router: Router) {
      //Add Form Group
      this.registerForm = this.formBuilder.group({
        certificateType:['', Validators.required],
    });
    //Edit Form Group
    this.editForm = this.formBuilder.group({
      certificateType2:['', Validators.required],
  });
}
// To display  CertificateType
    viewData() {
      this.request.getCertificateType().subscribe((response) => {
        this.certificateTypes = response;
        console.log(this.certificateTypes);
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
     this.request.addCertificateType(this.registerForm.value).subscribe((res: any) => {
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
  deleteCertificateType(id: any) {
    this.request.deleteCertificateType(id).subscribe(res => {
      swal(" Deleted Successfully ");
      this.viewData();
    });
  }

//Edit Function
  onEdit(certificateType) {
    this.Id = certificateType._id;
    this.request.fetchCertificateTypeById(this.Id).subscribe((response) => {
      this.editCertificateTypedata = response[0];
      // console.log(response);
      this.certificateTypeValue = this.editCertificateTypedata.certificateType;
      this.IdValue = this.editCertificateTypedata._id;

      this.editForm = this.formBuilder.group({
        certificateType2:[this.certificateTypeValue, Validators.required],
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
      certificateType: this.editForm.get('certificateType2').value
      }

  this.request.updateCertificateType(this.IdValue, edata).subscribe(
    (response: any) => {
      if (response.status == "success") {
        swal("Updated Sucessfully");

        this.viewData();
        this.loadModal();
      } else if (response.status == "error") {
        this.setMessage(response.error);
      }
    },
    error => {
      console.log(error);
      this.setMessage(error);
    }
  );

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

