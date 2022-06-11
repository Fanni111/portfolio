import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { WorkPageComponent } from '../work-page/work-page.component';

const routes: Routes = [
  { path: 'magamrol', component: HomeComponent},
  { path: '', redirectTo: '/magamrol', pathMatch: 'full' },
  { path: 'munkaim', component: WorkPageComponent},
  /*{ path: '', redirectTo: '/munkaim', pathMatch: 'full' },
  { path: 'kapcsolat', component: WorkPageComponent},
  { path: '/kap', component: WorkPageComponent},
  { path: '/munkaim', component: WorkPageComponent},
  { path: '#/munkaim', component: WorkPageComponent},*/

];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class RoutingModule { }
