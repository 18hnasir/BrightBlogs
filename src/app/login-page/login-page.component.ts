import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor() { }

  users: any[] = []; //Holds a list of all users
  
  ngOnInit(): void {
  }

  switchUser(username: any) {
    let user = {"username": username.value};
    if(localStorage.getItem("users")) { //Fetch previous users in the local storage
      this.users = JSON.parse(localStorage.getItem("users")!); 
    }
    this.users.push(user); //add user to users array
    localStorage.setItem("users", JSON.stringify(this.users));
    localStorage.setItem("currentUser", username.value);
    username.value = "";
  }

}
