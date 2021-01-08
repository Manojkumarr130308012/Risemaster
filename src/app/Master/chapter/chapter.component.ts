import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { RequestService } from "../../services/request.service";
import { DynamicScriptLoaderService } from "../../services/dynamic-script-loader.service";
import { AuthService } from "../../services/auth.service";
import { UploadFileService } from 'src/app/services/upload-file.service';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireStorage } from '@angular/fire/storage';
import { FileUpload } from 'src/app/services/fileupload';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
declare const $: any;
declare const M: any;
declare const swal: any;
@Component({
  selector: 'app-chapter',
  templateUrl: './chapter.component.html',
  styleUrls: ['./chapter.component.scss']
})
export class ChapterComponent implements OnInit {
  addBatchForm: any;
  editForm: any;
  message: any;
  submitted = false;
  batches: Object;
  public Country: any;
  public Country2: any;
  CountryValue: any;
  StateValue:any;
  Countrys;
  IdValue: any;
  region: any;
  region2: any;
  district:any;
  district2:any;
  Id: any;
  editBatch: any;
  regionValue: any;
  districtValue:any;
  regionNames: any;
  districtValues:any;
  courseprogramValue: any;
  State: any;
  State2: any;
  countryId: any;
  StatebyIns: any;
  StateIns: any;
  states:any;
  districts:any;
  countrybyins:any;
  statebyins:any;
  stateid:any;
  regionbyins:any;
  CityName:any;
  CityName2:any;
  regionid:any;
  CityNameValue:any;
  cities:any;
  districtbyins:any;
  districtid:any;
  ChapterName:any;
  ChapterName2:any;
  Address:any;
  Address2:any;
  Email:any;
  Email2:any;
  Mobile:any;
  Mobile2:any;
  ContactPerson:any;
  ContactPerson2:any;
  status:any;
  status2:any;
  ChapterNamevalue:any;
  Emailvalue:any;
  Addressvalue:any;
  Mobilevalue:any;
  ContactPersonvalue:any;
  statusvalue:any;
  CreatedOnvalue:any;
  UpdatedOnvalue:any;
  chapters:any;
  url:any;
  private basePath = '/uploads';
  selectedFiles: FileList;
  currentFileUpload: FileUpload;
  percentage: number;
  constructor(
    private formBuilder: FormBuilder,
    private dynamicScriptLoader: DynamicScriptLoaderService,
    private request: RequestService,
    private router: Router,
    private activeRoute:  ActivatedRoute,
    private auth: AuthService,
    private uploadService: UploadFileService,
    private db: AngularFireDatabase, private storage: AngularFireStorage) {
    // Add Form
  
    this.addBatchForm = this.formBuilder.group({
      Country: ["", Validators.required],
      State: ["", Validators.required],
      region: ["", Validators.required],
      district: ["", Validators.required],
      CityName: ["", Validators.required],
      ChapterName: ["", Validators.required],
      Address: ["", Validators.required],
      Email: ["", Validators.required],
      Mobile: ["", Validators.required],
      ContactPerson: ["", Validators.required],
      status: ["", Validators.required],
    });
    // Edit Form
    this.editForm = this.formBuilder.group({
      Country2: ["", Validators.required],
      State2: ["", Validators.required],
      region2: ["", Validators.required],
      district2: ["", Validators.required],
      CityName2: ["", Validators.required],
      ChapterName2: ["", Validators.required],
      Address2: ["", Validators.required],
      Email2: ["", Validators.required],
      Mobile2: ["", Validators.required],
      ContactPerson2: ["", Validators.required],
      status2: ["", Validators.required],
    });

     }
     public setMessage(message) {
      return (this.message = message);
    }

    loadstate() {
      this.request.getstate().subscribe((response: any) => {
        this.states = response;
        console.log('state' ,this.states);
      }, (error) => {
        console.log(error);
      });
    }

