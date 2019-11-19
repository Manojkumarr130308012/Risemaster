import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from "@angular/forms";
import { Router } from "@angular/router";
import { RequestService } from "../../../services/request.service";

declare const $: any;
declare const M: any;
declare const swal: any;

import * as moment from "moment";
import { Angular5Csv } from "angular5-csv/dist/Angular5-csv";
@Component({
  selector: "app-fuel-entry-report",
  templateUrl: "./fuel-entry-report.component.html",
  styleUrls: ["./fuel-entry-report.component.css"]
})
export class FuelEntryReportComponent implements OnInit {
  openKM: any;

  IdValue2: any;
  fuels: any;
  drivers;
  stations;
  openKMs: {};

  public fuelReportVehicleNo: any;
  public FRFromDate: any;
  public FRToDate: any;

  fuelDate2;

  public message: string;
  Id: any;
  vehicles;

  constructor(private request: RequestService) {
    this.fuelReportVehicleNo = new FormControl("", Validators.required);
    this.FRFromDate = new FormControl("", Validators.required);
    this.FRToDate = new FormControl("", Validators.required);
  }

  // Bind vehicle no data
  loadVehicle() {
    this.request.getVehicle().subscribe(
      (response: any) => {
        console.log(response);
        this.vehicles = response;
      },
      error => {
        console.log(error);
      }
    );
  }

  onVehicleChangeforFuelReport(VehicleNo: string) {
    console.log("Vehicle", VehicleNo);
    //this.loadCourseCategory(Institution);

    if (VehicleNo != 'All') {
      this.request.getvehicleFuelReport(VehicleNo).subscribe(
        (response: any) => {
          console.log("FuelReport", response);
          this.fuels = response;
        },
        error => {
          console.log(error);
        }
      );
    }
    else if(VehicleNo == 'All'){
     // console.log('all');

      this.viewFuelData();

    }
    else this.openKM = null;
  }

  filterFuelReport() {
    // console.log(this.fuelReportVehicleNo.value);
    // console.log(this.FRFromDate.value);
    //console.log(this.FRToDate.value);

    const FuelReportdate = {
      fuelVehicleNo: this.fuelReportVehicleNo.value,
      fuelDate: this.FRFromDate.value,
      fuelDate2: this.FRToDate.value
    };
    //console.log('FuelReportdate', FuelReportdate);

    this.request.fetchFuelReportbyDate(FuelReportdate).subscribe(response => {
      console.log("FuelReportdate", response);
      this.fuels = response;
    });
  }
  // To display Fuel
  viewFuelData() {
    this.request.getFuelEntry().subscribe(
      response => {
        console.log("fuel", response);
        this.fuels = response;
        // console.log(this.fuels);
      },
      error => {
        console.log(error);
      }
    );
  }

  exportExcel() {
    const options = {
      fieldSeparator: ",",
      quoteStrings: '"',
      decimalseparator: ".",
      showLabels: true,
      showTitle: true,
      title: "Vehicle Fuel Report",
      useBom: true,
      noDownload: false,
      headers: [
        "Van NO",
        "Date",
        "Open KM",
        "Close KM",
        "Running KM",
        "Is Fill",
        "Quantity",
        "Rate",
        "Amount",
        "Filling Station",
        "Mileage",
        "Bill No",
        "Driver"
      ]
    };

    const exportData: any = this.fuels.map(a => ({ ...a }));

    exportData.map((value: any, key) => {
      delete exportData[key]._id;
      delete exportData[key].__v;
    });
    console.log("this.fuels", this.fuels);
    const exportResult = new Angular5Csv(
      exportData,
      "Vehicle Fuel Report" + moment().unix() + ".xls",
      options
    );
  }

  ngOnInit() {
    this.loadVehicle();
    this.viewFuelData();
    //jQuery Validation
    $(function() {
      $("#form_advanced_validation").validate({
        highlight: function(input) {
          $(input)
            .parents(".form-line")
            .addClass("error");
        },
        unhighlight: function(input) {
          $(input)
            .parents(".form-line")
            .removeClass("error");
        },
        errorPlacement: function(error, element) {
          $(element)
            .parents(".form-group")
            .append(error);
        }
      });
    });
  }
}
