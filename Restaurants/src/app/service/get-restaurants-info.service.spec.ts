import { TestBed, inject } from '@angular/core/testing';

import { GetRestaurantsInfoService } from './get-restaurants-info.service';

describe('GetRestaurantsInfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetRestaurantsInfoService]
    });
  });

  it('should be created', inject([GetRestaurantsInfoService], (service: GetRestaurantsInfoService) => {
    expect(service).toBeTruthy();
  }));
});
