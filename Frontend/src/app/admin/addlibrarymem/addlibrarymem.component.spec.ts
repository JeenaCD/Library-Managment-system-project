import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddlibrarymemComponent } from './addlibrarymem.component';

describe('AddlibrarymemComponent', () => {
  let component: AddlibrarymemComponent;
  let fixture: ComponentFixture<AddlibrarymemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddlibrarymemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddlibrarymemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
