import { Injectable } from '@angular/core';
import { BaseService } from '../service-base/base.service';
import { Http } from '@angular/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class CompanyService extends BaseService {
  private url = environment.COMPANY;
  constructor(http: Http) {
    super(http);
  }
  public findAll() {
    return this.get(this.url);
  }
}
