import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { MoviesPageComponent } from './movies-page/movies-page.component';
import { GamesPageComponent } from './games-page/games-page.component';
import { TvPageComponent } from './tv-page/tv-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AddBlogPageComponent } from './add-blog-page/add-blog-page.component';
import { FormsModule } from '@angular/forms';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { LoginPageComponent } from './login-page/login-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    MoviesPageComponent,
    GamesPageComponent,
    TvPageComponent,
    HomePageComponent,
    AddBlogPageComponent,
    BlogPageComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
