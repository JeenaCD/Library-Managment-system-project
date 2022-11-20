import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrariannavComponent } from './librariannav.component';

describe('LibrariannavComponent', () => {
  let component: LibrariannavComponent;
  let fixture: ComponentFixture<LibrariannavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibrariannavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibrariannavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
