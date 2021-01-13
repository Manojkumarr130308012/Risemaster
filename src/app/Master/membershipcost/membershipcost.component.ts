import { Component, OnInit } from '@angular/core';
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
import Swal from 'sweetalert2/dist/sweetalert2.js';
@Component({
  selector: 'app-membershipcost',
  templateUrl: './membershipcost.component.html',
  styleUrls: ['./membershipcost.component.scss']
})
export class MembershipcostComponent implements OnInit {
  addBatchForm: any;
  editForm: any;
  message: any;
  submitted = false;
  batches: Object;
  public membershiptype: any;
  public membershiptype2: any;
  membershiptypeValue: any;
  membershipclassificationValue:any;
  membershiptypes;
  IdValue: any;
  amount: any;
  amount2: any;
  validity:any;
  validity2:any;
  Id: any;
  editBatch: any;
  amountValue: any;
  amountNames: any;
  membershiptypevalue:any;
  membershipclassification: any;
  membershipclassification2: any;
  countryId: any;
  membershipclassificationbyIns: any;
  StateIns: any;
  membershipclassifications:any;
  regiones:any;
  validityValue:any;
  membershiptypebyins:any;
  membershipcosts:any;
  constructor(
    private formBuilder: FormBuilder,
    private dynamicScriptLoader: DynamicScriptLoaderService,
    private request: RequestService,
    private router: Router,
    private activeRoute:  ActivatedRoute,
    private auth: AuthService) {
      // Add Form
    this.addBatchForm = this.formBuilder.group({
      membershiptype: ["", Validators.required],
      membershipclassification: ["", Validators.required],
      amount: ["", Validators.required],
      validity: ["", Validators.required],
    });
    // Edit Form
    this.editForm = this.formBuilder.group({
      membershiptype2: ["", Validators.required],
      membershipclassification2: ["", Validators.required],
      amount2: ["", Validators.required],
      validity2: ["", Validators.required],
    });

     }
     public setMessage(message) {
      return (this.message = message);
    }

    loadmembershipclassification() {
      this.request.getmembershipclassification().subscribe((response: any) => {
        this.membershipclassifications = response;
        console.log('membershipclassification',this.membershipclassifications);
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
      this.request.addmembershipcost(this.addBatchForm.value).subscribe(
        (res: any) => {
          if (res.status == "success") {
            Swal.fire("Added Sucessfully");
            this.loadModal();
            this.viewData();
          } else if (res.status == "error") {
            Swal.fire(res.error);
          }
        },
        error => {
          Swal.fire(error);
        }
      );
      console.log(this.addBatchForm.value);
    }

    // To display course category
    viewData() {
      this.request.getmembershipcostaggregion().subscribe(
        response => {
          this.membershipcosts = response;
          console.log("membershipcosts",this.membershipcosts);
        },
        error => {
          console.log(error);
        }
      );
    }

    // To delete course category
    deleteBatch(id: any) {

      Swal.fire({  
        title: 'Are you sure want to Delete?',  
        text: 'You will not be able to recover this Data',  
        icon: 'warning',  
        showCancelButton: true,  
        confirmButtonText: 'Delete',  
        cancelButtonText: 'Cancel'  
      }).then((result) => {  
        if (result.value) {   
          this.request.deletemembershipcost(id).subscribe(res => {
            console.log(id);
            this.viewData();
            console.log("Deleted");
          });
          Swal.fire(  
            'Deleted! Sucessfully',  
          )  
        } else if (result.dismiss === Swal.DismissReason.cancel) {  
          Swal.fire(  
            'Cancelled',   
          )  
        }  
      }) 

    
    }

    // To edit course category
    onEdit(city) {
      this.Id = city._id;
      // this.countryId = city.CountryDetails[0]._id;
      // this.loadcountryIns(this.countryId);
      this.request.fetchmembershipcostById(this.Id).subscribe(response => {
        this.editBatch = response[0];
        console.log(response);
        this.membershiptypevalue = this.editBatch.membershiptype;
        this.membershipclassificationValue = this.editBatch.membershipclassification;
        this.amountValue = this.editBatch.amount;
        this.validityValue = this.editBatch.validity;
        this.IdValue = this.editBatch._id;

        this.editForm = this.formBuilder.group({
          membershiptype2: [this.membershiptypevalue, Validators.required],
          membershipclassification2: [this.membershipclassificationValue, Validators.required],
          amount2: [this.amountValue, Validators.required],
          validity2: [this.validityValue, Validators.required]
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
        membershiptype: this.editForm.get("membershiptype2").value,
        membershipclassification: this.editForm.get("membershipclassification2").value,
        amount: this.editForm.get("amount2").value,
        validity: this.editForm.get("validity2").value,
      };

      this.request.updatemembershipcost(this.IdValue, edata).subscribe(
        (res: any) => {
          if (res.status == "success") {
            Swal.fire("Updated Sucessfully");
            this.loadModal();
            this.viewData();
          } else if (res.status == "error") {
            Swal.fire(res.error);
          }
        },
        error => {
          console.log(error);
          Swal.fire(error);
        }
      );
    }
    // loadcountryIns(Country) {
    //   this.request.loadcountrybyins(Country).subscribe((response: any) => {
    //     this.countrybyins = response;
    //     console.log('countrybyins', this.countrybyins);
    //   }, (error) => {
    //     console.log(error);
    //   });
    // }
  // Bind institution data
  loadmembershiptype() {
    this.request.getmembershiptype().subscribe((response: any) => {
      this.membershiptypes = response;
      console.log('membershiptypes', this.membershiptypes);
    }, (error) => {
      console.log(error);
    });
  }
  // Bind coursecategory data
  // onCountryChange(Country: string) {
  //   console.log('Country', Country);
  //   if (Country) {
  //      this.request.loadcountrybyins(Country).subscribe((response: any) => {
  //        console.log(response);
  //        this.countrybyins = response;
  //        console.log('countrybyins', this.countrybyins);
  //      }, (error) => {
  //        console.log(error);
  //      });

  //    } else

  //      this.countrybyins = null;
  //   }
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
        buttons: ["excel", "pdf"]
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
      M.updateTextFields();
      this.viewData();
      this.loadModal();
      this.loadmembershiptype();
      this.loadmembershipclassification();
    }
  }
