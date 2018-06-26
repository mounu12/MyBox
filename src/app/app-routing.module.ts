import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from 'src/app/components/common/login/login.component';
import { DashboardComponent } from 'src/app/components/admin/dashboard/dashboard.component';
import { AdminComponent } from 'src/app/modules/admin/admin.component';
import { McBreadcrumbsModule } from 'ngx-breadcrumbs';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent,
  children: [
    {path: 'dashboard' , component: DashboardComponent,data: {
      // Uses static text (Home)
      breadcrumbs: 'Home' 
    } }
  ] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  McBreadcrumbsModule.forRoot()
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
