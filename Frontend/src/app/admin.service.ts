import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }

  librariansCount(){
    return this.http.get("http://localhost:3000/main/getlibrarianscount");
  }

  libraryMembersCount(){
    return this.http.get("http://localhost:3000/main/getlibrarymemberscount");
  }

  newLibrarian(librarian:any){
    return this.http.post("http://localhost:3000/main/addLibrarian", librarian );
  }

  newLibrarymember(librarymember:any){
    return this.http.post("http://localhost:3000/main/addLibrarymember", librarymember );
  }

  getLibrarians(){
    return this.http.get("http://localhost:3000/main/librarians");
  }

  getLibraryMembers(){
    return this.http.get("http://localhost:3000/main/librarymembers");
  }
  
  deletelibrarian(id: any) {
    return this.http.delete("http://localhost:3000/main/removelibrarian/"+ id);
  }

  deletelibraryMember(id: any) {
    return this.http.delete("http://localhost:3000/main/removelibraryMember/"+ id);
  }
}
