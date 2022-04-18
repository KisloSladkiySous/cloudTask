import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";

import { BehaviorSubject } from "rxjs";
import { shareReplay, tap } from "rxjs/operators";

export interface User {
  id: number;
  nickname: string;
  email: string;
  password: string;
}


@Injectable({
  providedIn: "root",
})
export class AuthService {
  private url = "http://localhost:3000/auth";

  isUserLoggedIn$ = new BehaviorSubject<boolean>(false);
  userId: Pick<User, "id">;
  nickname:string
  httpOptions: { headers: HttpHeaders } = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}


  // login( email: Pick<User, "nickname">,  password: Pick<User, "password"> ): Observable<{token: string;userId: Pick<User, "id"> }> {
  //   return this.http
  //     .post(`${this.url}/login`, { email, password }, this.httpOptions)
  //     .pipe(

  //       first(),

  //       tap((tokenObject: { token: string; userId: Pick<User, "id"> }) => {
  //         this.userId = tokenObject.userId;
  //         localStorage.setItem("token", tokenObject.token);
  //         this.isUserLoggedIn$.next(true);
  //         this.router.navigate(["home"]);
  //       }),
    
  //     );
  // }
  login( nickname:any,  password:any ) { 
    return this.http
                .post(`${this.url}/login`, { nickname, password }, this.httpOptions)
                .pipe(
                  tap(res => this.setSession(res)),
                  shareReplay()
                )
           
                
  }
  setSession(authResult:any) { 
console.log(authResult)
  localStorage.setItem('_token', authResult.token);
  localStorage.setItem('nickname', authResult.userName);
  this.nickname = authResult.userName
  this.router.navigate(["/cabinet"])
  }
}