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

  public institution2: any;
  public vehicle2: any;
  public vehicleNo2: any;
  public vanNo2: any;
  public engineNo2: any;
  public chasisNo2: any;
  public ownership2: any;
  public vehicleValue2: any;
  public model2: any;
  public make2: any;
  public type2: any;
  public insurance2: any;
  public fc2: any;
  public smokeTest2: any;
  public serviceKMS2: any;
  public notes2: any;


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
      institution2: ['', Validators.required],
      vehicleNo2: ['', Validators.required],
      vanNo2: ['', Validators.required],
      engineNo2: ['', Validators.required],
      chasisNo2: ['', Validators.required],
      ownership2: ['', Validators.required],
      vehicleValue2: ['', Validators.required],
      model2: ['', Validators.required],
      make2: ['', Validators.required],
      type2: ['', Validators.required],
      insurance2: ['', Validators.required],
      fc2: ['', Validators.required],
      smokeTest2: ['', Validators.required],
      serviceKMS2: ['', Validators.required],
      notes2: ['', Validators.required]
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
        this.setMessage(res.error);
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

// convenience getter for easy access to form fields
get f() { return this.registerForm.controls; }
get f2() { return this.editForm.controls; }

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
        institution2: [this.institutionValue, Validators.required],
        vehicleNo2: [this.vehicleNoValue, Validators.required],
        vanNo2: [this.vanNoValue, Validators.required],
        engineNo2: [this.engineNoValue, Validators.required],
        chasisNo2: [this.chasisNoValue, Validators.required],
        ownership2: [this.ownershipValue, Validators.required],
        vehicleValue2: [this.vehicleValueValue, Validators.required],
        model2: [this.modelValue, Validators.required],
        make2: [this.makeValue, Validators.required],
        type2: [this.typeValue, Validators.required],
        insurance2: [this.insuranceValue, Validators.required],
        fc2: [this.fcValue, Validators.required],
        smokeTest2: [this.smokeTestValue, Validators.required],
        serviceKMS2: [this.serviceKMSValue, Validators.required],
        notes2: [this.notesValue, Validators.required]

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

    const edata = {
      caste: this.editForm.get('institution2').value,
      vehicleNo: this.editForm.get('vehicleNo2').value,
      vanNo: this.editForm.get('vanNo2').value,
      engineNo: this.editForm.get('engineNo2').value,
      chasisNo: this.editForm.get('chasisNo2').value,
      ownership: this.editForm.get('ownership2').value,
      vehicleValue: this.editForm.get('vehicleValue2').value,
      model: this.editForm.get('model2').value,
      make: this.editForm.get('make2').value,
      type: this.editForm.get('type2').value,
      insurance: this.editForm.get('insurance2').value,
      fc: this.editForm.get('fc2').value,
      smokeTest: this.editForm.get('smokeTest2').value,
      serviceKMS: this.editForm.get('serviceKMS2').value,
      notes: this.editForm.get('notes2').value,
  }

    this.request.updateVehicle(this.IdValue, edata).subscribe((res: any) => {
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
