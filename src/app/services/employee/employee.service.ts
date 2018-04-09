import { Injectable } from '@angular/core';
import { BaseService } from '../service-base/base.service';
import { Http } from '@angular/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class EmployeeService extends BaseService {
  private url = environment.EMPLOYEE;
  constructor(http: Http) {
    super(http);
  }

  saveEmployee(employee){
    return this.post(this.url, employee);
  }
  findAllEmployee(){
    return this.get(this.url+'/findAll');
  }
  findCompleteEmployee(employeeId) {
    return this.get(this.url+'/'+employeeId);
  }
  deleteEmployee(employeeId){
    return this.delete(this.url+'/'+employeeId, '');
  }
  updateEmployee(employee){
    return this.put(this.url+'/'+employee.id, employee);
  }
}
