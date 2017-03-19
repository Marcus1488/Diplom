import {ModuleWithProviders} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {HomeComponent} from "./home/home.component";


const appRoutes: Routes = [
  {
    path: "",
    component: HomeComponent,
  }
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);


