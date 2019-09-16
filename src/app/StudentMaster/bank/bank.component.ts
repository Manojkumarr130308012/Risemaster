import { Component, OnInit } from '@angular/core';
import { DynamicScriptLoaderService } from '../../services/dynamic-script-loader.service';
import { RequestService } from '../../services/request.service';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
declare const $: any;
declare const M: any;
declare const swal: any;

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.scss']
})
export class BankComponent implements OnInit {
  submitted = false;
  institution: any;
  accountName: any;
  accountNumber: any;
  branch:any;
  IFSCCode: any;
  MICRCode: any;
  banks: any;
  Id: any;
  editBankdata;
  bankValue: any;
  InstitutionValue: any;
  IdValue: any;
  institutions ;
  registerForm: FormGroup;
  editForm: FormGroup;
  getData: any;
  accountNameValue: any;
  accountNumberValue: any;
  branchValue: any;
  IFSCCodeValue: any;
  MICRCodeValue: any;
  message: any;
  constructor(private formBuilder: FormBuilder,
    private dynamicScriptLoader: DynamicScriptLoaderService,
    private request: RequestService,
    private router: Router) {
      //Add Form Group
      this.registerForm = this.formBuilder.group({
        institution:['', Validators.required],
        accountName: ['', Validators.required],
        accountNumber: ['', Validators.required],
        branch: ['', Validators.required],
        IFSCCode: ['', Validators.required],
        MICRCode: ['', Validators.required]
    });
    //Edit Form Group
    this.editForm = this.formBuilder.group({
      institution:['', Validators.required],
      accountName: ['', Validators.required],
      accountNumber: ['', Validators.required],
      branch: ['', Validators.required],
      IFSCCode: ['', Validators.required],
      MICRCode: ['', Validators.required]
  });
}
// To display the data
 viewData() {
  this.request.getBank().subscribe((response) => {
    this.banks = response;
    console.log(this.banks);
  }, (error) => {
    console.log(error);
  });
}

public setMessage(message) {
  return this.message = message;
}


  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }
  //Add form validation and function
  onAddSubmit() {
      this.submitted = true;
      if (this.registerForm.invalid) {
          return;
      }
     this.request.addBank(this.registerForm.value).subscribe((res: any) => {
      if (res.status == 'error') {
        this.setMessage(res.err);
      }
      else if (res.status == 'Success') {
        
        swal("Added Sucessfully");
        this.viewData();
        this.loadModal();
      }
      }, (error) => {
        this.setMessage(error);
      });
        console.log(this.registerForm.value);
  }
  
  //To delete the data
  deleteBank(id: any) {
    this.request.deleteBank(id).subscribe(res => {
      swal(" Deleted Successfully "); 
      this.viewData();
    });
  }
  
//Edit Function
  onEdit(bank) {
    this.Id = bank._id;
    this.request.fetchBankById(this.Id).subscribe((response) => {
      this.editBankdata = response[0];
       console.log(response);
      this.InstitutionValue = this.editBankdata.institution;
      this.accountNameValue = this.editBankdata.accountName;
      this.accountNumberValue = this.editBankdata.accountNumber;
      this.branchValue = this.editBankdata.branch;
      this.IFSCCodeValue = this.editBankdata.IFSCCode;
      this.MICRCodeValue = this.editBankdata.MICRCode;
      this.IdValue = this.editBankdata._id;

      this.editForm = this.formBuilder.group({
        institution: [this.InstitutionValue, Validators.required],
        accountName: [  this.accountNameValue, Validators.required],
        accountNumber: [  this.accountNumberValue, Validators.required],
        branch: [ this.branchValue, Validators.required],
        IFSCCode: [ this.IFSCCodeValue, Validators.required],
        MICRCode: [ this.MICRCodeValue, Validators.required]
    });
     console.log(this.editForm.value);
    });
  }

  loadInstitution() {
      this.request.getInstitution().subscribe((response : any) => {
      this.institutions = response;
      console.log(response);
      }, (error) => {
        console.log(error);
      });
    }
  onEditSubmit() {
    this.submitted = true;
    // console.log(this.editForm.value);
    if (this.editForm.invalid) {
        return;
    }
  
  this.request.updateBank(this.IdValue, this.editForm.value).subscribe((response: any) => {
    if (response.status == 'Success') {
      swal("Updated Sucessfully");       
      
      this.viewData();
      this.loadModal();
    }
    else if (response.status == 'error') {       
      this.setMessage(response.err);
    }      
   
  }, (err) => {
    console.log(err);
    this.setMessage(err);
  });

      }

  async startScript() {
    await this.dynamicScriptLoader.load('dataTables.buttons', 'buttons.flash', 'jszip', 'pdfmake', 'vfs_fonts', 'pdfmake', 'buttons.html5', 'buttons.print').then(data => {
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
        };
    private loadModal() {
      $('#addModal').modal('hide'); //or  $('#IDModal').modal('hide');
      $('#addModal').on('hidden.bs.modal', function () {
        $(this).find('form').trigger('reset');
     })
     $('#editModal').modal('hide'); //or  $('#IDModal').modal('hide');
      $('#editModal ').on('hidden.bs.modal', function () {
        $(this).find('form').trigger('reset');
     })
    }
  
  ngOnInit() {
    this.viewData();
    this.startScript();
    M.updateTextFields();
    this.loadInstitution();
  }
}

 