import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';
import { AuthService } from 'src/app/modules/cabinet/services/auth.service';



@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  passwordHide = true;
  form: FormGroup;
  // httpOptions: {headers:HttpHeaders} = {
  //   headers: new HttpHeaders({'Content-Type': 'application/json'})
  // }
  constructor(public router: Router, public http: HttpClient,
    public authService:AuthService) {}
  ngOnInit(): void {
    this.form = new FormGroup({
      login: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }
  invalid = false;
  getTeachers() {
    return this.http.get<any>('http://localhost:3000/lessons');
  }
  // login() {
  //   if (this.form.valid) {
  //     this.router.navigate(['/cabinet']);
  //   }

  // }
  login(): void {
    this.authService
      .login(this.form.value.login, this.form.value.password).pipe(
        catchError((err):any => {
          this.invalid = true;
          console.log(this.invalid)
        })
      )
      .subscribe((res) => {
        if(!res) { 
          this.invalid = true ;
          console.log(1)
        }
      });
      this.form.markAllAsTouched

  }
}
