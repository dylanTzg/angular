import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoeurComponent } from './coeur/coeur.component';
import { TelechargementComponent } from './telechargement/telechargement.component';
import { CadreComponent } from './cadre/cadre.component';
import { PhotoComponent } from './photo/photo.component';
import { HomeComponent } from './home/home.component';
import {NgOptimizedImage} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    CoeurComponent,
    TelechargementComponent,
    CadreComponent,
    PhotoComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
