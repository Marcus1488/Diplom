import { Component, OnInit } from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";
import {GlobalService} from "../services/global.service";
import {MdDialog} from "@angular/material";
import {UploadFilesComponent} from "./upload-files/upload-files.component";
import {ApiServiceService} from "../services/api-service.service";

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.scss']
})
export class DocumentationComponent implements OnInit {
  token = JSON.parse(localStorage.getItem('token'));

  errorMessage: string;
  files: any;

  pdfSrc: any;
  pageurl: SafeResourceUrl;


  constructor(private domSanitizer:DomSanitizer,
              private globalSrv: GlobalService,
              public dialog: MdDialog,
              public apiServiceService: ApiServiceService) {
    globalSrv.itemValue.subscribe((token) => {
      this.token = token;
    })
  }

  getFiles() {
    this.apiServiceService.getFiles()
      .subscribe(
        data => {
          this.files = data;
        },
        error => this.errorMessage = <any>error);
  }

  viewPdf(file) {
    this.pdfSrc = `http://localhost:3000/api/file/${file.name}`;
    this.pageurl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.pdfSrc);
  }

  removeFiles(id) {
    this.apiServiceService.removeFiles(id)
      .subscribe(
        data => {
          this.getFiles();
        },
        error => this.errorMessage = <any>error);
  }

  ngOnInit() {
    this.getFiles();
  }

  openUploadDialog() {
    let dialogRef = this.dialog.open(UploadFilesComponent);
    dialogRef.afterClosed().subscribe(result => {
      this.getFiles()
    });
  }

}
