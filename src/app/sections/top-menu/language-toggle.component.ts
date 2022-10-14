import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

export interface LangMenuItem {
  title: string;
  label: string;
  icon: string;
}

@Component({
  selector: 'language-toggle',
  templateUrl: './language-toggle.component.html',
  styleUrls: ['./language-toggle.component.scss'],
})
export class LanguageToggleComponent implements OnInit {
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
  }

  ngOninit() {
    this.translateService.setDefaultLang(this.selectedLanguage.label);
    console.log('sss' + this.selectedLanguage.label);
    this.translateService.use(this.selectedLanguage.label);
  }

  public onLanguageChange(selectedLanguage: LangMenuItem) {
    this.selectedLanguage = selectedLanguage;
    console.log('thth ' + this.selectedLanguage.label);
    this.translateService.use(this.selectedLanguage.label);
  }
}
