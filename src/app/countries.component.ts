//import Component
//Component class is used to create the Component
import {Component} from "@angular/core";

//import CountriesService
//CountriesService contains getCountries() function.
import {countriesService} from "./countries.service";

//import HttpErrorResponse
//HttpErrorResponse will be used to catch the errors
import {HttpErrorResponse} from "@angular/common/http";

@Component({
    selector: "countries",
    templateUrl: "./countries.component.html"
})

export class countriesComponent{
    public result: any; // The result of the Json is stored in result variable
    constructor(public service: countriesService){}
    ngOnIt(){
        this.service.getCountries().subscribe((posRes)=>{
            this.result = posRes;
        }, (errRes:HttpErrorResponse)=>{
            console.log(errRes);
            
        })
    }
}
