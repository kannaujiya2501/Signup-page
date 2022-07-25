import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ISignup } from '../isignup';
import { SignupService } from '../signup.service';
import { FormControl } from '@angular/forms';

@Inject(SignupService)

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  username:FormControl=new FormControl("");
  email:FormControl =new FormControl("");
  password:FormControl=new FormControl("");


  constructor( private signupServices: SignupService) { }

  ngOnInit(): void {
  }
  save(){
    let signup:ISignup={
      username:this.username.value,
      email:this.email.value,
      password:this.password.value
    };
    this.signupServices.AddUser(signup);
    alert("saved data")
  }

}
