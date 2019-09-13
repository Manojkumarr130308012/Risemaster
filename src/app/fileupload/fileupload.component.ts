import { Component, OnInit } from '@angular/core';
import { FileSelectDirective, FileUploader} from 'ng2-file-upload';
import { Router } from '@angular/router';
import { RequestService } from './../services/request.service';

const URL = 'http://localhost:3000/file/upload';

@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.scss']
})
export class FileuploadComponent implements OnInit {
  attachmentList:any = [];
  constructor(
    private request: RequestService,
    private router: Router) { }

    public uploader: FileUploader = new FileUploader({url: URL});

  ngOnInit() {     

    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      this.attachmentList.push(JSON.parse(response));  
      console.log('ImageUpload:uploaded:', item, status, response);
         alert('File uploaded successfully');
     };
  }

}
