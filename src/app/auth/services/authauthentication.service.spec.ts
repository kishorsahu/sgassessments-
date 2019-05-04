import { TestBed, inject } from '@angular/core/testing';

import { AuthauthenticationService } from './authauthentication.service';

describe('AuthauthenticationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthauthenticationService]
    });
  });

  it('should be created', inject([AuthauthenticationService], (service: AuthauthenticationService) => {
    expect(service).toBeTruthy();
  }));
});
