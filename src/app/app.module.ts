import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

//material
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { ShortenurlComponent } from './components/shortenurl/shortenurl.component';

//ngrx
import { EffectsModule } from '@ngrx/effects';
import {  StoreModule } from '@ngrx/store';

//imported files or classes
import { ShortenurlEffect } from './app-state/effects/shortenurl.effect';


@NgModule({
  declarations: [
    AppComponent,
    ShortenurlComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    AppRoutingModule,
    HttpClientModule,
    EffectsModule.forRoot([ShortenurlEffect]),
    //EffectsModule,
    StoreModule.forRoot({}, {}),
    FormsModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
