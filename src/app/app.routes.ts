import { Routes } from '@angular/router';
import { DashboardComponent } from '../Component/dashboard/dashboard.component';
import { RiskOverviewComponent } from '../Component/risk-overview/risk-overview.component';
import { ComplianceStatusComponent } from '../Component/compliance-status/compliance-status.component';
import { SecurityAlertsComponent } from '../Component/security-alerts/security-alerts.component';
import { ReportsComponent } from '../Component/reports/reports.component';
import { SettingComponent } from '../Component/setting/setting.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: DashboardComponent
    },

    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'risk-overview',
        component: RiskOverviewComponent
    },
    {
        path: 'compliance-status',
        component: ComplianceStatusComponent
    },
    {
        path: 'security-alerts',
        component: SecurityAlertsComponent
    },
    {
        path: 'reports',
        component: ReportsComponent
    },
    {
        path: 'settings',
        component: SettingComponent
    }
];
