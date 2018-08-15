import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginModule} from './login/login.module';
import { AppheaderComponent } from './layouts/appheader/appheader.component';
import { AppfooterComponent } from './layouts/appfooter/appfooter.component';
import { AppmenuComponent } from './layouts/appmenu/appmenu.component';
import { AppsettingsComponent } from './layouts/appsettings/appsettings.component';
import { HomeComponent } from './home/home.component';
import { PruebaComponent } from './prueba/prueba.component';
import { Prueba2Component } from './prueba2/prueba2.component';


@NgModule({
  declarations: [
    AppComponent,
    AppheaderComponent,
    AppfooterComponent,
    AppmenuComponent,
    AppsettingsComponent,
    HomeComponent,
    PruebaComponent,
    Prueba2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
