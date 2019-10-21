import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { RequestService } from '../../services/request.service';
import { DynamicScriptLoaderService } from '../../services/dynamic-script-loader.service';
declare const $: any;
declare const M: any;
declare const swal: any;

@Component({
  selector: 'app-vehicle-expenses',
  templateUrl: './vehicle-expenses.component.html',
  styleUrls: ['./vehicle-expenses.component.scss']
})
export class VehicleExpensesComponent implements OnInit {
  registerForm: FormGroup;
  editForm: FormGroup;
  submitted = false;
  public expense: any;
  private expenses: any;
  Id: any;
  IdValue: any;
  editExpense: any;
  expenseValue: any;
  public message: string;

  constructor(
    private formBuilder: FormBuilder,
    private dynamicScriptLoader: DynamicScriptLoaderService,
    private request: RequestService,
    private router: Router,
    private activeRoute: ActivatedRoute) {
    // Add Form
    this.registerForm = this.formBuilder.group({
      expense: ['', Validators.required]
    });
    // Edit Form
    this.editForm = this.formBuilder.group({
      expense: ['', Validators.required]
    });
  }

  public setMessage(message) {
    return this.message = message;
  }

  //Add form validation and function
  onAddSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    this.registerForm.value;
    this.request.addExpense(this.registerForm.value).subscribe((res: any) => {
      if (res.status == 'success') {
        swal("Added Sucessfully");
        this.loadModal();
        this.viewData();
      }
      else if (res.status == 'error') {
        this.setMessage(res.error);
      }
    }, (error) => {
      this.setMessage(error);
    });
    console.log(this.registerForm.value);
  }

  // To display expense
  viewData() {
    this.request.getExpense().subscribe((response) => {
      this.expenses = response;
      console.log(this.expenses);
    }, (error) => {
      console.log(error);
    });
  }

  // To delete expense
  deleteExpense(id: any) {
    this.request.deleteExpense(id).subscribe(res => {
      console.log(id);
      this.viewData();
      console.log('Deleted');

      this.router.navigate(['vehicle-expenses']);
    });
  }

  // To edit expense
  onEdit(expense) {
    this.Id = expense._id;
    this.request.fetchExpenseBy(this.Id).subscribe((response) => {
      this.editExpense = response[0];
      console.log(response);
      this.expenseValue = this.editExpense.expense;
      this.IdValue = this.editExpense._id;

      this.editForm = this.formBuilder.group({
        expense: [this.expenseValue, Validators.required]
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
    this.request.updateExpense(this.IdValue, this.editForm.value).subscribe((res: any) => {
      if (res.status == 'success') {
        swal("Updated Sucessfully");
        this.loadModal();
        this.viewData();
      }
      else if (res.status == 'error') {
        this.setMessage(res.error);
      }

    }, (error) => {
      console.log(error);
      this.setMessage(error);
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  async startScript() {
    await this.dynamicScriptLoader.load('dataTables.buttons', 'buttons.flash', 'jszip', 'pdfmake', 'vfs_fonts', 'pdfmake', 'buttons.html5', 'buttons.print', 'form.min').then(data => {
      this.loadData();
    }).catch(error => console.log(error));
  }
  private loadData() {
    $('#tableExport').DataTable({
      dom: 'Bfrtip',
      buttons: [
        'copy', 'csv', 'excel', 'pdf', 'print'
      ]
    });
  }

  loadModal() {

    $('#addModal').modal('hide'); //or  $('#IDModal').modal('hide');
    $('#addModal').on('hidden.bs.modal', function () {
      $(this).find('form').trigger('reset');
    });

    $('#editModal').modal('hide'); //or  $('#IDModal').modal('hide');
    $('#editModal').on('hidden.bs.modal', function () {
      $(this).find('form').trigger('reset');
    });
  }

  ngOnInit() {
    this.startScript();
    M.updateTextFields();
    this.viewData();
    this.loadModal();
  }
}

