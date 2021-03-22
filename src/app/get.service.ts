import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { HttpParams } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class GetService {
  email: any;
  password: any;
  constructor(private http:HttpClient) { }

  getreq(){
   return this.http.get<any>('http://localhost:3000/user')
  }

  totaltime(){
    // const opts = { params: new HttpParams({fromString: "_page=1&_limit=10"}) };
   
    // return this.http.get<any>('http://localhost:3000/hour',opts)
  }

}
