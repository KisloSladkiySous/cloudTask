import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  passwordHide = true
  form:FormGroup
  // httpOptions: {headers:HttpHeaders} = { 
  //   headers: new HttpHeaders({'Content-Type': 'application/json'})
  // }
  constructor(
    public router:Router,
    public http:HttpClient,
  ) {}
  ngOnInit(): void {
    this.form = new FormGroup(
    {
      login: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    }
    )
  }
getTeachers() { 
  return this.http.get<any>('http://localhost:3000/lessons');
}
  login(){
    if (this.form.valid) {
      this.router.navigate(["/cabinet"])
    }
this.getTeachers().subscribe(value => { 
  console.log(value)
})
  }
}
