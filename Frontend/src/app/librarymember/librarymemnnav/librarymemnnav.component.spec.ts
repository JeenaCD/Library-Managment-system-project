import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrarymemnnavComponent } from './librarymemnnav.component';

describe('LibrarymemnnavComponent', () => {
  let component: LibrarymemnnavComponent;
  let fixture: ComponentFixture<LibrarymemnnavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibrarymemnnavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibrarymemnnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
