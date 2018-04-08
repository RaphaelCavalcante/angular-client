import { Component, OnInit } from '@angular/core';
import { PositionService } from '../../services/posittion/position.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers: [PositionService]
})
export class EmployeeComponent implements OnInit {

  constructor(
    private positionService: PositionService,
    private router: Router)
     { }

  ngOnInit() {
    // this.positionService.ping().subscribe(res => {
    //   console.log(res);
    // });
  }
  private addNew(){
    this.router.navigate(['add']);
  }
}
