import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewlibrarian',
  templateUrl: './viewlibrarian.component.html',
  styleUrls: ['./viewlibrarian.component.css'],
})
export class ViewlibrarianComponent implements OnInit {
  pageTitle: string = 'List of Librarians';
  librarians = [
    {
      librarianId: '',
      name: '',
      username: '',
      password: '',
    },
  ];
  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.adminService.getLibrarians().subscribe((data) => {
      this.librarians = JSON.parse(JSON.stringify(data));
    });
  }
}
