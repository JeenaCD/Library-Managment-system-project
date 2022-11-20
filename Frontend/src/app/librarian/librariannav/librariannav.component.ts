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
import { LibrarianService } from 'src/app/librarian.service';

@Component({
  selector: 'app-librariannav',
  templateUrl: './librariannav.component.html',
  styleUrls: ['./librariannav.component.css'],
})
export class LibrariannavComponent implements OnInit {
  librarian = {
    name: '',
  };

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  constructor(
    private observer: BreakpointObserver,
    private changed: ChangeDetectorRef,
    private router: Router,
    private librarianService: LibrarianService
  ) {}

  ngOnInit(): void {
    let librarianId = localStorage.getItem('librarianId');
    this.librarianService.getLibrarian(librarianId).subscribe((data) => {
      this.librarian = JSON.parse(JSON.stringify(data));
    });
  }
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
