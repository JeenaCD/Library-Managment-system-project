import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookserviceService {

  

  constructor(private http: HttpClient) {}
  getBook(id:any){
    return this.http.get("http://localhost:3000/"+id);
  }
  getBooks() {
    return this.http.get("http://localhost:3000/books");
  }
  deleteBook(id: any) {
    return this.http.delete("http://localhost:3000/remove/"+ id);
  }
  newBook(item: any) {
    return this.http
      .post("http://localhost:3000/insert", { book: item })
      .subscribe((data) => {
        console.log(data);
      });
  }
  editBook(book:any)
  {
    console.log('client update')
    return this.http.put("http://localhost:3000/update",book)
    .subscribe(data =>{console.log(data)})
  }
  
}
