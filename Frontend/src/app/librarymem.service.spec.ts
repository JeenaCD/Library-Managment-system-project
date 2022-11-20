import { TestBed } from '@angular/core/testing';

import { LibrarymemService } from './librarymem.service';

describe('LibrarymemService', () => {
  let service: LibrarymemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibrarymemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
