import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { EmployeeComponent } from './views/employee/employee.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';
import { EmployeeListComponent } from './views/employee-list/employee-list.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    SidebarComponent,
    EmployeeFormComponent,
    EmployeeListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
