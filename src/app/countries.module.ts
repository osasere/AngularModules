//import NgModule: It is used to create a separate registration file
import {NgModule} from "@angular/core";

//import CountriesService
import {countriesService} from "./countries.service";

//import countriesComponent
import {countriesComponent} from "./countries.component";

//import httpClientModule: it help the countriesServices to connect to server
import {HttpClientModule} from "@angular/common/http";

//import commonModule: helps to recognize child module
import {CommonModule} from "@angular/common"; 

//import RouterModule
//RouterModule is used to create the default Components
//In this Module, we must make CountriesComponent as a default component
import {RouterModule} from "@angular/router";

@NgModule({
    declarations: [countriesComponent],
    imports: [HttpClientModule, CommonModule, 
    RouterModule.forChild([{path: "", component: countriesComponent}])],
    providers: [countriesService],
    exports: [countriesComponent]
    
})

export class countriesModule{}



