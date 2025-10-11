import { Injectable } from '@angular/core';
import { Apiurl } from './apiurl';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LeadService {
  constructor(private baseapi:Apiurl, private http:HttpClient){}
  createLead(data:any){
    return this.http.post(this.baseapi.getAPIbaseurl()+'enquiry/Addenquiry',data)
  }
}
