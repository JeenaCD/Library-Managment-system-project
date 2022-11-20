import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrarymemsearchComponent } from './librarymemsearch.component';

describe('LibrarymemsearchComponent', () => {
  let component: LibrarymemsearchComponent;
  let fixture: ComponentFixture<LibrarymemsearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibrarymemsearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibrarymemsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
