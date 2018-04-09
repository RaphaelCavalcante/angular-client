import { Component, OnInit, NgZone } from '@angular/core';
import { PositionService } from '../../services/posittion/position.service';
import { Router } from '@angular/router';
import { EmployeeService } from '../../services/employee/employee.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Department } from '../../models/department.model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers: [EmployeeService]
})
export class EmployeeComponent implements OnInit {
  private ITEM_OPTIONS = {
    VIEW: 1,
    EDIT: 2,
    DELETE: 3
  }
  private employees = new Array<{ employee, filtered: boolean }>();
  private closeResult: string;
  private hasEmployees = false;
  private hasFilter = false;
  private filteredArray = new Array();
  private filter;

  constructor(
    private employeeService: EmployeeService,
    private modalService: NgbModal,
    private zone: NgZone,
    private router: Router) { }

  ngOnInit() {
    this.employeeService.findAllEmployee().subscribe(employees => {
      // this.employees = employees;
      employees.forEach(employee => {
        this.employees.push({ employee: employee, filtered: false });
        this.filteredArray = this.employees;
      })

      this.hasEmployees = true;

    });
  }
  private addNew() {
    this.router.navigate(['add']);
  }
  delete(content, employeeId) {
    this.modalService.open(content).result.then((result) => {
      this.employeeService.deleteEmployee(employeeId).subscribe(() => {
        this.zone.run(() => {
          this.employeeService.findAllEmployee().subscribe(response => {
            response.forEach(res => {
              this.employees.push({ employee: res, filtered: false });
              this.hasEmployees = true;
            })
          });
        });
      });
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`
    });
  }
  itemAction(option, params: any) {
    if(option === 1){
      this.router.navigate(['view',params]);
    }else if(option === 2){
      this.router.navigate(['edit', params]);
    }else {
      this.delete(params.content, params.employeeId)
    }
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  private filterTable(event, filter) {
    if (this.hasFilter && this.hasEmployees) {
      this.filteredArray = this.employees.filter(item => {
        if (filter == 0) {
          // return !this.searchContent(searchFor, item.employee.employee_name)
          if (!(item.employee.employee_name.toUpperCase().includes(event.toUpperCase()))) {
            return false;
          } else {
            return true;
          }
        } else if (filter == 1) {
          // return !this.searchContent(searchFor, item.employee.employee_email)
          // if (!(item.employee.employee_email.includes(event))) {
          //   return false;
          // } else {
          //   return true;
          // }
        } else if (filter == 2) {
          // return !this.searchContent(searchFor, item.employee.employee_phone)
          if (!(item.employee.employee_phone.includes(event.toUpperCase()))) {
            return false;
          } else {
            return true;
          }
        } else if (filter == 3) {
          // return !this.searchContent(searchFor, item.employee.company_name)
          if (!(item.employee.company_name.includes(event.toUpperCase()))) {
            return false;
          } else {
            return true;
          }
        } else if (filter == 4) {
          // return !this.searchContent(searchFor, item.employee.employee_department)
          if (!(item.employee.employee_department.includes(event.toUpperCase()))) {
            return false;
          } else {
            return true;
          }
        } else if (filter == 5) {
          // return !this.searchContent(searchFor, item.employee.employee_position)
          if (!(item.employee.employee_position.includes(event.toUpperCase()))) {
            return false;
          } else {
            return true;
          }
        }
      });
    }
  }
  private searchContent(searchFor, content) {
    let found = true;
    if (!(content.toUpperCase().includes(searchFor.toUpperCase()))) {
      found = false;
    }
    return true;

  }
  private setFilter(event) {
    if (event < 5) {
      this.filter = event;
      this.hasFilter = true;
    } else {
      this.hasFilter = true;
    }
  }
}
