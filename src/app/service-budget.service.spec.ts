import { TestBed } from '@angular/core/testing';

import { ServiceBudgetService } from './service-budget.service';

describe('ServiceBudgetService', () => {
  let service: ServiceBudgetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceBudgetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
