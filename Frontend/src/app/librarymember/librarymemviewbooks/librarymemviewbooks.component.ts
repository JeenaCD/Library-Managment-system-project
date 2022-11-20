import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LibrarymemService } from 'src/app/librarymem.service';

@Component({
  selector: 'app-librarymemviewbooks',
  templateUrl: './librarymemviewbooks.component.html',
  styleUrls: ['./librarymemviewbooks.component.css'],
})
export class LibrarymemviewbooksComponent implements OnInit {
  pageTitle: string = 'Book List';
  imageWidth: number = 50;
  imageMargin: number = 2;

  books = [
    {
      bookId: '',
      title: '',
      author: '',
      imageUrl: '',
      category: '',
      about: '',
    },
  ];

  constructor(
    private librarymemService: LibrarymemService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.librarymemService.getBooks().subscribe((data) => {
      this.books = JSON.parse(JSON.stringify(data));
    });
  }
}
