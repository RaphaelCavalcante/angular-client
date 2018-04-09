import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { EmployeeComponent } from './views/employee/employee.component';
import { EmployeeFormComponent } from './views/employee/employee-form/employee-form.component';
import { AppRoutingModule } from './app-routing.module';
import { Http, HttpModule } from '@angular/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeViewComponent } from './views/employee/employee-view/employee-view.component';
import { DepartmentsComponent } from './views/departments/departments.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployeeFormComponent,
    EmployeeViewComponent,
    DepartmentsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    AngularFontAwesomeModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
