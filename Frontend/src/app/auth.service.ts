import { Injectable } from '@angular/core';
import { HttpClient,HttpResponse } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  
  constructor(private http:HttpClient) { }

  loginAdmin(loginAdmin:any){
    console.log("entered");
    return this.http.post<any>("http://localhost:3000/main/login",loginAdmin);
  }

  loginLibararian(loginLibararian:any){
    return this.http.post<any>("http://localhost:3000/librarian/login",loginLibararian);
  }

  loginLibararyMem(loginLibararyMem:any){
    return this.http.post<any>("http://localhost:3000/libraryMem/login",loginLibararyMem);
  }

    signupUser(user: any){
      console.log("entered service file");
      return this.http.post<any>("http://localhost:3000/signup",user);
      }

  loggedIn(){
    return !!localStorage.getItem('token')
  }
  getToken(){
    return localStorage.getItem('token')
  }
}
