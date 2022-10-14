import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

export interface MenuItem {
  label: string;
  link: string;
  fragment?: string;
}

@Component({
  selector: 'top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss'],
})

/*
https://www.youtube.com/watch?v=iWYP3NtKQjs */
export class TopMenuComponent implements OnInit {
  menuItems: MenuItem[] = [
    {
      label: 'Magamról',
      link: '',
    },
    {
      label: 'Munkáim',
      link: 'munkaim',
    } /*,
    {
      label: 'Kapcsolat',
      link: 'magamrol',
      fragment: 'contact-anchor'
    }*/,
  ];
  selectedLanguage: string;

  constructor(private translateService: TranslateService) {
    this.translateService.setDefaultLang('hu');
  }

  ngOnInit(): void {}

  public onToggleSidenav = () => {};
}
