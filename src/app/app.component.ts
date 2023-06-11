import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BasicWeatherService } from './basic/basic-weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private weatherService: BasicWeatherService
  ){}
  title = 'weather-app';
  weather: any;
  weatherSubscription: Subscription = new Subscription();

  ngOnInit() {
    this.weatherSubscription = this.weatherService.getWeather().subscribe(
      (data) => this.weather = data )
  }

  ngOnDestroy() {
    this.weatherSubscription.unsubscribe();
  }
}
