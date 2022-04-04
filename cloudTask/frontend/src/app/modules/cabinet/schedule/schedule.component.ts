import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import * as _ from 'lodash'
@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['../../../components/home-page/home-page.component.scss','./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {
  employees: string[];
  public now: Date = new Date();
  currentWeek:any
  selectTab(e: any): void {
    this.router.navigate([`./${e.itemData.path}`], { relativeTo: this.route })
  }

  ngOnInit(): void {
    this.setActiveTab()

    this.router.events.subscribe(() => {
      this.setActiveTab()
    })
    let firstDay = new Date("08/30/2021")
    let firstDayInMs = firstDay.getTime()
    console.log(firstDay)
    console.log(firstDayInMs)
    let currentDay = new Date()
    let currentDayInMs = currentDay.getTime()
    console.log(currentDay)
    console.log(currentDayInMs)
    let diff = (currentDayInMs - firstDayInMs)/(7*24*60*60*1000)
    console.log(diff)
    let parity = diff %2
    console.log(parity)
    if (diff % 2 === 1) { 
      this.currentWeek = "Верхняя неделя"
    } else this.currentWeek = "Нижняя неделя"
  }
  constructor(
    public router:Router,
    private route: ActivatedRoute) {
      setInterval(() => {
        this.now = new Date();
      }, 1);
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
