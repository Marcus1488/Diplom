import { Component, OnInit } from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.scss']
})
export class DocumentationComponent implements OnInit {
  public pdfSrc: any = 'https://vadimdez.github.io/ng2-pdf-viewer/pdf-test.pdf';
  pageurl: SafeResourceUrl;


  constructor(private domSanitizer:DomSanitizer) { }

  ngOnInit() {
    this.pageurl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.pdfSrc);
  }

}
