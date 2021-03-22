import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";


import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatTableModule } from "@angular/material/table";
import { MatSortModule } from "@angular/material/sort";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatInputModule } from "@angular/material/input";
import { MatNativeDateModule } from '@angular/material/core';
import { MatCardModule } from "@angular/material/card";
import {MatPaginatorModule } from '@angular/material/paginator';
import { ReactiveFormsModule } from "@angular/forms";
import {MatDialogModule} from '@angular/material/dialog';
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatMenuModule } from "@angular/material/menu";
import { MatListModule } from "@angular/material/list";
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';  




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaincontentComponent } from './maincontent/maincontent.component';
import { GetService } from '../app/get.service';
import { DialogElementsExampleDialog } from "../app/header/header.component";

declare module "@angular/core" {
  interface ModuleWithProviders<T = any> {
    ngModule: Type<T>;
    providers?: Provider[];
  }
}
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MaincontentComponent,DialogElementsExampleDialog,
    
  ],
  exports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule,FormsModule, 
    BrowserAnimationsModule,
    MatButtonModule,MatToolbarModule,
    MatIconModule,MatTableModule,MatSortModule,   
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,MatInputModule ,
    MatPaginatorModule,ReactiveFormsModule,
    MatDialogModule,MatMenuModule,MatAutocompleteModule,
    MatListModule
  ],
  imports: [
   
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,FlexLayoutModule,FormsModule, 
    BrowserAnimationsModule,
    MatButtonModule,MatToolbarModule,
    MatIconModule,MatTableModule,MatSortModule,   
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,MatInputModule ,
    MatPaginatorModule,ReactiveFormsModule,
    MatDialogModule,MatMenuModule,MatAutocompleteModule,
    MatListModule
  
    
  ],
  providers: [GetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
