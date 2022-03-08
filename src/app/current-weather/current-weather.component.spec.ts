import { WeatherServiceFake } from './../weather/weather.service.fake';
import { WeatherService } from './../weather/weather.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'

import { CurrentWeatherComponent } from './current-weather.component';

describe('CurrentWeatherComponent', () => {
  let component: CurrentWeatherComponent;
  let fixture: ComponentFixture<CurrentWeatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CurrentWeatherComponent],
      providers: [{ provide: WeatherService, useClass: WeatherServiceFake }]
    })
      .compileComponents();
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    })
    fixture = TestBed.createComponent(CurrentWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
