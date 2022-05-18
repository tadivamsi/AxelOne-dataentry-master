import { Component, OnInit } from '@angular/core';
import {LoginClass} from '../models/class';

import {FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';
import { LoginService } from '../service/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
userId:any;
  constructor(private loginservice:LoginService , private fb:FormBuilder, private router :Router) { }

  ngOnInit(): void {
    this.login();
  }
 loginForm=this.fb.group({
 userName:[''],
 password:['']
   });
 login(){
   const loginClass =new LoginClass (this.loginForm.controls['userName'].value,
                                      this.loginForm.controls['password'].value)

    this.loginservice
    .login (loginClass)
    .subscribe((res: any) => {
      console.log(res);
      if (res=='')
      {
        alert("Login Failed");
      }
      else
      {
        alert("Login Sucessful");
        this.userId=res[0].userId;
        console.log(this.userId);
        this.getUserById(this.userId)
        this.loginForm.reset();


          this.router.navigate(['admin'])
 }
    });
    localStorage.setItem('key',this.loginForm.controls['userName'].value)
  }

    getUserById(input:any){
      const obj={
        "userId":input
      }
      this.loginservice.getUserbyId(obj)
      .subscribe((res:any)=>{
        console.log(res)
      })
  }
}
