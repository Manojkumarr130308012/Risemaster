import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { RequestService } from '../../services/request.service';
import { DynamicScriptLoaderService } from '../../services/dynamic-script-loader.service';
import { FileSelectDirective, FileUploader } from 'ng2-file-upload';
const URL = 'http://localhost:3000/driverFileUpload/upload';
const url = 'http://localhost:3000/driverFileUpload/fileupload';
declare const $: any;
declare const M: any;
declare const swal: any;


@Component({
  selector: 'app-driver-master',
  templateUrl: './driver-master.component.html',
  styleUrls: ['./driver-master.component.scss']
})
export class DriverMasterComponent implements OnInit {
  public driver: any;
  private drivers: any;
  public name: any;
  public vehicleNo: any;
  public fathersName: any;
  public dob: any;
  public joiningYear: any;
  public personalContactNo: any;
  public address: any;
  public drivingLicenseNo: any;
  public aadhaarNo: any;
  public badgeNo: any;
  public badgeExpiry: any;
  public homeContactNo: any;
  public licenseDOIDate: any;
  public licenseExpDate: any;
  public referencePersonName: any;
  public referencePersonContactNo: any;

  public name2: any;
  public vehicleNo2: any;
  public fathersName2: any;
  public dob2: any;
  public joiningYear2: any;
  public personalContactNo2: any;
  public address2: any;
  public drivingLicenseNo2: any;
  public aadhaarNo2: any;
  public badgeNo2: any;
  public badgeExpiry2: any;
  public homeContactNo2: any;
  public licenseDOIDate2: any;
  public licenseExpDate2: any;
  public referencePersonName2: any;
  public referencePersonContactNo2: any;
  Id: any;
  IdValue: any;
  editDriver: any;

  nameValue: any;
  vehicleNoValue: any;
  fathersNameValue: any;
  dobValue: any;
  joiningYearValue: any;
  personalContactNoValue: any;
  addressValue: any;
  drivingLicenseNoValue: any;
  aadhaarNoValue: any;
  badgeNoValue: any;
  badgeExpiryValue: any;
  homeContactNoValue: any;
  licenseDOIDateValue: any;
  licenseExpDateValue: any;
  referencePersonNameValue: any;
  referencePersonContactNoValue: any;
  photoValue: any;
  public uploader: FileUploader = new FileUploader({ url: URL, itemAlias: 'photo' });
  getfileLoc: any;
  photoLocation: any;
  photoLocationValue: any;
  photoLocation2: FormControl;

  fileValue: any;
  public uploader2: FileUploader = new FileUploader({ url: url, itemAlias: 'file' });
  getfileLoc2: any;
  fileLocation: any;
  fileLocationValue: any;
  fileLocation2: FormControl;

  vehicles;
  public message: string;

  constructor(
    private formBuilder: FormBuilder,
    private dynamicScriptLoader: DynamicScriptLoaderService,
    private request: RequestService,
    private router: Router
  ) {
    // Add Form
    this.name = new FormControl('', Validators.required);
    this.vehicleNo = new FormControl('', Validators.required);
    this.fathersName = new FormControl('', Validators.required);
    this.dob = new FormControl('', Validators.required);
    this.joiningYear = new FormControl('', Validators.required);
    this.personalContactNo = new FormControl('', Validators.required);
    this.address = new FormControl('', Validators.required);
    this.drivingLicenseNo = new FormControl('', Validators.required);
    this.aadhaarNo = new FormControl('', Validators.required);
    this.badgeNo = new FormControl('', Validators.required);
    this.badgeExpiry = new FormControl('', Validators.required);
    this.homeContactNo = new FormControl('', Validators.required);
    this.licenseDOIDate = new FormControl('', Validators.required);
    this.licenseExpDate = new FormControl('', Validators.required);
    this.referencePersonName = new FormControl('', Validators.required);
    this.referencePersonContactNo = new FormControl('', Validators.required);
    this.photoLocation = new FormControl('', Validators.required);
    this.fileLocation = new FormControl('', Validators.required);

    // Edit Form
    this.name2 = new FormControl('', Validators.required);
    this.vehicleNo2 = new FormControl('', Validators.required);
    this.fathersName2 = new FormControl('', Validators.required);
    this.dob2 = new FormControl('', Validators.required);
    this.joiningYear2 = new FormControl('', Validators.required);
    this.personalContactNo2 = new FormControl('', Validators.required);
    this.address2 = new FormControl('', Validators.required);
    this.drivingLicenseNo2 = new FormControl('', Validators.required);
    this.aadhaarNo2 = new FormControl('', Validators.required);
    this.badgeNo2 = new FormControl('', Validators.required);
    this.badgeExpiry2 = new FormControl('', Validators.required);
    this.homeContactNo2 = new FormControl('', Validators.required);
    this.licenseDOIDate2 = new FormControl('', Validators.required);
    this.licenseExpDate2 = new FormControl('', Validators.required);
    this.referencePersonName2 = new FormControl('', Validators.required);
    this.referencePersonContactNo2 = new FormControl('', Validators.required);
    this.photoLocation2 = new FormControl('', Validators.required);
    this.fileLocation2 = new FormControl('', Validators.required);
  }

