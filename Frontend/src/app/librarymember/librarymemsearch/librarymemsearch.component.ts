import { Component, OnInit } from '@angular/core';
import { LibrarymemService } from 'src/app/librarymem.service';
import { Router } from '@angular/router';
import { LibrarianService } from 'src/app/librarian.service';

@Component({
  selector: 'app-librarymemsearch',
  templateUrl: './librarymemsearch.component.html',
  styleUrls: ['./librarymemsearch.component.css'],
})
export class LibrarymemsearchComponent implements OnInit {
  bookItem = {
    _id: '',
    title: '',
    author: '',
    category: '',
  };

  pageTitle: string = 'Search Results';
  imageWidth: number = 50;
  imageMargin: number = 2;

  books = [
    {
      _id: '',
      bookId: '',
      title: '',
      author: '',
      imageUrl: '',
      category: '',
      about: '',
    },
  ];
  visible: boolean = true;
  searchvisible: boolean = false;
  constructor(private librarymemService: LibrarymemService) {}

  ngOnInit(): void {}

  searchBook() {
    this.librarymemService.memberBookSearch(this.bookItem).subscribe((data) => {
      this.books = JSON.parse(JSON.stringify(data));
      this.visible = false;
      this.searchvisible = true;
    });
  }

  data: any;

  requestBook(book: any) {
    let librarymemId = localStorage.getItem('librarymemId');
    this.data = { book, librarymemId };
    this.librarymemService.requestedbook(this.data).subscribe((res: any) => {
      if (res.flag == true) {
        alert(res.msg);
      } else {
        alert(res.msg);
      }
    });
  }
}
