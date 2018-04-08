import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Employee } from '../../../models/employee.model';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {
  private eForm: FormGroup;
  constructor() {
    this.eForm = new FormGroup({
      'employeeName': new FormControl(  '', Validators.required ),
      'employeeEmail': new FormControl('', Validators.required ),
      'employeePhone': new FormControl('', Validators.required),
      'company': new FormControl('', Validators.required),
      'department': new FormControl('', Validators.required),
      'position': new FormControl('',Validators.required),
    })
  }

  get employeeName(){
    return this.eForm.get('employeeName');
  }
  get employeeEmail(){
    return this.eForm.get('employeeEmail');
  }
  get employeePhone() {
    return this.eForm.get('employeePhone');
  }
  get company() {
    return this.eForm.get('company');
  }
  get department() {
    return this.eForm.get('department');
  }
  get position() {
    return this.eForm.get('position');
  }
  ngOnInit() {
  }
  saveEmployee(data){
    // const employee: Employee= new Employee(
    //   data.value.employeeName,
    //   data.value.emploeeEmail,
    //   data.value.employeePhone,
    //   data.value.position,
    // );
    // console.log(employee);
  }
  enableNext(next){
    
  }
}
