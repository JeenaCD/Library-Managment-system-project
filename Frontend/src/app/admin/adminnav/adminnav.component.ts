import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit,
  ChangeDetectorRef,
} from '@angular/core';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-adminnav',
  templateUrl: './adminnav.component.html',
  styleUrls: ['./adminnav.component.css'],
})
export class AdminnavComponent implements OnInit {
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  constructor(
    private observer: BreakpointObserver,
    private changed: ChangeDetectorRef,
    private router: Router
  ) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
      if (res.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.close();
      } else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    });
    this.changed.detectChanges();
  }
  logout() {
    localStorage.removeItem('token');
    localStorage.clear();
    this.router.navigate(['/']);
  }
}
