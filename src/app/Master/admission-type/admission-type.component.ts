import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from "@angular/forms";
import { Router } from "@angular/router";
import { RequestService } from "../../services/request.service";
import { DynamicScriptLoaderService } from "../../services/dynamic-script-loader.service";
import { AuthService } from "../../services/auth.service";
declare const $: any;
declare const M: any;
declare const swal: any;

@Component({
  selector: "app-admission-type",
  templateUrl: "./admission-type.component.html",
  styleUrls: ["./admission-type.component.scss"]
})
export class AdmissionTypeComponent implements OnInit {
  submitted = false;
  institution: FormControl;
  admissiontype: FormControl;
  institution2: FormControl;
  admissiontype2: FormControl;
  admissionTypes: any;
  Id: any;
  editAdmissionTypedata;
  admissionTypeValue: any;
  InstitutionValue: any;
  IdValue: any;
  institutions;
  registerForm: FormGroup;
  editForm: FormGroup;
  getData: any;
  message: any;


  constructor(
    private formBuilder: FormBuilder,
    private dynamicScriptLoader: DynamicScriptLoaderService,
    private request: RequestService,
    private router: Router,private auth: AuthService
  ) {
    this.registerForm = this.formBuilder.group({
      institution: ['', Validators.required],
      admissiontype: ['', Validators.required]
  });
  //Edit Form Group
  this.editForm = this.formBuilder.group({
      institution2: ['', Validators.required],
      admissiontype2: ['', Validators.required]
  });

  }



viewData() {
  this.request.getAdmissiontype().subscribe((response: any) => {
      this.admissionTypes = response;
      console.log(this.admissionTypes);
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
  this.request.addAdmissiontype(this.registerForm.value).subscribe((res: any) => {
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
  this.request.deleteAdmissiontype(id).subscribe(res => {
      swal(" Deleted Successfully ");
      this.viewData();
  });
}
  //Edit Function
  onEdit(Id) {
    this.request.fetchAdmissiontypeBy(Id).subscribe((response) => {
        this.editAdmissionTypedata = response[0];
        console.log(response);
        this.admissionTypeValue = this.editAdmissionTypedata.admissiontype;
        this.InstitutionValue = this.editAdmissionTypedata.institution;
        this.IdValue = this.editAdmissionTypedata._id;

        this.editForm = this.formBuilder.group({
            admissiontype2: [this.admissionTypeValue, Validators.required],
            institution2: [this.InstitutionValue, Validators.required]
        });
        // console.log('get edit data',this.editForm.value);
    });
}

loadInstitution() {
    this.request.getInstitution().subscribe((response: any) => {
        this.institutions = response;
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
        admissiontype: this.editForm.get('admissiontype2').value,
        institution: this.editForm.get('institution2').value
    }

   // console.log('edata',edata);

    this.request.updateAdmissiontype(this.IdValue, edata).subscribe((response: any) => {
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
