import { Component, OnInit } from '@angular/core';
import { emp } from 'src/app/modal/dataType';
import { CommomService } from 'src/app/services/commom.service';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.scss']
})
export class EmployeeAddComponent implements OnInit {
  addDatamsg: string | undefined;
  mobNumberPattern = "^((\\+91-?)|0)?[0-9]{10}$";
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
  constructor(private api: CommomService) { }

  ngOnInit(): void {

  }

  addEmpData(data: emp) {
    console.log(data)
    this.api.addEmpData(data).subscribe((res) => {
      if (res) {
        this.addDatamsg = "Data Add Succesfully"
      }
      setTimeout(() => {
        this.addDatamsg = undefined;
      }, 3000);
    })
  }
}
