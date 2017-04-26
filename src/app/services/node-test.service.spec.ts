import { TestBed, inject } from '@angular/core/testing';

import { NodeTestService } from './node-test.service';

describe('NodeTestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NodeTestService]
    });
  });

  it('should ...', inject([NodeTestService], (service: NodeTestService) => {
    expect(service).toBeTruthy();
  }));
});
