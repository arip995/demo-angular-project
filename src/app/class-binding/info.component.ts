import { Component, OnInit } from '@angular/core';
//class binding
@Component({
  selector: 'app-info',
  // templateUrl: './info.component.html',
  template:`<h1 [class]="a">Info of all api users</h1>
  <h2 class="test-success">Hey buddy</h2>
  <h3 [class.test-danger]="b">Danger buddy</h3>
  <h3 [ngClass]="messageClass">Danger buddy</h3>
  <h1 [style.color]="'blue'">Arindam Panda</h1>`,//style binding
  // styleUrls: ['./info.component.css']
  styles: [`
  .test-danger{
    color:red;
  }.test-success{
    color:green;
  }`]
})
export class InfoComponent implements OnInit {
  a = 'test-danger';
  b:boolean= true;
  messageClass ={
    'test-danger' :false,
    'test-success' :true
  }
  constructor() { 
  }

  ngOnInit(): void {
  }

}
