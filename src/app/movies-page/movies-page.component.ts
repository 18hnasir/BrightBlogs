import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies-page',
  templateUrl: './movies-page.component.html',
  styleUrls: ['./movies-page.component.css']
})
export class MoviesPageComponent implements OnInit {

  constructor() { }

  blogs: any[] = [];
  movieBlogs: any[] = [];

  ngOnInit(): void {
    this.blogs = JSON.parse(localStorage.getItem("blogs")!);
    this.blogs.forEach((value) => {
      if (value.category == "Movie") {
        this.movieBlogs.push(value);
      }
    });
    localStorage.setItem("tbBlogs", JSON.stringify(this.movieBlogs));
  }

}
