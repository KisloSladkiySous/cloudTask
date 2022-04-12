import { Injectable } from '@angular/core';

export class Product {
  ID: string;

  name: string;

  expanded?: boolean;
  url?: string;
  childId?: string;
}

const products: Product[] = [
  {
    ID: '0',
    name: 'Главная',
    expanded: false,
    url:'main'
  }, 
  // {
  //   ID: '1',
  //   name: 'Предметы',
  //   expanded: false,
  //   url:'subjects'
  // }, 
  {
    ID: '4',
    name: 'Сообщения',
    expanded: false,
    url:'messages'
  }, 
  {
    ID: '5',
    name: 'Расписание',
    url:'schedule',
    expanded: false,
  },
  {
    ID: '5_1',
    childId:"5",
    name: 'Группы',
    expanded: false,
    url:'schedule/groups'
  },
  {
    ID: '5_2',
    childId:"5",
    name: 'Преподаватели',
    expanded:false,
    url:'schedule/lecturers'
  },
  // {
  //   ID: '5_3',
  //   childId:"5",
  //   name: 'Аудитории',
  //   expanded:false,
  //   url:'rooms'
  // },
  {
    ID: '52342325',
    name: 'О нас',
    url:'about-us',
    expanded: false,
  },
];

@Injectable()
export class MenuService {

isMenuOpen = false;
getProducts(): Product[] {
  return products;
}
}
