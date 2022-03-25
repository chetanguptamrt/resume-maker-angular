import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AllModelInterface } from '../interface/data-template';

@Injectable({
  providedIn: 'root'
})
export class StandardDownloadService {

  constructor(private http:HttpClient) {}

  baseurl:string = "http://localhost:8080/resume"

  downlaod(all:AllModelInterface, n:number) {
    return this.http.post(`${this.baseurl}-${n}`,all);
  }

}
