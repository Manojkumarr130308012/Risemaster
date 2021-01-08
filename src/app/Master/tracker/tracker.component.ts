import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router,  ActivatedRoute  } from '@angular/router';
import { RequestService } from '../../services/request.service';
import { DynamicScriptLoaderService } from '../../services/dynamic-script-loader.service';
import { AuthService } from "../../services/auth.service";
declare const $: any;
declare const M: any;
declare const swal: any;
@Component({
  selector: 'app-tracker',
  templateUrl: './tracker.component.html',
  styleUrls: ['./tracker.component.scss']
})
export class TrackerComponent implements OnInit {
  registerForm: FormGroup;
  editForm: FormGroup;
  submitted = false;
  public TrackName: any; public TrackName2: any;
  public TrackNames: any;
  Id: any;
  IdValue: any;
  editTrackNamegroup: any;
  TrackNameValue: any;
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
        TrackName:['', Validators.required]
    });
    // Edit Form
      this.editForm = this.formBuilder.group({
        TrackName2:['', Validators.required]
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
        TrackName:  this.registerForm.get("TrackName").value
        };
    this.request.addtracker(edata).subscribe((res: any) => {
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
    console.log("sssss",this.id);
  this.request.getaggtracker(this.id).subscribe((response) => {
    this.TrackNames = response;
    console.log("sssss",this.TrackNames);
  }, (error) => {
    console.log(error);
  });
  }

  // To delete bloodgroup
  deleteBloodgroup(id: any) {
    this.request.deletetracker(id).subscribe(res => {
      console.log(id);
      this.viewData();
    console.log('Deleted');
    this.router.navigate(['tracker']);
    });
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
    this.request.fetchtrackerById(this.Id).subscribe((response) => {
      this.editTrackNamegroup=response[0];
      console.log(response);
        this.TrackNameValue=this.editTrackNamegroup.TrackName;
        this.IdValue=this.editTrackNamegroup._id;

        this.editForm = this.formBuilder.group({
          TrackName2:[this.TrackNameValue, Validators.required]
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
        TrackName: this.editForm.get('TrackName2').value

    }
  this.request.updatetracker(this.IdValue,edata).subscribe((res : any) => {
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
}
