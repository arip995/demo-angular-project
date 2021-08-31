import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  name = "Arindam";
  public address:{} = {
    firstAddress : "kalinga stadium",
    secondAddress : "New A.G Colony"
  };
  date = new Date();
  constructor() { }

  ngOnInit(): void {
  }

}
