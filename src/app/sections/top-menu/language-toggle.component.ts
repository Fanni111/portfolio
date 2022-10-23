import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {
  LangMenuItem,
  LanguageSwitcherService,
} from 'src/app/services/languageSwitcherService';

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
      title: 'Magyar',
      label: 'hu',
      icon: '../../../assets/images/icons/flag_hu.svg',
    },
    {
      title: 'Angol',
      label: 'en',
      icon: '../../../assets/images/icons/flag_en.svg',
    },
  ];

  constructor(
    private translateService: TranslateService,
    public languageSwitcherService: LanguageSwitcherService
  ) {}

  public onLanguageChange(selectedLanguage: LangMenuItem) {
    this.selectedLanguage = selectedLanguage;
    this.translateService.use(this.selectedLanguage.label);
    this.languageSwitcherService.storeSelectedLanguage(this.selectedLanguage);
  }
}
