import { Observable, of } from 'rxjs'

import { IWeatherService } from './weather.service'
import { ICurrentWeather } from '../interface'

export const fakeWeather: ICurrentWeather = {
    city: 'Kampala',
    country: 'UG',
    date: 1485789600,
    image: '',
    temperature: 290.32,
    description: 'light intesity dizzel'
}

export class WeatherServiceFake implements IWeatherService {
    public getCurrentWeather(city: string, country: string): Observable<ICurrentWeather> {
        return of(fakeWeather)
    }
}