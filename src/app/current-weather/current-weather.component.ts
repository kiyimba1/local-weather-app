import { Observable } from 'rxjs';
import { WeatherService } from './../weather/weather.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { SubSink } from 'subsink';

import { ICurrentWeather } from '../interface';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent implements OnInit {
  current$: Observable<ICurrentWeather>;
  private subscriptions = new SubSink()

  constructor(private weatherService: WeatherService) {
    this.current$ = this.weatherService.currentWeather$
  }

  ngOnInit(): void {
    // this.subscriptions.add(this.weatherService.currentWeather$.subscribe(data => (this.current$ = data)))

  }

  getOrdinal(date: number) {
    const n = new Date(date).getDate()
    return n > 0 ? ['th', 'st', 'nd', 'rd'][(n > 3 && n < 21) || n % 10 > 3 ? 0 : n % 10] : ''
  }



}
