import { Routes, RouterModule } from '@angular/router';
import { AuthComponent, RegisterComponent, LoginComponent } from './components';


const authRoutes: Routes = [
    { path: '', component: AuthComponent,
    children: [
        { path: 'login', component: LoginComponent },
        { path: '', component: RegisterComponent },
    ]}
];

export const authRouting = RouterModule.forChild(authRoutes);