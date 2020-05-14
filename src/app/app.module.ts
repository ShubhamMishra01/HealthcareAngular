import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import {HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddcenterComponent } from './addcenter/addcenter.component';
import { RemovecenterComponent } from './removecenter/removecenter.component';
import { ViewcenterComponent } from './viewcenter/viewcenter.component';
import { DiagnosticcenterService } from './appService/diagnosticcenter.service';

@NgModule({
  declarations: [
    AppComponent,
    AddcenterComponent,
    RemovecenterComponent,
    ViewcenterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DiagnosticcenterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
