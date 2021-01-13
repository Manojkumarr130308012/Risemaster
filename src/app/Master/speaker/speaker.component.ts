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
import Swal from 'sweetalert2/dist/sweetalert2.js';
@Component({
  selector: 'app-speaker',
  templateUrl: './speaker.component.html',
  styleUrls: ['./speaker.component.scss']
})
export class SpeakerComponent implements OnInit {
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
  private basePath = '/uploads';
  public message: string;

  constructor(
    private formBuilder: FormBuilder,
    private dynamicScriptLoader: DynamicScriptLoaderService,
    private request: RequestService,
    private router: Router,
    private activeRoute:  ActivatedRoute,
    private auth: AuthService,
    private uploadService: UploadFileService,
    private db: AngularFireDatabase, private storage: AngularFireStorage)
    {
      // Add Form
      this.registerForm = this.formBuilder.group({
        name:['', Validators.required],
        designation:['', Validators.required],
        companyname:['', Validators.required],
        location:['', Validators.required],
        bio:['', Validators.required],
        email:['', Validators.required],
        mobile:['', Validators.required],
        address:['', Validators.required],
        website:['', Validators.required],
        linkedin:['', Validators.required]
    });
    // Edit Form
      this.editForm = this.formBuilder.group({
        name2:['', Validators.required],
        designation2:['', Validators.required],
        companyname2:['', Validators.required],
        location2:['', Validators.required],
        bio2:['', Validators.required],
        email2:['', Validators.required],
        mobile2:['', Validators.required],
        address2:['', Validators.required],
        website2:['', Validators.required],
        linkedin2:['', Validators.required]
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
        name:  this.registerForm.get("name").value,
        designation: this.registerForm.get("designation").value,
        companyname:  this.registerForm.get("companyname").value,
        location:  this.registerForm.get("location").value,
        bio:  this.registerForm.get("bio").value,
        email: this.registerForm.get("email").value,
        mobile: this.registerForm.get("mobile").value,
        address: this.registerForm.get("address").value,
        website: this.registerForm.get("website").value,
        linkedin:  this.registerForm.get("linkedin").value,
        profile:""+this.url,
        };


    this.request.addspeaker(edata).subscribe((res: any) => {
      if (res.status == 'success') {
        Swal.fire("Added Sucessfully");
      this.loadModal();
      this.viewData();
      this.url="";
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
  this.request.getspeaker().subscribe((response) => {
    this.Speakers = response;
    console.log(this.Speakers);
  }, (error) => {
    console.log(error);
  });
  }

  // To delete bloodgroup
  deleteBloodgroup(id: any) {

    Swal.fire({  
      title: 'Are you sure want to Delete?',  
      text: 'You will not be able to recover this Data',  
      icon: 'warning',  
      showCancelButton: true,  
      confirmButtonText: 'Delete',  
      cancelButtonText: 'Cancel'  
    }).then((result) => {  
      if (result.value) {   
        this.request.deletespeaker(id).subscribe(res => {
          console.log(id);
          this.viewData();
        console.log('Deleted');
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

  // To edit bloodgroup
  onEdit(bloodgroup){
    this.Id=bloodgroup._id;
    this.request.fetchspeakerById(this.Id).subscribe((response) => {
      this.editspeakergroup=response[0];
      console.log(response);
        this.nameValue=this.editspeakergroup.name;
        this.designationValue=this.editspeakergroup.designation;
        this.companynameValue=this.editspeakergroup.companyname;
        this.locationValue=this.editspeakergroup.location;
        this.bioValue=this.editspeakergroup.bio;
        this.emailValue=this.editspeakergroup.email;
        this.mobileValue=this.editspeakergroup.mobile;
        this.addressValue=this.editspeakergroup.address;
        this.websiteValue=this.editspeakergroup.website;
        this.linkedinValue=this.editspeakergroup.linkedin;
        this.url=this.editspeakergroup.profile;
        this.IdValue=this.editspeakergroup._id;

        this.editForm = this.formBuilder.group({
          name2:[this.nameValue, Validators.required],
          designation2:[this.designationValue, Validators.required],
          companyname2:[this.companynameValue, Validators.required],
          location2:[this.locationValue, Validators.required],
          bio2:[this.bioValue, Validators.required],
          email2:[this.emailValue, Validators.required],
          mobile2:[this.mobileValue, Validators.required],
          address2:[this.addressValue, Validators.required],
          website2:[this.websiteValue, Validators.required],
          linkedin2:[this.linkedinValue, Validators.required]

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
        designation: this.editForm.get('designation2').value,
        companyname: this.editForm.get('companyname2').value,
        location: this.editForm.get('location2').value,
        bio: this.editForm.get('bio2').value,
        email: this.editForm.get('email2').value,
        mobile: this.editForm.get('mobile2').value,
        address: this.editForm.get('address2').value,
        website: this.editForm.get('website2').value,
        linkedin: this.editForm.get('linkedin2').value,
        profile:this.url
    }
  this.request.updatespeaker(this.IdValue,edata).subscribe((res : any) => {
    if (res.status == 'success') {
      Swal.fire("Updated Sucessfully");
      this.loadModal();
      this.viewData();
      this.url="";
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
        'excel', 'pdf'
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

}
