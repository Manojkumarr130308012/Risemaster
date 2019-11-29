import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RequestService } from '../../services/request.service';
import { DynamicScriptLoaderService } from '../../services/dynamic-script-loader.service';
import { Validators, FormGroup, FormBuilder} from '@angular/forms';

declare const $: any;
declare const swal: any;
import * as moment from 'moment';
import { Angular5Csv } from 'angular5-csv/dist/Angular5-csv';
import { AuthService } from "../../services/auth.service";
// import * as jsPDF from 'jspdf';
declare let jsPDF: any ;

interface Board {
  _id: string;
  board: string;
}

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
   public board2: any;
   editBoarddata;
   public boardValue: any;
   public IdValue: any;
   private boards: any;
  editForm: FormGroup;
  message: any;
  boards1: Board[] = [];

  constructor(private formBuilder: FormBuilder,
    private dynamicScriptLoader: DynamicScriptLoaderService,
    private request: RequestService,
    private router: Router,
    private activeRoute:  ActivatedRoute,
    private auth: AuthService) {
      //Add Form Group
      this.registerForm = this.formBuilder.group({
        board:['', Validators.required],
    });

    //Edit Form Group
    this.editForm = this.formBuilder.group({
      board2:['', Validators.required],
  });
  this.fetchBoards();
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
  get f2() { return this.editForm.controls; }

  //Add form validation and function
  onAddSubmit() {
      this.submitted = true;
      if (this.registerForm.invalid) {
          return;
      }
      this.request.addBoard(this.registerForm.value).subscribe((res: any) => {
      if (res.status == 'error') {
        swal(res.error);
      }
      else if (res.status == 'success') {

        swal("Added Sucessfully");
        this.viewData();
        this.loadModal();
      }
      }, (error) => {
        swal(error);
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
        board2:[this.boardValue, Validators.required],
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

    const edata = {
      board: this.editForm.get('board2').value,

  }

    this.request.updateBoard(this.IdValue, edata).subscribe((response: any) => {
    if (response.status == 'success') {
      swal("Updated Sucessfully");

      this.viewData();
      this.loadModal();
    }
    else if (response.status == 'error') {
      swal(response.error);
    }

  }, (error) => {
    console.log(error);
    swal(error);
  });

      }


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

    //Print Table
    printTable() {
      window.print();
    }
    private fetchBoards() {
      this.request.fetchBoards().subscribe((result: any) => {
        this.boards1 = result.response;
      });
    }
    exportExcel() {
      const  options = {
          fieldSeparator: ',',
          quoteStrings: '"',
          decimalseparator: '.',
          showLabels: true,
          showTitle: true,
          title: 'Board of Education',
          useBom: true,
          noDownload: false,
          headers: [
            'Board'

          ],
      };

      const exportData: any = this.boards1.map(a => ({...a}));

      exportData.map((value: any, key) => {
        delete exportData[key]._id;
        delete exportData[key].userId;
        delete exportData[key].__v;
      });
      console.log(this.boards1);
      const exportResult = new Angular5Csv(exportData, 'Boards' + moment().unix() + '.xls' , options);
    }
    //Export PDF
    exportPDF() {
      const columns = [
        {title: 'Board of Education', dataKey: 'board'},
      ];
      const exportData: any = this.boards1.map(a => ({...a}));

      exportData.map((value: any, key) => {
        delete exportData[key]._id;
        delete exportData[key].userId;
        delete exportData[key].__v;
      });

      const doc = new jsPDF('p', 'pt');
      doc.autoTable(columns, exportData, {
        cellPadding: 10, // a number, array or object (see margin below)
          theme: 'grid',
          // fontSize: 9,
          font: 'helvetica', // helvetica, times, courier
          lineColor: 200,
          lineWidth: 0,
          fontStyle: 'normal', // normal, bold, italic, bolditalic
          // overflow: 'linebreak', // visible, hidden, ellipsize or linebreak
          fillColor: false, // false for transparent or a color as described below
          textColor: 20,
          halign: 'left', // left, center, right
          valign: 'middle', // top, middle, bottom
          columnWidth: 0 // 'auto', 'wrap' or a number
      });

      doc.save('Boards' + moment().unix() + '.pdf');
      }
  ngOnInit() {
    this.auth.isValidUser();
    this.viewData();
  }
  key: string = 'name'; //set default
  reverse: boolean = false;
  sort(key){
    this.key = key;
    this.reverse = !this.reverse;
  }

  //initializing p to one
  p: number = 1;
}

