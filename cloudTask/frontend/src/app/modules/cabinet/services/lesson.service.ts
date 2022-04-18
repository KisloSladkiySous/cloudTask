import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import DataSource from 'devextreme/data/data_source';
import { environment } from 'src/environments/environment';
export class Lesson {
  Id: number;

  Assigned: string;

  Subject: string;
}

@Injectable()
export class LessonService {
  baseUrl = environment.baseurl
  constructor(public http:HttpClient) { }
  getLessons(name_group:string,parity:any,day:any){ 
    let params = new HttpParams;
    params= params.append("name_group",name_group);
    params = params.append("parity",parity);
    params = params.append("day",day);

  return this.http.get<DataSource[]>(`${this.baseUrl}/lessons`, {
    params:params
  });
  }
  getLessonsByTeacher(name_teacher:string,parity:any,day:any){ 
    let params = new HttpParams;
    params= params.append("name_teacher",name_teacher);
    params = params.append("parity",parity);
    params = params.append("day",day);

  return this.http.get<DataSource[]>(`${this.baseUrl}/teacherLessons`, {
    params:params
  });
  }
}