  public setMessage(message) {
    return this.message = message;
  }

  photosubmit() {
    this.uploader.uploadAll();
  }

  filesubmit() {
    this.uploader2.uploadAll();
  }

  // Bind vehicle data
  loadVehicle() {
    this.request.getVehicle().subscribe((response: any) => {
      console.log(response);
      this.vehicles = response;
    }, (error) => {
      console.log(error);
    });
  }

  //Add form validation and function
  adddriver() {
    const newDriver = {
      name: this.name.value,
      vehicleNo: this.vehicleNo.value,
      fathersName: this.fathersName.value,
      dob: this.dob.value,
      joiningYear: this.joiningYear.value,
      personalContactNo: this.personalContactNo.value,
      address: this.address.value,
      drivingLicenseNo: this.drivingLicenseNo.value,
      aadhaarNo: this.aadhaarNo.value,
      badgeNo: this.badgeNo.value,
      badgeExpiry: this.badgeExpiry.value,
      homeContactNo: this.homeContactNo.value,
      licenseDOIDate: this.licenseDOIDate.value,
      licenseExpDate: this.licenseExpDate.value,
      referencePersonName: this.referencePersonName.value,
      referencePersonContactNo: this.referencePersonContactNo.value,
      photoLocation: this.getfileLoc,
      fileLocation: this.getfileLoc2
    };

    this.request.addDriver(newDriver).subscribe((res: any) => {
      if (res.status == 'success') {
        swal("Added Sucessfully");
        this.getfileLoc2="";
        this.getfileLoc="";
        this.loadModal();
        this.viewData();
      }
      else if (res.status == 'error') {
        this.setMessage(res.error);
      }
    }, (error) => {
      this.setMessage(error);
    });
    console.log(newDriver);
  }

  // To display driver
  viewData() {
    this.request.getDriver().subscribe((response) => {
      this.drivers = response;
      console.log(this.drivers);
    }, (error) => {
      console.log(error);
    });
  }

  // To delete driver
  deleteDriver(id: any) {
    this.request.deleteDriver(id).subscribe(res => {
      console.log(id);
      this.viewData();
      console.log('Deleted');
      this.router.navigate(['driver']);
    });
  }

