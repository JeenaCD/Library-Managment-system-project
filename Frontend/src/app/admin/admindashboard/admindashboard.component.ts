import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css'],
})
export class AdmindashboardComponent implements OnInit {
  constructor(private adminService: AdminService) {}

  librariansCount: string = '';
  libraryMembersCount: string = '';
  ngOnInit(): void {
    this.librarianCount();
    this.libraryMemberCount();
  }
  librarianCount() {
    this.adminService.librariansCount().subscribe((data: any) => {
      this.librariansCount = JSON.stringify(data);
    });
  }
  libraryMemberCount() {
    this.adminService.libraryMembersCount().subscribe((data: any) => {
      this.libraryMembersCount = JSON.stringify(data);
    });
  }
}
