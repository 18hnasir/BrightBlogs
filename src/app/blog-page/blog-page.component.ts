import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.css']
})
export class BlogPageComponent implements OnInit {

  constructor() { }

  blogs: any[] = [];
  comments: any[] = [];
  currentBlog : any;
  currentUser: any;

  ngOnInit(): void {
    this.currentBlog = JSON.parse(localStorage.getItem("currentBlog")!);
    this.comments = this.currentBlog.comments;
    this.blogs = JSON.parse(localStorage.getItem("blogs")!);
    this.currentUser = localStorage.getItem("currentUser");
  }

  makeComment(comment: any) {
    let commentObject = {"uname": this.currentUser, "comment" : comment.value};
    this.blogs.forEach((value) => { 
      if (value.title == this.currentBlog.title) {
        value.comments.push(commentObject); //added comment to the blogObject
        localStorage.setItem("blogs", JSON.stringify(this.blogs)); //updated blogs array in local
        this.comments.push(commentObject); //update the comments array to display comments in real time. 
        comment.value = ""; //reset the input section on screen
      }
    });
  }
}
