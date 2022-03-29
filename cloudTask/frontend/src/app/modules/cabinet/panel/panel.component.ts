import { Component, OnInit } from '@angular/core';
import { MenuService } from '../services/menu-service/menu.service';


@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss'],

})
export class PanelComponent implements OnInit {

  constructor(
    public menu:MenuService
  ) { }

  ngOnInit(): void {
  }
  menuState() { 
    console.log(1);
    this.menu.isMenuOpen = !this.menu.isMenuOpen;
  }
  // toolbarContent = [{
  //   widget: 'dxButton',
  //   location: 'before',
  //   options: {
  //     icon: 'menu',
  //     onClick: () => {
  //       console.log(1);
  //       this.menu.isMenuOpen = !this.menu.isMenuOpen;
  //       console.log(this.menu.isMenuOpen)
  //       return this.menu.isMenuOpen 
  //     },
  //   },
  // }];
}
