import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule }    from '@angular/http';

import { AppComponent } from './app.component';
import { PhoneListComponent } from './phones/list.component';
import { PhoneCardComponent } from './phones/card.component';
import { PhoneDetailComponent } from './phones/detail.component';

import { PhoneService } from './phone.service';
import { AppRoutingModule }     from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    PhoneCardComponent,
    PhoneListComponent,
    PhoneDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [PhoneService],
  bootstrap: [AppComponent]
})
export class AppModule {}
