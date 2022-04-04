import { LOCALE_ID, NgModule } from '@angular/core';
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
import { AboutUsComponent } from './about-us/about-us.component';

import { registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru';

registerLocaleData(localeRu, 'ru');
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
    LecturersComponent,
    AboutUsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    RootComponent, 
    PanelComponent,
    MenuComponent],
    providers:[
      MenuService,
      LookupService,
      LessonService,
      { provide: LOCALE_ID, useValue: 'ru' }
    ]
})
export class CabinetModule { }
