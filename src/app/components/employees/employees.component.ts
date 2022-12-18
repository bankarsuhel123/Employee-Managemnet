import { Component, OnInit } from '@angular/core';
import { emp } from 'src/app/modal/dataType';
import { CommomService } from 'src/app/services/commom.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
  empData: undefined | emp[]
  empDeleteMsg: undefined | string
  constructor(private api: CommomService) { }

  ngOnInit(): void {
    this.empDataList()
  }

  deleteEmpData(id: number) {
    console.log(id)
    this.api.deleteData(id).subscribe((res) => {
      if (res) {
        this.empDeleteMsg = "Data is Deleted";
        this.empDataList()

      }
    })
    setTimeout(() => {
      this.empDeleteMsg = undefined;
    }, 3000);
  }
  empDataList() {
    this.api.getEmpData().subscribe((res) => {
      if (res) {
        this.empData = res;
      }
    })
  }

}
