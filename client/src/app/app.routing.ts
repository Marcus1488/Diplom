import {ModuleWithProviders} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {InfoStudentsComponent} from "./info-students/info-students.component";
import {PerformanceQualityControlComponent} from "./performance-quality-control/performance-quality-control.component";
import {InfoParentsComponent} from "./info-parents/info-parents.component";


const appRoutes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "students",
    component: InfoStudentsComponent,
  },
  {
    path: "studies",
    component: PerformanceQualityControlComponent,
  },
  {
    path: "parents",
    component: InfoParentsComponent,
  }
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);


