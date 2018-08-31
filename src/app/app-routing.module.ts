import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroComponent } from './hero/hero.component';
import { HomeComponent } from './home/home.component';
import {ShowcaseComponent} from './showcase/showcase.component';
import {AboutComponent} from './about/about.component';


const routes = [
  {path: '', component: HeroComponent, data: {state: 'hero'}},
  { path: 'skills', component: HomeComponent, data: { state: 'skills' } },
  { path: 'portfolio', component: ShowcaseComponent, data: { state: 'portfolio' } },
  { path: 'about', component: AboutComponent, data: { state: 'about' } },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

export const AppRouting = RouterModule.forRoot(routes, {
  useHash: true
});

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
}
