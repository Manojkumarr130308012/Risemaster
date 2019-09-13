import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestService } from '../../services/request.service';
import { DynamicScriptLoaderService } from '../../services/dynamic-script-loader.service';
import { FormControl, Validators, FormGroup, FormBuilder} from '@angular/forms';

declare const $: any;
declare const swal: any;

@Component({
  selector: 'app-board-of-education',
  templateUrl: './board-of-education.component.html',
  styleUrls: ['./board-of-education.component.scss']
})
export class BoardOfEducationComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
   public Id: any;
   public board: any;
   editBoarddata;
   public boardValue: any;
   public IdValue: any;
  boards;
  editForm: FormGroup;
  message: any;

  constructor(private formBuilder: FormBuilder,
    private dynamicScriptLoader: DynamicScriptLoaderService,
    private request: RequestService,
    private router: Router) {
      //Add Form Group
      this.registerForm = this.formBuilder.group({
        board:['', Validators.required],
    });
    //Edit Form Group
    this.editForm = this.formBuilder.group({
      board:['', Validators.required],
  });
}
// To display  Board
    viewData() {
      this.request.getBoard().subscribe((response) => {
        this.boards = response;
        console.log(this.boards);
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
     this.request.addBoard(this.registerForm.value).subscribe((res: any) => {
      if (res.status == 'error') {
        this.setMessage(res.err);
      }
      else if (res.status == 'Success') {
        
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
  deleteBoard(id: any) {
    this.request.deleteBoard(id).subscribe(res => {
      swal(" Deleted Successfully "); 
      this.viewData();
    });
  }
  
//Edit Function
  onEdit(board) {
    this.Id = board._id;
    this.request.fetchBoardById(this.Id).subscribe((response) => {
      this.editBoarddata = response[0];
      // console.log(response);
      this.boardValue = this.editBoarddata.board;
      this.IdValue = this.editBoarddata._id;

      this.editForm = this.formBuilder.group({
        board:[this.boardValue, Validators.required],
    });
    // console.log(this.editForm.value);
    });
  }
  onEditSubmit() {
    this.submitted = true;
    // console.log(this.editForm.value);
    if (this.editForm.invalid) {
        return;
    }
  
  this.request.updateBoard(this.IdValue, this.editForm.value).subscribe((response: any) => {
    if (response.status == 'Success') {
      swal("Updated Sucessfully");       
      
      this.viewData();
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
      $('#addModal').modal('hide'); //or  $('#IDModal').modal('hide');
      $('#addModal').on('hidden.bs.modal', function () {
        $(this).find('form').trigger('reset');
     })
     $('#editModal').modal('hide'); //or  $('#IDModal').modal('hide');
      $('#editModal ').on('hidden.bs.modal', function () {
        $(this).find('form').trigger('reset');
     })
    }
  
  ngOnInit() {
    this.viewData();
    this.startScript();
  }
}

