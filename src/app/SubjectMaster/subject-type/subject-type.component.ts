import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators, FormControl,} from "@angular/forms";
import { Router } from "@angular/router";
import { RequestService } from "../../services/request.service";
import { DynamicScriptLoaderService } from "../../services/dynamic-script-loader.service";
import { AuthService } from "../../services/auth.service";
declare const $: any;
declare const swal: any;
@Component({
  selector: 'app-subject-type',
  templateUrl: './subject-type.component.html',
  styleUrls: ['./subject-type.component.scss']
})
export class SubjectTypeComponent implements OnInit {

  registerForm: FormGroup;
  editForm: FormGroup;
  submitted = false;
  public subjectType: any;
  public institution: any;
  public subjectType2: any;
  public institution2: any;
  subjectTypes: any;
  Id: any;
  IdValue: any;
  editSubjectType: any;
  subjectTypeValue: any;
  institutionValue: any;
  institutions;
  public message: string;
  userInfo: any;

  constructor(
    private formBuilder: FormBuilder,
    private dynamicScriptLoader: DynamicScriptLoaderService,
    private request: RequestService,
    private router: Router,
    private auth: AuthService
  ) {
     //Get institution value from localstorage
     this.userInfo = localStorage.getItem('userData');
     this.userInfo = JSON.parse(this.userInfo);
     this.IdValue = this.userInfo.institution;
     this.institutionValue = this.IdValue;
     this.institution = new FormControl({value:this.institutionValue, disabled: true});
    // Add Form
    this.registerForm = this.formBuilder.group({
      subjectType: ["", Validators.required]
    });
    // Edit Form
    this.editForm = this.formBuilder.group({
      subjectType2: ["", Validators.required]
    });
  }

  public setMessage(message) {
    return (this.message = message);
  }

  // Bind institution data
  loadInstitution() {
    this.request.getInstitution().subscribe(
      (response: any) => {
        console.log(response);
        this.institutions = response;
      },
      error => {
        console.log(error);
      }
    );
  }

  //Add form validation and function
  onAddSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    let newDetail = {
      subjectType: this.registerForm.get('subjectType').value,
      institution: this.institutionValue
    }

    this.request.addSubjectType(newDetail).subscribe(
      (res: any) => {
        if (res.status == "success") {
          swal("Added Sucessfully");
          this.loadModal();
          this.viewData();
        } else if (res.status == "error") {
          swal(res.error);
        }
      },
      error => {
        swal(error);
      }
    );
    console.log(this.registerForm.value);
  }

  // To display Subject Type
  viewData() {
    this.request.getSubjectType().subscribe(
      response => {
        this.subjectTypes = response;
        console.log(this.subjectTypes);
      },
      error => {
        console.log(error);
      }
    );
  }

  // To delete Subject Type
  onDelete(id: any) {
    this.request.deleteSubjectType(id).subscribe(res => {
      console.log(id);
      this.viewData();
      console.log("Deleted");
    });
  }

  // To edit course Type
  onEdit(subjectType) {
    this.Id = subjectType._id;
    this.request.fetchSubjectTypeById(this.Id).subscribe(response => {
      this.editSubjectType = response[0];
      console.log(response);
      this.institutionValue = this.editSubjectType.institution;
      this.subjectTypeValue = this.editSubjectType.subjectType;
      this.IdValue = this.editSubjectType._id;

      this.editForm = this.formBuilder.group({
        subjectType2: [this.subjectTypeValue, Validators.required]
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

    const edata = {
      subjectType: this.editForm.get("subjectType2").value,
      institution: this.institutionValue
    };

    this.request.updateSubjectType(this.IdValue, edata).subscribe(
      (res: any) => {
        if (res.status == "success") {
          swal("Updated Sucessfully");
          this.loadModal();
          this.viewData();
        } else if (res.status == "error") {
          swal(res.error);
        }
      },
      error => {
        console.log(error);
        swal(error);
      }
    );
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.registerForm.controls;
  }
  get f2() {
    return this.editForm.controls;
  }

  async startScript() {
    await this.dynamicScriptLoader
      .load(
        "dataTables.buttons",
        "buttons.flash",
        "jszip",
        "pdfmake",
        "vfs_fonts",
        "pdfmake",
        "buttons.html5",
        "buttons.print",
        "form.min"
      )
      .then(data => {
        this.loadData();
      })
      .catch(error => console.log(error));
  }
  private loadData() {
    $("#tableExport").DataTable({
      dom: "Bfrtip",
      buttons: ["copy", "csv", "excel", "pdf", "print"]
    });
  }

  loadModal() {
    $("#addModal").modal("hide"); //or  $('#IDModal').modal('hide');
    $("#addModal").on("hidden.bs.modal", function() {
      $(this)
        .find("form")
        .trigger("reset");
    });
    $("#editModal").modal("hide"); //or  $('#IDModal').modal('hide');
    $("#editModal").on("hidden.bs.modal", function() {
      $(this)
        .find("form")
        .trigger("reset");
    });
  }

  ngOnInit() {
    ////this.auth.isValidUser();
    this.startScript();
    this.viewData();
    this.loadModal();
    this.loadInstitution();
  }
}
