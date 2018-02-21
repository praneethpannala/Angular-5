import { TestBed, inject } from '@angular/core/testing';

import { ProdGuardService } from './proddetail.service';

describe('ProdGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProdGuardService]
    });
  });

  it('should ...', inject([ProdGuardService], (service: ProdGuardService) => {
    expect(service).toBeTruthy();
  }));
});
