import { Component, OnInit } from '@angular/core';
import { BookserviceService } from 'src/app/bookservice.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { LibrarianService } from 'src/app/librarian.service';

@Component({
  selector: 'app-viewbooks',
  templateUrl: './viewbooks.component.html',
  styleUrls: ['./viewbooks.component.css']
})
export class ViewbooksComponent implements OnInit {

  pageTitle: string = 'Book List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  books = [
    {
      bookId:'',
      title: '',
      author: '',
      imageUrl: '',
      category:'',
      about: ''
    },
  ];

  constructor(private router:Router, 
              public _auth:AuthService,private librarianService:LibrarianService) { }

  ngOnInit(): void {
    this.librarianService.getBooks().subscribe((data) => {
      this.books = JSON.parse(JSON.stringify(data));
    });
  }

  editBook(book:any)
  {
    console.log(book._id);
    localStorage.setItem("editBookId", book._id.toString());
    this.router.navigate(['librariannav/edit']);

  }

  deleteBook(book: any) {
    this.librarianService.deleteBook(book._id).subscribe((data) => {
      this.books = this.books.filter((p) => p !== book);
    });
  }

}
