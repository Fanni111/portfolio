# Portfolio

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.0.

## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

CSEKKOLNI angular.json nál outputpath nak mi van megadva mert abba mappába volt buildelni fájlokat amit fel kell után tölteni forpsi webtárhelyre /docs vagy /dist folder pl
Github pages

ng build --prod --baseHref="https://fanni111.github.io/portfolio/"
Majd commitolni és pusholni

Egyedi weblapos

ng build --prod --baseHref="http://borbasfanni.hu"
a .htaccess fájl hozzáadva azért, hogy www.borbasfanni.hu-t is ítirányítsa ugyanerre a buildelt változatra (azaz borbasfanni.hu-ra) mivel enélkül a www.-s kezdtű oldal nem tölt be

Angol fordítás
2 nyelvválasztó komponens:
- switcher (desktop view): figyelni a scss ng deep override-ra
- toggle:

Ezeknél történik a nyelvválasztás amit ngx-translate csomaggal mukodik és egy hu.json és egy en.json fájlban vannak az adoatok melyet pipe-al a template html-ekbe injektáltam.  Trükkös megoldás van ahol konkrétan egyedi html komponensbe kellett berakni, ott trukk string concat:  <div class="work-item-title">{{'PROJECT.' + projectItem.title + '.TITLE' | translate}}</div>

