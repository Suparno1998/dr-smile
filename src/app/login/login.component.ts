import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username : string = "";
  password : string = "";
  errorFlag : boolean = false;
  errorMsg : string = "";
  constructor(private service : DataService,private router : Router) { }

  ngOnInit(): void {
  }
  login(){
    if(this.username === ""){
      this.errorFlag = true
      this.errorMsg = "Username cannot be empty"
      return
    }
    if(this.password === ""){
      this.errorFlag = true
      this.errorMsg = "Password cannot be empty"
      return
    }
    else{
      this.service.login({"username" : this.username,"password" : this.password}).then(res => {
        if(res){
            this.router.navigateByUrl('/check')
            return
        }
        else{
          this.errorFlag = true
          this.errorMsg = "Please enter valid credentials"
        }
      })
    }
  }
  removeError(){
    this.errorFlag = false
    this.errorMsg = ""
  }
}
