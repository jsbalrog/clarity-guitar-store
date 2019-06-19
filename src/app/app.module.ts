import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home.component';
import { FilesComponent } from './files/files.component';
import { DataService } from './core/data.service';
import { HttpClientModule } from '@angular/common/http';
import {AddGuitarComponent} from './add-guitar/add-guitar.component';
import {EditGuitarComponent} from './edit-guitar/edit-guitar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FilesComponent,
    AddGuitarComponent,
    EditGuitarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
