import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators, FormControl,} from "@angular/forms";
import { Router } from "@angular/router";
import { RequestService } from "../../services/request.service";
import { DynamicScriptLoaderService } from "../../services/dynamic-script-loader.service";
import { AuthService } from "../../services/auth.service";
declare const $: any;
declare const swal: any;
@Component({
  selector: 'app-subject-markdefinition',
  templateUrl: './subject-markdefinition.component.html',
  styleUrls: ['./subject-markdefinition.component.scss']
})
export class SubjectMarkdefinitionComponent implements OnInit {
  registerForm: FormGroup;
  editForm: FormGroup;
  submitted = false;
  institution: any;
  code: any;
  name: any;
  minMark: any;
  maxMark: any;
  markdefinitions: any;
  Id: any;
  IdValue: any;
  institutions;
  public message: string;
  userInfo: any;
  institutionValue: any;
  canId: any;
  markCode: any;

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
    this.institution = new FormControl( this.institutionValue);
    // Add Form
    this.registerForm = this.formBuilder.group({
      code: ["", Validators.required],
      name: ["", Validators.required],
      minMark: ["", Validators.required],
      maxMark: ["", Validators.required],
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
    //Get institution value from localstorage
    this.userInfo = localStorage.getItem('userData');
    this.userInfo = JSON.parse(this.userInfo);
    this.IdValue = this.userInfo.institution;
    this.institutionValue = this.IdValue;

    let newDetail = {
      code:  this.registerForm.get('code').value,
      name: this.registerForm.get('name').value,
      minMark: this.registerForm.get('minMark').value,
      maxMark: this.registerForm.get('maxMark').value,
      institution: this.institutionValue
    }

    this.request.addMarkDefinition(newDetail).subscribe(
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
    this.request.getMarkDefinition().subscribe(
      response => {
        this.markdefinitions = response;
        console.log(this.markdefinitions);
      },
      error => {
        console.log(error);
      }
    );
  }

  open(markdefinition) {
    this.markCode = markdefinition._id;
    console.log('MarkDEfinition Code', this.markCode);
    this.router.navigate(['markCategory'], {
       queryParams: {
           id: markdefinition._id,
         }
        });
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
    //this.auth.isValidUser();
    this.startScript();
    this.viewData();
    this.loadModal();
    this.loadInstitution();
  }
}
