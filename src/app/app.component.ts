import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { EMPTY, Observable, Subscription, catchError, tap } from 'rxjs';
import { pipe } from 'rxjs';
import { BasicWeatherService } from './basic/basic-weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor(
    private weatherService: BasicWeatherService
  ){}

  ngOnInit(): void {
    console.log(this.appDrawer)
  }
  
  @ViewChild('drawer') appDrawer: any;
  title = 'weather-app';
  showFiller = false;
  weather$ = this.weatherService.weather$.pipe(
    catchError((err) => EMPTY),
    tap(data => console.log(data))
  )

  toggleDrawer() {
    this.appDrawer.toggle();
    
  }
}
