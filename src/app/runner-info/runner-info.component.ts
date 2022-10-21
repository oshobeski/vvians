import { Component, OnInit } from '@angular/core';
import { StravaService } from '../services/strava.service';

@Component({
  selector: 'app-runner-info',
  templateUrl: './runner-info.component.html',
  styleUrls: ['./runner-info.component.css']
})

export class RunnerInfoComponent implements OnInit {
  errorMessage: string;
  athlete: any;
  stats: any;
  friends: any;
  emailId: string;
  activities: any;
  header: any = ['Sno', 'Activity Name', 'Activity Type', 'Distance', 'Activity Date'];

  //pagination
  numEntries = 10;
  currentPage = 1;
  numPages = 0;

  constructor(private stravaService: StravaService) {
  }

  ngOnInit() {
    this.getAthlete();
  }

  getActivities() {
    const before = Math.floor((new Date('2022/10/30').getTime() - new Date('2021/07/30').getMilliseconds()) / 1000);
    const after = Math.floor((new Date('2022/05/01').getTime() - new Date('2021/07/01').getMilliseconds()) / 1000);
    this.stravaService.before = before;
    this.stravaService.after = after;
    this.stravaService.getRefreshToken('activities', null).subscribe(obj => {
      this.activities = obj;
      // this.numPages = Math.ceil(this.activities.length / this.numEntries);
    })
  }

  getAthlete() {
    this.stravaService.getRefreshToken('athlete').subscribe(obj => {
      this.athlete = obj;
      this.getStats(obj.id);
    })
  }

  getStats(id) {
    this.stravaService.getRefreshToken('stats', id).subscribe(obj => {
      this.stats = this.stats = obj;
      this.getActivities();
    })
  }

  getFriends(id) {
    return new Promise((resolve, reject) => {
      this.stravaService.getFriends(id)
        .subscribe(
          friends => this.friends = friends,
          error => this.errorMessage = <any>error);
    });
  }

  _filterData(): Array<any> {
    const numPages = this._calcNumPages();

    if (this.currentPage > numPages) {
      this.currentPage = numPages;
    }
    const startIndex = (this.currentPage - 1) * this.numEntries;
    const endIndex = (this.currentPage * this.numEntries);

    // Slice is probably faster than filter in some scenarios
    // const pgData = this.data.slice(startIndex, endIndex);
    return this.activities.filter((_el, i) => ((i >= startIndex) && (i < endIndex)));
  }

  _calcNumPages(): number {
    const dataLength = this.activities.length;
    let numPages = 0;

    if (dataLength > 0) {
      numPages = Math.ceil(this.activities.length / this.numEntries);
    } else {
      numPages = 1;
    }
    return numPages;
  }

}
