import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addlibrarian',
  templateUrl: './addlibrarian.component.html',
  styleUrls: ['./addlibrarian.component.css'],
})
export class AddlibrarianComponent implements OnInit {
  librarian = {
    librarianId: '',
    name: '',
    username: '',
    password: '',
  };
  constructor(private adminService: AdminService, private router: Router) {}

  ngOnInit(): void {}

  AddLibrarian() {
    this.adminService.newLibrarian(this.librarian).subscribe((res: any) => {
      if (res.flag == true) {
        alert(res.msg);
        this.router.navigate(['/adminnav/viewlibrarian']);
      } else {
        alert(res.msg);
      }
    });
  }
}
