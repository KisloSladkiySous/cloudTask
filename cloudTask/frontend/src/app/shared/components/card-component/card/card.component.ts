import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() title:string ='';
  @Input() description:string ='';
  @Input() path:string ='';
  @Input() url:string ='';
  doStuff(){ 
    console.log(this.router.url)
    this.router.navigate([`/cabinet/${this.url}`])
  }
  constructor(public router:Router) { }

  ngOnInit(): void {
  }

}
