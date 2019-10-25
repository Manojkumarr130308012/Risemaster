import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { RequestService } from '../../../services/request.service';
import { ActivatedRoute } from '@angular/router';
declare const $: any;
declare const M: any;
declare const swal: any;


import * as moment from 'moment';
import { Angular5Csv } from 'angular5-csv/dist/Angular5-csv';

@Component({
  selector: 'app-fuel-entry',
  templateUrl: './fuel-entry.component.html',
  styleUrls: ['./fuel-entry.component.scss']
})
export class FuelEntryComponent implements OnInit {
  // Fuel
  addFuelForm: FormGroup;
  editFuelForm: FormGroup;
  submitted = false;
  fuelVehicleNo: any;
  fuelDate: any;
  openKM: any;
  closeKM: any;
  runningKM: any;
  isFill: any
  quantity: any;
  rate: any
  fuelAmount: any;
  stationName: any;
  mileage: any;
  billNo: any;
  driverName: any;
  editFuel: any;
  fuelVehicleNoValue: any;
  fuelDateValue: any;
  openKMValue: any;
  closeKMValue: any;
  runningKMValue: any;
  isFillValue: any
  quantityValue: any;
  rateValue: any
  fuelAmountValue: any;
  stationNameValue: any;
  mileageValue: any;
  billNoValue: any;
  driverNameValue: any;
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

  constructor(
    private formBuilder: FormBuilder,
    private request: RequestService,
    private router: Router,
    private route: ActivatedRoute
  ) {

    this.fuelReportVehicleNo = new FormControl('', Validators.required);
    this.FRFromDate = new FormControl('', Validators.required);
    this.FRToDate = new FormControl('', Validators.required);
    // addFuelForm Group
    this.addFuelForm = this.formBuilder.group({
      fuelVehicleNo: ['', Validators.required],
      fuelDate: ['', Validators.required],
      openKM: ['', Validators.required],
      closeKM: ['', Validators.required],
      isFill: ['', Validators.required],
      quantity: ['', Validators.required],
      rate: ['', Validators.required],
      stationName: ['', Validators.required],
      billNo: ['', Validators.required],
      driverName: ['', Validators.required],
    });
    // editFuelForm Group
    this.editFuelForm = this.formBuilder.group({
      fuelVehicleNo: ['', Validators.required],
      fuelDate: ['', Validators.required],
      openKM: ['', Validators.required],
      closeKM: ['', Validators.required],
      isFill: ['', Validators.required],
      quantity: ['', Validators.required],
      rate: ['', Validators.required],
      stationName: ['', Validators.required],
      billNo: ['', Validators.required],
      driverName: ['', Validators.required],
    });
  }

  public setMessage(message) {
    return this.message = message;
  }



  // Bind filling station data
  loadStation() {
    this.request.getStation().subscribe((response: any) => {
      console.log(response);
      this.stations = response;
    }, (error) => {
      console.log(error);
    });
  }

  // Bind driver data
  loadDriver() {
    this.request.getDriver().subscribe((response: any) => {
      console.log(response);
      this.drivers = response;
    }, (error) => {
      console.log(error);
    });
  }




  onVehicleChange(VehicleNo: string) {
    console.log('Vehicle', VehicleNo)
    //this.loadCourseCategory(Institution);

    if (VehicleNo) {
      this.request.getRecentOpeningKms(VehicleNo).subscribe((response: any) => {
        console.log('VehicleNo', response[0].closeKM);
      let closeKM= response[0].closeKM;
        if(closeKM == "")
        {
          closeKM=0;
        }
        else{
          
        }
      this.openKM =closeKM;
      }, (error) => {
        this.openKM = 0;
        console.log(this.openKM);
        console.log(error);
      });

    } else{
      this.openKM = 0;
    }

     
  }

  // Bind vehicle no data
  loadVehicle() {
    this.request.getVehicle().subscribe((response: any) => {
      console.log(response);
      this.vehicles = response;
    }, (error) => {
      console.log(error);
    });
  }


  onVehicleChangeforFuelReport(VehicleNo: string) {
    console.log('Vehicle', VehicleNo)
    //this.loadCourseCategory(Institution);

    if (VehicleNo) {
      this.request.getvehicleFuelReport(VehicleNo).subscribe((response: any) => {
        console.log('FuelReport', response);
        this.fuels = response;
      }, (error) => {
        console.log(error);
      });

    } else

      this.openKM = null;
  }

  filterFuelReport() {

    console.log(this.fuelReportVehicleNo.value);
    console.log(this.FRFromDate.value);
    console.log(this.FRToDate.value);


    const FuelReportdate = {
      fuelVehicleNo: this.fuelReportVehicleNo.value,
      fuelDate: this.FRFromDate.value,
      fuelDate2: this.FRToDate.value
    };
    console.log('FuelReportdate', FuelReportdate);

    this.request.fetchFuelReportbyDate(FuelReportdate).subscribe((response) => {
      console.log(response);
      this.fuels = response;
    })
  }


