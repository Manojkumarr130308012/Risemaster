import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  Validators,
} from "@angular/forms";
import { Router } from "@angular/router";
import { RequestService } from "../../services/request.service";
import { DynamicScriptLoaderService } from "../../services/dynamic-script-loader.service";
declare const $: any;
declare const M: any;
declare const swal: any;
@Component({
  selector: 'app-sub-category',
  templateUrl: './sub-category.component.html',
  styleUrls: ['./sub-category.component.scss']
})
export class SubCategoryComponent implements OnInit {

  registerForm: FormGroup;
  editForm: FormGroup;
  submitted = false;
  public subCategory: any;
  public activityCategory: any;
  public subCategory2: any;
  public activityCategory2: any;
  private subcategories: any;
  Id: any;
  IdValue: any;
  editSubCategory: any;
  subCategoryValue: any;
  activityCategoryValue: any;
  activityCats;
  public message: string;
  activitycats: any;

  constructor(
    private formBuilder: FormBuilder,
    private dynamicScriptLoader: DynamicScriptLoaderService,
    private request: RequestService,
    private router: Router
  ) {
    // Add Form
    this.registerForm = this.formBuilder.group({
      activityCategory: ["", Validators.required],
      subCategory: ["", Validators.required]
    });
    // Edit Form
    this.editForm = this.formBuilder.group({
      activityCategory2: ["", Validators.required],
      subCategory2: ["", Validators.required]
    });
  }

  public setMessage(message) {
    return (this.message = message);
  }

  // Bind Activitycategory data
  loadActivityCategory()  {
    this.request.getActivityCat().subscribe((response : any) => {
    this.activitycats = response;
    console.log('ActivityCategory',this.activitycats);
    }, (error) => {
      console.log(error);
    });
  }

  //Add form validation and function
  onAddSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    this.request.addSubCat(this.registerForm.value).subscribe(
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

  // To display course category
  viewData() {
    this.request.getSubCat().subscribe(
      response => {
        this.subcategories = response;
        console.log(this.subcategories);
      },
      error => {
        console.log(error);
      }
    );
  }

  // To delete course category
  deleteSubCat(id: any) {
    this.request.deleteSubCat(id).subscribe(res => {
      console.log(id);
      this.viewData();
      console.log("Deleted");

      this.router.navigate(["course-category"]);
    });
  }

  // To edit course category
  onEdit(subCategory) {
    this.Id = subCategory._id;
    this.request.fetchSubCatById(this.Id).subscribe(response => {
      this.editSubCategory = response[0];
      console.log(response);
      this.activityCategoryValue = this.editSubCategory.activityCategory;
      this.subCategoryValue = this.editSubCategory.subCategory;
      this.IdValue = this.editSubCategory._id;

      this.editForm = this.formBuilder.group({
        activityCategory2: [this.activityCategoryValue, Validators.required],
        subCategory2: [this.subCategoryValue, Validators.required]
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
      subCategory: this.editForm.get("subCategory2").value,
      activityCategory: this.editForm.get("activityCategory2").value
    };

    this.request.updateSubCat(this.IdValue, edata).subscribe(
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
    this.startScript();
    M.updateTextFields();
    this.viewData();
    this.loadModal();
    this.loadActivityCategory();
  }
}
