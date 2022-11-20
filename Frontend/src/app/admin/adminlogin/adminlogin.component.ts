import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css'],
})
export class AdminloginComponent implements OnInit {
  loginAdmin = {
    username: '',
    password: '',
  };

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  validateAdmin() {
    this.authService.loginAdmin(this.loginAdmin).subscribe((res: any) => {
      if (res.flag == true) {
        localStorage.setItem('token', res.token);
        this.router.navigate(['/adminnav/admindashboard']);
      } else {
        alert(res.msg);
      }
    });
  }
}
