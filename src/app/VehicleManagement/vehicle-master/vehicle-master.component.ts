import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { RequestService } from '../../services/request.service';
import { DynamicScriptLoaderService } from '../../services/dynamic-script-loader.service';
declare const $: any;
declare const M: any;
declare const swal: any;

@Component({
  selector: 'app-vehicle-master',
  templateUrl: './vehicle-master.component.html',
  styleUrls: ['./vehicle-master.component.scss']
})
export class VehicleMasterComponent implements OnInit {

  registerForm: FormGroup;
  editForm: FormGroup;
  submitted = false;
  public institution: any;
  public vehicle: any;
  private vehicles: any;
  public vehicleNo: any;
  public vanNo: any;
  public engineNo: any;
  public chasisNo: any;
  public ownership: any;
  public vehicleValue: any;
  public model: any;
  public make: any;
  public type: any;
  public insurance: any;
  public fc: any;
  public smokeTest: any;
  public serviceKMS: any;
  public notes: any;
  Id: any;
  IdValue: any;
  editVehicle: any;
  institutionValue: any;
  vehicleNoValue: any;
  vanNoValue: any;
  engineNoValue: any;
  chasisNoValue: any;
  ownershipValue: any;
  vehicleValueValue: any;
  modelValue: any;
  makeValue: any;
  typeValue: any;
  insuranceValue: any;
  fcValue: any;
  smokeTestValue: any;
  serviceKMSValue: any;
  notesValue: any;

  institutions;
  public message: string;

  constructor(
    private formBuilder: FormBuilder,
    private dynamicScriptLoader: DynamicScriptLoaderService,
    private request: RequestService,
    private router: Router
  ) {
    // Add Form
    this.registerForm = this.formBuilder.group({
      institution: ['', Validators.required],
      vehicleNo: ['', Validators.required],
      vanNo: ['', Validators.required],
      engineNo: ['', Validators.required],
      chasisNo: ['', Validators.required],
      ownership: ['', Validators.required],
      vehicleValue: ['', Validators.required],
      model: ['', Validators.required],
      make: ['', Validators.required],
      type: ['', Validators.required],
      insurance: ['', Validators.required],
      fc: ['', Validators.required],
      smokeTest: ['', Validators.required],
      serviceKMS: ['', Validators.required],
      notes: ['', Validators.required]
    });
    // Edit Form
    this.editForm = this.formBuilder.group({
      institution: ['', Validators.required],
      vehicleNo: ['', Validators.required],
      vanNo: ['', Validators.required],
      engineNo: ['', Validators.required],
      chasisNo: ['', Validators.required],
      ownership: ['', Validators.required],
      vehicleValue: ['', Validators.required],
      model: ['', Validators.required],
      make: ['', Validators.required],
      type: ['', Validators.required],
      insurance: ['', Validators.required],
      fc: ['', Validators.required],
      smokeTest: ['', Validators.required],
      serviceKMS: ['', Validators.required],
      notes: ['', Validators.required]
    });
  }

  public setMessage(message) {
    return this.message = message;
  }

  // Bind institution data
  loadInstitution() {
    this.request.getInstitution().subscribe((response: any) => {
    //  console.log(response);
      this.institutions = response;
    }, (error) => {
      console.log(error);
    });
  }

  //Add form validation and function
  onAddSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
   
