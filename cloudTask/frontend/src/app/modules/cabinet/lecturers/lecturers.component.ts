import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import ArrayStore from 'devextreme/data/array_store';
import DataSource from 'devextreme/data/data_source';
import { LessonService } from '../services/lesson.service';
import { Lecturer, LookupService } from '../services/select-service/lookup.service';
import DevExpress from 'devextreme';
import { finalize } from 'rxjs';
@Component({
  selector: 'app-lecturers',
  templateUrl: './lecturers.component.html',
  styleUrls: ['../groups/groups.component.scss','./lecturers.component.scss']
})
export class LecturersComponent implements OnInit {
  teachers: Lecturer[] = [];
  selectedDay: string;
  selectedLecturer:string;
  selectedParity:number;
  dataSource!: DataSource[];
  lecturerStore: any;
  dayOfWeek: string[];
  form:FormGroup;
  paritySource: any;
  newarr:any[]
  
  constructor(public lookUp: LookupService, public lessons: LessonService) {
    this.dayOfWeek = lookUp.getDays();
    this.lookUp.getLectures().pipe(
      finalize(() => { 
        this.lecturerStore = new DataSource({
          store: new ArrayStore({
            data: this.teachers,
            key: 'id_teacher',
          }),
          group: 'cathedra_name',
        });
        console.log(this.lecturerStore)
      })
    ).subscribe((lecturers) => {
      lecturers.forEach((element) => {
        let obj:any = {};
        obj["cathedra_name"] = element.cathedra_name;
        obj["id_teacher"] = element.id_teacher;
        obj["name_teacher"] = element.name_teacher;
        this.teachers.push(obj);
        
      });
      console.log(this.teachers);
    });
    this.paritySource = new DataSource({
      store: new ArrayStore({
        data: lookUp.getParity(),
        key: 'name',
      }),
    });
    console.log(this.paritySource)

  }
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
      dataField: 'name_subjectr',
      dataType: 'string',
      caption: 'Дисциплина',
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
  ngOnInit(): void {

    this.form = new FormGroup(
      {
        group: new FormControl('', Validators.required),
        parity: new FormControl('', Validators.required),
        day: new FormControl('', Validators.required)
      }
      )
  }
  lecturerChanged(data: any) {
    console.log(data)
    console.log(data)
    this.selectedLecturer = data.value.name_teacher;

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
  getLessons() {

    let arr:any [] = []
    console.log(this.form)
    if (this.form.valid) { 
      this.lessons
      .getLessonsByTeacher(this.selectedLecturer,this.selectedParity,this.selectedDay)
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
}
