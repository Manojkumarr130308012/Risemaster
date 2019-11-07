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
  public admissiontype2: any;
  public institution2: any;
  public admissiontypes: any;
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
      institution2: ['', Validators.required],
      admissiontype2: ['', Validators.required]
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
        this.loadData();
      }
      else if (res.status == 'error') {
        this.setMessage(res.error);
      }
    }, (error) => {
      this.setMessage(error);
    });
    console.log(this.registerForm.value);
  }



  // To delete admission type
  deleteAdmissiontype(id: any) {
    alert("hi");
    console.log(id);
    this.request.deleteAdmissiontype(id).subscribe(res => {
      console.log(id);
      this.loadData();
      console.log('Deleted');
      this.router.navigate(['admission-type']);
    });
  }

  // To edit admission type
  onEdit(id) {
    console.log('admissiontype_id',id);

    this.request.fetchAdmissiontypeBy(id).subscribe((response) => {
      this.editAdmissiontype = response[0];
      console.log(response);
      this.institutionValue = this.editAdmissiontype.institution;
      this.admissiontypeValue = this.editAdmissiontype.admissiontype;
      this.IdValue = this.editAdmissiontype._id;

      this.editForm = this.formBuilder.group({
        institution2: [this.institutionValue, Validators.required],
        admissiontype2: [this.admissiontypeValue, Validators.required]
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
        this.loadData();
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

    // To display admission type
   /* viewData() {
      this.request.getAdmissiontype().subscribe((response) => {
        this.admissiontypes = response;
        console.log('admission',this.admissiontypes);
      }, (error) => {
        console.log(error);
      });
    }*/

  async startScript() {
    await this.dynamicScriptLoader.load('dataTables.buttons', 'buttons.flash', 'jszip',  'vfs_fonts', 'pdfmake', 'buttons.html5', 'buttons.print').then(data => {
      this.loadData();
    }).catch(error => console.log(error));
  }

  private loadData() {
    this.request.getAdmissiontype().subscribe((response) => {

   console.log('response',response);
    var i=1;
    //var id = '5d8c62e3e851032c189f6931';
    var table = $('#tableExport').DataTable({
       data: response,
      columns: [
         { "render": function (data, type, full, meta) { return i++;}},
       { data: 'InstitutionDetails[0].institution_name' },
       { data: 'admissiontype' },
       { data: '_id' },
       {
        data: null,
        "defaultContent": "<div class='btn btn-tbl-edit'> <i class='material-icons'>create</i></div> <div class='btn btn-tbl-delete'><i class='material-icons'>delete</i></div>",

        "targets": -1
      }
      ],

      // "defaultContent": "<div class='btn btn-tbl-edit' data-toggle='modal' data-target='#editModal'> <i class='material-icons' (click)='onEdit(data[0])'>create</i></div> <div class='btn btn-tbl-delete'><i class='material-icons' onclick='deleteAdmissiontype('5d8c62e3e851032c189f6931)'>delete</i></div>",
       // "defaultContent": "<button>Click</button>",

      dom: 'Bfrtip',
      buttons: [
        'copy', 'csv', 'excel', 'pdf', 'print'
      ]
    });

  // Edit button click
  $('#tableExport tbody').on('click', '.btn-tbl-edit', function () {
    let data = table.row($(this).parents('tr')).data();
    const name = data._id;
    console.log('Edit',name);
    //this.onEdit(name);

  });

  // Delete button click
  $('#tableExport tbody').on('click', '.btn-tbl-delete', function () {
    let data = table.row($(this).parents('tr')).data();
    const name = data._id;
    console.log('Delete',name)
  });

   /* $('#tableExport').on( 'click','button',function(){

      var uid = t.row($(this).parents('tr')).data();
      console.log(uid);
    } );*/

  }, (error) => {
    console.log(error);
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
  //  this.viewData();
    this.startScript();
    this.loadAdmissiontype();
    this.loadModal();


  }
}



