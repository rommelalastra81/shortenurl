import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import  AppSettings  from "src/app/app-resource/app-settings";
import {  Observable } from 'rxjs';
import { ApiEndpoint } from "src/app/app-resource/api-endpoint"
import { Urlmodel } from '../models/urlmodel.model';

@Injectable({
  providedIn: 'root'
})
export class UrlserviceService {

  appSettings = new AppSettings();
  
  constructor( public http: HttpClient ) { }

  addShortenURLSvc(urlLink: any): Observable<any> {
    let data = {
    long_url: urlLink
    }
    return this.http.post<any>(this.appSettings.getApiUrl() + `/v4/shorten`, data, this.appSettings.getHeaders());
  }

}
