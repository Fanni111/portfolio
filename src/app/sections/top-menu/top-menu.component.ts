import { Component, OnInit } from '@angular/core';

export interface MenuItem {
  label: string;
  link: string;
}

@Component({
  selector: 'top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss']
})

/*
https://www.youtube.com/watch?v=iWYP3NtKQjs */

export class TopMenuComponent implements OnInit {

  menuItems: MenuItem[] = [
    {
      label: 'Magamról',
      link: '/magamrol'
    },
    {
      label: 'Munkáim',
      link: 'munkaim'
    },
    {
      label: 'Kapcsolat',
      link: '#contact-anchor'
    }
  ];


  constructor() { }

  ngOnInit(): void {
  }

  public onToggleSidenav = () => { 
  }
}