    //Add form validation and function
    onAddSubmit() {
      this.submitted = true;
      if (this.addBatchForm.invalid) {
        return;
      }
      var currentTimeInSeconds=Math.floor(Date.now()/1000);
     const edata = {
        Country: this.addBatchForm.get("Country").value,
        State: this.addBatchForm.get("State").value,
        region: this.addBatchForm.get("region").value,
        district: this.addBatchForm.get("district").value,
        CityName: this.addBatchForm.get("CityName").value,
        ChapterName: this.addBatchForm.get("ChapterName").value,
        Address: this.addBatchForm.get("Address").value,
        Email: this.addBatchForm.get("Email").value,
        Mobile: this.addBatchForm.get("Mobile").value,
        ContactPerson: this.addBatchForm.get("ContactPerson").value,
        CreatedOn: ""+currentTimeInSeconds,
        UpdatedOn:"",
        chapterlogo:""+this.url,
        status: this.addBatchForm.get("status").value
      };
      this.request.addchapter(edata).subscribe(
        (res: any) => {
          if (res.status == "success") {
            swal("Added Sucessfully");
            this.loadModal();
            this.viewData();
          } else if (res.status == "error") {
            swal(res.error);
          }
        },
        error => {
          swal(error);
        }
      );
      console.log(this.addBatchForm.value);
    }
    // To display course category
    viewData() {
      this.request.getaggchapter().subscribe(
        response => {
          this.chapters = response;
          console.log("chapters",this.chapters);
        },
        error => {
          console.log(error);
        }
      );
    }

    // To delete course category
    deleteBatch(id: any) {
      this.request.deletechapter(id).subscribe(res => {
        console.log(id);
        this.viewData();
        console.log("Deleted");
      });
    }

