import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class StravaService {
  apiURL = 'https://www.strava.com/api/v3';
  serverUrl = 'http://vibrantvelachery.com:3000';
  hostUrl = 'http://vibrantvelachery.com';
  stravaURL = 'https://www.strava.com';

  // serverUrl = 'http://localhost:3000';
  // hostUrl = 'http://localhost:4200';

  clientRefreshToken: string = '';
  client_id: string = '24114';
  client_secret: string = 'bceef6d92749b6282dc94a1401dd4c3f0f79e7b7';
  client_code: string = '';
  restType: string = '';
  _athlete: BehaviorSubject<any> = new BehaviorSubject({});
  _athleteinfo$ = this._athlete.asObservable();
  runnerId: any;
  before: any;
  after: any;

  constructor(private http: HttpClient, private router: Router) { }

  checkEmailFromDB(id): Observable<any> {
    // sample DB mock data
    // return of([{ "email": "jaganviky@gmail.com", "token": "dfb8b058532d8463ea4352f478c6d60057a48bb4", "name": "jagan_raj", "runTotal": "0", "cycleTotal": "0", "swimTotal": "0", "othersTotal": "0", "runnerId": "22865789" }]);
    return this.http.get(`${this.serverUrl}/getByEmail/${id}`)
      .pipe(map(this.extractData), catchError(this.handleError));
  }

  getAccessToken(code: string): Observable<any> {
    let url = `${this.apiURL}/oauth/token?client_id=${this.client_id}&client_secret=${this.client_secret}&code=${code}&grant_type=authorization_code`;
    return this.http.post(url, {})
      .pipe(map(this.extractData), catchError(this.handleError))
  }

  getRefreshToken(type?, id?: number): Observable<any> {
    if (this.client_id && this.client_secret && this.clientRefreshToken) {
      this.restType = type ? type : '';
      this.runnerId = id ? id : '';
      let url = `${this.apiURL}/oauth/token?client_id=${this.client_id}&client_secret=${this.client_secret}&refresh_token=${this.clientRefreshToken}&grant_type=refresh_token`;
      return this.http.post(url, {})
        .pipe(mergeMap((resp: any) => {
          if (resp.athlete) {
            this._athlete.next(resp.athlete);
          }
          if (this.restType === 'activities' && resp.access_token) {
            return this.getActivities(resp.access_token);
          } else if (this.restType === 'athlete' && resp.access_token) {
            return this.getAthlete(resp.access_token);
          } else if (this.restType === 'stats' && resp.access_token && this.runnerId) {
            return this.getStats(this.runnerId, resp.access_token);
          } else {
            return of(resp);
          }
        }), catchError(this.handleError))
    } else {
      this.router.navigate(['/']);
    }
  }

  insertAccessToken(rid, email, name, token): Observable<any> {
    let obj = {};
    obj['email'] = email;
    obj['id'] = rid;
    obj['name'] = name;
    obj['token'] = token;
    return this.http.post(`${this.serverUrl}/insertAccessToken`, obj).pipe(map(this.extractData), catchError(this.handleError));
  }

  createAuthorizationHeader(token: string) {
    let headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*')
      .set('Authorization', `Bearer ${token}`);
    return headers;
  }


  getAthlete(token: string): Observable<any> {
    let url = `${this.apiURL}/athlete`;
    return this.http.get(url, { 'headers': this.createAuthorizationHeader(token) })
      .pipe(map(this.extractData), catchError(this.handleError))
  }

  getActivities(accesToken: string, id?: number): Observable<any> {
    let url = `${this.apiURL}/activities?access_token=${accesToken}&before=${this.before}&after=${this.after}`;
    return this.http.get(url, {})
      .pipe(map(this.extractData, this.restType), catchError(this.handleError))
  }

  getleaderBoard(clubId: number, token?: string): Observable<any> {
    let url = `${this.stravaURL}/clubs/${clubId}/leaderboard`;
    return this.http.get(url, { 'headers': this.createAuthorizationHeader(token) })
      .pipe(map(this.extractData), catchError(this.handleError))
  }


  getStats(id: number, token?: string): Observable<any> {
    // let url = `${this.apiURL}/athletes/${id}/stats`;
    let url = `${this.apiURL}/athletes/${id}/stats`;
    return this.http.get(url, { 'headers': this.createAuthorizationHeader(token) })
      .pipe(map(this.extractData), catchError(this.handleError))
  }

  getFriends(id: number, token?: string): Observable<any> {
    let url = `${this.apiURL}/athletes/${id}/friends`;
    return this.http.get(url, { 'headers': this.createAuthorizationHeader(token) })
      .pipe(map(this.extractData), catchError(this.handleError))
  }

  private extractData(res: any) {
    if (this.restType === 'activities') {
      this.getActivities(res.access_token)
    } else {
      return res || {};
    }
  }

  private handleError(error: HttpErrorResponse) {
    let errMsg: string;

    if (error instanceof HttpErrorResponse) {
      errMsg = `${error.status} - ${error.statusText || ''} ${error.message}`;
    } else {
      errMsg = error;
    }

    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
