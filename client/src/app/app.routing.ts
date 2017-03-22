import {ModuleWithProviders} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {InfoStudentsComponent} from "./info-students/info-students.component";


const appRoutes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "students",
    component: InfoStudentsComponent,
  }
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);


