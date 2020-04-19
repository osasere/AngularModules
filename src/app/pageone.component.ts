import {Component} from "@angular/core";

@Component({
    selector: "page_one",
    templateUrl: "./pageone.component.html"
})

export class PageoneComponent{
    public var_one: string;
    constructor(){
        this.var_one = "Page One";
    }
}