import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Employee } from '../../../models/employee.model';
import { Router } from '@angular/router';
import { CompanyService } from '../../../services/company/company.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css'],
  providers: [CompanyService]
})
export class EmployeeFormComponent implements OnInit {
  private eForm: FormGroup;
  private hasCompany = false;
  private hasDepartment = false;

  private companies = new Array();
  private departments = new Array();
  private positions = new Array();

  constructor(
    private router: Router,
    private companyService: CompanyService) {
    this.eForm = new FormGroup({
      'employeeName': new FormControl('', Validators.required),
      'employeeEmail': new FormControl('', Validators.required),
      'employeePhone': new FormControl('', Validators.required),
      'company': new FormControl('', Validators.required),
      'department': new FormControl('', Validators.required),
      'position': new FormControl('', Validators.required),
    });
  }

  get employeeName() {
    return this.eForm.get('employeeName');
  }
  get employeeEmail() {
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
    this.companyService.findAll().subscribe(companies => {
      console.log(companies);
    });
  }
  saveEmployee(data) {
    const employee: Employee = new Employee(
      data.value.employeeName,
      data.value.employeePhone,
      data.value.employeeEmail,
      data.value.position,
    );
  }

  enableNext(next) {
    if (next === 2) {
      this.hasCompany = true;
    } else if (next === 3) {
      this.hasDepartment = true;
    }
  }
  cancel() {
    this.router.navigate(['home']);
  }
}
