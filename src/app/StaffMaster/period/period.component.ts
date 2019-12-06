import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { RequestService } from "../../services/request.service";
import { DynamicScriptLoaderService } from "../../services/dynamic-script-loader.service";
import { AuthService } from "../../services/auth.service";
declare const $: any;
declare const swal: any;
@Component({
  selector: 'app-period',
  templateUrl: './period.component.html',
  styleUrls: ['./period.component.scss']
})
export class PeriodComponent implements OnInit {
  addForm: FormGroup;
  editForm: FormGroup;
  submitted = false;
  public periodName: any;
  public fromTime: any;
  public toTime: any;
  public periodOrder: any;
  public institution: any;
  public periodName2: any;
  public fromTime2: any;
  public toTime2: any;
  public periodOrder2: any;
  public institution2: any;
 coursecategories: any;
  Id: any;
  IdValue: any;
  editsemester: any;
  semesterValue: any;
  institutionValue: any;
  institutions;
  public message: string;
  semesters: any;
  editperiod: any;
  periodOrderValue: any;
  fromTimeValue: any;
  toTimeValue: any;
  periodNameValue: any;
  userInfo: any;
  departmentByIns: any;
  courseprogrambyIns: any;
  periods: any;

  constructor(
    private formBuilder: FormBuilder,
    private dynamicScriptLoader: DynamicScriptLoaderService,
    private request: RequestService,
    private router: Router,
    private activeRoute:  ActivatedRoute,
    private auth: AuthService
  ) {
    //Get institution & department  value from localstorage
    this.userInfo = localStorage.getItem('userData');
    this.userInfo = JSON.parse(this.userInfo);
    this.IdValue = this.userInfo.institution;
    this.institutionValue = this.IdValue;
    
    this.institution = new FormControl({value:this.institutionValue, disabled: true});
    // Add Form
    this.addForm = this.formBuilder.group({
      periodOrder: ["", Validators.required],
      toTime: ["", Validators.required],
      periodName: ["", Validators.required],
      fromTime: ["", Validators.required]
    });
    // Edit Form
    this.editForm = this.formBuilder.group({
      periodOrder2: ["", Validators.required],
      toTime2: ["", Validators.required],
      periodName2: ["", Validators.required],
      fromTime2: ["", Validators.required]
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
    const newdata = {
      periodName: this.addForm.get("periodName").value,
      fromTime: this.addForm.get("fromTime").value,
      toTime: this.addForm.get("toTime").value,
      periodOrder: this.addForm.get("periodOrder").value,
      institution: this.institutionValue
    };
    this.request.addPeriod(newdata).subscribe(
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
    this.request.getPeriod().subscribe(
      response => {
        this.periods = response;
        console.log('Period', this.periods);
      },
      error => {
        console.log(error);
      }
    );
  }

  // To delete course category
  onDelete(id: any) {
    this.request.deletePeriod(id).subscribe(res => {
      console.log(id);
      this.viewData();
      console.log("Deleted");
      swal("Deleted");
    });
  }

  // To edit course category
  onEdit(period) {
    this.Id = period._id;
    this.request.fetchPeriodById(this.Id).subscribe(response => {
      this.editperiod = response[0];
      console.log(response);
      this.institutionValue = this.editperiod.institution;
      this.fromTimeValue = this.editperiod.fromTime;
      this.toTimeValue = this.editperiod.toTime;
      this.periodOrderValue = this.editperiod.periodOrder;
      this.periodNameValue = this.editperiod.periodName;
      this.IdValue = this.editperiod._id;

      this.editForm = this.formBuilder.group({
        fromTime2: [this.fromTimeValue, Validators.required],
        toTime2: [ this.toTimeValue, Validators.required],
        periodName2: [this.periodNameValue, Validators.required],
        periodOrder2: [this.periodOrderValue, Validators.required]
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
      periodName: this.editForm.get("periodName2").value,
      fromTime: this.editForm.get("fromTime2").value,
      toTime: this.editForm.get("toTime2").value,
      periodOrder: this.editForm.get("periodOrder2").value,
      institution: this.institutionValue
    };

    this.request.updatePeriod(this.IdValue, edata).subscribe(
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
    // this.auth.isValidUser();
    this.startScript();
    this.viewData();
    this.loadInstitution();
    this.loadModal();
  }
}

