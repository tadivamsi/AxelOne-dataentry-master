import { Injectable } from '@angular/core';
import {LoginClass} from  '../models/class';
import {HttpClient, HttpHeaders} from '@angular/common/http';
const headersData={
  headers:new HttpHeaders({'Content-Type': 'application/json'}),
};
@Injectable({
  providedIn: 'root'
})
export class LoginService {

    baseURL:string= 'http://saapi.azaz.com/api';
    url:string='http://saapi.azaz.com/api/UserDetails/GetUserbyId';
    URL:string='http://saapi.azaz.com/api/UserDetails/SaveUser';
    URL1:string=' http://saapi.azaz.com/api/Roles/SaveRoles';
    url2:string=' http://saapi.azaz.com/api/Roles/GetRoles';

    constructor(private http:HttpClient) { }

    login(model:LoginClass){

      const headersValue={
        headers:new HttpHeaders({'Content-Type': 'application/json'}),
      };
      return this.http.post(this.baseURL+'/login',model,headersValue)
    }

    getUserbyId(obj:any){
      return this.http.post(
        this.url,
        JSON.stringify(obj),headersData
      );
      }
      SaveUser(obj:any){
        return this.http.post(
          this.URL,
          JSON.stringify(obj),headersData
        );
      }
      saverole(obj:any)  {
        return this.http.post(
          this.URL1,
          JSON.stringify(obj),headersData
        );
      }
      getrole(){
        return this.http.post(this.baseURL+'/Roles/GetRoles',JSON.stringify,headersData);
      }
      userlist(obj:any){
        return this.http.post(
          this.url,
          JSON.stringify(obj),
          headersData


          );


     }

    Rolelist(obj2:any)
     {
       return this.http.post(
         this.url2,
         JSON.stringify(obj2),
         headersData
       );
     }
    }


