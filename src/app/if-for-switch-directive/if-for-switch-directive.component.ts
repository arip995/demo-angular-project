import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-if-for-switch-directive',
  templateUrl: './if-for-switch-directive.component.html',
  styleUrls: ['./if-for-switch-directive.component.css']
})
export class IfForSwitchDirectiveComponent implements OnInit {
  isRender:boolean = false;
  color:string = "red";
  names=["Ar","Am","An"];
  onClick(){
    this.isRender = true;
  }
  constructor() { }

  ngOnInit(): void {
    
  }

}