    this.request.addVehicle(this.registerForm.value).subscribe((res: any) => {
      if (res.status == 'success') {
        swal("Added Sucessfully");
        this.loadModal();
        this.viewData();
      }
      else if (res.status == 'error') {
        this.setMessage(res.err);
      }
    }, (error) => {
      this.setMessage(error);
    });
   // console.log(this.registerForm.value);
  }

  // To display vehicle
  viewData() {
    this.request.getVehicle().subscribe((response) => {
      this.vehicles = response;
     // console.log(this.vehicles);
    }, (error) => {
      console.log(error);
    });
  }

  // To delete vehicle
  deleteVehicle(id: any) {
    this.request.deleteVehicle(id).subscribe(res => {
     // console.log(id);
      this.viewData();
      console.log('Deleted');
     // this.router.navigate(['vehicle']);
    });
  }

  open(vehicle) {
    this.Id=vehicle._id;
    this.vehicleNo=vehicle.vehicleNo;
  //  console.log(this.Id);
   // console.log(this.vehicleNo);
    this.router.navigate(['stage-details'], {
       queryParams: {  
          // edit: true,      
           id: vehicle._id,
         }
        });
}

  // To edit vehicle
  onEdit(vehicle) {
    this.Id = vehicle._id;
    this.request.fetchVehicleBy(this.Id).subscribe((response) => {
      this.editVehicle = response[0];
     // console.log(response);
      this.institutionValue = this.editVehicle.institution;
      this.vehicleNoValue = this.editVehicle.vehicleNo;
      this.vanNoValue = this.editVehicle.vanNo;
      this.engineNoValue = this.editVehicle.engineNo;
      this.chasisNoValue = this.editVehicle.chasisNo;
      this.ownershipValue = this.editVehicle.ownership;
      this.vehicleValueValue = this.editVehicle.vehicleValue;
      this.modelValue = this.editVehicle.model;
      this.makeValue = this.editVehicle.make;
      this.typeValue = this.editVehicle.type;
      this.insuranceValue = this.editVehicle.insurance;
      this.fcValue = this.editVehicle.fc;
      this.smokeTestValue = this.editVehicle.smokeTest;
      this.serviceKMSValue = this.editVehicle.serviceKMS;
      this.notesValue = this.editVehicle.notes;
      this.IdValue = this.editVehicle._id;

      this.editForm = this.formBuilder.group({
        institution: [this.institutionValue, Validators.required],
        vehicleNo: [this.vehicleNoValue, Validators.required],
        vanNo: [this.vanNoValue, Validators.required],
        engineNo: [this.engineNoValue, Validators.required],
        chasisNo: [this.chasisNoValue, Validators.required],
        ownership: [this.ownershipValue, Validators.required],
        vehicleValue: [this.vehicleValueValue, Validators.required],
        model: [this.modelValue, Validators.required],
        make: [this.makeValue, Validators.required],
        type: [this.typeValue, Validators.required],
        insurance: [this.insuranceValue, Validators.required],
        fc: [this.fcValue, Validators.required],
        smokeTest: [this.smokeTestValue, Validators.required],
        serviceKMS: [this.serviceKMSValue, Validators.required],
        notes: [this.notesValue, Validators.required]

      });
    //  console.log(this.editForm.value);
    });
  }
  onEditSubmit() {
    this.submitted = true;
  //  console.log(this.editForm.value);
    if (this.editForm.invalid) {
      return;
    }
    this.request.updateVehicle(this.IdValue, this.editForm.value).subscribe((res: any) => {
      if (res.status == 'success') {
        swal("Updated Sucessfully");
        this.loadModal();
        this.viewData();
      }
      else if (res.status == 'error') {
        this.setMessage(res.err);
      }

    }, (err) => {
      console.log(err);
      this.setMessage(err);
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

  private loadModal() {
    $('#addModal').modal('hide'); //or  $('#IDModal').modal('hide');
    $('#addModal').on('hidden.bs.modal', function () {
      $(this).find('form').trigger('reset');
       $('#form_validation').trigger('reset');
    });

    $('#editModal').modal('hide'); //or  $('#IDModal').modal('hide');
    $('#editModal').on('hidden.bs.modal', function () {
      $(this).find('form').trigger('reset');
      $('#form_validation1').trigger('reset');
    });
  }

  ngOnInit() {
    this.startScript();
    M.updateTextFields();
    this.viewData();
    this.loadModal();
    this.loadInstitution();
  }
}