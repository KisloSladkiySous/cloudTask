import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Group } from '../../groups/groups.component';
export class Task {
  Id: number;

  Assigned: string;

  Subject: string;
}
export class Parity { 
  Id:number;
  name:string;
  parity:number;
}

export class Lecturer { 
  cathedra_name:string;
  name_teacher:string;
  id_teacher:number;
}
const parityList: Parity[] = [
  {
    Id:1,
    name:"Верхняя неделя",
    parity: 1,
  },
  
  {
    Id:2,
    name:"Нижняя неделя",
    parity: 2,
  }
];
const daysOfWeek: string[] = [
  'Понедельник','Вторник','Среда','Четверг','Пятница','Суббота'
];
const tasks: Task[] = [{
  Id: 1,
  Assigned: 'ИТ',
  Subject: 'Гадасин Д.В',
}, {
  Id: 2,
  Assigned: 'ИТ',
  Subject: 'Зазик Х.Т',
}, {
  Id: 3,
  Assigned: 'ИТ',
  Subject: 'Писюн МС',
}, {
  Id: 4,
  Assigned: 'ИТ',
  Subject: 'Хуй',
}, {
  Id: 5,
  Assigned: 'СИТИС',
  Subject: 'Федук',
}, {
  Id: 6,
  Assigned: 'СИТИС',
  Subject: 'Хохол дизайнер - горе в семье ',
}, {
  Id: 7,
  Assigned: 'СИТИС',
  Subject: 'Сема сверстал норм',
},];

@Injectable()
export class LookupService {

  baseUrl = environment.baseurl;
  constructor(
    public http:HttpClient
  ) { 
      
  }
  getGroups() {
    return this.http.get<Group[]>(`${this.baseUrl}/group`);
  }
  getDays(): string[] {
    return daysOfWeek;
  }
  getLectures() { 
    return this.http.get<Lecturer[]>(`${this.baseUrl}/grouped`)
  }
  getParity(): Parity[] {
    return parityList;
  }
  getTasks(): Task[] {
    return tasks;
  }
 
}
