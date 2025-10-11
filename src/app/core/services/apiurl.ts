import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Apiurl {
  getAPIbaseurl():string{
    return "https://app.medginnie.com/api/";
    // return "https://localhost:44312/api/"
  }
}
