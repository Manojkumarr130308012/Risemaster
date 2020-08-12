import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DynamicScriptLoaderService } from '../../services/dynamic-script-loader.service';
import { RequestService } from '../../services/request.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
declare const M: any;
declare const $: any;
declare const swal: any;
import { FileSelectDirective, FileUploader } from "ng2-file-upload";
const URL = "http://localhost:3000/driverFileUpload/upload";
@Component({
  selector: 'app-calenderdata',
  templateUrl: './calenderdata.component.html',
  styleUrls: ['./calenderdata.component.css']
})
export class CalenderdataComponent implements OnInit {
 submitted = false;
    institution: FormControl;
    Date:any;
    time: FormControl;
    eventname:FormControl;
    description:FormControl;
    location:FormControl;
    institution2: FormControl;
    time2: FormControl;
    eventname2:FormControl;
    description2:FormControl;
    location2:FormControl;

    calenderdatas: any;
    Id: any;
    editcalenderdatadata;
    calendertimeValue: any;
    calendereventValue: any;
    calenderdescripValue: any;
    calenderlocValue: any;


    InstitutionValue: any;
    DateValue: any;
    IdValue: any;
    institutions;
    registerForm: FormGroup;
    editForm: FormGroup;
    getData: any;
    message: any;
    selectedinstitution2:any;
    selectedinstitution:any;

    photoValue: any;
    public uploader: FileUploader = new FileUploader({
      url: URL,
      itemAlias: "photo"
    });
    getfileLoc: any;
    photoLocation: any;
    photoLocationValue: any;
    photoLocation2: FormControl;

  constructor(private formBuilder: FormBuilder,
    private dynamicScriptLoader: DynamicScriptLoaderService,
    private request: RequestService,
    private router: Router,private auth: AuthService) {

 //Add Form Group
 this.registerForm = this.formBuilder.group({
  institution: ['', Validators.required],
  time: ['', Validators.required],
  Date: ["", Validators.required],
  eventname: ["", Validators.required],
  description: ["", Validators.required],
  location: ["", Validators.required],
  // photoLocation: ["", Validators.required]

});
//Edit Form Group
this.editForm = this.formBuilder.group({
  institution2: ['', Validators.required],
  time2: ['', Validators.required],
  Date2: ["", Validators.required],
  eventname2: ["", Validators.required],
  description2: ["", Validators.required],
  location2: ["", Validators.required],
  // photoLocation2: ["", Validators.required]
});


    }


    photosubmit() {

      this.uploader.uploadAll();
    }

    viewData() {
      this.request.calenderdata().subscribe((response: any) => {
          this.calenderdatas = response;
          console.log(this.calenderdatas);
      }, (error) => {
          console.log(error);
      });
  }


//Add form validation and function
// addcalenderdata() {
//   const newDriver = {
//     institution: this.institution.value,
//     time: this.time.value,
//     eventname: this.eventname.value,
//     Date: this.Date.value,
//     description: this.description.value,
//     location: this.location.value,
//     photoLocation: this.getfileLoc
//   };

//   this.request.addcalenderdata(newDriver).subscribe(
//     (res: any) => {
//       if (res.status == "success") {
//         swal("Added Sucessfully");
//         this.getfileLoc = "";
//         this.loadModal();
//         this.viewData();
//       } else if (res.status == "error") {
//         swal(res.error);
//       }
//     },
//     error => {
//       console.log(error);
//     }
//   );
// }








  public setMessage(message) {
      return this.message = message;
  }


   // convenience getter for easy access to form fields
   get f() { return this.registerForm.controls; }
   get f2() { return this.editForm.controls; }







    //Add form validation and function
    onAddSubmit() {
      this.submitted = true;



    //   const edata0 = {
    //     time: this.registerForm.get('time').value,
    //     institution: this.registerForm.get('institution').value,
    //     Date: this.registerForm.get("Date").value,
    //     eventname: this.registerForm.get("eventname").value,
    //     description: this.registerForm.get("description").value,
    //     location: this.registerForm.get("location").value,
    //     photoLocation: this.getfileLoc
    // }

    this.registerForm.setValue({
      time: this.registerForm.get('time').value,
        institution: this.registerForm.get('institution').value,
        Date: this.registerForm.get("Date").value,
        eventname: this.registerForm.get("eventname").value,
        description: this.registerForm.get("description").value,
        location: this.registerForm.get("location").value
        // photoLocation: this.getfileLoc
    })


    if (this.registerForm.invalid) {
      return;
  }



      this.request.addcalenderdata(this.registerForm.value).subscribe((res: any) => {
          if (res.status == 'error') {
              this.setMessage(res.error);
          }
          else if (res.status == 'success') {
              swal("Added Sucessfully");
             // this.onAddReset();
             this.getfileLoc = "";
              this.viewData();
              this.loadModal();

          }
      }, (error) => {
          this.setMessage(error);
      });
      console.log(this.registerForm.value);
  }


 //To delete the data
 deletecalender(id: any) {
  this.request.deletecalederdata(id).subscribe(res => {
      swal(" Deleted Successfully ");
      this.viewData();
  });
}

//Edit Function
onEdit(Id) {
  this.request.fetchcalenderById(Id).subscribe((response) => {
      this.editcalenderdatadata = response[0];
      console.log(response);
      this.calendertimeValue = this.editcalenderdatadata.time;
      this.InstitutionValue = this.editcalenderdatadata.institution;
      this.DateValue = this.editcalenderdatadata.Date;
      this.calendereventValue = this.editcalenderdatadata.eventname;
      this.calenderdescripValue = this.editcalenderdatadata.description;
      this.calenderlocValue = this.editcalenderdatadata.location;
      // this.photoLocationValue = this.editcalenderdatadata.photoLocation;
      this.IdValue = this.editcalenderdatadata._id;

      this.editForm = this.formBuilder.group({
          time2: [this.calendertimeValue, Validators.required],
          institution2: [this.InstitutionValue, Validators.required],
          Date2: [this.DateValue, Validators.required],
          eventname2: [this.calendereventValue, Validators.required],
          description2: [this.calenderdescripValue, Validators.required],
          location2: [this.calenderlocValue, Validators.required]
      });
      // console.log('get edit data',this.editForm.value);
  });
}


loadInstitution() {
  this.request.getInstitution().subscribe((response: any) => {
      this.institutions = response;
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
      time: this.editForm.get('time2').value,
      institution: this.editForm.get('institution2').value,
      Date: this.editForm.get("Date2").value,
      eventname: this.editForm.get("eventname2").value,
      description: this.editForm.get("description2").value,
      location: this.editForm.get("location2").value,
      photoLocation: this.getfileLoc
  }

  this.request.updatecalender(this.IdValue, edata).subscribe((response: any) => {
      if (response.status == 'success') {
          swal("Updated Sucessfully");
          //  console.log('cat res', response);
        //  this.onEditReset();
        this.getfileLoc = "";
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
          'copy', 'csv', 'excel', 'pdf', 'print'
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
  M.updateTextFields();
  this.viewData();
  this.loadInstitution();

  this.uploader.onAfterAddingFile = file => {
    file.withCredentials = false;
  };
  this.uploader.onCompleteItem = (
    item: any,
    response: any,
    status: any,
    headers: any
  ) => {
    console.log("ImageUpload:uploaded:", item, status, response);
    const resPath = JSON.parse(response);
    this.getfileLoc = resPath.driverFileResult1;
  };

}
}
