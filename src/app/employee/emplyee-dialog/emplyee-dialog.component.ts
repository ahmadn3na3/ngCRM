import { Component, OnInit } from '@angular/core';
import { DateAdapter } from '@angular/material/core';
import { FormBuilder, FormControl, FormGroup, PatternValidator, Validators } from '@angular/forms'
import { MatDialogRef } from '@angular/material/dialog';
import { map, Observable } from 'rxjs';
import { Employee } from '../model/employee.model';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-emplyee-dialog',
  templateUrl: './emplyee-dialog.component.html',
  styleUrls: ['./emplyee-dialog.component.scss'],

})
export class EmplyeeDialogComponent implements OnInit {

  employee: Employee = { entityId: 0 };
  employeeInput: FormGroup;

  constructor(private dateAdapter: DateAdapter<any>,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<EmplyeeDialogComponent>,
    private eservice: EmployeeService) {
    this.employeeInput = this.fb.group({
      title: [''],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      phone: ['', Validators.required],
      birthDate: ['', Validators.required],
      hireDate: [''],
      region: [''],
      country: [''],
      address: [''],
      postalcode: [''],
      extension: [''],
      titleOfCourtesy: [''],
      city: [''],
      email: ['', [Validators.email, Validators.required]],
      mobile: ['', [Validators.required,Validators.pattern('[0-9]{10}')]],  
      mgrId: ['']
    });
  }

  ngOnInit(): void {
    this.employeeInput.markAsDirty();

  }

  public get EmployeeInput(): FormGroup {
    return this.employeeInput;
  }

  public submit(): void {
    this.employee = this.employeeInput.value;
    console.log(this.employee);
    this.eservice.createEmployee(this.employee);
    this.dialogRef.close();
  }

  public cancel(): void {
    this.dialogRef.close();
  }


}
