import { Injectable } from '@angular/core';
import { BaseService } from '../service-base/base.service';
import { Http } from '@angular/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class PositionService extends BaseService {
  private url = environment.POSITION;
  
  constructor(http: Http) {
    super(http);
  }
  public ping() {
    return this.get(this.url);
  }
  public findAllEmployeesOnPosition(positionId){
    const requestUrl = `${this.url}/employees/${positionId}`;
    return this.get(requestUrl);
  }
}
