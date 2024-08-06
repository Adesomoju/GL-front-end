import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { CompanyRecordComponent } from './main/company-record/company-record.component';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'company-record', component: CompanyRecordComponent, canActivate: [AuthGuard] },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: '**', redirectTo: '/login' }
];
