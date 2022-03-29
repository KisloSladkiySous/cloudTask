import { NgModule } from '@angular/core';
import { CardComponent } from './components/card-component/card/card.component';
import { MatCardModule } from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { DxDrawerModule } from 'devextreme-angular/ui/drawer';
import { LeftMenuService } from './services/left-menu/left-menu.service';
import { LeftMenuComponent } from './components/left-menu/left-menu/left-menu.component';
import { DxListModule } from 'devextreme-angular/ui/list';
import { DxToolbarModule, } from 'devextreme-angular/ui/toolbar';
import { CommonModule } from '@angular/common';
import { DxTreeViewModule } from 'devextreme-angular/ui/tree-view';
import { RouterModule } from '@angular/router';
import { DxButtonModule, DxDataGridModule, DxTabPanelModule, DxTabsModule } from 'devextreme-angular';
import { DxLookupModule } from 'devextreme-angular';
import { DxoDropDownOptionsModule } from 'devextreme-angular/ui/nested';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    CardComponent,
    LeftMenuComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    BrowserModule,
    DxDrawerModule,
    DxListModule,
    DxToolbarModule,
    DxTreeViewModule,
    DxButtonModule,
    RouterModule,
    DxLookupModule,
    DxoDropDownOptionsModule,
    DxDataGridModule,
    ReactiveFormsModule,
    DxTabPanelModule,
    DxTabsModule

  ],
  exports: [
    CardComponent,
    LeftMenuComponent,
    CommonModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    BrowserModule,
    DxDrawerModule,
    DxListModule,
    DxToolbarModule,
    DxTreeViewModule,
    RouterModule,
    DxButtonModule,
    DxLookupModule,
    DxoDropDownOptionsModule,
    DxDataGridModule,
    ReactiveFormsModule,
    DxTabPanelModule,
    DxTabsModule,
  ],
  providers: [LeftMenuService]
})
export class SharedModule { }
