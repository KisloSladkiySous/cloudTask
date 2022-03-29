import { Injectable } from '@angular/core';

export class Product {
  ID: string;

  name: string;

  expanded?: boolean;

  categoryId?: string;

  icon?: string;

  price?: number;
}

const products: Product[] = [
  {
    ID: '1',
    name: 'Stores',
    expanded: false,
  }, 
  {
    ID: '2',
    name: 'Zazik',
    expanded: false,
  }, 
  {
    ID: '3',
    name: 'Hui',
    expanded: false,
  }, 
  {
    ID: '4',
    name: 'BadTitya',
    expanded: false,
  }, 
];

@Injectable()
export class LeftMenuService {
  getProducts(): Product[] {
    return products;
  }
}
