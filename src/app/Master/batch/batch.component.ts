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
  selector: 'app-batch',
  templateUrl: './batch.component.html',
  styleUrls: ['./batch.component.scss']
})
export class BatchComponent implements OnInit {
  addBatchForm: any;
  editForm: any;
  message: any;
  submitted = false;
  batches: Object;
  public institution: any;
  public institution2: any;
  institutionValue: any;
  institutions;
  IdValue: any;
  batch: any;
  batch2: any;
  Id: any;
  editBatch: any;
  batchValue: any;
  degrees: any;
  degreeValue: any;
  degree: any;
  degree2: any;
  institutionId: any;
  degreebyIns: any;
  degreesIns: any;
  constructor(
    private formBuilder: FormBuilder,
    private dynamicScriptLoader: DynamicScriptLoaderService,
    private request: RequestService,
    private router: Router) {
      // Add Form
    this.addBatchForm = this.formBuilder.group({
      institution: ["", Validators.required],
      degree: ["", Validators.required],
      batch: ["", Validators.required]
    });
    // Edit Form
    this.editForm = this.formBuilder.group({
      institution2: ["", Validators.required],
      degree2: ["", Validators.required],
      batch2: ["", Validators.required]
    });
  
     }
     public setMessage(message) {
      return (this.message = message);
    }
  
    loadDegree() {
      this.request.getDegree().subscribe((response: any) => {
        this.degrees = response;
        console.log('DegreeProgram' ,this.degrees);
      }, (error) => {
        console.log(error);
      });
    }
  
    //Add form validation and function
    onAddSubmit() {
      this.submitted = true;
      if (this.addBatchForm.invalid) {
        return;
      }
      this.request.addBatch(this.addBatchForm.value).subscribe(
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
      console.log(this.addBatchForm.value);
    }
  
    // To display course category
    viewData() {
      this.request.getbatch().subscribe(
        response => {
          this.batches = response;
          console.log(this.batches);
        },
        error => {
          console.log(error);
        }
      );
    }
  
    // To delete course category
    deleteBatch(id: any) {
      this.request.deleteBatch(id).subscribe(res => {
        console.log(id);
        this.viewData();
        console.log("Deleted");
      });
    }
  
    // To edit course category
    onEdit(batch) {
      this.Id = batch._id;
      this.institutionId = batch.institution[0]._id;
      this.loadDegreeByIns(this.institutionId); 
      this.request.fetchBatchById(this.Id).subscribe(response => {
        this.editBatch = response[0];
        console.log(response);
        this.institutionValue = this.editBatch.institution;
        this.degreeValue = this.editBatch.degree;
        this.batchValue = this.editBatch.batch;
        this.IdValue = this.editBatch._id;
  
        this.editForm = this.formBuilder.group({
          institution2: [this.institutionValue, Validators.required],
          degree2: [this.degreeValue, Validators.required],
          batch2: [this.batchValue, Validators.required]
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
        institution: this.editForm.get("institution2").value,
        degree: this.editForm.get("degree2").value,
        batch: this.editForm.get("batch2").value
      };
  
      this.request.updateBatch(this.IdValue, edata).subscribe(
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
    loadDegreeByIns(institution) {
      this.request.getDegreeByIns(institution).subscribe((response: any) => {
        this.degreebyIns = response;
        console.log('DegreeByIns', this.degreebyIns);
      }, (error) => {
        console.log(error);
      });
    }
  // Bind institution data
  loadInstitution() {
    this.request.getInstitution().subscribe((response: any) => {
      this.institutions = response;
      console.log('Institution', this.institutions);
    }, (error) => {
      console.log(error);
    });
  }
  // Bind coursecategory data
  onInstitutionChange(Institution: string) {
    console.log('institution', Institution);
    if (Institution) {
       this.request.getDegreeByIns(Institution).subscribe((response: any) => {
         console.log(response);
         this.degreesIns = response;
       }, (error) => {
         console.log(error);
       });

     } else

       this.degreesIns = null;
    }
    // convenience getter for easy access to form fields
    get f() {
      return this.addBatchForm.controls;
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
      this.loadDegree();
      this.loadInstitution();
    }
  }
  