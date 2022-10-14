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
export class LanguageSwitcherComponent implements OnInit {
  ngOnInit(): void {}

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
    this.translateService.setDefaultLang(this.selectedLanguage.label);
  }

  public onLanguageChange(selectedLanguage: LangMenuItem) {
    this.selectedLanguage = selectedLanguage;
    console.log('thth ' + this.selectedLanguage.label);
    this.translateService.use(this.selectedLanguage.label);
  }
}
