import { TestBed } from '@angular/core/testing';

import { AppRegisterService } from './app-register.service';

describe('AppRegisterServiceService', () => {
  let service: AppRegisterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppRegisterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
