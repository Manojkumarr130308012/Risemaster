import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router,  ActivatedRoute  } from '@angular/router';
import { RequestService } from '../../services/request.service';
import { DynamicScriptLoaderService } from '../../services/dynamic-script-loader.service';
import { AuthService } from "../../services/auth.service";
import { FileUpload } from 'src/app/services/fileupload';
import { UploadFileService } from 'src/app/services/upload-file.service';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
declare const $: any;
declare const M: any;
declare const swal: any;
@Component({
  selector: 'app-sponsor',
  templateUrl: './sponsor.component.html',
  styleUrls: ['./sponsor.component.scss']
})
export class SponsorComponent implements OnInit {
  registerForm: FormGroup;
  editForm: FormGroup;
  submitted = false;
  public name: any; public name2: any;
  public designation: any; public designation2: any;
  public companyname: any; public companyname2: any;
  public location: any; public location2: any;
  public bio: any; public bio2: any;
  public email: any; public email2: any;
  public mobile: any; public mobile2: any;
  public address: any; public address2: any;
  public website: any; public website2: any;
  public linkedin: any; public linkedin2: any;
  public Speakers: any;
  Id: any;
  IdValue: any;
  editspeakergroup: any;
  nameValue: any;
  designationValue:any;
  companynameValue:any;
  locationValue:any;
  bioValue:any;
  emailValue:any;
  mobileValue:any;
  addressValue:any;
  websiteValue:any;
  linkedinValue:any;
  selectedFiles: FileList;
  currentFileUpload: FileUpload;
  percentage: number;
  url:any;
  sponsorbanner:any;
  image1:any;
  image2:any;
  image3:any;
  image4:any;
  image5:any;
  private basePath = '/uploads';
  public message: string;
  descriptionValue: any;
  phoneValue: any;
  productsValue: any;
  sponsors: any;
  id: any;

  constructor(
    private formBuilder: FormBuilder,
    private dynamicScriptLoader: DynamicScriptLoaderService,
    private request: RequestService,
    private router: Router,
    private route: ActivatedRoute,
    private activeRoute:  ActivatedRoute,
    private auth: AuthService,
    private uploadService: UploadFileService,
    private db: AngularFireDatabase, private storage: AngularFireStorage)
    {

      this.route.queryParams.subscribe((params: any) => {
        this.id = params.id;
      })
      // Add Form
      this.registerForm = this.formBuilder.group({
        name:['', Validators.required],
        description:['', Validators.required],
        address:['', Validators.required],
        email:['', Validators.required],
        phone:['', Validators.required],
        website:['', Validators.required],
        products:['', Validators.required]
    });
    // Edit Form
      this.editForm = this.formBuilder.group({
        name2:['', Validators.required],
        description2:['', Validators.required],
        address2:['', Validators.required],
        email2:['', Validators.required],
        phone2:['', Validators.required],
        website2:['', Validators.required],
        products2:['', Validators.required]
    });
     }

     public setMessage(message) {
      return this.message = message;
    }

