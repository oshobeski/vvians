import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OuthstravaComponent } from './strava/outhstrava.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { HomeComponent } from './home/home.component';
import { StravaComponent } from './strava/strava.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { EventComponent } from './event/event.component';
import { RunnerInfoComponent } from './runner-info/runner-info.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent, pathMatch: 'full' },
  { path: 'checkStrava', component: OuthstravaComponent, pathMatch: 'full' },
  { path: 'strava', component: StravaComponent, pathMatch: 'full' },
  { path: 'runnerDetails', component: RunnerInfoComponent, pathMatch: 'full' },
  { path: 'board', component: LeaderboardComponent, pathMatch: 'full' },
  { path: 'contact', component: ContactUsComponent, pathMatch: 'full' },
  { path: 'events', component: EventComponent, pathMatch: 'full' },
  { path: '', redirectTo:'home', pathMatch: 'full' },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
