import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'header-app',
  templateUrl: './header-app.component.html',
  styleUrls: ['./header-app.component.scss']
})
export class HeaderAppComponent implements OnInit {

  movil;

  constructor() { }

  ngOnInit(): void {
    this.movil = JSON.parse(sessionStorage.getItem('movil'));
  }

}
