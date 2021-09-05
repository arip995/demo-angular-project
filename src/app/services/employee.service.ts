import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEmployee } from './employee';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private _url:string = 'https://jsonplaceholder.typicode.com/users';
  getEmployees(): Observable<IEmployee[]> {
    return (
      this.http.get<IEmployee[]>(this._url)
      // [
      //   {
      //     'id':1,
      //     'name':"Arindam",
      //     'age':20
      //   },{
      //     'id':2,
      //     'name':"Am",
      //     'age':21
      //   },{
      //     'id':3,
      //     'name':"An",
      //     'age':20
      //   }
      // ]
    )
  }
  constructor(private http: HttpClient) {
    //create an instance of the http clientto use it
   }
}
