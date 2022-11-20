import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LibrarianService {

  constructor(private http:HttpClient) { }

  getLibrarian(librarianId:any){
    console.log("entered service file")
      return this.http.get<any>("http://localhost:3000/librarian/profile/"+librarianId);
  }

  getBooks() {
    return this.http.get("http://localhost:3000/librarian/books");
  }

  editBook(book:any)
  {
    console.log('client update')
    return this.http.put("http://localhost:3000/librarian/edit",book)
    .subscribe(data =>{console.log(data)})
  }

  deleteBook(id: any) {
    return this.http.delete("http://localhost:3000/librarian/remove/"+ id);
  }

  newBook(item: any) {
    return this.http.post("http://localhost:3000/librarian/addbook", { book: item });
  }

  getrequestedBooks(){
    return this.http.get("http://localhost:3000/librarian/reqbooks");
  }

  checktoissuebook(book:any){
    return this.http.post("http://localhost:3000/librarian/checkbook",book);
  }
}
