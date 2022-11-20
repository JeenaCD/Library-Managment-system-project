import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LibrarianService } from 'src/app/librarian.service';
import { BookserviceService } from 'src/app/bookservice.service';

@Component({
  selector: 'app-editbook',
  templateUrl: './editbook.component.html',
  styleUrls: ['./editbook.component.css'],
})
export class EditbookComponent implements OnInit {
  bookItem = {
    bookId: '',
    title: '',
    author: '',
    imageUrl: '',
    about: '',
    category: '',
  };

  constructor(
    private librarianService: LibrarianService,
    private bookService: BookserviceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    let bookId = localStorage.getItem('editBookId');
    this.bookService.getBook(bookId).subscribe((data) => {
      this.bookItem = JSON.parse(JSON.stringify(data));
    });
  }

  editBook() {
    this.librarianService.editBook(this.bookItem);
    localStorage.removeItem('editbookId');
    alert('Success');
    this.router.navigate(['librariannav/viewbooks']);
  }
}
