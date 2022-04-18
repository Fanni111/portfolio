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
import { MatMenuModule} from '@angular/material/menu';
import {MatDividerModule} from '@angular/material/divider';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TopMenuComponent } from './sections/top-menu/top-menu.component';
import { FooterComponent } from './sections/footer/footer.component';
import { WorkPageComponent } from './work-page/work-page.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { ExpandableProjectItemComponent } from './expandable-project-item/expandable-project-item.component';
import { WorkCategoryOverviewComponent } from './sections/work-category-overview/work-category-overview.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopMenuComponent,
    FooterComponent,
    WorkPageComponent,
    ExpandableProjectItemComponent,
    WorkCategoryOverviewComponent
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
    MatExpansionModule
  ],
  exports:[
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

  /**https://code-maze.com/angular-material-navigation/ */
}
