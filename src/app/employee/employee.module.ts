import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesComponent } from './employees/employees.component';
import {MatTableModule} from '@angular/material/table';



@NgModule({
  declarations: [
    EmployeesComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
  ],
  exports: [EmployeesComponent]
})
export class EmployeeModule { }
