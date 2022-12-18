import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { emp } from 'src/app/modal/dataType';
import { CommomService } from 'src/app/services/commom.service';

@Component({
  selector: 'app-emp-update',
  templateUrl: './emp-update.component.html',
  styleUrls: ['./emp-update.component.scss']
})
export class EmpUpdateComponent implements OnInit {
  empData: undefined | emp;
  empUpdateMsg: undefined | string
  constructor(private route: ActivatedRoute, private api: CommomService, private router: Router) { }

  ngOnInit(): void {
    let param = this.route.snapshot.paramMap.get('id')
    param && this.api.updateEmpData(param).subscribe((data) => {
      console.log(data)
      this.empData = data
    })
  }
  updateEmpData(data: emp) {
    if (this.empData) {
      data.id = this.empData.id;
    }
    this.api.updateAllEmpData(data).subscribe((res) => {
      if (res) {
        this.empUpdateMsg = "Data is Updated"
      }
    })
    setTimeout(() => {
      this.empUpdateMsg = undefined;
      this.router.navigate(['/emp-add'])

    }, 3000);
  }

}
