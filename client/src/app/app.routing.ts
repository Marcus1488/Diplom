import {ModuleWithProviders} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {HeaderComponent} from "./header/header.component";


const appRoutes: Routes = [
  {
    path: "",
    component: HeaderComponent,
  }
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);


