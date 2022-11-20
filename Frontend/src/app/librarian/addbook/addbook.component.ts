import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LibrarianService } from 'src/app/librarian.service';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css'],
})
export class AddbookComponent implements OnInit {
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
    private router: Router
  ) {}

  ngOnInit(): void {}

  AddBook() {
    this.librarianService.newBook(this.bookItem).subscribe((res: any) => {
      if (res.flag == true) {
        alert(res.msg);
        this.router.navigate(['librariannav/viewbooks']);
      } else {
        alert(res.msg);
      }
    });
  }
}
