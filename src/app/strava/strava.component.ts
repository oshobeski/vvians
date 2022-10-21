import { Component, OnInit } from '@angular/core';
import { StravaService } from '../services/strava.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-strava',
  templateUrl: './strava.component.html',
  styleUrls: ['./strava.component.css']
})
export class StravaComponent implements OnInit {
  errorMessage: string;
  athlete: any;
  stats: any;
  friends: any;
  emailId: string = 'oshobeski@gmail.com';

  constructor(private stravaService: StravaService, private router: Router) { }

  ngOnInit(): void {
  }

  checkRunnerDetail(email) {
    if (email) {
      this.stravaService.checkEmailFromDB(email).subscribe((data) => {
        if (data.length === 0) {
          if (typeof (Storage) !== "undefined") {
            localStorage.setItem('emailId', email);
          }
          window.location.href = `https://www.strava.com/oauth/authorize?client_id=24114&redirect_uri=${this.stravaService.hostUrl}/checkStrava/&response_type=code&scope=activity:read_all`;
        } else {
          this.stravaService.clientRefreshToken = data[0].token;
          this.router.navigate(['/runnerDetails']);;
        }
      })
    }
  }

}
