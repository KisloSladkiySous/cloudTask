
import { Routes } from '@angular/router';
import { HomePageComponent } from 'src/app/components/home-page/home-page.component';
import { GroupsComponent } from './groups/groups.component';
import { HuiComponent } from './hui/hui.component';
import { LecturersComponent } from './lecturers/lecturers.component';

import { MessagesComponent } from './messages/messages.component';
import { RootComponent } from './root/root.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { UrlEditorComponent } from './url-editor/url-editor.component';



 export  const cabinetRoutes: Routes = [
   {
     path: '',
     component: RootComponent,
     children: [
       {
         path: 'main',
         component: HomePageComponent,
       },
       {
         path: 'messages',
         component: MessagesComponent,
       },
       {
         path: 'schedule',
         component: ScheduleComponent,

         children: [
           {
             path: 'groups',
             component: GroupsComponent,
           },
           {
            path: 'lecturers',
            component: LecturersComponent,
          },
         ],
       },
       {
         path: 'editor',
         component: UrlEditorComponent,
       },
       {
         path: '404',
         component: HuiComponent,
       },
       { path: '**', redirectTo: 'main' },
     ],
   },

   {
     path: '**',
     redirectTo: '',
   },
 ];

