import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrarymemloginComponent } from './librarymemlogin.component';

describe('LibrarymemloginComponent', () => {
  let component: LibrarymemloginComponent;
  let fixture: ComponentFixture<LibrarymemloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibrarymemloginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibrarymemloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
