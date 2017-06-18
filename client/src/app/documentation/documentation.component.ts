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

  /*Завантащення списку файлів*/
  getFiles() {
    this.apiServiceService.getFiles()
      .subscribe(
        data => {
          this.files = data;
        },
        error => this.errorMessage = <any>error);
  }

  /*функція для перегляду файлу*/
  viewPdf(file) {
    this.pdfSrc = `http://diplom-bezrukaviy.herokuapp.com/api/file/${file.name}`;
    this.pageurl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.pdfSrc);
  }

  /*функція для виделання файла по його id*/
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

  /*Функція для відкриття модального вікна з завантаженням файлів*/
  openUploadDialog() {
    let dialogRef = this.dialog.open(UploadFilesComponent);
    dialogRef.afterClosed().subscribe(result => {
      this.getFiles()
    });
  }

}
