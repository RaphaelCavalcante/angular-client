import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { EmployeeComponent } from './views/employee/employee.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';
import { AppRoutingModule } from './app-routing.module';
import { Http, HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    SidebarComponent,
    EmployeeFormComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
