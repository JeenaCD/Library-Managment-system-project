import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewrequestbooksComponent } from './viewrequestbooks.component';

describe('ViewrequestbooksComponent', () => {
  let component: ViewrequestbooksComponent;
  let fixture: ComponentFixture<ViewrequestbooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewrequestbooksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewrequestbooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
