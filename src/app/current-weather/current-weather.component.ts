import { WeatherService } from './../weather/weather.service';
import { Component, OnInit } from '@angular/core';

import { ICurrentWeather } from '../interface';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent implements OnInit {
  current!: ICurrentWeather;

  constructor(private weatherService: WeatherService) {
    this.current = {
      city: '',
      country: '',
      date: 0,
      description: '',
      image: '',
      temperature: 0
    }
  }

  ngOnInit(): void {
    this.weatherService.getCurrentWeather('Bethesda', 'US').subscribe((data) => this.current = data)
  }

}
