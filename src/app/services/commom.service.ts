import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { emp } from '../modal/dataType';

@Injectable({
  providedIn: 'root'
})
export class CommomService {

  constructor(private http: HttpClient) { }

  addEmpData(data: emp) {
    return this.http.post(`http://localhost:3000/employees`, data)
  }

  getEmpData() {
    return this.http.get<emp[]>(`http://localhost:3000/employees`)
  }

  deleteData(id: number) {
    return this.http.delete(`http://localhost:3000/employees/${id}`)
  }
  updateEmpData(id: string) {
    return this.http.get<emp>(`http://localhost:3000/employees/${id}`)
  }
  updateAllEmpData(empData: emp) {
    return this.http.put<emp>(`http://localhost:3000/employees/${empData.id}`, empData)
  }
}
