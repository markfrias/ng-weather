import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadlineComponent } from './headline/headline.component';
import { BasicWeatherService } from './basic/basic-weather.service';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CardComponent } from './shared/card/card.component';
import { SearchBarComponent } from './shared/search-bar/search-bar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarItemComponent } from './sidebar/sidebar-item/sidebar-item.component';
import {MatList, MatListModule} from '@angular/material/list'; 
import {MatRippleModule} from '@angular/material/core'; 

@NgModule({
  declarations: [
    AppComponent,
    HeadlineComponent,
    SidebarComponent,
    CardComponent,
    SearchBarComponent,
    SidebarItemComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatSidenavModule,
    MatListModule,
    MatRippleModule
  ],
  providers: [BasicWeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
