import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component-interaction',
  templateUrl: './component-interaction.component.html',
  styleUrls: ['./component-interaction.component.css']
})
export class ComponentInteractionComponent implements OnInit {
  @Input('parentData') public name:any;
  @Output() childEvent = new EventEmitter();
  serName:string = "Hey Panda";
  constructor() { }

  ngOnInit(): void {
  }
  
  onClick(){
    this.childEvent.emit(this.serName);
  }
}
