import {Component,  OnInit, ViewChild} from '@angular/core';
import {BeneficiariesComponent} from "./beneficiaries/beneficiaries.component";
import {StudentsComponent} from "./students/students.component";
import {ParentComponent} from "./parent/parent.component";
import {ActiveGroupsComponent} from "./active-groups/active-groups.component";

@Component({
  selector: 'app-info-students',
  templateUrl: './info-students.component.html',
  styleUrls: ['./info-students.component.scss']
})
export class InfoStudentsComponent implements OnInit {
  @ViewChild(BeneficiariesComponent) beneficiariesComponent: BeneficiariesComponent;
  @ViewChild(StudentsComponent) studentsComponent: StudentsComponent;
  @ViewChild(ParentComponent) parentComponent: ParentComponent;
  @ViewChild(ActiveGroupsComponent) activeGroupsComponent: ActiveGroupsComponent;

  constructor() {
  }

  ngOnInit() {
  }

  changeSelectedTab(e) {
    switch (e.index) {
      case 0:
        this.studentsComponent.getStudents();
        break;
      case 1:
        this.beneficiariesComponent.getBeneficiariesStudents();
        break;
      case 2:
        this.parentComponent.getIncompleteFamilies();
        break;
      case 3:
        this.activeGroupsComponent.getGroupAssets();
        break;
      case 4:
        break;
    }
  }
}
