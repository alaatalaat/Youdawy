import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {SignupService} from '../signup.service';
import {FormGroup,FormControl, Validators} from '@angular/forms' ;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {

  signUpForm = new FormGroup({
    first_name : new FormControl('',[Validators.required]),
    last_name : new FormControl('',[Validators.required]),
    age :new FormControl('',[Validators.min(10),Validators.max(100),Validators.required]),
    email : new FormControl('',[Validators.email ,Validators.required]),
    passsword : new FormControl('',Validators.required)
  });


  constructor(private _SignupService:SignupService , public Routerlnk:Router){}
  msg:string = '';
  getFormData(data:any){
    if(this.signUpForm){
      this._SignupService.makeRegister(this.signUpForm.value).subscribe((x)=>{
        console.log(x);
        this.msg = x.message ;
      });
    }
   
    console.log(data);
  }

  getAlert(){
    this.Routerlnk.navigateByUrl("/login");
  } 

  ngOnInit(): void {}
}
