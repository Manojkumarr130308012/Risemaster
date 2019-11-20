import { Component, OnInit } from '@angular/core';
import { DynamicScriptLoaderService } from '../../services/dynamic-script-loader.service';
import { RequestService } from '../../services/request.service';

import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
declare const $: any;
declare const M: any;
declare const swal: any;

@Component({
  selector: 'app-academic-year',
  templateUrl: './academic-year.component.html',
  styleUrls: ['./academic-year.component.scss']
})
export class AcademicYearComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  institution: any;
  year: FormControl;
  short_code: FormControl;
  start_date: FormControl;
  end_date: FormControl;
  status: FormControl;

  institution2: any;
  year2: FormControl;
  short_code2: FormControl;
  start_date2: FormControl;
  end_date2: FormControl;
  status2: FormControl;

  private academicyears: any;
  editForm: FormGroup;
  Id: any;
  editAcademicyeardata: any;
  yearValue: any;
  shortCodeValue: any;
  startDateValue: any;
  statusValue: any;
  endDateValue: any;
  IdValue: any;
  message: any;
  institutions: any;
  institutionValue: any;
  constructor(private formBuilder: FormBuilder,
              private dynamicScriptLoader: DynamicScriptLoaderService,
              private request: RequestService,
              private router: Router) {
      //Add Form Group
      this.registerForm = this.formBuilder.group({
        institution:['', Validators.required],
        year:['', Validators.required],
        short_code: ['', Validators.required],
        start_date: ['', Validators.required],
        end_date: ['', Validators.required],
        status: ['', Validators.required]
    });
    //Edit Form Group
      this.editForm = this.formBuilder.group({
        institution2:['', Validators.required],
      year2:['', Validators.required],
      short_code2: ['', Validators.required],
      start_date2: ['', Validators.required],
      end_date2: ['', Validators.required],
      status2: ['', Validators.required]
  });
}
// To display Academic Year
    viewData() {
      this.request.getAcademicYear().subscribe((response) => {
        this.academicyears = response;
        console.log(this.academicyears);
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
      this.request.addAcademicYear(this.registerForm.value).subscribe((res: any) => {
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
  deleteAcademicYear(id: any) {
    this.request.deleteAcademicYear(id).subscribe(res => {
      swal(" Deleted Successfully ");
      this.viewData();
    });
  }

//Edit Function
  onEdit(academicyear) {
    this.Id = academicyear._id;
    this.request.fetchAcademicyearById(this.Id).subscribe((response) => {
      this.editAcademicyeardata = response[0];
      this.institutionValue = this.editAcademicyeardata.institution;
      this.yearValue = this.editAcademicyeardata.year;
      this.shortCodeValue = this.editAcademicyeardata.short_code;
      this.startDateValue = this.editAcademicyeardata.start_date;
      this.endDateValue = this.editAcademicyeardata.end_date;
      this.statusValue = this.editAcademicyeardata.status;
      this.IdValue = this.editAcademicyeardata._id;

      this.editForm = this.formBuilder.group({
        institution2: [this.institutionValue, Validators.required],
        year2: [this.yearValue, Validators.required],
        short_code2: [this.shortCodeValue, Validators.required],
        start_date2: [this.startDateValue, Validators.required],
        end_date2: [this.endDateValue, Validators.required],
        status2: [this.statusValue, Validators.required]
    });
    });
  }
  onEditSubmit() {
    this.submitted = true;
    if (this.editForm.invalid) {
        return;
    }
    const edata = {
      institution: this.editForm.get('institution2').value,
      year: this.editForm.get('year2').value,
      short_code: this.editForm.get('short_code2').value,
      start_date: this.editForm.get('start_date2').value,
      end_date: this.editForm.get('end_date2').value,
      status: this.editForm.get('status2').value

  }

    this.request.updateAcademicYear(this.IdValue, edata).subscribe((response: any) => {
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
      loadInstitution() {
        this.request.getInstitution().subscribe((response: any) => {
          console.log('Institution', response);
          this.institutions = response;
        }, (error) => {
          console.log(error);
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
    M.updateTextFields();
    this.loadInstitution();
  }
}
