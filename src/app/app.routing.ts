import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
    { path: '', loadChildren: './list/list.module#ListModule' },
    { path: 'auth', loadChildren: './auth/auth.module#AuthModule' },
    
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes, { enableTracing: false });