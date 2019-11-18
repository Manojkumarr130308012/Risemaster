import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { RequestService } from '../../../services/request.service';
import { ActivatedRoute } from '@angular/router';
declare const $: any;
declare const M: any;
declare const swal: any;

@Component({
  selector: 'app-expenses-entry',
  templateUrl: './expenses-entry.component.html',
  styleUrls: ['./expenses-entry.component.scss']
})
export class ExpensesEntryComponent implements OnInit {

  // Expenses
  addExpensesForm: FormGroup;
  editExpensesForm: FormGroup;
  submitted = false;
  vehicleNo: any;
  expense: any;
  date:any;
  amount: any;
  notes: any;

  vehicleNo2: any;
  expense2: any;
  date2:any;
  amount2: any;
  notes2: any;


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
  vehicles;
  expenses;

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
    vehicleNo2:['', Validators.required],
    expense2:['', Validators.required],
    date2:['', Validators.required],
    amount2:['', Validators.required],
    notes2:['', Validators.required],
});
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

  // Bind expense data
  loadExpenses() {
    this.request.getExpense().subscribe((response: any) => {
      console.log('loadExpenses',response);
      this.expenses = response;
    }, (error) => {
      console.log(error);
    });
  }

  // Filter departments data
  onDateChange(Date: string) {
    console.log('date',Date)
     if (Date) {
       this.request.getExpensesbyDate(Date).subscribe((response: any) => {
         console.log(response);
         this.expensesEntry = response;
       }, (error) => {
         console.log(error);
       });
     } else
         this.expensesEntry = null;
    }

  //Add form validation and function
  onAddExpenses() {
    this.submitted = true;
    if (this.addExpensesForm.invalid) {
        return;
    }
this.request.addExpensesEntry(this.addExpensesForm.value).subscribe((res: any) => {
  if (res.status == 'success') {
    swal("Added Sucessfully");
  this.loadExpensesModal();
  this.viewExpensesData();
  }
  else if (res.status == 'error') {
   swal(res.error);
  }
}, (error) => {
  console.log(error);
});
//console.log(this.addExpensesForm.value);
}

// To display Expenses
viewExpensesData() {
this.request.getExpensesEntry().subscribe((response) => {
  console.log('Expenses', response);
  this.expensesEntry = response;
  console.log(this.expensesEntry);
}, (error) => {
  console.log(error);
});
}

// To delete Expenses
deleteExpense(id: any) {
  this.request.deleteExpensesEntry(id).subscribe(res => {
    console.log(id);
    this.viewExpensesData();
  console.log('Deleted');
  });
}

// To edit expenses
onEditExpense(id: any){
  console.log('exeid', id);
  this.request.fetchExpensesEntryById(id).subscribe((response) => {
    this.editExpenses=response[0];
    console.log('this.editExpenses',this.editExpenses);
        this.vehicleNoValue=this.editExpenses.vehicleNo;
        this.expenseValue=this.editExpenses.expense;
        this.dateValue=this.editExpenses.date;
        this.amountValue=this.editExpenses.amount;
        this.notesValue=this.editExpenses.notes;
        this.IdValue1=this.editExpenses._id;


    this.editExpensesForm = this.formBuilder.group({
      vehicleNo2:[this.vehicleNoValue, Validators.required],
      expense2:[this.expenseValue, Validators.required],
      date2:[this.dateValue, Validators.required],
      amount2:[this.amountValue, Validators.required],
      notes2:[this.notesValue, Validators.required],
    });
   // console.log(this.editExpensesForm.value);
  });
}
onEditExpenses() {
  this.submitted = true;
  console.log(this.editExpensesForm.value);
  if (this.editExpensesForm.invalid) {
      return;
    }
    const edata = {
      vehicleNo: this.editExpensesForm.get('vehicleNo2').value,
      expense: this.editExpensesForm.get('expense2').value,
      date: this.editExpensesForm.get('date2').value,
      amount: this.editExpensesForm.get('amount2').value,
      notes: this.editExpensesForm.get('notes2').value,
    };


this.request.updateExpensesEntry(this.IdValue1,edata).subscribe((res : any) => {
  if (res.status == 'success') {
    swal("Updated Sucessfully");
    this.loadExpensesModal();
  this.viewExpensesData();
  }
  else if (res.status == 'error') {
   swal(res.error);
  }

}, (error) => {
  console.log(error);

});
}

// convenience getter for easy access to form fields
get f() { return this.addExpensesForm.controls; }
get f2() { return this.editExpensesForm.controls; }

loadExpensesModal(){
  $('#addExpensesModal').modal('hide'); //or  $('#IDModal').modal('hide');
  $('#addExpensesModal').on('hidden.bs.modal', function () {
  $(this).find('form').trigger('reset');
 });

 $('#editExpensesModal').modal('hide'); //or  $('#IDModal').modal('hide');
 $('#editExpensesModal').on('hidden.bs.modal', function () {
 $(this).find('form').trigger('reset');
});
}

  ngOnInit() {
    M.updateTextFields();
    this.viewExpensesData();
    this.loadExpensesModal();
    this.loadVehicle();
    this.loadExpenses();
  }

}
