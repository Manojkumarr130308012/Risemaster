import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { RequestService } from '../../services/request.service';
import { ActivatedRoute } from '@angular/router';
declare const $: any;
declare const M: any;
declare const swal: any;

@Component({
  selector: 'app-vehicle-transaction',
  templateUrl: './vehicle-transaction.component.html',
  styleUrls: ['./vehicle-transaction.component.scss']
})
export class VehicleTransactionComponent implements OnInit {

  // Expenses
  addExpensesForm: FormGroup;
  editExpensesForm: FormGroup;
  submitted = false;
  vehicleNo: any;
  expense: any;
  date:any;
  amount: any;
  notes: any;
  expensesEntry;
  editExpenses: any;
  vehicleNoValue: any;
  expenseValue: any;
  dateValue: any;
  amountValue: any;
  notesValue: any;
  IdValue1: any;

  public message: string;
  Id: any;
  vehicles: any;
  expenses: any;

  // Fuel
  addFuelForm: FormGroup;
  editFuelForm: FormGroup;
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
  drivers: any;
  stations: any;

  constructor(
    private formBuilder: FormBuilder,
    private request: RequestService,
    private router: Router,
    private route: ActivatedRoute
  ) { 
    // addExpensesForm Group
    this.addExpensesForm = this.formBuilder.group({
      vehicleNo:['', Validators.required],
      expense:['', Validators.required],
      date:['', Validators.required],
      amount:['', Validators.required],
      notes:['', Validators.required],
  });
  // editExpensesForm Group
  this.editExpensesForm = this.formBuilder.group({
    vehicleNo:['', Validators.required],
    expense:['', Validators.required],
    date:['', Validators.required],
    amount:['', Validators.required],
    notes:['', Validators.required],
});
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

  // Bind vehicle no data
  loadVehicle() {
    this.request.getVehicle().subscribe((response: any) => {
      console.log(response);
      this.vehicles = response;
    }, (error) => {
      console.log(error);
    });
  }

  // // Bind expense data
  // loadExpenses() {
  //   this.request.getExpense().subscribe((response: any) => {
  //     console.log(response);
  //     this.expenses = response;
  //   }, (error) => {
  //     console.log(error);
  //   });
  // }

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

//   //Add form validation and function
//   onAddExpenses() {
//     this.submitted = true;
//     if (this.addExpensesForm.invalid) {
//         return;
//     }
// this.request.addExpensesEntry(this.addExpensesForm.value).subscribe((res: any) => {
//   if (res.status == 'success') {
//     swal("Added Sucessfully");
//   this.loadExpensesModal();
//   this.viewExpensesData();
//   }
//   else if (res.status == 'error') {
//     this.setMessage(res.error);
//   }
// }, (error) => {
//   this.setMessage(error);
// });
// console.log(this.addExpensesForm.value);
// }

// // To display Expenses
// viewExpensesData() {
// this.request.getExpensesEntry().subscribe((response) => {
//   console.log('Expenses', response);
//   this.expensesEntry = response;
//   console.log(this.expensesEntry);
// }, (error) => {
//   console.log(error);
// });
// }

// // To delete Expenses
// deleteExpense(id: any) {
//   this.request.deleteExpensesEntry(id).subscribe(res => {
//     console.log(id);
//     this.viewExpensesData();
//   console.log('Deleted');
//   });
// }

// // To edit expenses
// onEditExpense(id: any){
//   console.log('exeid', id);
//   this.request.fetchExpensesEntryById(id).subscribe((response) => {     
//     this.editExpenses=response[0];     
//     console.log(response);
//         this.vehicleNoValue=this.editExpenses.vehicleNo;
//         this.expenseValue=this.editExpenses.expense;
//         this.dateValue=this.editExpenses.date;
//         this.amountValue=this.editExpenses.amount;
//         this.notesValue=this.editExpenses.notes;
//         this.IdValue1=this.editExpenses._id;
    
        
//     this.editExpensesForm = this.formBuilder.group({
//       vehicleNo:[this.vehicleNoValue, Validators.required],
//       expense:[this.expenseValue, Validators.required],
//       date:[this.dateValue, Validators.required],
//       amount:[this.amountValue, Validators.required],
//       notes:[this.notesValue, Validators.required],
//     });
//     console.log(this.editExpensesForm.value);
//   });
// }
// onEditExpenses() {
//   this.submitted = true;
//   console.log(this.editExpensesForm.value);
//   if (this.editExpensesForm.invalid) {
//       return;
//     }
// this.request.updateExpensesEntry(this.IdValue1,this.editExpensesForm.value).subscribe((res : any) => {
//   if (res.status == 'success') {
//     swal("Updated Sucessfully");     
//     this.loadExpensesModal();
//   this.viewExpensesData();
//   }
//   else if (res.status == 'error') {       
//     this.setMessage(res.error);
//   }      
 
// }, (error) => {
//   console.log(error);
//   this.setMessage(error);
// });
// }

// // convenience getter for easy access to form fields
// get f() { return this.addExpensesForm.controls; }
// get f2() { return this.editExpensesForm.controls; }

// loadExpensesModal(){
//   $('#addExpensesModal').modal('hide'); //or  $('#IDModal').modal('hide');
//   $('#addExpensesModal').on('hidden.bs.modal', function () {
//   $(this).find('form').trigger('reset');
//  });

//  $('#editExpensesModal').modal('hide'); //or  $('#IDModal').modal('hide');
//  $('#editExpensesModal').on('hidden.bs.modal', function () {
//  $(this).find('form').trigger('reset');
// });
// }

//Add form validation and function
onAddFuel() {
  this.submitted = true;
  if (this.addFuelForm.invalid) {
      return;
  }
this.request.addFuelEntry(this.addFuelForm.value).subscribe((res: any) => {
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
console.log(this.addFuelForm.value);
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
// get s2() { return this.editFuelForm.controls; }

loadFuelModal(){
  $('#addFuelModal').modal('hide'); //or  $('#IDModal').modal('hide');
  $('#addFuelModal').on('hidden.bs.modal', function () {
  $(this).find('form').trigger('reset');
 });

//  $('#editFuelModal').modal('hide'); //or  $('#IDModal').modal('hide');
//  $('#editFuelModal').on('hidden.bs.modal', function () {
//  $(this).find('form').trigger('reset');
// });
}

  ngOnInit() {
  M.updateTextFields();
//  this.viewExpensesData();
//  this.loadExpensesModal();
//  this.loadVehicle();
//  this.loadExpenses();
 this.viewFuelData();
 this.loadFuelModal();
 this.loadStation();
 this.loadDriver();
  }

}
