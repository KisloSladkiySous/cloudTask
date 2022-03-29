import { animate, style, transition, trigger } from '@angular/animations';
import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import {  Product } from 'src/app/shared/services/left-menu/left-menu.service';
import { MenuService } from '../services/menu-service/menu.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  animations:[trigger('animationTriggerName', [
    transition('void => *', [
      style({ left: -300 }),
      animate('0.5s', style({ left:0 })),
    ]),
    transition('* => void', [
      animate('0.5s', style({ left: -300 })),
    ]),
  ])]
})
export class MenuComponent  {
  createChildren: any;
  products: Product[];
  url: Product;
  innerWidth:any;
  currentItem
  @HostListener('window:resize', ['$event'])
  onResize(event:any) {
    this.innerWidth = window.innerWidth;
    console.log(this.innerWidth)
  }
  
  constructor(
    public menu: MenuService,
    public router: Router
    ) {
      this.products = menu.getProducts();
      this.currentItem = this.products[0];

  }

  selectItem(e:any) {
    console.log(e);
    this.url = e.itemData.url;
    console.log(this.url)
    this.router.navigate([`/cabinet/${this.url}`])
  }


}