  exportExcel() {
    const options = {
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalseparator: '.',
      showLabels: true,
      showTitle: true,
      title: 'Fuel Entry Report',
      useBom: true,
      noDownload: false,
      headers: [
        'Fuel'

      ],
    };

    const exportData: any = this.fuels.map(a => ({ ...a }));

    exportData.map((value: any, key) => {
      delete exportData[key]._id;
      delete exportData[key].__v;
    });
    console.log(this.fuels);
    const exportResult = new Angular5Csv(exportData, 'Vehicle Fuel Entry Report' + moment().unix() + '.xls', options);
  }



  //Add form validation and function
  onAddFuel() {
    this.submitted = true;
    if (this.addFuelForm.invalid) {
      return;
    }
    const runKM = this.addFuelForm.get('closeKM').value - this.addFuelForm.get('openKM').value;
    const amount = this.addFuelForm.get('quantity').value * this.addFuelForm.get('rate').value;
    const mileage = runKM / this.addFuelForm.get('quantity').value;
    let newFuel = {
      fuelVehicleNo: this.addFuelForm.get('fuelVehicleNo').value,
      fuelDate: this.addFuelForm.get('fuelDate').value,
      openKM: this.addFuelForm.get('openKM').value,
      closeKM: this.addFuelForm.get('closeKM').value,
      runningKM: runKM,
      isFill: this.addFuelForm.get('isFill').value,
      quantity: this.addFuelForm.get('quantity').value,
      rate: this.addFuelForm.get('rate').value,
      fuelAmount: amount,
      stationName: this.addFuelForm.get('stationName').value,
      mileage: mileage,
      billNo: this.addFuelForm.get('billNo').value,
      driverName: this.addFuelForm.get('driverName').value,
    }
    this.request.addFuelEntry(newFuel).subscribe((res: any) => {
      console.log('fuel', res);
      if (res.status == 'success') {
        swal("Added Sucessfully");
        this.loadFuelModal();
        this.viewFuelData();
      }
      else if (res.status == 'error') {
        this.setMessage(res.error);
      }
    }, (error) => {
      this.setMessage(error);
    });
    console.log(newFuel);
  }

  // To display Fuel
  viewFuelData() {
    this.request.getFuelEntry().subscribe((response) => {
      console.log('fuel', response);
      this.fuels = response;
      console.log(this.fuels);
    }, (error) => {
      console.log(error);
    });
  }

  // To edit fuel
  onEditFuel(id: any) {
    console.log('fuelid', id);
    this.request.fetchFuelEntryById(id).subscribe((response) => {
      this.editFuel = response[0];
      console.log(response);
      this.fuelVehicleNoValue = this.editFuel.fuelVehicleNo;
      this.fuelDateValue = this.editFuel.fuelDate;
      this.openKMValue = this.editFuel.openKM;
      this.closeKMValue = this.editFuel.closeKM;
      this.isFillValue = this.editFuel.isFill;
      this.quantityValue = this.editFuel.quantity;
      this.rateValue = this.editFuel.rate;
      this.stationNameValue = this.editFuel.stationName;
      this.billNoValue = this.editFuel.billNo;
      this.driverNameValue = this.editFuel.driverName;
      this.IdValue2 = this.editFuel._id;


      this.editFuelForm = this.formBuilder.group({
        fuelVehicleNo: [this.fuelVehicleNoValue, Validators.required],
        fuelDate: [this.fuelDateValue, Validators.required],
        openKM: [this.openKMValue, Validators.required],
        closeKM: [this.closeKMValue, Validators.required],
        isFill: [this.isFillValue, Validators.required],
        quantity: [this.quantityValue, Validators.required],
        rate: [this.rateValue, Validators.required],
        stationName: [this.stationNameValue, Validators.required],
        billNo: [this.billNoValue, Validators.required],
        driverName: [this.driverNameValue, Validators.required],
      });
      console.log(this.editFuelForm.value);
    });
  }
  onEditFuelSubmit() {
    this.submitted = true;
    console.log(this.editFuelForm.value);
    if (this.editFuelForm.invalid) {
      return;
    }
    this.request.updateFuelEntry(this.IdValue2, this.editFuelForm.value).subscribe((res: any) => {
      if (res.status == 'success') {
        swal("Updated Sucessfully");
        this.loadFuelModal();
        this.viewFuelData();
      }
      else if (res.status == 'error') {
        this.setMessage(res.error);
      }

    }, (error) => {
      console.log(error);
      this.setMessage(error);
    });
  }

  // To delete Fuel
  deleteFuel(id: any) {
    this.request.deleteFuelEntry(id).subscribe(res => {
      console.log(id);
      this.viewFuelData();
      console.log('Deleted');
    });
  }

  // convenience getter for easy access to form fields
  get s() { return this.addFuelForm.controls; }
  get s2() { return this.editFuelForm.controls; }

  loadFuelModal() {
    $('#addFuelModal').modal('hide'); //or  $('#IDModal').modal('hide');
    $('#addFuelModal').on('hidden.bs.modal', function () {
      $(this).find('form').trigger('reset');
    });

    $('#editFuelModal').modal('hide'); //or  $('#IDModal').modal('hide');
    $('#editFuelModal').on('hidden.bs.modal', function () {
      $(this).find('form').trigger('reset');
    });
  }

  ngOnInit() {
    M.updateTextFields();
    this.loadVehicle();
    this.viewFuelData();
    this.loadFuelModal();
    this.loadStation();
    this.loadDriver();
    //this.textChanged(event);
  }

}
