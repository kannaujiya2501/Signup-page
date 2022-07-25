import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ISignup } from '../isignup';
import { SignupService } from '../signup.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Inject(SignupService)

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  

  // email:FormControl=new FormControl("",[Validators.required,Validators.email]);
  // password:FormControl=new FormControl("",[Validators.required,Validators.minLength(8),Validators.maxLength(20)]);

  constructor( private signupServices: SignupService) { }


  ngOnInit(): void {
  }
  loginForm= new FormGroup({
    email:new FormControl("",[Validators.required,Validators.email]),
    password:new FormControl("",[Validators.required,Validators.minLength(8),Validators.maxLength(15)]),

  });
  get Email():FormControl{
    return this.loginForm.get('email') as FormControl;

  }
  get Password():FormControl{
    return this.loginForm.get('password') as FormControl;
  }
  loginSubmit ()
  {
  
    //this.signupServices.loginUser(this.loginForm.value.email,
      //this.loginForm.value.password).subscribe();
    
    
  }
  //this.signupServices.loginUser(this.loginForm)

  }
  


