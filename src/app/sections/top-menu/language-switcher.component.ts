import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {
  LangMenuItem,
  langMenuitems,
  LanguageSwitcherService,
} from 'src/app/services/languageSwitcherService';

@Component({
  selector: 'language-switcher',
  templateUrl: './language-switcher.component.html',
  styleUrls: ['./language-switcher.component.scss'],
})
export class LanguageSwitcherComponent {
  selectedLanguage: LangMenuItem;
  langMenuitems = langMenuitems;

  constructor(
    private translateService: TranslateService,
    public languageSwitcherService: LanguageSwitcherService
  ) {
    this.selectedLanguage = this.languageSwitcherService.getSelectedLanguage();
    this.translateService.use(this.selectedLanguage.label);
  }

  public onLanguageChange(selectedLanguage: LangMenuItem) {
    this.selectedLanguage = selectedLanguage;
    this.translateService.use(this.selectedLanguage.label);
    this.languageSwitcherService.storeSelectedLanguage(this.selectedLanguage);
  }
}
