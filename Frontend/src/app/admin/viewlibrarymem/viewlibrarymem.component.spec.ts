import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewlibrarymemComponent } from './viewlibrarymem.component';

describe('ViewlibrarymemComponent', () => {
  let component: ViewlibrarymemComponent;
  let fixture: ComponentFixture<ViewlibrarymemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewlibrarymemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewlibrarymemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
