//import Route class: It is used to implement routing in Single Page Application
// import RouterModule: It is used to load the Routes in SPA
import {Routes, RouterModule} from "@angular/router";

//import pageoneComponent
import {PageoneComponent} from "./pageone.component";

//import countriesModule
import {countriesModule} from "./countries.module";

//import ModuleWithProviders: it is used to implement lazy loading
import {ModuleWithProviders} from "@angular/core";
import { authGuard } from './auth.guard';

//implement the routing
export const appRoutes:Routes=[
    {path: "page_one", component: PageoneComponent},
    {path: "lazy", loadChildren:()=>import("./countries.module").then(obj=>obj.countriesModule),
    canLoad:[authGuard]}
]

//convert normal route to lazy route
export const lazyRoutes: ModuleWithProviders = RouterModule.forRoot(appRoutes)