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
declare const M: any;
declare const swal: any;

@Component({
  selector: 'app-hostel',
  templateUrl: './hostel.component.html',
  styleUrls: ['./hostel.component.scss']
})
export class HostelComponent implements OnInit {

  registerForm: FormGroup;
  editForm: FormGroup;
  submitted = false;
  public hostel: any;
  public institution: any;
  public hostel2: any;
  public institution2: any;
   hostels: any;
  Id: any;
  IdValue: any;
  editHostel: any;
  hostelValue: any;
  institutionValue: any;
  institutions;
  public message: string;

  constructor(
    private formBuilder: FormBuilder,
    private dynamicScriptLoader: DynamicScriptLoaderService,
    private request: RequestService,
    private router: Router,
    private activeRoute:  ActivatedRoute,
    private auth: AuthService
  ) {
    // Add Form
    this.registerForm = this.formBuilder.group({
      institution: ["", Validators.required],
      hostel: ["", Validators.required]
    });
    // Edit Form
    this.editForm = this.formBuilder.group({
      institution2: ["", Validators.required],
      hostel2: ["", Validators.required]
    });
  }

  public setMessage(message) {
    return (this.message = message);
  }

  // Bind institution data
  loadInstitution() {
    this.request.getInstitution().subscribe(
      (response: any) => {
        this.institutions = response;
        console.log('Institution', this.institutions);
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
    this.request.addHostel(this.registerForm.value).subscribe(
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

  // To display  Hostel
  viewData() {
    this.request.getHostel().subscribe(
      response => {
        this.hostels = response;
        console.log('Hostel', this.hostels);
      },
      error => {
        console.log(error);
      }
    );
  }

  // To delete Hostel
  onDelete(id: any) {
    this.request.deleteHostel(id).subscribe(res => {
      console.log(id);
      this.viewData();
      swal("Deleted Successfully");
    });
  }

  // To edit Hostel
  onEdit(hostel) {
    this.Id = hostel._id;
    this.request.fetchHostelById(this.Id).subscribe(response => {
      this.editHostel = response[0];
      console.log(response);
      this.institutionValue = this.editHostel.institution;
      this.hostelValue = this.editHostel.hostel;
      this.IdValue = this.editHostel._id;

      this.editForm = this.formBuilder.group({
        institution2: [this.institutionValue, Validators.required],
        hostel2: [this.hostelValue, Validators.required]
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
      hostel: this.editForm.get("hostel2").value,
      institution: this.editForm.get("institution2").value
    };

    this.request.updateHostel(this.IdValue, edata).subscribe(
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
    //this.auth.isValidUser();
    this.startScript();
    this.viewData();
    this.loadModal();
    this.loadInstitution()
  }
}
