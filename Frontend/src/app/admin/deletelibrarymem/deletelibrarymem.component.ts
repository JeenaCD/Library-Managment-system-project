import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../admin.service';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deletelibrarymem',
  templateUrl: './deletelibrarymem.component.html',
  styleUrls: ['./deletelibrarymem.component.css'],
})
export class DeletelibrarymemComponent implements OnInit {
  pageTitle: string = 'List of Library Members';
  libraryMembers = [
    {
      librarymemberId: '',
      name: '',
      username: '',
      password: '',
    },
  ];
  constructor(
    private adminService: AdminService,
    private router: Router,
    public _auth: AuthService
  ) {}

  ngOnInit(): void {
    this.adminService.getLibraryMembers().subscribe((data) => {
      this.libraryMembers = JSON.parse(JSON.stringify(data));
    });
  }

  deleteLibraryMember(librarymember: any) {
    this.adminService
      .deletelibraryMember(librarymember._id)
      .subscribe((res: any) => {
        alert(res.msg);
        this.libraryMembers = this.libraryMembers.filter(
          (p) => p !== librarymember
        );
      });
  }
}
