import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletelibrarymemComponent } from './deletelibrarymem.component';

describe('DeletelibrarymemComponent', () => {
  let component: DeletelibrarymemComponent;
  let fixture: ComponentFixture<DeletelibrarymemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletelibrarymemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletelibrarymemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
