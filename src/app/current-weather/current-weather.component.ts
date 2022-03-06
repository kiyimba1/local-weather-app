import { Component, OnInit } from '@angular/core';

import { ICurrentWeather } from '../interface';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent implements OnInit {
  current: ICurrentWeather

  constructor() {
    this.current = {
      city: 'Kampala',
      country: 'UG',
      date: new Date(),
      image: 'assets/img/sunny.png',
      temperature: 72,
      description: 'Sunny'
    } as ICurrentWeather
  }

  ngOnInit(): void {
  }

}
