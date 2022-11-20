import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewlibrarianComponent } from './viewlibrarian.component';

describe('ViewlibrarianComponent', () => {
  let component: ViewlibrarianComponent;
  let fixture: ComponentFixture<ViewlibrarianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewlibrarianComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewlibrarianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
