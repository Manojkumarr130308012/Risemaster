import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { RequestService } from "../../services/request.service";
import { DynamicScriptLoaderService } from "../../services/dynamic-script-loader.service";
declare const $: any;
declare const M: any;
declare const swal: any;

@Component({
  selector: "app-mode-of-enquiry",
  templateUrl: "./mode-of-enquiry.component.html",
  styleUrls: ["./mode-of-enquiry.component.scss"]
})
export class ModeOfEnquiryComponent implements OnInit {
  registerForm: FormGroup;
  editForm: FormGroup;
  submitted = false;
  public modeofenquiry: any;
  public modeofenquiry2: any;
  private modeofenquiries: any;
  Id: any;
  IdValue: any;
  editModeofenquiry: any;
  modeofenquiryValue: any;
  public message: string;

  constructor(
    private formBuilder: FormBuilder,
    private dynamicScriptLoader: DynamicScriptLoaderService,
    private request: RequestService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) {
    // Add Form
    this.registerForm = this.formBuilder.group({
      modeofenquiry: ["", Validators.required]
    });
    // Edit Form
    this.editForm = this.formBuilder.group({
      modeofenquiry2: ["", Validators.required]
    });
  }

  public setMessage(message) {
    return (this.message = message);
  }

  //Add form validation and function
  onAddSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    this.registerForm.value;
    this.request.addModeofenquiry(this.registerForm.value).subscribe(
      (res: any) => {
        if (res.status == "success") {
          swal("Added Sucessfully");
          this.loadModal();
          this.viewData();
        } else if (res.status == "error") {
          this.setMessage(res.error);
        }
      },
      error => {
        this.setMessage(error);
      }
    );
    console.log(this.registerForm.value);
  }

  // To display modeofenquiry
  viewData() {
    this.request.getModeofenquiry().subscribe(
      response => {
        this.modeofenquiries = response;
        console.log(this.modeofenquiries);
      },
      error => {
        console.log(error);
      }
    );
  }

  // To delete modeofenquiry
  deleteModeofenquiry(id: any) {
    this.request.deleteModeofenquiry(id).subscribe(res => {
      console.log(id);
      this.viewData();
      console.log("Deleted");

      this.router.navigate(["mode-of-enquiry"]);
    });
  }

  // To edit modeofenquiry
  onEdit(modeofenquiry) {
    this.Id = modeofenquiry._id;
    this.request.fetchModeofenquiryBy(this.Id).subscribe(response => {
      this.editModeofenquiry = response[0];
      console.log(response);
      this.modeofenquiryValue = this.editModeofenquiry.modeofenquiry;
      this.IdValue = this.editModeofenquiry._id;

      this.editForm = this.formBuilder.group({
        modeofenquiry2: [this.modeofenquiryValue, Validators.required]
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
      modeofenquiry: this.editForm.get("modeofenquiry2").value
    };
    this.request.updateModeofenquiry(this.IdValue, edata).subscribe(
      (res: any) => {
        if (res.status == "success") {
          swal("Updated Sucessfully");
          this.loadModal();
          this.viewData();
        } else if (res.status == "error") {
          this.setMessage(res.error);
        }
      },
      error => {
        console.log(error);
        this.setMessage(error);
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
    this.startScript();
    M.updateTextFields();
    this.viewData();
    this.loadModal();
  }
}
