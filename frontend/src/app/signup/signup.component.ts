import { Component, OnInit } from '@angular/core';
import{AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  registerUserData={
    "role":1
  }
  constructor(private _auth:AuthService,private _router:Router) { }
  registerUser(){
    this._auth.registerUser(this.registerUserData)
    .subscribe(
      res =>{
        console.log(res)
      localStorage.setItem('token',res.key)
      localStorage.setItem('userEmail',res.email)
      this._router.navigate(['/Courses'])
        },
      err => console.log(err)

    )
  }
  ngOnInit() {
  }

}
