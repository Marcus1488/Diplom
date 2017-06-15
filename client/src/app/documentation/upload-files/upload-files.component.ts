import { Component, OnInit } from '@angular/core';
import {ApiServiceService} from "../../services/api-service.service";
import {MdDialogRef} from "@angular/material";
import {RequestOptions, Headers, Http} from "@angular/http";
import {Observable} from "rxjs";

@Component({
  selector: 'app-upload-files',
  templateUrl: './upload-files.component.html',
  styleUrls: ['./upload-files.component.scss']
})
export class UploadFilesComponent implements OnInit {
  fileList: FileList;

  constructor(private dialogRef: MdDialogRef<UploadFilesComponent>,
              private apiServiceService: ApiServiceService,
              private http: Http) {
  }

  ngOnInit() {
  }

  upload() {
    if(this.fileList.length > 0) {
      let file: File = this.fileList[0];
      let formData:FormData = new FormData();
      formData.append('uploadFile', file, file.name);

      let headers = new Headers();

      headers.append('Content-Type', 'multipart/form-data');

      this.http.post(`/api/file`, formData, headers)
        .map(res => res.json())
        .catch(error => Observable.throw(error))
        .subscribe(
          data => {
            console.log('success');
            this.dialogRef.close();
          },
          error => console.log(error)
        )
    }
  }

  fileChange(event) {
    this.fileList = event.target.files;
  }


}
