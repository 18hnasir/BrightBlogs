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

  //Save the selected gameBlog into local so that 
  //we can retrieve that blog from the blogs array and
  //changes its values
  saveCurrentBlog(gameBlog: any) {
    localStorage.removeItem("currentBlog");
    localStorage.setItem("currentBlog", JSON.stringify(gameBlog));
  }

}
