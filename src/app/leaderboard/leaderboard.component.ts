import { Component, OnInit } from '@angular/core';
import { StravaService } from '../services/strava.service';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {

  // vv club id
  clubId = 225476;
  boardItems:any;
  constructor(private strava: StravaService) { }

  ngOnInit(): void {
  }

  getLeaderBoard() {
    this.strava.getleaderBoard(this.clubId).subscribe(obj => {
      this.boardItems = obj;
    })
  }

}
