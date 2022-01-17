import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { EmplyeeDialogComponent } from '../emplyee-dialog/emplyee-dialog.component';
import { Employee } from '../model/employee.model';
import { EmployeeService } from '../services/employee.service';





@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  columnNames: string[] = [
    'entityId', 'title', 'firstname', 'lastname', 'hireDate', 'city', 'email', 'mgrId']
  datasourceStream: MatTableDataSource<Employee>

  constructor(private _dialog: MatDialog, private eservice: EmployeeService) {
    this.datasourceStream = new MatTableDataSource();
  }

  ngOnInit(): void {
    this.datasourceStream.data = this.eservice.getEmployees()

  }
  openDialog(): void {
    this._dialog.open(EmplyeeDialogComponent, {
      width: '669px',

    }).afterClosed().subscribe(() => {
      this.datasourceStream.data = this.eservice.getEmployees();
    });


  }

}
