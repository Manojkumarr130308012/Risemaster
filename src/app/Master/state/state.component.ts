import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestService } from '../../services/request.service';
import { DynamicScriptLoaderService } from '../../services/dynamic-script-loader.service';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from "../../services/auth.service";
declare const M: any;
declare const $: any;


import swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss'
import Swal from 'sweetalert2/dist/sweetalert2.js';
@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.scss']
})
export class StateComponent implements OnInit {
  submitted = false;
  Country: FormControl;
  selectedinstitution:any;
  selectedinstitution2:any;
  StateName: FormControl;
  Country2: FormControl;
  StateName2: FormControl;
  stateCategories: any;
    Id: any;
    editstatedata;
    stateValue: any;
    CountryValue: any;
    IdValue: any;
    countrys;
    registerForm: FormGroup;
    editForm: FormGroup;
    getData: any;
    message: any;
    constructor(private formBuilder: FormBuilder,
      private dynamicScriptLoader: DynamicScriptLoaderService,
      private request: RequestService,
      private router: Router,private auth: AuthService) {
      //Add Form Group
      this.registerForm = this.formBuilder.group({
        Country: ['', Validators.required],
        StateName: ['', Validators.required]
      });
      //Edit Form Group
      this.editForm = this.formBuilder.group({
        Country2: ['', Validators.required],
        StateName2: ['', Validators.required]
      });
  }
  // To display the data
  viewData() {
      this.request.getaggstate().subscribe((response: any) => {
          this.stateCategories = response;
          console.log(this.stateCategories);
      }, (error) => {
          console.log(error);
      });
  }

  public setMessage(message) {
      return this.message = message;
  }
  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }
  get f2() { return this.editForm.controls; }
  //Add form validation and function

  onAddSubmit() {
      this.submitted = true;
      if (this.registerForm.invalid) {
          return;
      }
      this.request.addstate(this.registerForm.value).subscribe((res: any) => {
          if (res.status == 'error') {
              this.setMessage(res.error);
          }
          else if (res.status == 'success') {
            Swal.fire('Added Sucessfully');  
             // this.onAddReset();
              this.viewData();
              this.loadModal();

          }
      }, (error) => {
          this.setMessage(error);
      });
      console.log(this.registerForm.value);
  }

  //To delete the data
  deleteAdmissionCategory(id: any) {

    Swal.fire({  
        title: 'Are you sure want to Delete?',  
        text: 'You will not be able to recover this Data',  
        icon: 'warning',  
        showCancelButton: true,  
        confirmButtonText: 'Delete',  
        cancelButtonText: 'Cancel'  
      }).then((result) => {  
        if (result.value) {   
            this.request.deletestate(id).subscribe(res => {
                  this.viewData();
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

  //Edit Function
  onEdit(Id) {
    this.request.fetchstateById(Id).subscribe((response) => {
          this.editstatedata = response[0];
          console.log(response);
          this.stateValue = this.editstatedata.StateName;
          this.CountryValue = this.editstatedata.Country;
          this.IdValue = this.editstatedata._id;

          this.editForm = this.formBuilder.group({
            StateName2: [this.stateValue, Validators.required],
            Country2: [this.CountryValue, Validators.required]
          });
          // console.log('get edit data',this.editForm.value);
      });
  }

  loadcountry() {
      this.request.getcountry().subscribe((response: any) => {
          this.countrys = response;
          console.log(response);
      }, (error) => {
          console.log(error);
      });
  }
  onEditSubmit() {
      this.submitted = true;
      // console.log('edited data',this.editForm.value);
      if (this.editForm.invalid) {
          return;
      }

      const edata = {
        StateName: this.editForm.get('StateName2').value,
        Country: this.editForm.get('Country2').value
      }

     // console.log('edata',edata);

      this.request.updatestate(this.IdValue, edata).subscribe((response: any) => {
          if (response.status == 'success') {
            Swal.fire("Updated Sucessfully");
              //  console.log('cat res', response);
            //  this.onEditReset();
              this.viewData();
              this.loadModal();

          }
          else if (response.status == 'error') {
              this.setMessage(response.error);
          }

      }, (error) => {
          console.log(error);
          this.setMessage(error);
      });

  }

  onAddReset() {
      this.submitted = false;
      this.registerForm.reset();
    }
    onEditReset() {
      this.submitted = false;
      this.editForm.reset();
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
             'excel', 'pdf'
          ]
      });
  };
  private loadModal() {
      $('#addModal').modal('hide'); //or $('#IDModal').modal('hide');
      $('#addModal').on('hidden.bs.modal', function () {
          $(this).find('form').trigger('reset');
      })
      $('#editModal').modal('hide'); //or $('#IDModal').modal('hide');
      $('#editModal ').on('hidden.bs.modal', function () {
          $(this).find('form').trigger('reset');
      })
  }

  ngOnInit() {
    //this.auth.isValidUser();
      this.startScript();
     // M.updateTextFields();
      this.viewData();
      this.loadcountry();
  }
}
