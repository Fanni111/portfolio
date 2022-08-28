import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { WorkPageComponent } from '../work-page/work-page.component';

const routes: Routes = [
  { path: '',  component: HomeComponent },
  { path: 'magamrol', component: HomeComponent},
  { path: '', redirectTo: '/magamrol', pathMatch: 'full' },
  { path: 'munkaim', component: WorkPageComponent}

];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled', 
    
    relativeLinkResolution: 'legacy',
    onSameUrlNavigation: 'reload',
    useHash: true })
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class RoutingModule { }
