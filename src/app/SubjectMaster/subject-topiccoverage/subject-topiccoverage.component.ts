import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators, FormControl,} from "@angular/forms";
import { Router } from "@angular/router";
import { RequestService } from "../../services/request.service";
import { DynamicScriptLoaderService } from "../../services/dynamic-script-loader.service";
import { AuthService } from "../../services/auth.service";
declare const $: any;
declare const swal: any;

@Component({
  selector: 'app-subject-topiccoverage',
  templateUrl: './subject-topiccoverage.component.html',
  styleUrls: ['./subject-topiccoverage.component.scss']
})
export class SubjectTopiccoverageComponent implements OnInit {

  registerForm: FormGroup;
  editForm: FormGroup;
  submitted = false;
  public topicCoverage: any;
  public institution: any;
  public topicCoverage2: any;
  public institution2: any;
  topicCoverages: any;
  Id: any;
  IdValue: any;
  editTopicCoverage: any;
  topicCoverageValue: any;
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
      topicCoverage: ["", Validators.required]
    });
    // Edit Form
    this.editForm = this.formBuilder.group({
      topicCoverage2: ["", Validators.required]
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
      topicCoverage: this.registerForm.get('topicCoverage').value,
      institution: this.institutionValue
    }
    this.request.addTopicCoverage(newDetail).subscribe(
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

  // To display Subject Classification
  viewData() {
    this.request.getTopicCoverage().subscribe(
      response => {
        this.topicCoverages = response;
        console.log(this.topicCoverages);
      },
      error => {
        console.log(error);
      }
    );
  }

  // To delete Subject Classification
  onDelete(id: any) {
    this.request.deleteTopicCoverage(id).subscribe(res => {
      console.log(id);
      this.viewData();
      console.log("Deleted");
    });
  }

  // To edit course Classification
  onEdit(topicCoverage) {
    this.Id = topicCoverage._id;
    this.request.fetchTopicCoverageById(this.Id).subscribe(response => {
      this.editTopicCoverage = response[0];
      console.log(response);
      this.institutionValue = this.editTopicCoverage.institution;
      this.topicCoverageValue = this.editTopicCoverage.topicCoverage;
      this.IdValue = this.editTopicCoverage._id;

      this.editForm = this.formBuilder.group({
        topicCoverage2: [this.topicCoverageValue, Validators.required]
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
      topicCoverage: this.editForm.get("topicCoverage2").value,
      institution: this.institutionValue
    };

    this.request.updateTopicCoverage(this.IdValue, edata).subscribe(
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
