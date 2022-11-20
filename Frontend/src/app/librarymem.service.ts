import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LibrarymemService {

  constructor(private http:HttpClient) { }

  getLibraryMem(librarymemId:any){
    console.log("entered service file")
    return this.http.get<any>("http://localhost:3000/libraryMem/profile/"+librarymemId);
  }

  getBooks() {
    return this.http.get("http://localhost:3000/libraryMem/books");
  }

  memberBookSearch(item:any){
    console.log(item);
    return this.http.post<any>("http://localhost:3000/libraryMem/booksearch",item);
  }

  requestedbook(data:any){
    console.log("entered");
    return this.http.post("http://localhost:3000/libraryMem/requestbook",data);
  }

  requestbook(data:any){
    return this.http.post<any>("http://localhost:3000/libraryMem/requestBook",data);
    }

}
