import { Component, OnInit } from '@angular/core';
import { PositionService } from '../../services/posittion/position.service';
import { CompanyService } from '../../services/company/company.service';
import { DepartmentService } from '../../services/department/department.service';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css'],
  providers: [CompanyService, DepartmentService, PositionService]
})
export class DepartmentsComponent implements OnInit {
  private companies = new Array;
  private departments = new Array<{position, employees}>();
  private positionPerson = new Array;

  private hasCompany = false;
  private hasDepartment = false;
  private hasPosition = false;

  constructor(
    private positionService: PositionService,
    private departmentService: DepartmentService,
    private companyService: CompanyService) { }

  ngOnInit() {
    this.companyService.findAll().subscribe(companies => {
      this.companies = companies;
      this.hasCompany = true;
    })
  }
  next(companyId) {
    if (companyId > 0) {
      this.companyService.findAllDepartmentFromCompany(companyId).subscribe(departments => {
        this.departments = departments;
        this.hasDepartment = true;
      })
    }
  }
  displayPositions(departmentId) {
    if (departmentId > 0) {
      this.departmentService.findAllPositionsFromDepartment(departmentId).subscribe(positions => {
        positions.forEach(position=>{
          this.positionPerson= new Array<{position, employees}>();
          this.positionService.findAllEmployeesOnPosition(position.id).subscribe(persons=>{
            this.positionPerson.push({position: position, employees: persons});
            this.hasPosition = true;
          });
        });
      })
    }
  }
}
