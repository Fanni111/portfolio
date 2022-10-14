import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RoutingModule } from './routing/routing.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { HomeComponent } from './home/home.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TopMenuComponent } from './sections/top-menu/top-menu.component';
import { FooterComponent } from './sections/footer/footer.component';
import { WorkPageComponent } from './work-page/work-page.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { ExpandableProjectItemComponent } from './expandable-project-item/expandable-project-item.component';
import { WorkCategoryOverviewComponent } from './sections/work-category-overview/work-category-overview.component';
import { FloatingMenuComponent } from './work-page/floating-menu/floating-menu/floating-menu.component';
import { FloatingBtnComponent } from './work-page/floating-menu/floating-btn/floating-btn.component';
import { ImageSliderComponent } from './work-page/image-slider/image-slider.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { LanguageSwitcherComponent } from './sections/top-menu/language-switcher.component';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopMenuComponent,
    FooterComponent,
    WorkPageComponent,
    ExpandableProjectItemComponent,
    WorkCategoryOverviewComponent,
    FloatingMenuComponent,
    FloatingBtnComponent,
    ImageSliderComponent,
    LanguageSwitcherComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    RoutingModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatDividerModule,
    FlexLayoutModule,
    MatExpansionModule,
    NgbModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  exports: [
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    ImageSliderComponent,
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent, ImageSliderComponent],
})
export class AppModule {
  /**https://code-maze.com/angular-material-navigation/ */
}
