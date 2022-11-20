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
import { LibrarymemService } from 'src/app/librarymem.service';

@Component({
  selector: 'app-librarymemnnav',
  templateUrl: './librarymemnnav.component.html',
  styleUrls: ['./librarymemnnav.component.css'],
})
export class LibrarymemnnavComponent implements OnInit {
  librarian = {
    name: '',
  };

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  constructor(
    private observer: BreakpointObserver,
    private changed: ChangeDetectorRef,
    private router: Router,
    private lirarymemService: LibrarymemService
  ) {}

  ngOnInit(): void {
    let librarymemId = localStorage.getItem('librarymemId');
    this.lirarymemService.getLibraryMem(librarymemId).subscribe((data) => {
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
