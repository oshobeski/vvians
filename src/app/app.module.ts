import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { StravaService } from './services/strava.service';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { OuthstravaComponent } from './strava/outhstrava.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { HomeComponent } from './home/home.component';
import { StravaComponent } from './strava/strava.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { EventComponent } from './event/event.component';
import { RunnerInfoComponent } from './runner-info/runner-info.component';

@NgModule({
  declarations: [
    AppComponent,
    OuthstravaComponent,
    LeaderboardComponent,
    HomeComponent,
    StravaComponent,
    ContactUsComponent,
    EventComponent,
    RunnerInfoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [StravaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
