import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesPageComponent } from './movies-page/movies-page.component';
import { GamesPageComponent } from './games-page/games-page.component';
import { TvPageComponent } from './tv-page/tv-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AddBlogPageComponent } from './add-blog-page/add-blog-page.component';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { LoginPageComponent } from './login-page/login-page.component';

const routes: Routes = [
  { path: 'movies-page', component: MoviesPageComponent}, 
  { path: 'games-page', component: GamesPageComponent},
  { path: 'tv-page', component: TvPageComponent}, 
  { path: 'home-page', component: HomePageComponent},
  { path: 'add-blog-page', component: AddBlogPageComponent},
  { path: 'blog-page', component: BlogPageComponent},
  { path: 'login-page', component: LoginPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
