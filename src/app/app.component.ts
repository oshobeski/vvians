import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  menu = [{ 'name': 'Home', 'path': '/home', active: false },
  { 'name': 'Strava', 'path': '/strava', active: false },
  { 'name': 'Events', 'path': '/events', active: false },
  { 'name': 'Contact', 'path': '/contact', active: false }];
  banner = [
    { name: 'motto', path: '../assets/images/home.jpg', title: 'VVians', desc: '' },
    { name: 'motto', path: '../assets/images/home.jpg', title: 'VVians', desc: '' }
  ];

  constructor() {
  }

  ngOnInit() {

  }
}