  // To edit driver
  onEdit(driver) {
    this.Id = driver._id;
    this.request.fetchDriverBy(this.Id).subscribe((response) => {
      this.editDriver = response[0];
      console.log(response);
      this.nameValue = this.editDriver.name;
      this.vehicleNoValue = this.editDriver.vehicleNo;
      this.fathersNameValue = this.editDriver.fathersName;
      this.dobValue = this.editDriver.dob;
      this.joiningYearValue = this.editDriver.joiningYear;
      this.personalContactNoValue = this.editDriver.personalContactNo;
      this.addressValue = this.editDriver.address;
      this.drivingLicenseNoValue = this.editDriver.drivingLicenseNo;
      this.aadhaarNoValue = this.editDriver.aadhaarNo;
      this.badgeNoValue = this.editDriver.badgeNo;
      this.badgeExpiryValue = this.editDriver.badgeExpiry;
      this.homeContactNoValue = this.editDriver.homeContactNo;
      this.licenseDOIDateValue = this.editDriver.licenseDOIDate;
      this.licenseExpDateValue = this.editDriver.licenseExpDate;
      this.referencePersonNameValue = this.editDriver.referencePersonName;
      this.referencePersonContactNoValue = this.editDriver.referencePersonContactNo;
      this.photoLocationValue = this.editDriver.photoLocation;
      this.fileLocationValue = this.editDriver.fileLocation;
      this.IdValue = this.editDriver._id;


      this.name2 = new FormControl(this.nameValue, [Validators.required]);
      this.vehicleNo2 = new FormControl(this.vehicleNoValue, [Validators.required]);
      this.fathersName2 = new FormControl(this.fathersNameValue, [Validators.required]);
      this.address2 = new FormControl(this.addressValue, [Validators.required]);
      this.dob2 = new FormControl(this.dobValue, [Validators.required]);
      this.joiningYear2 = new FormControl(this.joiningYearValue, [Validators.required]);
      this.personalContactNo2 = new FormControl(this.personalContactNoValue, [Validators.required]);
      this.address2 = new FormControl(this.addressValue, [Validators.required]);
      this.drivingLicenseNo2 = new FormControl(this.drivingLicenseNoValue, [Validators.required]);
      this.aadhaarNo2 = new FormControl(this.aadhaarNoValue, [Validators.required]);
      this.badgeNo2 = new FormControl(this.badgeNoValue, [Validators.required]);
      this.badgeExpiry2 = new FormControl(this.badgeExpiryValue, [Validators.required]);
      this.homeContactNo2 = new FormControl(this.homeContactNoValue, [Validators.required]);
      this.licenseDOIDate2 = new FormControl(this.licenseDOIDateValue, [Validators.required]);
      this.licenseExpDate2 = new FormControl(this.licenseExpDateValue, [Validators.required]);
      this.referencePersonName2 = new FormControl(this.referencePersonNameValue, [Validators.required]);
      this.referencePersonContactNo2 = new FormControl(this.referencePersonContactNoValue, [Validators.required]);
//this.photoLocation2 = new FormControl(this.photoLocationValue, [Validators.required]);
     //this.fileLocation2 = new FormControl(this.fileLocationValue, [Validators.required]);
    });
  }
  updateDriver() {

    if (this.name2.value != '' && this.vehicleNo2.value != '' && this.fathersName2.value !='' &&
    this.dob2.value !="" && this.joiningYear2.value != '' && this.personalContactNo2.value!='' && this.address2.value!='' &&
    this.drivingLicenseNo2.value !='' &&  this.aadhaarNo2.value!='' && this.badgeNo2.value !='' && this.badgeExpiry2.value !=''
    && this.homeContactNo2.value !='' && this.licenseDOIDate2.value !='' && this.licenseExpDate2.value !='' && this.referencePersonName2.value !=''
    && this.referencePersonContactNo2.value !='' ) {
    const edata = {
      name: this.name2.value,
      vehicleNo: this.vehicleNo2.value,
      fathersName: this.fathersName2.value,
      dob: this.dob2.value,
      joiningYear: this.joiningYear2.value,
      personalContactNo: this.personalContactNo2.value,
      address: this.address2.value,
      drivingLicenseNo: this.drivingLicenseNo2.value,
      aadhaarNo: this.aadhaarNo2.value,
      badgeNo: this.badgeNo2.value,
      badgeExpiry: this.badgeExpiry2.value,
      homeContactNo: this.homeContactNo2.value,
      licenseDOIDate: this.licenseDOIDate2.value,
      licenseExpDate: this.licenseExpDate2.value,
      referencePersonName: this.referencePersonName2.value,
      referencePersonContactNo: this.referencePersonContactNo2.value,
      photoLocation: this.getfileLoc,
      fileLocation: this.getfileLoc2

    };
    this.request.updateDriver(this.IdValue, edata).subscribe((res: any) => {
      if (res.status == 'success') {
        swal("Updated Successfully");
        this.getfileLoc2="";
        this.getfileLoc="";
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
      //$('#form_advanced_validation').trigger('reset');
      var v = $('#form_advanced_validation').validate();
      v.resetForm();

      $('.progress .progress-bar').css('width', 0);
        $('.progress .progress-bar').html('');

    })
    $('#editModal').modal('hide'); //or  $('#IDModal').modal('hide');
    $('#editModal ').on('hidden.bs.modal', function () {
      $(this).find('form').trigger('reset');
      var v = $('#form_advanced_validation1').validate();
      v.resetForm();
      $('.progress .progress-bar').css('width', 0);
        $('.progress .progress-bar').html('');
    })
  }

  ngOnInit() {
    this.startScript();
    M.updateTextFields();
    this.viewData();
    this.loadModal();
    this.loadVehicle();

    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      console.log('ImageUpload:uploaded:', item, status, response);
      const resPath = JSON.parse(response);
    this.getfileLoc = resPath.driverFileResult1;
    };

    this.uploader2.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader2.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      console.log('ImageUpload:uploaded:', item, status, response);
      const resPath = JSON.parse(response);
     this.getfileLoc2 = resPath.driverFileResult2;
    };


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
