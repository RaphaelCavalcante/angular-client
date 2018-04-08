import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './views/employee/employee.component';
import { EmployeeFormComponent } from './views/employee/employee-form/employee-form.component';
const routes: Routes = [
    {
        path:'', redirectTo: 'home', pathMatch: 'full'
    },
    {
        path:'home', component: EmployeeComponent
    },
    {
        path:'add', component: EmployeeFormComponent
    }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }