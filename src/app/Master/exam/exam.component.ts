import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestService } from '../../services/request.service';
import { DynamicScriptLoaderService } from '../../services/dynamic-script-loader.service';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from "../../services/auth.service";
declare const M: any;
declare const $: any;
declare const swal: any;

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.scss']
})
export class ExamComponent implements OnInit {

  submitted = false;
  examtype: FormControl;
  exam: FormControl;
  start_date: FormControl;
  end_date: FormControl;
  examtype2: FormControl;
  exam2: FormControl;
  start_date2: FormControl;
  end_date2: FormControl;
  exams: any;
  Id: any;
  editexamdata;
  examValue: any;
  examtypeValue: any;
  startDateValue: any;
  endDateValue: any;
  IdValue: any;
  examtypes;
  registerForm: FormGroup;
  editForm: FormGroup;
  getData: any;
  message: any;
  constructor(private formBuilder: FormBuilder,
      private dynamicScriptLoader: DynamicScriptLoaderService,
      private request: RequestService,
      private router: Router,private auth: AuthService) {
      //Add Form Group
      this.registerForm = this.formBuilder.group({
          examtype: ['', Validators.required],
          exam: ['', Validators.required],
          start_date: ['', Validators.required],
          end_date: ['', Validators.required],
      });
      //Edit Form Group
      this.editForm = this.formBuilder.group({
        examtype2: ['', Validators.required],
        exam2: ['', Validators.required],
        start_date2: ['', Validators.required],
        end_date2: ['', Validators.required],
      });
  }

 // To display the data
 viewData() {
  this.request.getexam().subscribe((response: any) => {
      this.exams = response;
      console.log(this.exams);
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
  this.request.addexam(this.registerForm.value).subscribe((res: any) => {
      if (res.status == 'error') {
          this.setMessage(res.error);
      }
      else if (res.status == 'success') {
          swal("Added Sucessfully");
         // this.onAddReset();
          this.viewData();
          this.loadModal();

      }
  }, (error) => {
      this.setMessage(error);
  });
  console.log(this.registerForm.value);
}

//To delete the data
deleteAdmissionCategory(id: any) {
  this.request.deleteexam(id).subscribe(res => {
      swal(" Deleted Successfully ");
      this.viewData();
  });
}

//Edit Function
onEdit(Id) {
  this.request.fetchexamById(Id).subscribe((response) => {
      this.editexamdata = response[0];
      console.log(response);
      this.examValue = this.editexamdata.exam;
      this.examtypeValue = this.editexamdata.examtype;
      this.startDateValue = this.editexamdata.start_date;
      this.endDateValue = this.editexamdata.end_date;
      this.IdValue = this.editexamdata._id;

      this.editForm = this.formBuilder.group({
          exam2: [this.examValue, Validators.required],
          examtype2: [this.examtypeValue, Validators.required],
          start_date2: [this.startDateValue, Validators.required],
          end_date2: [this.endDateValue, Validators.required]
      });
      // console.log('get edit data',this.editForm.value);
  });
}

loadInstitution() {
  this.request.getexamtype().subscribe((response: any) => {
      this.examtypes = response;
      console.log(response);
  }, (error) => {
      console.log(error);
  });
}
onEditSubmit() {
  this.submitted = true;
  // console.log('edited data',this.editForm.value);
  if (this.editForm.invalid) {
      return;
  }

  const edata = {
      exam: this.editForm.get('exam2').value,
      examtype: this.editForm.get('examtype2').value,
      start_date: this.editForm.get('start_date2').value,
      end_date: this.editForm.get('end_date2').value
  }

 // console.log('edata',edata);

  this.request.updateexam(this.IdValue, edata).subscribe((response: any) => {
      if (response.status == 'success') {
          swal("Updated Sucessfully");
          //  console.log('cat res', response);
        //  this.onEditReset();
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

onAddReset() {
  this.submitted = false;
  this.registerForm.reset();
}
onEditReset() {
  this.submitted = false;
  this.editForm.reset();
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
  $('#addModal').modal('hide'); //or $('#IDModal').modal('hide');
  $('#addModal').on('hidden.bs.modal', function () {
      $(this).find('form').trigger('reset');
  })
  $('#editModal').modal('hide'); //or $('#IDModal').modal('hide');
  $('#editModal ').on('hidden.bs.modal', function () {
      $(this).find('form').trigger('reset');
  })
}

ngOnInit() {
//this.auth.isValidUser();
  this.startScript();
 // M.updateTextFields();
  this.viewData();
  this.loadInstitution();
}
}
