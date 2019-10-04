import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { RequestService } from '../../services/request.service';
import { ActivatedRoute } from '@angular/router';
declare const $: any;
declare const M: any;
declare const swal: any;

@Component({
  selector: 'app-stage-details',
  templateUrl: './stage-details.component.html',
  styleUrls: ['./stage-details.component.scss']
})
export class StageDetailsComponent implements OnInit {

  public stage: any;
  private stages: any;


  public stageName: any;
  public busStop: any;
  public KMS: any;
  public fees: any;

  public stageName2: any;
  public busStop2: any;
  public KMS2: any;
  public fees2: any;

  Id: any;
  IdValue: any;
  stageId: any;
  editStage: any;
  stageNameValue: any;
  busStopValue: any;
  KMSValue: any;
  feesValue: any;

  // public edit = false;
  public message: string;

  constructor(
    private formBuilder: FormBuilder,
    private request: RequestService,
    private router: Router,
    private route: ActivatedRoute) {
    this.route.queryParams.subscribe((params: any) => {
      // this.edit = params.edit;
      this.IdValue = params.id;
    });

    // Add Form
    this.stageName = new FormControl('', Validators.required);
    this.busStop = new FormControl('', Validators.required);
    this.KMS = new FormControl('', Validators.required);
    this.fees = new FormControl('', Validators.required);

    // Edit Form
    this.stageName2 = new FormControl('', Validators.required);
    this.busStop2 = new FormControl('', Validators.required);
    this.KMS2 = new FormControl('', Validators.required);
    this.fees2 = new FormControl('', Validators.required);
  }

  public setMessage(message) {
    return this.message = message;
  }

  //Add form validation and function
  addstage() {
    let vehId = this.IdValue;
    //console.log('veh', vehId);
    const newStage = {
      stageName: this.stageName.value,
      busStop: this.busStop.value,
      KMS: this.KMS.value,
      fees: this.fees.value,
      IdValue: vehId,
 };
   this.request.addStageDetails(newStage).subscribe((res: any) => {
     if (res.status == 'Success') {
       swal("Added Sucessfully");
     this.loadModal();
     this.viewStageDetails(this.IdValue);
     }
     else if (res.status == 'error') {
       this.setMessage(res.err);
     }
   }, (error) => {
     this.setMessage(error);
   });
   }
 
  // To display stage details
//   viewData() {
//    this.request.getStage().subscribe((response) => {
//      this.viewStageDetails(this.IdValue);
//      this.stages = response;
//      console.log(this.stages);
//    }, (error) => {
//      console.log(error);
//    });
//  }
 
 viewStageDetails(IdValue : string) {
  //  console.log('IdValue',IdValue)
   if (IdValue){
   this.request.getStagebyId(IdValue).subscribe((response) => {
      console.log(response);
      this.stages = response;
      }, (error) => {
        console.log(error);
      });

    } else

      this.stages = null;
  }

  // To delete stage-details
  deleteStage(id: any) {
    this.request.deleteStage(id).subscribe(res => {
      console.log(id);
      this.viewStageDetails(this.IdValue);
    console.log('Deleted');
    });
  }

  // To edit stage-details
  onEdit(stage) {
    this.Id = stage._id;
    this.request.fetchStageBy(this.Id).subscribe((response) => {
      this.editStage = response[0];
      // console.log(response);
      this.stageNameValue = this.editStage.stageName;
      this.busStopValue = this.editStage.busStop;
      this.KMSValue = this.editStage.KMS;
      this.feesValue = this.editStage.fees;
      this.stageId = this.editStage._id;


      this.stageName2 = new FormControl(this.stageNameValue, [Validators.required]);
      this.busStop2 = new FormControl(this.busStopValue, [Validators.required]);
      this.KMS2 = new FormControl(this.KMSValue, [Validators.required]);
      this.fees2 = new FormControl(this.feesValue, [Validators.required]);
    });
  }
  updateStageDetails() {
    const edata = {
      stageName: this.stageName2.value,
      busStop: this.busStop2.value,
      KMS: this.KMS2.value,
      fees: this.fees2.value,
    };
  this.request.updateStage(this.IdValue, edata).subscribe((res : any) => {
    if (res.status == 'Success') {
      swal("Updated Sucessfully");     
      this.viewStageDetails(this.IdValue);
      this.loadModal();
    }
    else if (res.status == 'error') {       
      this.setMessage(res.err);
    }      
   
  }, (err) => {
    console.log(err);
    this.setMessage(err);
  });
}

  private loadModal() {
    $('#addModal').modal('hide'); //or  $('#IDModal').modal('hide');
    $('#addModal').on('hidden.bs.modal', function () {
      $(this).find('form').trigger('reset');
      //$('#form_advanced_validation').trigger('reset');
      var v = $('#form_advanced_validation1').validate();
      v.resetForm();

    })
    $('#editModal').modal('hide'); //or  $('#IDModal').modal('hide');
    $('#editModal ').on('hidden.bs.modal', function () {
      $(this).find('form').trigger('reset');
      var v = $('#form_advanced_validation2').validate();
      v.resetForm();
    })
  }

  ngOnInit() {
    M.updateTextFields();
  //  this.viewData();
  this.viewStageDetails(this.IdValue);
   this.loadModal();
  
   //jQuery Validation
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
   $(function () {         
     $('#form_advanced_validation2').validate({
         
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

