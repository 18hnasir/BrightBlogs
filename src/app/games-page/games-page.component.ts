import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-games-page',
  templateUrl: './games-page.component.html',
  styleUrls: ['./games-page.component.css']
})
export class GamesPageComponent implements OnInit {

  constructor() { }

  blogs: any[] = [];
  gameBlogs: any[] = [];

  ngOnInit(): void {
    this.blogs = JSON.parse(localStorage.getItem("blogs")!);
    this.blogs.forEach((value) => {
      if (value.category == "Game") {
        this.gameBlogs.push(value);
      }
    });
    localStorage.setItem("tbBlogs", JSON.stringify(this.gameBlogs));
  }

}
