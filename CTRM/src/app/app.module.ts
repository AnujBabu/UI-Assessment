import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { NavComponent } from './nav/nav.component';
import { Nav1Component } from './nav1/nav1.component';

import { TableComponent } from './table/table.component';

import { StudentformComponent } from './studentform/studentform.component';
import { DataService } from './data.service';

@NgModule({
  declarations: [
    AppComponent,
        NavComponent,
        Nav1Component,
        TableComponent,
        
        StudentformComponent
      ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule ,
    MatInputModule,
    
    
   ],
  providers: [
     DataService
  ],
  bootstrap: [AppComponent],
 

})
export class AppModule { }
