import { TestBed } from '@angular/core/testing';

import { AngularPivotTableService } from './angular-pivot-table.service';

describe('AngularPivotTableService', () => {
  let service: AngularPivotTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularPivotTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
