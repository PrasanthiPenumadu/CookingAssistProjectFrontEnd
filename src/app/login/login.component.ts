import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit() { }

  login(username: string, password: string) {
    console.log("username" + username);
    this.retrieveLogin(username, password);
  }


  retrieveLogin(username: string, password: string) {
    console.log("yerp");
    if (username === "pra" && password === "pra123"){
      this.router.navigate(['recipelist']);
      console.log("inside correct");
    }
   else if (username === "santhi" && password === "santhi123"){
      this.router.navigate(['recipelist']);
      console.log("inside correct");
    }
    // else
    //   this.router.navigate(['']);
  }
}


