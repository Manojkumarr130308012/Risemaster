import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { RequestService } from '../../services/request.service';
import { DynamicScriptLoaderService } from '../../services/dynamic-script-loader.service';
declare const $: any;
declare const M: any;
declare const swal: any;

@Component({
  selector: 'app-admission-type',
  templateUrl: './admission-type.component.html',
  styleUrls: ['./admission-type.component.scss']
})
export class AdmissionTypeComponent implements OnInit {

  registerForm: FormGroup;
  editForm: FormGroup;
  submitted = false;
  public admissiontype: any;
  public institution: any;
  private admissiontypes: any;
  Id: any;
  IdValue: any;
  editAdmissiontype: any;
  admissiontypeValue: any;
  institutionValue: any;
  public message: string;
  institutions;

  constructor(
    private formBuilder: FormBuilder,
    private dynamicScriptLoader: DynamicScriptLoaderService,
    private request: RequestService,
    private router: Router
  ) {
    // Add Form
    this.registerForm = this.formBuilder.group({
      institution: ['', Validators.required],
      admissiontype: ['', Validators.required]
    });
    // Edit Form
    this.editForm = this.formBuilder.group({
      institution: ['', Validators.required],
      admissiontype: ['', Validators.required]
    });
  }

  public setMessage(message) {
    return this.message = message;
  }

  // Bind institution data
  loadAdmissiontype() {
    this.request.getInstitution().subscribe((response: any) => {
     // console.log(response);
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
    this.request.addAdmissiontype(this.registerForm.value).subscribe((res: any) => {
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

  // To display admission type
  viewData() {
    this.request.getAdmissiontype().subscribe((response) => {
      this.admissiontypes = response;
      console.log('admission',this.admissiontypes);
    }, (error) => {
      console.log(error);
    });
  }

  // To delete admission type
  deleteAdmissiontype(id: any) {
    this.request.deleteAdmissiontype(id).subscribe(res => {
      console.log(id);
      this.viewData();
      console.log('Deleted');
      this.router.navigate(['admission-type']);
    });
  }

  // To edit admission type
  onEdit(admissiontype) {
    this.Id = admissiontype._id;
    this.request.fetchAdmissiontypeBy(this.Id).subscribe((response) => {
      this.editAdmissiontype = response[0];
      console.log(response);
      this.institutionValue = this.editAdmissiontype.institution;
      this.admissiontypeValue = this.editAdmissiontype.admissiontype;
      this.IdValue = this.editAdmissiontype._id;

      this.editForm = this.formBuilder.group({
        institution: [this.institutionValue, Validators.required],
        admissiontype: [this.admissiontypeValue, Validators.required]
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
    this.request.updateAdmissiontype(this.IdValue, this.editForm.value).subscribe((res: any) => {
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
    console.log('this.admissiontypes',this.admissiontypes);
    var i=1;
    var t = $('#tableExport').DataTable({
       data: this.admissiontypes,
      columns: [             
         { "render": function (data, type, full, meta) { return i++;}},
       { data: 'InstitutionDetails[0].institution_name' },
       { data: 'admissiontype' },
       {
        data: null,
        "defaultContent": "<div class='btn btn-tbl-edit' data-toggle='modal' data-target='#editModal'> <i class='material-icons' (click)='onEdit(admissiontype)'>create</i></div> <div class='btn btn-tbl-delete'><i class='material-icons' (click)='deleteAdmissiontype(admissiontype?._id)'>delete</i></div>",
        "targets": -1
      }
      ],

      dom: 'Bfrtip',
      buttons: [
        'copy', 'csv', 'excel', 'pdf', 'print'
      ]
    });
  }
  private loadModal() {
    $('#addModal').modal('hide'); //or  $('#IDModal').modal('hide');
    $('#addModal').on('hidden.bs.modal', function () {
      $(this).find('form').trigger('reset'); 
    // $("#add").get(0).reset();
    //    var vali =$("#add").validate();
    // vali.restForm();
    });
   
   

    $('#editModal').modal('hide'); //or  $('#IDModal').modal('hide');
    $('#editModal').on('hidden.bs.modal', function () {
      $(this).find('form').trigger('reset');
     // $('.invalid-feedback').removeClass('error');
    });
  }

  ngOnInit() {
   
    M.updateTextFields();
    this.viewData();      
    this.startScript();
    this.loadAdmissiontype();    
    this.loadModal();
   
  
  }
}
