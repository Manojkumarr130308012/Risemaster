import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';

declare const $: any;
declare const swal: any;

@Component({
  selector: 'app-user-designation',
  templateUrl: './user-designation.component.html',
  styleUrls: ['./user-designation.component.scss']
})
export class UserDesignationComponent implements OnInit {
  constructor(private request: RequestService, private router: Router,private dynamicScriptLoader: DynamicScriptLoaderService) {
    this.addFormController();
   }
   
  private designations: any;
  public Id: any;
  //public designationId: any;
  public designationName: any;

 // public designationId2: any;
  public designationName2: any;
  public message: string;
  //public response: any;
  editDesignationdata;
 

  //public designationIdValue: any;
  public designationNameValue: any;
  public IdValue: any;

 
  addFormController() {
    
   // this.designationId = new FormControl('', Validators.required);
   this.designationName = new FormControl('', [Validators.required, Validators.minLength(4)]);
   this.designationName2 = new FormControl('', [Validators.required, Validators.minLength(4)]);
  }

  public setMessage(message) {
    return this.message = message;
  }

 

  onEdit(Id){
   
   this.request.fetchDesignation(Id).subscribe((response) => {          
    this.editDesignationdata=response[0];     
   console.log(response[0]);       
    this.designationNameValue=this.editDesignationdata.designationName;
    this.IdValue=this.editDesignationdata._id;   
  this.designationName2 = new FormControl(this.designationNameValue, [Validators.required]);
  
    
  });
  } 

  async startScript() {
    await this.dynamicScriptLoader.load('dataTables.buttons', 'buttons.flash', 'jszip', 'pdfmake', 'vfs_fonts', 'pdfmake', 'buttons.html5', 'buttons.print').then(data => {
      this.loadData();
    }).catch(error => console.log(error));
  }

  
  addDesignation() {
    
    const newDesignation = {
     // designationId: this.designationId.value,
      designationName: this.designationName.value,

    };
    //console.log(newDesignation);
    this.request.addNewDesignation(newDesignation).subscribe((response: any) => {
      if (response.status == 'error') {
        this.setMessage(response.err);
      }
      else if (response.status == 'success') {
        
        swal("Added Sucessfully");
        this.viewDesignation();
        
      //  this.router.navigate(['user-designation/view']);
             }
    }, (error) => {      
      this.setMessage(error);
    });

  }
  

  updateDesignationData(){    

     this.UpdateForm(this.IdValue);
  
  
    }
    UpdateForm(id){
    const editedDesignation = {
     // designationId: this.designationId2.value,
      designationName: this.designationName2.value  
    };

    this.request.updateDesignation(id, editedDesignation).subscribe((response : any) => {

      if (response.status == 'success') {
        swal("Updated Sucessfully");     
        
        this.viewDesignation();
      }
      else if (response.status == 'error') {       
        this.setMessage(response.err);
      }      
     
    }, (err) => {
      console.log(err);
      this.setMessage(err);
    });
  }

  
  
    
  viewDesignation() {
    this.request.getDesignation().subscribe((response : any) => {     
     // console.log('response',response);     
     
      localStorage.setItem('storeDesignation', JSON.stringify(response));
      this.designations = response; 
      //this.users =response;
    }, (error) => {
      console.log(error);
    });
  }

  Ondelete(Id) {
   // console.log(Id);
    this.request.deleteDesignation(Id).subscribe((response) => {
      console.log('success');// set alert
      this.viewDesignation();
    });
  }


    

}
