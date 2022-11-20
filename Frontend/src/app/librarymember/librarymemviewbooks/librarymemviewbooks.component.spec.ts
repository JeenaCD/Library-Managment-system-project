import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrarymemviewbooksComponent } from './librarymemviewbooks.component';

describe('LibrarymemviewbooksComponent', () => {
  let component: LibrarymemviewbooksComponent;
  let fixture: ComponentFixture<LibrarymemviewbooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibrarymemviewbooksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibrarymemviewbooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
