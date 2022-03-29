import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootComponent } from './root/root.component';
import { PanelComponent } from './panel/panel.component';
import { MenuComponent } from './menu/menu.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MenuService } from './services/menu-service/menu.service';
import { MessagesComponent } from './messages/messages.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { UrlEditorComponent } from './url-editor/url-editor.component';
import { HuiComponent } from './hui/hui.component';
import { LookupService } from './services/select-service/lookup.service';
import { DxLookupModule } from 'devextreme-angular/ui/lookup';
import { GroupsComponent } from './groups/groups.component';
import { LessonService } from './services/lesson.service';
import { LecturersComponent } from './lecturers/lecturers.component';




@NgModule({
  declarations: [
    RootComponent,
    PanelComponent,
    MenuComponent,
    MessagesComponent,
    ScheduleComponent,
    UrlEditorComponent,
    HuiComponent,
    GroupsComponent,
    LecturersComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    RootComponent, 
    PanelComponent,
    MenuComponent],
    providers:[MenuService,LookupService,LessonService]
})
export class CabinetModule { }
