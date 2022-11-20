import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrarymemdashboardComponent } from './librarymemdashboard.component';

describe('LibrarymemdashboardComponent', () => {
  let component: LibrarymemdashboardComponent;
  let fixture: ComponentFixture<LibrarymemdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibrarymemdashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibrarymemdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
