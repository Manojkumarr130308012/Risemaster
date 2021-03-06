import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router,  ActivatedRoute  } from '@angular/router';
import { RequestService } from '../../services/request.service';
import { DynamicScriptLoaderService } from '../../services/dynamic-script-loader.service';
import { AuthService } from "../../services/auth.service";
declare const $: any;
declare const M: any;
declare const swal: any;
import Swal from 'sweetalert2/dist/sweetalert2.js';
@Component({
  selector: 'app-eventlink',
  templateUrl: './eventlink.component.html',
  styleUrls: ['./eventlink.component.scss']
})
export class EventlinkComponent implements OnInit {
  registerForm: FormGroup;
  editForm: FormGroup;
  submitted = false;
  public Eventlink: any; public Eventlink2: any;
  public Eventlinks: any;
  Id: any;
  IdValue: any;
  editTrackNamegroup: any;
  EventlinkValue: any;
  public message: string;
  id:any;
  trackinId:any;
  constructor(
    private formBuilder: FormBuilder,
    private dynamicScriptLoader: DynamicScriptLoaderService,
    private request: RequestService,
    private router: Router,
    private route: ActivatedRoute,
    private activeRoute:  ActivatedRoute,
    private auth: AuthService)
    {
      this.route.queryParams.subscribe((params: any) => {
        this.id = params.id;
      })
      // Add Form
      this.registerForm = this.formBuilder.group({
        Eventlink:['', Validators.required]
    });
    // Edit Form
      this.editForm = this.formBuilder.group({
        Eventlink2:['', Validators.required]
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
        Event: ""+this.id,
        Eventlink:  this.registerForm.get("Eventlink").value
        };
    this.request.addeventlink(edata).subscribe((res: any) => {
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

    // To display bloodgroup
  viewData() {
    console.log("sssss",this.id);
  this.request.getaggeventlink(this.id).subscribe((response) => {
    this.Eventlinks = response;
    console.log("sssss",this.Eventlinks);
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
        this.request.deleteeventlink(id).subscribe(res => {
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
  open(track) {
    this.trackinId = track._id;
    console.log('eventid', this.trackinId);
    this.router.navigate(['agenda'], {
      queryParams: {
        eventid:this.id,
        trackid: track._id,
      }
    });
  }
  // To edit bloodgroup
  onEdit(bloodgroup){
    this.Id=bloodgroup._id;
    this.request.fetcheventlinkById(this.Id).subscribe((response) => {
      this.editTrackNamegroup=response[0];
      console.log(response);
        this.EventlinkValue=this.editTrackNamegroup.Eventlink;
        this.IdValue=this.editTrackNamegroup._id;

        this.editForm = this.formBuilder.group({
          Eventlink2:[this.EventlinkValue, Validators.required]
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
        Event: ""+this.id,
        Eventlink: this.editForm.get('Eventlink2').value

    }
  this.request.updateeventlink(this.IdValue,edata).subscribe((res : any) => {
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
