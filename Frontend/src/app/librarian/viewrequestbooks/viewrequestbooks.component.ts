import { Component, OnInit } from '@angular/core';
import { LibrarianService } from 'src/app/librarian.service';

@Component({
  selector: 'app-viewrequestbooks',
  templateUrl: './viewrequestbooks.component.html',
  styleUrls: ['./viewrequestbooks.component.css'],
})
export class ViewrequestbooksComponent implements OnInit {
  pageTitle: string = 'Requested Book List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  books = [
    {
      title: '',
      author: '',
      category: '',
      imageUrl: '',
      book_id: '',
      availability: '',
      librarymemId: '',
    },
  ];

  constructor(private librarianService: LibrarianService) {}

  ngOnInit(): void {
    this.librarianService.getrequestedBooks().subscribe((data) => {
      this.books = JSON.parse(JSON.stringify(data));
    });
  }

  check(book: any) {
    this.librarianService.checktoissuebook(book).subscribe((res: any) => {
      if (res.flag == true) {
        alert(res.msg);
      } else {
        alert(res.msg);
      }
    });
  }
}
