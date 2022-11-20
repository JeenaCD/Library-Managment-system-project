import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addlibrarymem',
  templateUrl: './addlibrarymem.component.html',
  styleUrls: ['./addlibrarymem.component.css'],
})
export class AddlibrarymemComponent implements OnInit {
  librarymember = {
    librarymemberId: '',
    name: '',
    username: '',
    password: '',
  };

  constructor(private adminService: AdminService, private router: Router) {}

  ngOnInit(): void {}

  AddLibraryMember() {
    this.adminService
      .newLibrarymember(this.librarymember)
      .subscribe((res: any) => {
        if (res.flag == true) {
          alert(res.msg);
          this.router.navigate(['/adminnav/viewlibrarymember']);
        } else {
          alert(res.msg);
        }
      });
  }
}
