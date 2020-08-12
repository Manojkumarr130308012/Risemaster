import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from "@angular/forms";
import { Router } from "@angular/router";
import { RequestService } from "../../../services/request.service";
import { ActivatedRoute } from "@angular/router";
declare const $: any;
declare const M: any;
declare const swal: any;

@Component({
  selector: "app-Expense-entry-report",
  templateUrl: "./Expense-entry-report.component.html",
  styleUrls: ["./Expense-entry-report.component.css"]
})
export class ExpenseEntryReportComponent implements OnInit {
  expensesEntries;
  vehicles;
  expenseTypes;

  date2;

  public ExpenseReportVehicleNo: any;
  public ERFromDate: any;
  public ERToDate: any;
  expense: any;
  selectedExpenseType:any;
  selectedVehicleforExpenseReport:any;
  constructor(
    private formBuilder: FormBuilder,
    private request: RequestService
  ) {
    this.ExpenseReportVehicleNo = new FormControl("", Validators.required);
    this.ERFromDate = new FormControl("", Validators.required);
    this.ERToDate = new FormControl("", Validators.required);
    this.expense = new FormControl("", Validators.required);
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
  // Bind Expense Type data
  loadExpenseType() {
    this.request.fetchExpense().subscribe(
      (response: any) => {
        console.log("fetchExpenses", response);
        this.expenseTypes = response;
      },
      error => {
        console.log(error);
      }
    );
  }

  onVehicleChange(VehicleNo: string) {
    // console.log('Vehicle', VehicleNo)
    //this.loadCourseCategory(Institution);

    if (VehicleNo != 'All') {
      this.request.getvehicleExpenseReport(VehicleNo).subscribe(
        (response: any) => {
          // console.log('ExpenseReport', response);
          this.expensesEntries = response;
        },
        error => {
          console.log(error);
        }
      );
    }
    else if(VehicleNo == 'All'){
     // console.log('all');

      this.viewExpensesData();

    }
  }

  filterExpenseReport() {
    /* console.log(this.ExpenseReportVehicleNo.value);
       console.log(this.ERFromDate.value);
       console.log(this.ERToDate.value);
       console.log(this.expense.value);*/

    const filterReportbyDate = {
      vehicleNo: this.ExpenseReportVehicleNo.value,
      date: this.ERFromDate.value,
      date2: this.ERToDate.value,
      expense: this.expense.value
    };

    this.request
      .fetchExpenseReportbyDate(filterReportbyDate)
      .subscribe(response => {
        // console.log('ExpenseReportdata',response);
        this.expensesEntries = response;
      });
  }

  viewExpensesData() {
    this.request.getExpensesEntry().subscribe(
      response => {
        console.log("Expenses", response);
        this.expensesEntries = response;
        console.log(this.expensesEntries);
      },
      error => {
        console.log(error);
      }
    );
  }

  ngOnInit() {
    this.loadVehicle();
    this.loadExpenseType();
    this.viewExpensesData();
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
