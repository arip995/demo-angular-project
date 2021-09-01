import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  getEmployees() {
    return (
      [
        {
          'id':1,
          'name':"Arindam",
          'age':20
        },{
          'id':2,
          'name':"Am",
          'age':21
        },{
          'id':3,
          'name':"An",
          'age':20
        }
      ]
    )
  }
  constructor() { }
}
