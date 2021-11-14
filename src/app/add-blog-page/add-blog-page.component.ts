import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'add-blog-page',
  templateUrl: './add-blog-page.component.html',
  styleUrls: ['./add-blog-page.component.css']
})
export class AddBlogPageComponent implements OnInit {

  constructor() { }

  category: any;
  comments: any[] = [];
  blogs : any[] = []; //array containing all the blogs

  ngOnInit(): void {
  }

  // Function that adds a blog to the blogs array
  addBlog(title: { value: any; }, subTitle: { value: any; }, category: { value: any }, body: { value: any; }) {
    let blog = {"title": title.value, "subTitle": subTitle.value, "category": category, "body": body.value, "comments": []}; //make a blog object
    if(localStorage.getItem("blogs")) { //Fetch previous blogs in the local storage
      this.blogs = JSON.parse(localStorage.getItem("blogs")!); 
    }
    this.blogs.push(blog); //add blog to the blogs array
    localStorage.setItem("blogs", JSON.stringify(this.blogs)); //adds blogs array to local storage
    title.value = ""; //reset values on screen
    subTitle.value = "";
    body.value = "";

    alert("Blog was submitted");
  }

}
