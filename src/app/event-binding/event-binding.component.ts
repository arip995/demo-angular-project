import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {
  title="Learn event binding";
  name="";
  onClick(event:any){
    console.log(event);
    this.title="You have learnt event binding";
  }
  logValue(show:any){
    this.title=show;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
