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
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  registerForm: FormGroup;
  editForm: FormGroup;
  submitted = false;
  public bannername: any; public bannername2: any;
  public bannernames: any;
  Id: any;
  IdValue: any;
  editbannernamegroup: any;
  bannernameValue: any;
  public message: string;
  id:any;
  bannernameId:any;
  selectedFiles: FileList;
  currentFileUpload: FileUpload;
  percentage: number;
  url:any;
  private basePath = '/uploads';
  bannernameurl: any;
  bannernameNamesgroup:any;
  bannernameNames: any;
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
        bannername:['', Validators.required]
    });
    // Edit Form
      this.editForm = this.formBuilder.group({
        bannername2:['', Validators.required]
    });
     }

     public setMessage(message) {
      return this.message = message;
    }

      //Add form validation and function
      onAddSubmit() {
        this.submitted = true;
        // if (this.registerForm.invalid) {
        //     return;
        // }
      // this.registerForm.value;
      const edata = {
        banner: this.url
        };
    this.request.addbannerimage(edata).subscribe((res: any) => {
      if (res.status == 'success') {
        Swal.fire("Added Sucessfully");
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

    // To display bloodgroup
  viewData() {
    console.log("sssss",this.id);
  this.request.getbannerimage().subscribe((response) => {
    this.bannernameNames = response;
    console.log("sssss",this.bannernameNames);
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
        this.request.deletebannerimage(id).subscribe(res => {
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
    this.request.fetchbannerimageById(this.Id).subscribe((response) => {
      this.bannernameNamesgroup=response[0];
      console.log(response);
        this.url=this.bannernameNamesgroup.banner;

        this.IdValue=this.bannernameNamesgroup._id;

        this.editForm = this.formBuilder.group({
          bannername2:[this.url, Validators.required]
      });
      console.log(this.editForm.value);
    });
  }
  onEditSubmit() {
    this.submitted = true;
    // console.log(this.editForm.value);
    // if (this.editForm.invalid) {
    //     return;
    //   }
      const edata1 = {
        banner: this.url
    }
  this.request.updatebannerimage(this.IdValue,edata1).subscribe((res : any) => {
    if (res.status == 'success') {
      Swal.fire("Updated Sucessfully");
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
}
