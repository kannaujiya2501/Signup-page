import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ISignup } from '../isignup';
import { SignupService } from '../signup.service';
@Inject(SignupService)

@Component({
  selector: 'app-get-alluser',
  templateUrl: './get-alluser.component.html',
  styleUrls: ['./get-alluser.component.css']
})
export class GetAlluserComponent implements OnInit {

  constructor( ) { }

  ngOnInit(): void {
  }

}
