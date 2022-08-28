import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

declare let gtag: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Borbás Fanni - media designer';

  constructor(public router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        gtag('config', 'MEASUREMENT-ID', { 'page_path': event.urlAfterRedirects });
      }      
    })
  }
}