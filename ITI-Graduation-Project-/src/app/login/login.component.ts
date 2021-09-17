import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {FormGroup,FormControl, Validators} from '@angular/forms' ;
import {SignupService } from '../signup.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // username:string ="";
  // password:any ="";
  // errormsg:any ="";
  // errormsgflag = true;
  // constructor(public Routerlnk:Router) { }

  // save(d:any){
  //   console.log(d)
  // }
  // display(){
  //   console.log(this.password)
  // }
  // redAdmin(x:any , y:any){
  //   if( x.value=="admin" && y.value =="admin"){
  //     this.Routerlnk.navigateByUrl("/admin")
  //     this.errormsgflag = true;
  //   }
  //   else{
  //     this.errormsg ="اسم المستخدم او الرقم السري قد يكون خاطئ!";
  //     this.errormsgflag =false;
  //   }
  // }

  constructor(public Routerlnk:Router , private _SignupService:SignupService) { }

  loginForm = new FormGroup({
    email : new FormControl('',[Validators.email ,Validators.required]),
    passsword : new FormControl('',Validators.required) 
  });

  msg:string = '';
  login(){
    if(this.loginForm.valid == true){
      this._SignupService.makeLogin(this.loginForm.value).subscribe((res)=>{
        console.log(res);
        this.msg = res.message ;
      });
    }
  }
  ngOnInit(): void {
  }

}
