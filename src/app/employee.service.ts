import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  //private baseURL = "/api";

  constructor(private httpClient: HttpClient) { }

  createEmployee(employee: Employee): Observable<Object>{
    //return this.httpClient.post(`${this.baseURL}`+'/tutorials2', employee);
    return this.httpClient.post('/api/tutorials2', employee);
  }
}

