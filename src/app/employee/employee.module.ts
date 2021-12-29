import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesComponent } from './employees/employees.component';



@NgModule({
  declarations: [
    EmployeesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [EmployeesComponent]
})
export class EmployeeModule { }
