import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import ArrayStore from 'devextreme/data/array_store';
import DataSource from 'devextreme/data/data_source';
import { LookupService } from '../services/select-service/lookup.service';
import * as _ from 'lodash'
@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['../../../components/home-page/home-page.component.scss','./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {
  employees: string[];
  selectedZazik:string;
  dataSource: any;
  valueChanged(data:any) {
    this.selectedZazik = data.value;
    console.log(this.selectedZazik)
  }
  valueChanged2($event:any){ 
    console.log($event)
  }
  selectTab(e: any): void {
    this.router.navigate([`./${e.itemData.path}`], { relativeTo: this.route })
  }

  ngOnInit(): void {
    this.setActiveTab()

    this.router.events.subscribe(() => {
      this.setActiveTab()
    })

  }
  constructor(service: LookupService,
    public router:Router,
    private route: ActivatedRoute) {
    this.dataSource = new DataSource({
      store: new ArrayStore({
        data: service.getTasks(),
        key: 'Id',
      }),
      group: 'Assigned',
    });
    // this.employees = service.getEmployees();
  }
  selectedItem: any = null

  setActiveTab(): void {
    this.selectedItem = _.find(this.menu, (item:any) => {
      return this.router.url.includes(item.path)
    })
  }

  menu:any [] = [
    {
      text: 'Расписание группы',
      template: 'app-dx-tab-item',
      path: 'groups',
    },
    {
      text: 'Расписание преподавателя',
      template: 'app-dx-tab-item',
      path: 'lecturers',
    },

  ]


}
