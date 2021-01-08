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
@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})
export class CityComponent implements OnInit {
  addBatchForm: any;
  editForm: any;
  message: any;
  submitted = false;
  batches: Object;
  public Country: any;
  public Country2: any;
  CountryValue: any;
  StateValue:any;
  Countrys;
  IdValue: any;
  region: any;
  region2: any;
  district:any;
  district2:any;
  Id: any;
  editBatch: any;
  regionValue: any;
  districtValue:any;
  regionNames: any;
  districtValues:any;
  courseprogramValue: any;
  State: any;
  State2: any;
  countryId: any;
  StatebyIns: any;
  StateIns: any;
  states:any;
  districts:any;
  countrybyins:any;
  statebyins:any;
  stateid:any;
  regionbyins:any;
  CityName:any;
  CityName2:any;
  regionid:any;
  CityNameValue:any;
  cities:any;
  constructor(
    private formBuilder: FormBuilder,
    private dynamicScriptLoader: DynamicScriptLoaderService,
    private request: RequestService,
    private router: Router,
    private activeRoute:  ActivatedRoute,
    private auth: AuthService) {
    // Add Form
    this.addBatchForm = this.formBuilder.group({
      Country: ["", Validators.required],
      State: ["", Validators.required],
      region: ["", Validators.required],
      district: ["", Validators.required],
      CityName: ["", Validators.required]
    });
    // Edit Form
    this.editForm = this.formBuilder.group({
      Country2: ["", Validators.required],
      State2: ["", Validators.required],
      region2: ["", Validators.required],
      district2: ["", Validators.required],
      CityName2: ["", Validators.required]
    });

     }
     public setMessage(message) {
      return (this.message = message);
    }

    loadstate() {
      this.request.getstate().subscribe((response: any) => {
        this.states = response;
        console.log('state' ,this.states);
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
      this.request.addcity(this.addBatchForm.value).subscribe(
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
      this.request.getaggcity().subscribe(
        response => {
          this.cities = response;
          console.log("cities",this.cities);
        },
        error => {
          console.log(error);
        }
      );
    }

    // To delete course category
    deleteBatch(id: any) {
      this.request.deletecity(id).subscribe(res => {
        console.log(id);
        this.viewData();
        console.log("Deleted");
      });
    }

    // To edit course category
    onEdit(city) {
      this.Id = city._id;
      this.countryId = city.CountryDetails[0]._id;
      this.stateid = city.StateDetails[0]._id;
      this.regionid = city.regionsDetails[0]._id;
      this.loadcountryIns(this.countryId);
      this.loadstateIns(this.stateid);
      this.loadregionIns(this.regionid);
      this.request.fetchcityById(this.Id).subscribe(response => {
        this.editBatch = response[0];
        console.log(response);
        this.CountryValue = this.editBatch.Country;
        this.StateValue = this.editBatch.State;
        this.regionValue = this.editBatch.region;
        this.districtValue = this.editBatch.district;
        this.CityNameValue = this.editBatch.CityName;
        this.IdValue = this.editBatch._id;

        this.editForm = this.formBuilder.group({
          Country2: [this.CountryValue, Validators.required],
          State2: [this.StateValue, Validators.required],
          region2: [this.regionValue, Validators.required],
          district2: [this.districtValue, Validators.required],
          CityName2: [this.CityNameValue, Validators.required]
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
        Country: this.editForm.get("Country2").value,
        State: this.editForm.get("State2").value,
        region: this.editForm.get("region2").value,
        district: this.editForm.get("district2").value,
        CityName: this.editForm.get("CityName2").value
      };

      this.request.updatecity(this.IdValue, edata).subscribe(
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
    loadcountryIns(Country) {
      this.request.loadcountrybyins(Country).subscribe((response: any) => {
        this.countrybyins = response;
        console.log('countrybyins', this.countrybyins);
      }, (error) => {
        console.log(error);
      });
    }
    loadstateIns(state) {
      this.request.loadstatebyins(state).subscribe((response: any) => {
        this.statebyins = response;
        console.log('statebyins', this.statebyins);
      }, (error) => {
        console.log(error);
      });
    }
    loadregionIns(region) {
      this.request.loaddistrictbyins(region).subscribe((response: any) => {
        this.regionbyins = response;
        console.log('regionbyins', this.regionbyins);
      }, (error) => {
        console.log(error);
      });
    }
  // Bind institution data
  loadCountry() {
    this.request.getcountry().subscribe((response: any) => {
      this.Countrys = response;
      console.log('Countrys', this.Countrys);
    }, (error) => {
      console.log(error);
    });
  }
  // Bind coursecategory data
  onCountryChange(Country: string) {
    console.log('Country', Country);
    if (Country) {
       this.request.loadcountrybyins(Country).subscribe((response: any) => {
         console.log(response);
         this.countrybyins = response;
         console.log('countrybyins', this.countrybyins);
       }, (error) => {
         console.log(error);
       });

     } else

       this.countrybyins = null;
    }

    onstateChange(state: string) {
      console.log('state', state);
      if (state) {
         this.request.loadstatebyins(state).subscribe((response: any) => {
           console.log(response);
           this.statebyins = response;
           console.log('statebyins', this.statebyins);
         }, (error) => {
           console.log(error);
         });
  
       } else
         this.statebyins = null;
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
      //this.auth.isValidUser();
      this.startScript();
      M.updateTextFields();
      this.viewData();
      this.loadModal();
      this.loadstate();
      this.loadCountry();
    }
  }
