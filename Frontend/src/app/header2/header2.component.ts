import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header2',
  templateUrl: './header2.component.html',
  styleUrls: ['./header2.component.css']
})
export class Header2Component implements OnInit {
  title = 'Library Management';

  constructor(public _auth: AuthService,private _router: Router) { }

  ngOnInit(): void {
  }
  logoutUser(){
    localStorage.removeItem('token');
    this._router.navigate(['/']);
  }
}
