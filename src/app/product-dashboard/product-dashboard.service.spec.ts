import { TestBed } from '@angular/core/testing';

import { ProductDashboardService } from './product-dashboard.service';

describe('ProductDashboardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductDashboardService = TestBed.get(ProductDashboardService);
    expect(service).toBeTruthy();
  });
});
