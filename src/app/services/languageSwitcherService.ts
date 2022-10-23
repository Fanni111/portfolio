import { Injectable } from '@angular/core';

export interface LangMenuItem {
  title: string;
  label: string;
  icon: string;
}

export const langMenuitems: LangMenuItem[] = [
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

@Injectable({
  providedIn: 'root',
})
export class LanguageSwitcherService {
  getSelectedLanguage(): LangMenuItem {
    const preselectedLanguageSet = localStorage.getItem('selectedLanguage');
    if (preselectedLanguageSet === null) {
      return langMenuitems[0];
    } else {
      return JSON.parse(preselectedLanguageSet);
    }
  }

  storeSelectedLanguage(selectedLanguageToSave: LangMenuItem) {
    localStorage.setItem(
      'selectedLanguage',
      JSON.stringify(selectedLanguageToSave)
    );
  }
}
