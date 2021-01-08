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
import { Observable } from 'rxjs';
import { UploadFileService } from 'src/app/services/upload-file.service';
import { FileUpload } from 'src/app/services/fileupload';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
declare const $: any;
declare const M: any;
declare const swal: any;
@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss']
})
export class MemberComponent implements OnInit {
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
  Gender:any;
  Gender2:any;
  Chapter:any;
  Chapter2:any;
  Category:any;
  Category2:any;
  MembershipType:any;
  MembershipType2:any;
  membershipcategory:any;
  membershipcategory2:any;
  bussinessname:any;
  bussinessname2:any;
  Namevalue:any;
  bussinessnamevalue:any;
  genders:any;
  MembershipTypes:any;
  membershipclasifications:any;
  gendervalue:any;
  membershiptypevalue:any;
  membershipclassivalue:any;
  chaptervalue:any;
  selectedinstitution:any;
  members:any;
  DOB:any;
  DOB2:any;
  Products:any;
  Products2:any;
  Keywords:any;
  Keywords2:any;
  Website:any;
  Website2:any;
  Interests:any;
  Interests2:any;
  SocialMediaLinks:any;
  SocialMediaLinks2:any;
  ValidUpto:any;
  ValidUpto2:any;
  pincode:any;
  pincode2:any;
  DOBvalue: any;
  pincodevalue: any;
  productvalue: any;
  keywordvalue: any;
  websitevalue: any;
  interestsvalue: any;
  socialmedialinkvalue: any;
  ValidUptovalue: any;
  passwordvalue: any;
  Countrycodevalue: any;
  selectedFiles: FileList;
  currentFileUpload: FileUpload;
  percentage: number;
  url:any;
  private basePath = '/uploads';
  bussnesurl: any;
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
      Name: ["", Validators.required],
      Gender:["", Validators.required],
      Chapter:["", Validators.required],
      Category:["", Validators.required],
      MembershipType:["", Validators.required],
      Address: ["", Validators.required],
      Email: ["", Validators.required],
      Mobile: ["", Validators.required],
      bussinessname: ["", Validators.required],
      DOB: ["", Validators.required],
      pincode: ["", Validators.required],
      Products: ["", Validators.required],
      Keywords: ["", Validators.required],
      Website: ["", Validators.required],
      Interests: ["", Validators.required],
      SocialMediaLinks: ["", Validators.required],
      ValidUpto: ["", Validators.required],
      status: ["", Validators.required],
    });
    // Edit Form
    this.editForm = this.formBuilder.group({
      Country2: ["", Validators.required],
      State2: ["", Validators.required],
      region2: ["", Validators.required],
      district2: ["", Validators.required],
      CityName2: ["", Validators.required],
      Name2: ["", Validators.required],
      Gender2:["", Validators.required],
      Chapter2:["", Validators.required],
      Category2:["", Validators.required],
      MembershipType2:["", Validators.required],
      Address2: ["", Validators.required],
      Email2: ["", Validators.required],
      Mobile2: ["", Validators.required],
      bussinessname2: ["", Validators.required],
      DOB2: ["", Validators.required],
      pincode2: ["", Validators.required],
      Products2: ["", Validators.required],
      Keywords2: ["", Validators.required],
      Website2: ["", Validators.required],
      Interests2: ["", Validators.required],
      SocialMediaLinks2: ["", Validators.required],
      ValidUpto2: ["", Validators.required],
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


    //bussinesslogo

    selectFile1(event) {
      this.selectedFiles = event.target.files;
    }
  
    upload1() {
      const file = this.selectedFiles.item(0);
      this.selectedFiles = undefined;
  
      this.currentFileUpload = new FileUpload(file);
     this.pushFileToStorage1(this.currentFileUpload).subscribe(
        percentage => {
          this.percentage = Math.round(percentage);
        },
        error => {
          console.log(error);
        }
      );

    }
    

    pushFileToStorage1(fileUpload: FileUpload): Observable<number> {
      const filePath = `${this.basePath}/${fileUpload.file.name}`;
      const storageRef = this.storage.ref(filePath);
      const uploadTask = this.storage.upload(filePath, fileUpload.file);
  
      uploadTask.snapshotChanges().pipe(
        finalize(() => {
          storageRef.getDownloadURL().subscribe(downloadURL => {
            console.log('File available at', downloadURL);
            fileUpload.url = downloadURL;
            fileUpload.name = fileUpload.file.name;
            this.saveFileData1(fileUpload);
            
           this.bussnesurl=downloadURL
           console.log('bussnesurl' , this.bussnesurl);
          });
        })
      ).subscribe();
  
      return uploadTask.percentageChanges();
    }
  
    private saveFileData1(fileUpload: FileUpload) {
      this.db.list(this.basePath).push(fileUpload);
    }


    //Add form validation and function
    onAddSubmit() {
      this.submitted = true;
      if (this.addBatchForm.invalid) {
        return;
      }
      var currentTimeInSeconds=Math.floor(Date.now()/1000);
     const edata = {
      Country:  this.addBatchForm.get("Country").value,
      State: this.addBatchForm.get("State").value,
      region:  this.addBatchForm.get("region").value,
      district:  this.addBatchForm.get("district").value,
      CityName:  this.addBatchForm.get("CityName").value,
      Name:  this.addBatchForm.get("Name").value,
      Gender: this.addBatchForm.get("Gender").value,
      Chapter: this.addBatchForm.get("Chapter").value,
      Category: this.addBatchForm.get("Category").value,
      MembershipType: this.addBatchForm.get("MembershipType").value,
      Address: this.addBatchForm.get("Address").value,
      Email:  this.addBatchForm.get("Email").value,
      Mobile:  this.addBatchForm.get("Mobile").value,
      bussinessname:  this.addBatchForm.get("bussinessname").value,
      DOB:  this.addBatchForm.get("DOB").value,
      pincode:  this.addBatchForm.get("pincode").value,
      Products:  this.addBatchForm.get("Products").value,
      Keywords:  this.addBatchForm.get("Keywords").value,
      Website: this.addBatchForm.get("Website").value,
      Interests:  this.addBatchForm.get("Interests").value,
      SocialMediaLinks:  this.addBatchForm.get("SocialMediaLinks").value,
      ValidUpto:  this.addBatchForm.get("ValidUpto").value,
        CreatedOn: ""+currentTimeInSeconds,
        UpdatedOn:"",
        password:"",
        Countrycode:"+91",
        image:""+this.url,
        bussinesslogo:""+this.bussnesurl,
        status: this.addBatchForm.get("status").value
      };

      console.log("add data",""+edata.bussinesslogo+""+edata.pincode)

      this.request.addmemeber(edata).subscribe(
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
      this.request.getaggmemeber().subscribe(
        response => {
          this.members = response;
          console.log("members",this.members);
        },
        error => {
          console.log(error);
        }
      );
    }

    // To delete course category
    deleteBatch(id: any) {
      this.request.deletememeber(id).subscribe(res => {
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
      this.request.fetchmemeberById(this.Id).subscribe(response => {
        this.editBatch = response[0];
        console.log(response);
        this.CountryValue = this.editBatch.Country;
        this.StateValue = this.editBatch.State;
        this.regionValue = this.editBatch.region;
        this.districtValue = this.editBatch.district;
        this.CityNameValue = this.editBatch.CityName;
        this.Namevalue = this.editBatch.Name;
        this.gendervalue=this.editBatch.Gender;
        this.chaptervalue=this.editBatch.Chapter;
        this.membershiptypevalue=this.editBatch.MembershipType;
        this.membershipclassivalue=this.editBatch.Category;
        this.Addressvalue = this.editBatch.Address;
        this.Emailvalue = this.editBatch.Email;
        this.Mobilevalue = this.editBatch.Mobile;
        this.bussinessnamevalue = this.editBatch.bussinessname;
        this.DOBvalue= this.editBatch.DOB;
        this.pincodevalue=this.editBatch.pincode;
        this.productvalue= this.editBatch.Products;
        this.keywordvalue= this.editBatch.Keywords;
        this.websitevalue= this.editBatch.Website;
        this.interestsvalue=  this.editBatch.Interests;
        this.socialmedialinkvalue= this.editBatch.SocialMediaLinks;
        this.ValidUptovalue=  this.editBatch.ValidUpto;
        this.CreatedOnvalue = this.editBatch.CreatedOn;
        this.UpdatedOnvalue = this.editBatch.UpdatedOn;
        this.statusvalue = this.editBatch.status;
        this.passwordvalue = this.editBatch.password;
        this.Countrycodevalue = this.editBatch.Countrycode;
        this.url=this.editBatch.Photo;
        this.bussnesurl=this.editBatch.bussinesslogo;
        this.IdValue = this.editBatch._id;

        this.editForm = this.formBuilder.group({
          Country2: [this.CountryValue, Validators.required],
          State2: [this.StateValue, Validators.required],
          region2: [this.regionValue, Validators.required],
          district2: [this.districtValue, Validators.required],
          CityName2: [this.CityNameValue, Validators.required],
         Name2: [this.Namevalue, Validators.required],
         Gender2: [this.gendervalue, Validators.required],
         MembershipType2: [this.membershiptypevalue, Validators.required],
         Category2: [this.membershipclassivalue, Validators.required],
         Chapter2: [this.chaptervalue, Validators.required],
         Address2: [this.Addressvalue, Validators.required],
          Email2: [this.Emailvalue, Validators.required],
          Mobile2: [this.Mobilevalue, Validators.required],
           bussinessname2: [this.bussinessnamevalue, Validators.required],
           DOB2: [this.DOBvalue, Validators.required],
           pincode2: [this.pincodevalue, Validators.required],
           Products2: [this.productvalue, Validators.required],
           Keywords2: [this.keywordvalue, Validators.required],
           Website2: [this.websitevalue, Validators.required],
           Interests2: [this.interestsvalue, Validators.required],
           SocialMediaLinks2: [this.socialmedialinkvalue, Validators.required],
           ValidUpto2: [this.ValidUptovalue, Validators.required],
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
        Name: this.editForm.get("Name2").value,
        Gender:this.editForm.get("Gender2").value,
        Chapter:this.editForm.get("Chapter2").value,
        Category:this.editForm.get("Category2").value,
        MembershipType:this.editForm.get("MembershipType2").value,
        Address: this.editForm.get("Address2").value,
        Email: this.editForm.get("Email2").value,
        Mobile: this.editForm.get("Mobile2").value,
        bussinessname: this.editForm.get("bussinessname2").value,
        DOB:  this.editForm.get("DOB2").value,
        pincode:  this.editForm.get("pincode2").value,
        Products:  this.editForm.get("Products2").value,
        Keywords:  this.editForm.get("Keywords2").value,
        Website: this.editForm.get("Website2").value,
        Interests:  this.editForm.get("Interests2").value,
        SocialMediaLinks:  this.editForm.get("SocialMediaLinks2").value,
        ValidUpto:  this.editForm.get("ValidUpto2").value,
        CreatedOn:this.CreatedOnvalue,
        UpdatedOn:""+currentTimeInSeconds,
        password:"",
        Countrycode:""+this.Countrycodevalue,
        image:""+this.url,
        bussinesslogo:""+this.bussnesurl,
        status: this.editForm.get("status2").value
      };

      this.request.updatememeber(this.IdValue, edata1).subscribe(
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

    loadgender() {
      this.request.getgender().subscribe((response: any) => {
          this.genders = response;
          console.log(response);
      }, (error) => {
          console.log(error);
      });
  }


  loadMembershipType() {
    this.request.getmembershiptype().subscribe((response: any) => {
        this.MembershipTypes = response;
        console.log(response);
    }, (error) => {
        console.log(error);
    });
}


loadchapter() {
  this.request.getchapter().subscribe((response: any) => {
      this.chapters = response;
      console.log(response);
  }, (error) => {
      console.log(error);
  });
}
loadcategory() {
  this.request.getmembershipclassification().subscribe((response: any) => {
      this.membershipclasifications = response;
      console.log(response);
  }, (error) => {
      console.log(error);
  });
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
      this.loadgender();
      this.loadMembershipType();
      this.loadcategory();
      this.loadchapter();
    }
  }
