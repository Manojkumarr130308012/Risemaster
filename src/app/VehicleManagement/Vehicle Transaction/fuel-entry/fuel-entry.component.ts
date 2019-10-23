import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { RequestService } from '../../../services/request.service';
import { ActivatedRoute } from '@angular/router';
declare const $: any;
declare const M: any;
declare const swal: any;

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

  public message: string;
  Id: any;
  vehicles;

  constructor(
    private formBuilder: FormBuilder,
    private request: RequestService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    // addFuelForm Group
this.addFuelForm = this.formBuilder.group({
  fuelVehicleNo:['', Validators.required],
  fuelDate:['', Validators.required],
  openKM:['', Validators.required],
  closeKM:['', Validators.required],
  isFill:['', Validators.required],
  quantity:['', Validators.required],
  rate:['', Validators.required],
  stationName:['', Validators.required],
  billNo:['', Validators.required],
  driverName:['', Validators.required],
});
// editFuelForm Group
this.editFuelForm = this.formBuilder.group({
  fuelVehicleNo:['', Validators.required],
  fuelDate:['', Validators.required],
  openKM:['', Validators.required],
  closeKM:['', Validators.required],
  isFill:['', Validators.required],
  quantity:['', Validators.required],
  rate:['', Validators.required],
  stationName:['', Validators.required],
  billNo:['', Validators.required],
  driverName:['', Validators.required],
});
   }

   public setMessage(message) {
    return this.message = message;
  }

//   textChanged(event) {
//     console.log('changed', this.closeKM, event);
// }

textChanged(event) {        
  console.log('changed', this.closeKM, this.openKM);
  this.closeKM=this.openKM; 
  setTimeout(() => console.log(this.closeKM), 0);                          
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

 //Add form validation and function
onAddFuel() {
  this.submitted = true;
  if (this.addFuelForm.invalid) {
      return;
  }
  const runKM = this.addFuelForm.get('openKM').value - this.addFuelForm.get('closeKM').value;
  const amount = this.addFuelForm.get('quantity').value * this.addFuelForm.get('quantity').value;
  const mileage = runKM / this.addFuelForm.get('quantity').value;
  let newFuel = {
    fuelVehicleNo : this.addFuelForm.get('fuelVehicleNo').value,
    fuelDate : this.addFuelForm.get('fuelDate').value,
    openKM : this.addFuelForm.get('openKM').value,
    closeKM : this.addFuelForm.get('closeKM').value,
    runningKM : runKM,
    isFill : this.addFuelForm.get('isFill').value,
    quantity : this.addFuelForm.get('quantity').value,
    rate : this.addFuelForm.get('quantity').value,
    fuelAmount : amount,
    stationName : this.addFuelForm.get('stationName').value,
    mileage : mileage,
    billNo : this.addFuelForm.get('billNo').value,
    driverName : this.addFuelForm.get('driverName').value,
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
onEditFuel(id: any){
  console.log('fuelid', id);
  this.request.fetchFuelEntryById(id).subscribe((response) => {     
    this.editFuel=response[0];     
    console.log(response);
        this.fuelVehicleNoValue=this.editFuel.fuelVehicleNo;
        this.fuelDateValue=this.editFuel.fuelDate;
        this.openKMValue=this.editFuel.openKM;
        this.closeKMValue=this.editFuel.closeKM;
        this.isFillValue=this.editFuel.isFill;
        this.quantityValue=this.editFuel.quantity;
        this.rateValue=this.editFuel.rate;
        this.stationNameValue=this.editFuel.stationName;
        this.billNoValue=this.editFuel.billNo;
        this.driverNameValue=this.editFuel.driverName;
        this.IdValue2=this.editFuel._id;
    
        
    this.editFuelForm = this.formBuilder.group({
      fuelVehicleNo:[this.fuelVehicleNoValue, Validators.required],
      fuelDate:[this.fuelDateValue, Validators.required],
      openKM:[this.openKMValue, Validators.required],
      closeKM:[this.closeKMValue, Validators.required],
      isFill:[this.isFillValue, Validators.required],
      quantity:[this.quantityValue, Validators.required],
      rate:[this.rateValue, Validators.required],
      stationName:[this.stationNameValue, Validators.required],
      billNo:[this.billNoValue, Validators.required],
      driverName:[this.driverNameValue, Validators.required],
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
this.request.updateFuelEntry(this.IdValue2,this.editFuelForm.value).subscribe((res : any) => {
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

loadFuelModal(){
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
 this.textChanged(event);
  }

}
