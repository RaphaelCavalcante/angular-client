import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './views/employee/employee.component';
const routes: Routes = [
    {
        path:'', redirectTo: 'home', pathMatch: 'full'
    },
    {
        path:'home', component: EmployeeComponent
    }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }