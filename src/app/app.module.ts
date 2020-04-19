import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PageoneComponent } from './pageone.component';
import { indexComponent } from './index.component';
import { lazyRoutes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent, PageoneComponent, indexComponent
  ],
  imports: [
    BrowserModule, lazyRoutes
  ],
  providers: [],
  bootstrap: [indexComponent]
})
export class AppModule { }
