import { Routes, RouterModule } from '@angular/router';

export const appRoutes: Routes = [
    { path: '', loadChildren: 'app/home-page/home-page.module'},
    { path: 'test/:id', loadChildren: 'app/experiment/experiment.module' },
    { path: 'home', redirectTo: '/', pathMatch: 'full' }
];

export const Routing = RouterModule.forRoot(appRoutes);