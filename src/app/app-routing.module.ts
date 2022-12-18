import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpUpdateComponent } from './components/emp-update/emp-update.component';
import { EmployeeAddComponent } from './components/employee-add/employee-add.component';
import { EmployeesComponent } from './components/employees/employees.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'emp-form', pathMatch: 'full'
  },
  {
    path: 'emp-form', component: EmployeeAddComponent
  },
  {
    path: 'emp-add', component: EmployeesComponent
  },
  {
    path: 'emp-update/:id', component: EmpUpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
