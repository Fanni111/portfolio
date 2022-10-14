import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

export interface LangMenuItem {
  title: string;
  label: string;
  icon: string;
}

@Component({
  selector: 'language-switcher',
  templateUrl: './language-switcher.component.html',
  styleUrls: ['./language-switcher.component.scss'],
})
export class LanguageSwitcherComponent {
  selectedLanguage: LangMenuItem;
  langMenuitems: LangMenuItem[] = [
    {
      title: 'Hungarian',
      label: 'hu',
      icon: '../../../assets/images/icons/flag_hu.svg',
    },
    {
      title: 'English',
      label: 'en',
      icon: '../../../assets/images/icons/flag_en.svg',
    },
  ];

  constructor(private translateService: TranslateService) {
    this.selectedLanguage = this.langMenuitems[0];
  }

  public onLanguageChange(selectedLanguage: LangMenuItem) {
    this.selectedLanguage = selectedLanguage;
    this.translateService.use(this.selectedLanguage.label);
  }
}