      //Add form validation and function
      onAddSubmit() {
        this.submitted = true;
        if (this.registerForm.invalid) {
            return;
        }
      this.registerForm.value;

      const edata = {
        Event:""+this.id,
        name:  this.registerForm.get("name").value,
        description: this.registerForm.get("description").value,
        address:  this.registerForm.get("address").value,
        email:  this.registerForm.get("email").value,
        phone:  this.registerForm.get("phone").value,
        website: this.registerForm.get("website").value,
        products: this.registerForm.get("products").value,
        profile:""+this.url,
        sponsorbanner:""+this.sponsorbanner,
        image1:""+this.image1,
        image2:""+this.image2,
        image3:""+this.image3,
        image4:""+this.image4,
        image5:""+this.image5
        };

        console.log("ddddddd",edata);
    this.request.addsponsor(edata).subscribe((res: any) => {
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
    console.log(this.registerForm.value);
    }

    // To display bloodgroup
  viewData() {
  this.request.fetchsponsor(this.id).subscribe((response) => {
    this.sponsors = response;
    console.log(this.sponsors);
  }, (error) => {
    console.log(error);
  });
  }

  // To delete bloodgroup
  deleteBloodgroup(id: any) {
    this.request.deletesponsor(id).subscribe(res => {
      console.log(id);
      this.viewData();
    console.log('Deleted');
    this.router.navigate(['sponsor']);
    });
  }

  // To edit bloodgroup
  onEdit(bloodgroup){
    this.Id=bloodgroup._id;
    this.request.fetchsponsorById(this.Id).subscribe((response) => {
      this.editspeakergroup=response[0];
      console.log(response);
        this.nameValue=this.editspeakergroup.name;
        this.descriptionValue=this.editspeakergroup.description;
        this.addressValue=this.editspeakergroup.address;
        this.emailValue=this.editspeakergroup.email;
        this.phoneValue=this.editspeakergroup.phone;
        this.websiteValue=this.editspeakergroup.website;
        this.productsValue=this.editspeakergroup.products;
        this.url=this.editspeakergroup.profile;
        this.sponsorbanner=this.editspeakergroup.sponsorbanner;
        this.image1=this.editspeakergroup.image1;
        this.image2=this.editspeakergroup.image2;
        this.image3=this.editspeakergroup.image3;
        this.image4=this.editspeakergroup.image4;
        this.image5=this.editspeakergroup.image5;
        this.IdValue=this.editspeakergroup._id;

        this.editForm = this.formBuilder.group({
          name2:[this.nameValue, Validators.required],
          description2:[this.descriptionValue, Validators.required],
          address2:[this.addressValue, Validators.required],
          email2:[this.emailValue, Validators.required],
          phone2:[this.phoneValue, Validators.required],
          website2:[this.websiteValue, Validators.required],
          products2:[this.productsValue, Validators.required]

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
      const edata = {
        name: this.editForm.get('name2').value,
        description: this.editForm.get('description2').value,
        address: this.editForm.get('address2').value,
        email: this.editForm.get('email2').value,
        phone: this.editForm.get('phone2').value,
        website: this.editForm.get('website2').value,
        products: this.editForm.get('products2').value,
        profile:this.url,
        Event:""+this.id,
        sponsorbanner:""+this.sponsorbanner,
        image1:""+this.image1,
        image2:""+this.image2,
        image3:""+this.image3,
        image4:""+this.image4,
        image5:""+this.image5
    }
  this.request.updatesponsor(this.IdValue,edata).subscribe((res : any) => {
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

// convenience getter for easy access to form fields
get f() { return this.registerForm.controls; }
get f2() { return this.editForm.controls; }


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

  loadModal(){
    $('#addModal').modal('hide'); //or  $('#IDModal').modal('hide');
    $('#addModal').on('hidden.bs.modal', function () {
    $(this).find('form').trigger('reset');
   });

   $('#editModal').modal('hide'); //or  $('#IDModal').modal('hide');
   $('#editModal').on('hidden.bs.modal', function () {
   $(this).find('form').trigger('reset');
  });
  }

  ngOnInit() {
   // //this.auth.isValidUser();
  this.startScript();
  M.updateTextFields();
 this.viewData();
 this.loadModal();
  }



  //addsponsor image
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



 //addsponsor banner
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
        
       this.sponsorbanner=downloadURL
       console.log('url' , this.sponsorbanner);
      });
    })
  ).subscribe();

  return uploadTask.percentageChanges();
}

private saveFileData1(fileUpload: FileUpload) {
  this.db.list(this.basePath).push(fileUpload);
}



//addsponsor image1
selectFile2(event) {
  this.selectedFiles = event.target.files;
}

upload2() {
  const file = this.selectedFiles.item(0);
  this.selectedFiles = undefined;

  this.currentFileUpload = new FileUpload(file);
 this.pushFileToStorage2(this.currentFileUpload).subscribe(
    percentage => {
      this.percentage = Math.round(percentage);
    },
    error => {
      console.log(error);
    }
  );

}


pushFileToStorage2(fileUpload: FileUpload): Observable<number> {
  const filePath = `${this.basePath}/${fileUpload.file.name}`;
  const storageRef = this.storage.ref(filePath);
  const uploadTask = this.storage.upload(filePath, fileUpload.file);

  uploadTask.snapshotChanges().pipe(
    finalize(() => {
      storageRef.getDownloadURL().subscribe(downloadURL => {
        console.log('File available at', downloadURL);
        fileUpload.url = downloadURL;
        fileUpload.name = fileUpload.file.name;
        this.saveFileData2(fileUpload);
        
       this.image1=downloadURL
       console.log('url' , this.image1);
      });
    })
  ).subscribe();

  return uploadTask.percentageChanges();
}

private saveFileData2(fileUpload: FileUpload) {
  this.db.list(this.basePath).push(fileUpload);
}


//addsponsor image2
selectFile3(event) {
  this.selectedFiles = event.target.files;
}

upload3() {
  const file = this.selectedFiles.item(0);
  this.selectedFiles = undefined;

  this.currentFileUpload = new FileUpload(file);
 this.pushFileToStorage3(this.currentFileUpload).subscribe(
    percentage => {
      this.percentage = Math.round(percentage);
    },
    error => {
      console.log(error);
    }
  );

}


pushFileToStorage3(fileUpload: FileUpload): Observable<number> {
  const filePath = `${this.basePath}/${fileUpload.file.name}`;
  const storageRef = this.storage.ref(filePath);
  const uploadTask = this.storage.upload(filePath, fileUpload.file);

  uploadTask.snapshotChanges().pipe(
    finalize(() => {
      storageRef.getDownloadURL().subscribe(downloadURL => {
        console.log('File available at', downloadURL);
        fileUpload.url = downloadURL;
        fileUpload.name = fileUpload.file.name;
        this.saveFileData3(fileUpload);
        
       this.image2=downloadURL
       console.log('url' , this.image2);
      });
    })
  ).subscribe();

  return uploadTask.percentageChanges();
}

private saveFileData3(fileUpload: FileUpload) {
  this.db.list(this.basePath).push(fileUpload);
}

//addsponsor image3
selectFile4(event) {
  this.selectedFiles = event.target.files;
}

upload4() {
  const file = this.selectedFiles.item(0);
  this.selectedFiles = undefined;

  this.currentFileUpload = new FileUpload(file);
 this.pushFileToStorage4(this.currentFileUpload).subscribe(
    percentage => {
      this.percentage = Math.round(percentage);
    },
    error => {
      console.log(error);
    }
  );

}


pushFileToStorage4(fileUpload: FileUpload): Observable<number> {
  const filePath = `${this.basePath}/${fileUpload.file.name}`;
  const storageRef = this.storage.ref(filePath);
  const uploadTask = this.storage.upload(filePath, fileUpload.file);

  uploadTask.snapshotChanges().pipe(
    finalize(() => {
      storageRef.getDownloadURL().subscribe(downloadURL => {
        console.log('File available at', downloadURL);
        fileUpload.url = downloadURL;
        fileUpload.name = fileUpload.file.name;
        this.saveFileData4(fileUpload);
        
       this.image3=downloadURL
       console.log('url' , this.image2);
      });
    })
  ).subscribe();

  return uploadTask.percentageChanges();
}

private saveFileData4(fileUpload: FileUpload) {
  this.db.list(this.basePath).push(fileUpload);
}



//addsponsor image4
selectFile5(event) {
  this.selectedFiles = event.target.files;
}

upload5() {
  const file = this.selectedFiles.item(0);
  this.selectedFiles = undefined;

  this.currentFileUpload = new FileUpload(file);
 this.pushFileToStorage5(this.currentFileUpload).subscribe(
    percentage => {
      this.percentage = Math.round(percentage);
    },
    error => {
      console.log(error);
    }
  );

}


pushFileToStorage5(fileUpload: FileUpload): Observable<number> {
  const filePath = `${this.basePath}/${fileUpload.file.name}`;
  const storageRef = this.storage.ref(filePath);
  const uploadTask = this.storage.upload(filePath, fileUpload.file);

  uploadTask.snapshotChanges().pipe(
    finalize(() => {
      storageRef.getDownloadURL().subscribe(downloadURL => {
        console.log('File available at', downloadURL);
        fileUpload.url = downloadURL;
        fileUpload.name = fileUpload.file.name;
        this.saveFileData5(fileUpload);
        
       this.image4=downloadURL
       console.log('url' , this.image2);
      });
    })
  ).subscribe();

  return uploadTask.percentageChanges();
}

private saveFileData5(fileUpload: FileUpload) {
  this.db.list(this.basePath).push(fileUpload);
}



//addsponsor image5
selectFile6(event) {
  this.selectedFiles = event.target.files;
}

upload6() {
  const file = this.selectedFiles.item(0);
  this.selectedFiles = undefined;

  this.currentFileUpload = new FileUpload(file);
 this.pushFileToStorage6(this.currentFileUpload).subscribe(
    percentage => {
      this.percentage = Math.round(percentage);
    },
    error => {
      console.log(error);
    }
  );

}


pushFileToStorage6(fileUpload: FileUpload): Observable<number> {
  const filePath = `${this.basePath}/${fileUpload.file.name}`;
  const storageRef = this.storage.ref(filePath);
  const uploadTask = this.storage.upload(filePath, fileUpload.file);

  uploadTask.snapshotChanges().pipe(
    finalize(() => {
      storageRef.getDownloadURL().subscribe(downloadURL => {
        console.log('File available at', downloadURL);
        fileUpload.url = downloadURL;
        fileUpload.name = fileUpload.file.name;
        this.saveFileData6(fileUpload);
        
       this.image5=downloadURL
       console.log('url' , this.image2);
      });
    })
  ).subscribe();

  return uploadTask.percentageChanges();
}

private saveFileData6(fileUpload: FileUpload) {
  this.db.list(this.basePath).push(fileUpload);
}
}
