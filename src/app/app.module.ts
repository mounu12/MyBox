import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/common/header/header.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { LoginComponent } from './components/common/login/login.component';
import { AdminComponent } from './modules/admin/admin.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { SidebarComponent } from './components/common/sidebar/sidebar.component';
import { McBreadcrumbsModule } from 'ngx-breadcrumbs';
import { TerminalmanagementsystemComponent } from 'src/app/modules/admin/terminalmanagementsystem/terminalmanagementsystem.component';
import { DevicemanagementComponent } from './components/admin/terminalmanagementsystem/devicemanagement/devicemanagement.component';
import { DataTableModule } from "ng2-data-table";
import { ModelmanagementComponent } from './components/admin/terminalmanagementsystem/modelmanagement/modelmanagement.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    AdminComponent,
    DashboardComponent,
    SidebarComponent,
    TerminalmanagementsystemComponent,
    DevicemanagementComponent,
    ModelmanagementComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    McBreadcrumbsModule,
    DataTableModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
