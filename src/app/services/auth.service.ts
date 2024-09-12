import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = "https://localhost:7261/api/User/"
  constructor(private http:HttpClient) { }




  signUp(userObj:any){
    return this.http.post<any>(`${this.baseUrl}register`,userObj,{withCredentials:true})
  }

  login(loginObj:any){
    return this.http.post<any>(`${this.baseUrl}authenticate`,loginObj,{withCredentials:true})
  }
}
