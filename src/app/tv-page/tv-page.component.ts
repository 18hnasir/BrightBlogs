import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tv-page',
  templateUrl: './tv-page.component.html',
  styleUrls: ['./tv-page.component.css']
})
export class TvPageComponent implements OnInit {

  constructor() { }

  blogs: any[] = [];
  tvBlogs: any[] = [];

  ngOnInit(): void {
    this.blogs = JSON.parse(localStorage.getItem("blogs")!);
    this.blogs.forEach((value) => { //only get the TV blogs
      if (value.category == "TV") {
        this.tvBlogs.push(value); //place TV blog into tvBlogs array
      }
    });
    localStorage.setItem("tbBlogs", JSON.stringify(this.tvBlogs));
  }

  //Save the selected tvBlog into local so that 
  //we can retrieve that blog from the blogs array and
  //changes its values
  saveCurrentBlog(tvBlog: any) {
    localStorage.removeItem("currentBlog");
    localStorage.setItem("currentBlog", JSON.stringify(tvBlog));
  }

}
