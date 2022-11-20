import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-librarianlogin',
  templateUrl: './librarianlogin.component.html',
  styleUrls: ['./librarianlogin.component.css'],
})
export class LibrarianloginComponent implements OnInit {
  loginLibararian = {
    username: '',
    password: '',
  };
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  validateLibrarian() {
    this.authService
      .loginLibararian(this.loginLibararian)
      .subscribe((res: any) => {
        if (res.flag == true) {
          localStorage.setItem('token', res.token);
          localStorage.setItem('librarianId', res._id);
          this.router.navigate(['/librariannav']);
        } else {
          alert(res.msg);
        }
      });
  }
}
