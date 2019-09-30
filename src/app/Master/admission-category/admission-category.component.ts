import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestService } from '../../services/request.service';
import { DynamicScriptLoaderService } from '../../services/dynamic-script-loader.service';
import { Validators, FormBuilder, FormGroup} from '@angular/forms';
declare const M: any;
declare const $: any;
declare const swal: any;

@Component({
selector: 'app-admission-category',
templateUrl: './admission-category.component.html',
styleUrls: ['./admission-category.component.scss']
})
export class AdmissionCategoryComponent implements OnInit {
submitted = false;
institution: any;
admissionCategory: any;
admissionCategories: any;
Id: any;
editAdmissionCategorydata;
admissionCategoryValue: any;
InstitutionValue: any;
IdValue: any;
institutions ;
registerForm: FormGroup;
editForm: FormGroup;
getData: any;
message: any;
institution2: any;
admissionCategory2: any;
constructor(private formBuilder: FormBuilder,
private dynamicScriptLoader: DynamicScriptLoaderService,
private request: RequestService,
private router: Router) {
//Add Form Group
this.registerForm = this.formBuilder.group({
institution:['', Validators.required],
admissionCategory: ['', Validators.required]
});
//Edit Form Group
this.editForm = this.formBuilder.group({
institution2:['', Validators.required],
admissionCategory2: ['', Validators.required]
});
}
// To display the data
viewData() {
this.request.getAdmissionCategory().subscribe((response: any) => {
this.admissionCategories = response;
console.log(this.admissionCategories);
}, (error) => {
console.log(error);
});
}

public setMessage(message) {
return this.message = message;
}
// convenience getter for easy access to form fields
get f() { return this.registerForm.controls; }
//Add form validation and function
onAddSubmit() {
this.submitted = true;
if (this.registerForm.invalid) {
return;
}
this.request.addAdmissionCategory(this.registerForm.value).subscribe((res: any) => {
if (res.status == 'error') {
this.setMessage(res.err);
}
else if (res.status == 'success') {

swal("Added Sucessfully");
this.viewData();
this.loadModal();
}
}, (error) => {
this.setMessage(error);
});
console.log(this.registerForm.value);
}

//To delete the data
deleteAdmissionCategory(id: any) {
this.request.deleteAdmissionCategory(id).subscribe(res => {
swal(" Deleted Successfully "); 
this.viewData();
});
}

//Edit Function
onEdit(admissionCategory) {
this.Id = admissionCategory._id;
this.request.fetchAdmissionCategoryById(this.Id).subscribe((response) => {
this.editAdmissionCategorydata = response[0];
console.log(response);
this.admissionCategoryValue = this.editAdmissionCategorydata.admissionCategory;
this.InstitutionValue = this.editAdmissionCategorydata.institution;
this.IdValue = this.editAdmissionCategorydata._id;

this.editForm = this.formBuilder.group({
admissionCategory:[this.admissionCategoryValue, Validators.required],
institution: [this.InstitutionValue, Validators.required]
});
console.log(this.editForm.value);
});
}

loadInstitution() {
this.request.getInstitution().subscribe((response : any) => {
this.institutions = response;
console.log(response);
}, (error) => {
console.log(error);
});
}
onEditSubmit() {
this.submitted = true;
// console.log(this.editForm.value);
if (this.editForm.invalid) {
return;
}

this.request.updateAdmissionCategory(this.IdValue, this.editForm.value).subscribe((response: any) => {
if (response.status == 'success') {
swal("Updated Sucessfully"); 
this.viewData();
this.loadModal();
}
else if (response.status == 'error') { 
this.setMessage(response.err);
} 

}, (err) => {
console.log(err);
this.setMessage(err);
});

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
this.viewData();
this.startScript();
M.updateTextFields();
this.loadInstitution();
}
}