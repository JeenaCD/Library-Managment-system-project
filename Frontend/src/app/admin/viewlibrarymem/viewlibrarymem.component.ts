import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../admin.service';

@Component({
  selector: 'app-viewlibrarymem',
  templateUrl: './viewlibrarymem.component.html',
  styleUrls: ['./viewlibrarymem.component.css'],
})
export class ViewlibrarymemComponent implements OnInit {
  pageTitle: string = 'List of Library Members';
  libraryMembers = [
    {
      librarymemberId: '',
      name: '',
      username: '',
      password: '',
    },
  ];
  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.adminService.getLibraryMembers().subscribe((data) => {
      this.libraryMembers = JSON.parse(JSON.stringify(data));
    });
  }
}
