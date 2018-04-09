import { Injectable } from '@angular/core';
import { BaseService } from '../service-base/base.service';
import { Http } from '@angular/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class DepartmentService extends BaseService{
  private url= environment.DEPARTMENT;
  private urlCompany = environment.COMPANY;

  constructor(http: Http) { super(http); }

  public findALl(){
    return this.get(this.url);
  }
  public findAllPositionsFromDepartment(id) {
    return this.get(this.url+'/'+id+'/positions');
  }
}