    // To edit course category
    onEdit(city) {
      this.Id = city._id;
      this.countryId = city.CountryDetails[0]._id;
      this.stateid = city.StateDetails[0]._id;
      this.regionid = city.regionsDetails[0]._id;
      this.districtid = city.districtsDetails[0]._id;
      this.loadcountryIns(this.countryId);
      this.loadstateIns(this.stateid);
      this.loadregionIns(this.regionid);
      this.loaddistrictIns(this.districtid);
      this.request.fetchchapterById(this.Id).subscribe(response => {
        this.editBatch = response[0];
        console.log(response);
        this.CountryValue = this.editBatch.Country;
        this.StateValue = this.editBatch.State;
        this.regionValue = this.editBatch.region;
        this.districtValue = this.editBatch.district;
        this.CityNameValue = this.editBatch.CityName;
        this.ChapterNamevalue = this.editBatch.ChapterName;
        this.Addressvalue = this.editBatch.Address;
        this.Emailvalue = this.editBatch.Email;
        this.Mobilevalue = this.editBatch.Mobile;
        this.ContactPersonvalue = this.editBatch.ContactPerson;
        this.CreatedOnvalue = this.editBatch.CreatedOn;
        this.UpdatedOnvalue = this.editBatch.UpdatedOn;
        this.statusvalue = this.editBatch.status;
        this.url=this.editBatch.chapterlogo;
        this.IdValue = this.editBatch._id;

        this.editForm = this.formBuilder.group({
          Country2: [this.CountryValue, Validators.required],
          State2: [this.StateValue, Validators.required],
          region2: [this.regionValue, Validators.required],
          district2: [this.districtValue, Validators.required],
          CityName2: [this.CityNameValue, Validators.required],
          ChapterName2: [this.ChapterNamevalue, Validators.required],
          Address2: [this.Addressvalue, Validators.required],
          Email2: [this.Emailvalue, Validators.required],
          Mobile2: [this.Mobilevalue, Validators.required],
          ContactPerson2: [this.ContactPersonvalue, Validators.required],
          status2: [this.statusvalue, Validators.required],
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
      var currentTimeInSeconds=Math.floor(Date.now()/1000);
      const edata1 = {
        Country: this.editForm.get("Country2").value,
        State: this.editForm.get("State2").value,
        region: this.editForm.get("region2").value,
        district: this.editForm.get("district2").value,
        CityName: this.editForm.get("CityName2").value,
        ChapterName: this.editForm.get("ChapterName2").value,
        Address: this.editForm.get("Address2").value,
        Email: this.editForm.get("Email2").value,
        Mobile: this.editForm.get("Mobile2").value,
        ContactPerson: this.editForm.get("ContactPerson2").value,
        CreatedOn:this.CreatedOnvalue,
        UpdatedOn:""+currentTimeInSeconds,
        chapterlogo:""+this.url,
        status: this.editForm.get("status2").value
      };

      this.request.updatechapter(this.IdValue, edata1).subscribe(
        (res: any) => {
          if (res.status == "success") {
            swal("Updated Sucessfully");
            this.loadModal();
            this.viewData();
          } else if (res.status == "error") {
            swal(res.error);
          }
        },
        error => {
          console.log(error);
          swal(error);
        }
      );
    }
    loadcountryIns(Country) {
      this.request.loadcountrybyins(Country).subscribe((response: any) => {
        this.countrybyins = response;
        console.log('countrybyins', this.countrybyins);
      }, (error) => {
        console.log(error);
      });
    }
    loadstateIns(state) {
      this.request.loadstatebyins(state).subscribe((response: any) => {
        this.statebyins = response;
        console.log('statebyins', this.statebyins);
      }, (error) => {
        console.log(error);
      });
    }
    loadregionIns(region) {
      this.request.loaddistrictbyins(region).subscribe((response: any) => {
        this.regionbyins = response;
        console.log('regionbyins', this.regionbyins);
      }, (error) => {
        console.log(error);
      });
    }
    loaddistrictIns(district) {
      this.request.loadcitybyins(district).subscribe((response: any) => {
        this.districtbyins = response;
        console.log('districtbyins', this.districtbyins);
      }, (error) => {
        console.log(error);
      });
    }
  // Bind institution data
  loadCountry() {
    this.request.getcountry().subscribe((response: any) => {
      this.Countrys = response;
      console.log('Countrys', this.Countrys);
    }, (error) => {
      console.log(error);
    });
  }
  // Bind coursecategory data
  onCountryChange(Country: string) {
    console.log('Country', Country);
    if (Country) {
       this.request.loadcountrybyins(Country).subscribe((response: any) => {
         console.log(response);
         this.countrybyins = response;
         console.log('countrybyins', this.countrybyins);
       }, (error) => {
         console.log(error);
       });

     } else

       this.countrybyins = null;
    }

    onstateChange(state: string) {
      console.log('state', state);
      if (state) {
         this.request.loadstatebyins(state).subscribe((response: any) => {
           console.log(response);
           this.statebyins = response;
           console.log('statebyins', this.statebyins);
         }, (error) => {
           console.log(error);
         });
  
       } else
         this.statebyins = null;
      }



//addmemeber image
selectFile(event) {
  this.selectedFiles = event.target.files;
}

upload() {
  const file = this.selectedFiles.item(0);
  this.selectedFiles = undefined;

  this.currentFileUpload = new FileUpload(file);
 this.pushFileToStorage(this.currentFileUpload).subscribe(
    percentage => {
      this.percentage = Math.round(percentage);
    },
    error => {
      console.log(error);
    }
  );

}


pushFileToStorage(fileUpload: FileUpload): Observable<number> {
  const filePath = `${this.basePath}/${fileUpload.file.name}`;
  const storageRef = this.storage.ref(filePath);
  const uploadTask = this.storage.upload(filePath, fileUpload.file);

  uploadTask.snapshotChanges().pipe(
    finalize(() => {
      storageRef.getDownloadURL().subscribe(downloadURL => {
        console.log('File available at', downloadURL);
        fileUpload.url = downloadURL;
        fileUpload.name = fileUpload.file.name;
        this.saveFileData(fileUpload);
        
       this.url=downloadURL
       console.log('url' , this.url);
      });
    })
  ).subscribe();

  return uploadTask.percentageChanges();
}

private saveFileData(fileUpload: FileUpload) {
  this.db.list(this.basePath).push(fileUpload);
}


    // convenience getter for easy access to form fields
    get f() {
      return this.addBatchForm.controls;
    }
    get f2() {
      return this.editForm.controls;
    }

    async startScript() {
      await this.dynamicScriptLoader
        .load(
          "dataTables.buttons",
          "buttons.flash",
          "jszip",
          "pdfmake",
          "vfs_fonts",
          "pdfmake",
          "buttons.html5",
          "buttons.print",
          "form.min"
        )
        .then(data => {
          this.loadData();
        })
        .catch(error => console.log(error));
    }
    private loadData() {
      $("#tableExport").DataTable({
        dom: "Bfrtip",
        buttons: ["copy", "csv", "excel", "pdf", "print"]
      });
    }

    loadModal() {
      $("#addModal").modal("hide"); //or  $('#IDModal').modal('hide');
      $("#addModal").on("hidden.bs.modal", function() {
        $(this)
          .find("form")
          .trigger("reset");
      });
      $("#editModal").modal("hide"); //or  $('#IDModal').modal('hide');
      $("#editModal").on("hidden.bs.modal", function() {
        $(this)
          .find("form")
          .trigger("reset");
      });
    }

    ngOnInit() {
      //this.auth.isValidUser();
      this.startScript();
      M.updateTextFields();
      this.viewData();
      this.loadModal();
      this.loadstate();
      this.loadCountry();
    }
  }
