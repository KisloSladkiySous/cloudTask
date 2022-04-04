import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import DevExpress from 'devextreme';
import ArrayStore from 'devextreme/data/array_store';
import DataSource from 'devextreme/data/data_source';
import { LessonService } from '../services/lesson.service';
import * as _ from 'lodash'
import { LookupService } from '../services/select-service/lookup.service';

export class Group {
  id_group: number;

  id_univercity: string;

  name_group: string;
}
export class Day  {
  day:string
}
@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss'],
})
export class GroupsComponent implements OnInit {
  groups: string[] = [];
  selectedGroup: string;
  selectedDay:string;
  selectedParity:number;
  dataSource!: DataSource[];
  paritySource: any;
  dayOfWeek: string[];
  form:FormGroup;
  columns: DevExpress.ui.dxDataGridColumn[] = [
    {
      dataField: 'order_num',
      dataType: 'string',
      caption: 'Номер пары',
      alignment: 'left',
      allowFiltering: true,
    },
    {
      dataField: 'time',
      dataType: 'string',
      caption: 'Время начала пары',
      alignment: 'left',
      allowFiltering: true,
    },
    {
      dataField: 'name_subject',
      dataType: 'string',
      caption: 'Название',
      alignment: 'left',
      allowFiltering: true,
      width:350
    },
    {
      dataField: 'name_teacher',
      dataType: 'string',
      caption: 'Преподаватель',
      alignment: 'left',
      allowFiltering: true,
    },
    {
      dataField: 'type',
      dataType: 'string',
      caption: 'Тип пары',
      alignment: 'left',
      allowFiltering: true,
    },
    {
      dataField: 'room',
      dataType: 'string',
      caption: 'Аудитория',
      alignment: 'left',
      allowFiltering: true,
    },
  ];

  constructor(public lookUp: LookupService, public lessons: LessonService) {
    this.dayOfWeek = lookUp.getDays();
    this.paritySource = new DataSource({
      store: new ArrayStore({
        data: lookUp.getParity(),
        key: 'name',
      }),
    });
  }
  ngOnInit(): void {
    this.getGroups();
    this.form = new FormGroup(
      {
        group: new FormControl('', Validators.required),
        parity: new FormControl('', Validators.required),
        day: new FormControl('', Validators.required)
      }
      )
  }
  getGroups() {
    this.lookUp.getGroups().subscribe((groups) => {
      groups.forEach((element) => {
        let name = element.name_group;
        this.groups.push(name);
      });
    });
  }
  getLessons() {

    let arr:any [] = []
    console.log(this.form)
    if (this.form.valid) { 
      this.lessons
      .getLessons(this.selectedGroup,this.selectedParity,this.selectedDay)
      .subscribe((lessons) => {
        arr = lessons
        let newarr =arr.filter(lesson => lesson["day"] === "Понедельник")
        console.log(newarr)
        this.dataSource = lessons;

      });
    }
     else { 
      this.form.get("group")?.markAsTouched();
      this.form.get("parity")?.markAsTouched();
      this.form.get("day")?.markAsTouched();
    }

  }
  groupChanged(data: any) {
    this.selectedGroup = data.value;
    console.log(this.selectedGroup);
  }
  dayChanged(data: any) {
    this.selectedDay = data.value;
    console.log(this.selectedDay);
  }

  parityChanged(data: any) {
    console.log(data)
    this.selectedParity = data.value.parity;
    console.log(this.selectedParity);
  }
}
