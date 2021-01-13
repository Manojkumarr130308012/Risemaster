import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestService } from '../../services/request.service';
import { DynamicScriptLoaderService } from '../../services/dynamic-script-loader.service';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from "../../services/auth.service";
declare const M: any;
declare const $: any;
import Swal from 'sweetalert2/dist/sweetalert2.js';
@Component({
  selector: 'app-membership-type',
  templateUrl: './membership-type.component.html',
  styleUrls: ['./membership-type.component.scss']
})
export class MembershipTypeComponent implements OnInit {
  submitted = false;
  MembershipType: FormControl;
  Desription:FormControl;
  MembershipType2: FormControl;
  Desription2:FormControl;
  memtypes: any;
  Id: any;
  editmemtypedata;
  MembershipTypeValue: any;
  DesriptionValue: any;
  IdValue: any;
  memtypetypes;
  registerForm: FormGroup;
  editForm: FormGroup;
  getData: any;
  message: any;
  constructor(private formBuilder: FormBuilder,
    private dynamicScriptLoader: DynamicScriptLoaderService,
    private request: RequestService,
    private router: Router,private auth: AuthService) {
    //Add Form Group
    this.registerForm = this.formBuilder.group({
      MembershipType: ['', Validators.required],
      Desription: ['', Validators.required]
    });
    //Edit Form Group
    this.editForm = this.formBuilder.group({
      MembershipType2: ['', Validators.required],
      Desription2: ['', Validators.required]
    });
}

// To display the data
viewData() {
this.request.getmembershiptype().subscribe((response: any) => {
    this.memtypes = response;
    console.log(this.memtypes);
}, (error) => {
    console.log(error);
});
}

public setMessage(message) {
return this.message = message;
}
// convenience getter for easy access to form fields
get f() { return this.registerForm.controls; }
get f2() { return this.editForm.controls; }
//Add form validation and function


onAddSubmit() {
this.submitted = true;
if (this.registerForm.invalid) {
    return;
}
this.request.addmembershiptype(this.registerForm.value).subscribe((res: any) => {
    if (res.status == 'error') {
        this.setMessage(res.error);
    }
    else if (res.status == 'success') {
        Swal.fire("Added Sucessfully");
       // this.onAddReset();
        this.viewData();
        this.loadModal();

    }
}, (error) => {
    this.setMessage(error);
});
console.log(this.registerForm.value);
}

//To delete the data
deleteparty(id: any) {



    Swal.fire({  
        title: 'Are you sure want to Delete?',  
        text: 'You will not be able to recover this Data',  
        icon: 'warning',  
        showCancelButton: true,  
        confirmButtonText: 'Delete',  
        cancelButtonText: 'Cancel'  
      }).then((result) => {  
        if (result.value) {   
            this.request.deletemembershiptype(id).subscribe(res => {
                Swal.fire(" Deleted Successfully ");
                this.viewData();
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

//Edit Function
onEdit(Id) {
this.request.fetchmembershiptypeById(Id).subscribe((response) => {
    this.editmemtypedata = response[0];
    console.log(response);
    this.MembershipTypeValue = this.editmemtypedata.MembershipType;
    this.DesriptionValue = this.editmemtypedata.Desription;
    this.IdValue = this.editmemtypedata._id;

    this.editForm = this.formBuilder.group({
         MembershipType2: [this.MembershipTypeValue, Validators.required],
         Desription2: [this.DesriptionValue, Validators.required]
    });
    // console.log('get edit data',this.editForm.value);
});
}



// Bind institution data




onEditSubmit() {
this.submitted = true;
// console.log('edited data',this.editForm.value);
if (this.editForm.invalid) {
    return;
}

const edata = {
  MembershipType: this.editForm.get('MembershipType2').value,
  Desription: this.editForm.get('Desription2').value,
}

// console.log('edata',edata);

this.request.updatemembershiptype(this.IdValue, edata).subscribe((response: any) => {
    if (response.status == 'success') {
        Swal.fire("Updated Sucessfully");
        //  console.log('cat res', response);
      //  this.onEditReset();
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
       'excel', 'pdf'
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
// M.updateTextFields();
this.viewData();
}
}
