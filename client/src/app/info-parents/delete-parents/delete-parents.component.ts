import {Component, Inject, OnInit} from '@angular/core';
import {ApiServiceService} from "../../services/api-service.service";
import {MD_DIALOG_DATA, MdDialogRef} from "@angular/material";

@Component({
  selector: 'app-delete-parents',
  templateUrl: './delete-parents.component.html',
  styleUrls: ['./delete-parents.component.scss']
})
export class DeleteParentsComponent implements OnInit {
  errorMessage: any;
  parent: any;

  constructor(public dialogRef: MdDialogRef<DeleteParentsComponent>,
              private apiServiceService: ApiServiceService,
              @Inject(MD_DIALOG_DATA) private data: any,) {
    this.parent = JSON.parse(JSON.stringify(this.data.parent));
  }

  ngOnInit() {
  }

  deleteParent() {
    this.apiServiceService.deleteParent(this.parent.id)
      .subscribe(
        data => {
          console.log('Parent deleted');
          this.dialogRef.close();
        },
        error => this.errorMessage = <any>error);
  }

}
