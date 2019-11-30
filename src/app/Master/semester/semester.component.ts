import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  Validators,
} from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { RequestService } from "../../services/request.service";
import { DynamicScriptLoaderService } from "../../services/dynamic-script-loader.service";
import { AuthService } from "../../services/auth.service";
declare const $: any;
declare const swal: any;
@Component({
  selector: 'app-semester',
  templateUrl: './semester.component.html',
  styleUrls: ['./semester.component.scss']
})
export class SemesterComponent implements OnInit {

  addForm: FormGroup;
  editForm: FormGroup;
  submitted = false;
  public semester: any;
  public institution: any;
  public semester2: any;
  public institution2: any;
  private coursecategories: any;
  Id: any;
  IdValue: any;
  editsemester: any;
  semesterValue: any;
  institutionValue: any;
  institutions;
  public message: string;
  semesters: any;

  constructor(
    private formBuilder: FormBuilder,
    private dynamicScriptLoader: DynamicScriptLoaderService,
    private request: RequestService,
    private router: Router,
    private activeRoute:  ActivatedRoute,
    private auth: AuthService
  ) {
    // Add Form
    this.addForm = this.formBuilder.group({
      institution: ["", Validators.required],
      semester: ["", Validators.required]
    });
    // Edit Form
    this.editForm = this.formBuilder.group({
      institution2: ["", Validators.required],
      semester2: ["", Validators.required]
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
    if (this.addForm.invalid) {
      return;
    }
    this.request.addSemester(this.addForm.value).subscribe(
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
    console.log(this.addForm.value);
  }

  // To display course category
  viewData() {
    this.request.getSemester().subscribe(
      response => {
        this.semesters = response;
        console.log(this.semesters);
      },
      error => {
        console.log(error);
      }
    );
  }

  // To delete course category
  onDelete(id: any) {
    this.request.deleteSemester(id).subscribe(res => {
      console.log(id);
      this.viewData();
      console.log("Deleted");
      swal("Deleted");
    });
  }

  // To edit course category
  onEdit(semester) {
    this.Id = semester._id;
    this.request.fetchSemesterById(this.Id).subscribe(response => {
      this.editsemester = response[0];
      console.log(response);
      this.institutionValue = this.editsemester.institution;
      this.semesterValue = this.editsemester.semester;
      this.IdValue = this.editsemester._id;

      this.editForm = this.formBuilder.group({
        institution2: [this.institutionValue, Validators.required],
        semester2: [this.semesterValue, Validators.required]
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
      semester: this.editForm.get("semester2").value,
      institution: this.editForm.get("institution2").value
    };

    this.request.updateSemester(this.IdValue, edata).subscribe(
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
    return this.addForm.controls;
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
    this.auth.isValidUser();
    this.startScript();
    this.viewData();
    this.loadModal();
    this.loadInstitution();
  }
}