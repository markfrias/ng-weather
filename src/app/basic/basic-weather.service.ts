import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BasicWeatherService {

  constructor(private http: HttpClient) { }

  getWeather() {
   return this.http.get<any>('https://api.open-meteo.com/v1/forecast?latitude=14.57&longitude=120.99&daily=weathercode,temperature_2m_max,temperature_2m_min,uv_index_max,precipitation_sum,rain_sum&timezone=Asia%2FSingapore&current_weather=true');
  }
}
