import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from 'src/app/components/common/login/login.component';
import { DashboardComponent } from 'src/app/components/admin/dashboard/dashboard.component';
import { AdminComponent } from 'src/app/modules/admin/admin.component';
import { McBreadcrumbsModule , McBreadcrumbsConfig  } from 'ngx-breadcrumbs';
import { DevicemanagementComponent } from 'src/app/components/admin/terminalmanagementsystem/devicemanagement/devicemanagement.component';
import { TerminalmanagementsystemComponent } from 'src/app/modules/admin/terminalmanagementsystem/terminalmanagementsystem.component';
import { ModelmanagementComponent } from 'src/app/components/admin/terminalmanagementsystem/modelmanagement/modelmanagement.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent,
  children: [
    {path: 'dashboard' , component: DashboardComponent,
     data: {
      breadcrumbs: 'Dashboard'
      }
    },
    {
      path: 'terminalmanagementsystem' , component: TerminalmanagementsystemComponent,
      data: {
        breadcrumbs: 'Terminal Management System'
        },
        children: [
          {
            path: 'devicemanagement' , component: DevicemanagementComponent ,
            data: {
              breadcrumbs: 'Device Management'
            },
          },
          {
            path: 'modelmanagement' , component: ModelmanagementComponent,
            data: {
              breadcrumbs: 'Model Management'
            }
          }
        ]
      }
    ]}
  ];
@NgModule({
  imports: [RouterModule.forRoot(routes),
  McBreadcrumbsModule.forRoot()
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(breadcrumbsConfig: McBreadcrumbsConfig) {

    breadcrumbsConfig.postProcess = (x) => {

      // Ensure the first breadcrumb points to home
      let y = x;

      if (x.length && x[0].text !== 'Terminal Management System') {
        y = [
          {
            text: 'Terminal Management System',
            path: 'terminalmanagementsystem'
          }
        ].concat(x);
      }

      return y;
    };
  }
 }
