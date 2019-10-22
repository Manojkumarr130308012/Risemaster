import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { DynamicScriptLoaderService } from '../../services/dynamic-script-loader.service';
import { RequestService } from '../../services/request.service';
import { Router } from '@angular/router';

<<<<<<< HEAD
=======

>>>>>>> 89c8633d8afc02111da64d0c99a0ce467075b769
declare const $: any;
declare const swal: any;

@Component({
  selector: 'app-user-designation',
  templateUrl: './user-designation.component.html',
  styleUrls: ['./user-designation.component.scss']
})
export class UserDesignationComponent implements OnInit {

  private designations: any;
  public Id: any;
  public designationId: any;
  public designationName: any;

  public designationId2: any;
  public designationName2: any;
  public message: string;
  //public response: any;
  editDesignationdata;


  public designationIdValue: any;
  public designationNameValue: any;
  public IdValue: any;

  constructor(private request: RequestService, private router: Router, private dynamicScriptLoader: DynamicScriptLoaderService, public snackBar: MatSnackBar,) {
<<<<<<< HEAD
    this.designationId = new FormControl('', Validators.required);
    this.designationId2 = new FormControl('', Validators.required);
    this.designationName = new FormControl('', Validators.required);
    this.designationName2 = new FormControl('', Validators.required);
=======
   
>>>>>>> 89c8633d8afc02111da64d0c99a0ce467075b769
  }

  public setMessage(message) {
    return this.message = message;
  }



  onEdit(Id) {
    this.message="";
    this.request.fetchDesignation(Id).subscribe((response) => {
      this.editDesignationdata = response[0];
     // console.log(response[0]);

     // this.designationNameValue = this.editDesignationdata.designationName;
     // this.designationIdValue = this.editDesignationdata.designationId;
      this.IdValue = this.editDesignationdata._id;
      this.designationName2 = new FormControl(this.editDesignationdata.designationName, [Validators.required]);
      this.designationId2 = new FormControl(this.editDesignationdata.designationId, [Validators.required]);

    });
  }

  async startScript() {
    await this.dynamicScriptLoader.load('dataTables.buttons', 'buttons.flash', 'jszip', 'pdfmake', 'vfs_fonts', 'pdfmake', 'buttons.html5', 'buttons.print').then(data => {
      this.loadData();
    }).catch(error => console.log(error));
  }


  addDesignation() {

    const newDesignation = {
      designationId: this.designationId.value,
      designationName: this.designationName.value,

    };
    //console.log(newDesignation);
    this.request.addNewDesignation(newDesignation).subscribe((response: any) => {
      if (response.status == 'error') {
        this.setMessage(response.error);
        swal(response.error);       
          this.snackBar.open(response.error, 'OK', {
            duration: 3000});
      }
      else if (response.status == 'success') {

        swal("Added Sucessfully");
        this.viewDesignation();
        this.loadModal();
      }

     // this.designationId.value="";
     // this.designationName.value="";
     // this.message ="";

    }, (error) => {
<<<<<<< HEAD
      this.snackBar.open('Task Updated successfully.', 'OK', {
        duration: 3000,
      });
=======
     
>>>>>>> 89c8633d8afc02111da64d0c99a0ce467075b769
      this.snackBar.open(error.message, 'OK', {
        duration: 10000,});
      this.setMessage(error);
    });

  }


  updateDesignationData() {


    const editedDesignation = {
      designationId: this.designationId2.value,
      designationName: this.designationName2.value
    };

    this.request.updateDesignation(this.IdValue, editedDesignation).subscribe((response: any) => {

      if (response.status == 'success') {
        swal("Updated Sucessfully");
        this.loadModal();
        this.viewDesignation();
      }
      else if (response.status == 'error') {
        this.setMessage(response.error);
      }

      

    }, (error) => {
      console.log(error);
      this.setMessage(error);
    });


  }

  viewDesignation() {
    this.request.getDesignation().subscribe((response: any) => {     
      localStorage.setItem('storeDesignation', JSON.stringify(response));
      this.designations = response;
     
    }, (error) => {
      console.log(error);
    });
  }

  Ondelete(Id) {    
    this.request.deleteDesignation(Id).subscribe((response) => {
      swal("Deleted Sucessfully");    
      this.viewDesignation();
    });
  }

  private loadData() {
    $('#tableExport').DataTable({
      dom: 'Bfrtip',
      buttons: [
        'copy', 'csv', 'excel', 'pdf', 'print'
      ]
    });
  }
  private loadModal() {
    
    $('#addModal').modal('hide'); 
    $('#addModal').on('hidden.bs.modal', function () {
      $(this).find('form').trigger('reset');
     // $('#form_advanced_validation1').trigger('reset');
     var v = $('#form_advanced_validation').validate();
      v.resetForm();

    })
    $('#updateModal').modal('hide'); //or  $('#IDModal').modal('hide');
    $('#updateModal ').on('hidden.bs.modal', function () {
      $(this).find('form').trigger('reset');
      var v = $('#form_advanced_validation1').validate();
      v.resetForm();
    })
  }
  ngOnInit() {

    this.startScript();
    this.viewDesignation();
<<<<<<< HEAD
=======

    this.designationId = new FormControl('', Validators.required);
    this.designationId2 = new FormControl('', Validators.required);
    this.designationName = new FormControl('', Validators.required);
    this.designationName2 = new FormControl('', Validators.required);
>>>>>>> 89c8633d8afc02111da64d0c99a0ce467075b769
    

    //jQuery Validation
    $(function () {
      $('#form_advanced_validation').validate({

        highlight: function (input) {
          $(input).parents('.form-line').addClass('error');
        },
        unhighlight: function (input) {
          $(input).parents('.form-line').removeClass('error');
        },
        errorPlacement: function (error, element) {
          $(element).parents('.form-group').append(error);
        }
      });
    });
    $(function () {
      $('#form_advanced_validation1').validate({

        highlight: function (input) {
          $(input).parents('.form-line').addClass('error');
        },
        unhighlight: function (input) {
          $(input).parents('.form-line').removeClass('error');
        },
        errorPlacement: function (error, element) {
          $(element).parents('.form-group').append(error);
        }
      });
    });

  }

}
