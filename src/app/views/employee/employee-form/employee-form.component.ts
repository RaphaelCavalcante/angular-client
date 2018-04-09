import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Employee } from '../../../models/employee.model';
import { Router, ActivatedRoute } from '@angular/router';
import { CompanyService } from '../../../services/company/company.service';
import { DepartmentService } from '../../../services/department/department.service';
import { EmployeeService } from '../../../services/employee/employee.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css'],
  providers: [CompanyService, DepartmentService, EmployeeService]
})
export class EmployeeFormComponent implements OnInit {
  private eForm: FormGroup;
  private hasCompany = false;
  private hasDepartment = false;
  private hasPosition = false;
  private hasData = false;
  private isEdit = false;
  private companies = new Array();
  private departments = new Array();
  private positions = new Array();
  private employeeId;

  constructor(
    private router: Router,
    private companyService: CompanyService,
    private departmentService: DepartmentService,
    private employeeService: EmployeeService,
    private activatedRoute: ActivatedRoute) {
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
    this.activatedRoute.url.subscribe((url) => {
      if (url[0].path === "edit") {
        this.fillData(+url[1].path);
        this.isEdit = true;
      }

    });
    this.companyService.findAll().subscribe(companies => {
      this.companies = companies;
      this.hasCompany = true;
    });
  }
  fillData(id: number) {
    this.employeeService.findCompleteEmployee(id).subscribe(employee => {
      console.log(employee);
      employee.forEach(emp => {
        this.employeeId = id;
        this.employeeName.setValue(emp.employee_name);
        this.employeeEmail.setValue(emp.employee_email);
        this.employeePhone.setValue(emp.employees_phone);
        this.company.setValue(emp.company_name);
        this.department.setValue(emp.department_name);
        this.position.setValue(emp.positions_name);

        this.hasCompany = true;
        this.companyService.findAllDepartmentFromCompany(emp.company_id)
          .subscribe(departments => {
            this.departments = departments
            this.hasDepartment = true;
          });
        this.departmentService.findAllPositionsFromDepartment(emp.department_id).subscribe(positions => {
          this.positions = positions;
          this.hasPosition = true;
        })
      });
    });
  }
  saveEmployee(data) {
    let positionId = -1;
    if(this.isEdit){
      positionId = (this.positions.filter(item => {
        if(item.name === data.value.position) {
          return true;
        }
      }))[0].id;
    }else{
      positionId = data.value.position;
    }
    
    const employee: Employee = new Employee(
      data.value.employeeName,
      data.value.employeePhone,
      data.value.employeeEmail,
      positionId,
    );
    if(this.isEdit) {
      employee.id = this.employeeId;
      this.employeeService.updateEmployee(employee).subscribe(success => {
        console.log(success);
      }, error => console.log(error));
    } else {
      this.employeeService.saveEmployee(employee).subscribe(success => {
        console.log(success);
      }, error => console.log(error));
    }
  }

  enableNext(nextId, next) {
    if (nextId !== 0 && next === 'department') {
      this.companyService.findAllDepartmentFromCompany(nextId).subscribe(departments => {
        this.departments = departments;
        this.hasDepartment = true;
      });
    } else if (nextId !== 0 && next === 'position') {
      this.departmentService.findAllPositionsFromDepartment(nextId).subscribe(positions => {
        this.positions = positions;
        this.hasPosition = true;
      })
    }
  }
  cancel() {
    this.router.navigate(['home']);
  }
}
