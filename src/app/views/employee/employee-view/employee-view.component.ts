import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../../services/employee/employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-view',
  templateUrl: './employee-view.component.html',
  styleUrls: ['./employee-view.component.css'],
  providers: [EmployeeService]
})
export class EmployeeViewComponent implements OnInit {
  private employee;
  private hasEmployee = false;
  constructor(
    private employeeService: EmployeeService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      if (params.id > 0) {
        this.employeeService.findCompleteEmployee(params.id).subscribe(employees=>{
          employees.forEach(employee=>{
            this.employee = employee;
            this.hasEmployee = true;
          })
        });
      }
    });
  }
  back(){
    this.router.navigate(['home']);
  }

}
