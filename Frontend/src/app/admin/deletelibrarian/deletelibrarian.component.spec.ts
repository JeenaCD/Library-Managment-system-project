import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletelibrarianComponent } from './deletelibrarian.component';

describe('DeletelibrarianComponent', () => {
  let component: DeletelibrarianComponent;
  let fixture: ComponentFixture<DeletelibrarianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletelibrarianComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletelibrarianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
