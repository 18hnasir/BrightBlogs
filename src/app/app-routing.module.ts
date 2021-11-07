import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesPageComponent } from './movies-page/movies-page.component';
import { GamesPageComponent } from './games-page/games-page.component';
import { TvPageComponent } from './tv-page/tv-page.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  { path: 'movies-page', component: MoviesPageComponent}, 
  { path: 'games-page', component: GamesPageComponent},
  { path: 'tv-page', component: TvPageComponent}, 
  { path: 'home-page', component: HomePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
