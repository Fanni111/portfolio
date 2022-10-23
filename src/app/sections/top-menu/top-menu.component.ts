import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {
  LangMenuItem,
  LanguageSwitcherService,
} from 'src/app/services/languageSwitcherService';

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
export class TopMenuComponent {
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
  selectedLanguage: LangMenuItem;

  constructor(
    private translateService: TranslateService,
    public languageSwitcherService: LanguageSwitcherService
  ) {}

  public onMenuItemClick() {
    this.selectedLanguage = this.languageSwitcherService.getSelectedLanguage();
    this.languageSwitcherService.storeSelectedLanguage(this.selectedLanguage);
    this.translateService.use(this.selectedLanguage.label);
  }
}
