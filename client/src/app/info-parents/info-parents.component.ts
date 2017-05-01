import { Component, OnInit } from '@angular/core';
import {ApiServiceService} from "../services/api-service.service";

@Component({
  selector: 'app-info-parents',
  templateUrl: './info-parents.component.html',
  styleUrls: ['./info-parents.component.scss']
})
export class InfoParentsComponent implements OnInit {
  public parents: any[];
  public errorMessage: any;

  constructor(private apiServiceService: ApiServiceService) {
    this.getParents();
  }

  ngOnInit() {
  }

  getParents() {
    this.apiServiceService.getParents()
      .subscribe(
        data => {
          this.parents = data;
          this.parents.map((parent) => {
            parent.fullName = parent.lastName + ' ' + parent.firstName + ' ' + parent.secondName;
            parent.student.fullName = parent.student.lastName + ' ' + parent.student.firstName + ' ' + parent.student.secondName;
          })
        },
        error => this.errorMessage = <any>error);
  }

}
