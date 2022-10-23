import { Component, ViewEncapsulation } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {
  LangMenuItem,
  LanguageSwitcherService,
} from '../services/languageSwitcherService';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent {
  selectedLanguage: LangMenuItem;
  constructor(
    public translateService: TranslateService,
    public languageSwitcherService: LanguageSwitcherService
  ) {
    // this language will be used as a fallback when a translation isn't found in the current language
    /*translate.setDefaultLang('hu');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('hu');*/
    this.selectedLanguage = this.languageSwitcherService.getSelectedLanguage();
    this.translateService.use(this.selectedLanguage.label);
  }
}
