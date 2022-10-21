import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  private _jsonURL = '../../assets/data/events.json';
  eventsList;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getJSON().subscribe(data => {
      this.eventsList = data;
      // console.log(data);
     });
  }

  public getJSON(): Observable<any> {
    return this.http.get(this._jsonURL);
  }

}
