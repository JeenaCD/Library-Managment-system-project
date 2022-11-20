import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-librarymemlogin',
  templateUrl: './librarymemlogin.component.html',
  styleUrls: ['./librarymemlogin.component.css'],
})
export class LibrarymemloginComponent implements OnInit {
  loginLibararyMem = {
    username: '',
    password: '',
  };

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  validateLibraryMem() {
    this.authService
      .loginLibararyMem(this.loginLibararyMem)
      .subscribe((res: any) => {
        if (res.flag == true) {
          localStorage.setItem('token', res.token);
          localStorage.setItem('librarymemId', res._id);
          this.router.navigate(['/librarymemnnav']);
        } else {
          alert(res.msg);
        }
      });
  }
}
