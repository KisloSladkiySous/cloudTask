import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { DxDrawerComponent } from 'devextreme-angular';
import { LeftMenuService, Product } from 'src/app/shared/services/left-menu/left-menu.service';


@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.scss']
})
export class LeftMenuComponent  {
  createChildren: any;
  isMenuOpen = false;
  products: Product[];

  currentItem: Product;

  constructor(service: LeftMenuService) {
    this.products = service.getProducts();
    this.currentItem = this.products[0];
  }

  selectItem(e:any) {
    this.currentItem = e.itemData;
  }

  toolbarContent = [{
    widget: 'dxButton',
    location: 'before',
    options: {
      icon: 'menu',
      onClick: () => this.isMenuOpen = !this.isMenuOpen,
    },
  }];
}
