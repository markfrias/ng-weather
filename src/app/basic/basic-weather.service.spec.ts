import { TestBed } from '@angular/core/testing';

import { BasicWeatherService } from './basic-weather.service';

describe('BasicWeatherService', () => {
  let service: BasicWeatherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BasicWeatherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
