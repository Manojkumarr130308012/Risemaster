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
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.scss']
})
export class BrandComponent implements OnInit {
  addBatchForm: any;
  editForm: any;
  message: any;
  submitted = false;
  batches: Object;
  public speaker1: any;
  public speaker12: any;
  public speaker2: any;
  public speaker22: any;
  public agenda: any;
  public agenda2: any;
  public venue: any;
  public venue2: any;
  public date: any;
  public date2: any;
  public time: any;
  public time2: any;
  speaker1Value: any;
  speaker2Value:any;
  speaker1s;
  speaker2s;
  IdValue: any;
  amount: any;
  amount2: any;
  validity:any;
  validity2:any;
  Id: any;
  editBatch: any;
  agendaValue: any;
  agendaNames: any;
  venueValue: any;
  venueNames: any;
  dateValue: any;
  dateNames: any;
  timeValue: any;
  timeNames: any;
  validityValue:any;
  trackid:any;
eventid:any;
agendas:any;
chapterid:any;
  designationvalue: any;
  ordervalue: any;
  constructor(
    private formBuilder: FormBuilder,
    private dynamicScriptLoader: DynamicScriptLoaderService,
    private request: RequestService,
    private router: Router,
    private activeRoute:  ActivatedRoute,
    private route: ActivatedRoute,
    private auth: AuthService) {

    
      // Add Form
    this.addBatchForm = this.formBuilder.group({
      order: ["", Validators.required],
      designation: ["", Validators.required]
    });
    // Edit Form
    this.editForm = this.formBuilder.group({
      order2: ["", Validators.required],
      designation2: ["", Validators.required]
    });

     }
     public setMessage(message) {
      return (this.message = message);
    }

    // loadspeaker() {
    //   this.request.getspeaker().subscribe((response: any) => {
    //     this.speaker1s = response;
    //     console.log('speaker1s',this.speaker1s);
    //   }, (error) => {
    //     console.log(error);
    //   });
    // }

    //Add form validation and function
    onAddSubmit() {
      this.submitted = true;
      if (this.addBatchForm.invalid) {
        return;
      }

      const edata1 = {

        designation: this.addBatchForm.get("designation").value,
        order: this.addBatchForm.get("order").value
      };
      this.request.adddBoard(edata1).subscribe(
        (res: any) => {
          if (res.status == "success") {
           this.loadModal();
            this.viewData();
            Swal.fire("Added Sucessfully");
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
      this.request.getdBoard().subscribe(
        response => {
          this.agendas = response;
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
          this.request.deletedBoard(id).subscribe(res => {
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
      this.request.fetchsBoardById(this.Id).subscribe(response => {
        this.editBatch = response[0];
        console.log(response);
        this.designationvalue = this.editBatch.designation;
        this.ordervalue = this.editBatch.order;
        this.IdValue = this.editBatch._id;

        this.editForm = this.formBuilder.group({
          designation2: [this.designationvalue, Validators.required],
          order2: [this.ordervalue, Validators.required],
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

      const edata1 = {
        designation: this.editForm.get("designation2").value,
        order: this.editForm.get("order2").value
      };

      this.request.updatedBoard(this.IdValue, edata1).subscribe(
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
  // loadspeaker1() {
  //   this.request.getspeaker().subscribe((response: any) => {
  //     this.speaker2s = response;
  //     console.log('speaker2s', this.speaker2s);
  //   }, (error) => {
  //     console.log(error);
  //   });
  // }
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
      // this.loadspeaker();
      // this.loadspeaker1();
    }
  }
