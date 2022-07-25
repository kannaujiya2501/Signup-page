import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ISignup } from './isignup';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor( private httpClient: HttpClient) { }

  AddUser(isignup:ISignup){
    this.httpClient.post<ISignup>("https://localhost:44382/api/SingUpWeb",isignup,{
      headers:{
        "Access-Control-Allow-Origin":"*"
      }

    }).subscribe(result=>console.log("Done"));
    
  }
  //login 
  loginbaseurl="https://localhost:44382/api/LoginForm";
  loginUser(login:Array<string>){
     return this.httpClient.post(this.loginbaseurl+'LoginUser+',{
      Email:login[0],
      Password:login[1]
    },
    {
      responseType:'text'
    }

      
    );
      
    

  }
}
