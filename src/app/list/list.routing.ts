import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './components';


const listRoutes: Routes = [
    { path: '', component: ListComponent}
];

export const listRouting = RouterModule.forChild(listRoutes);