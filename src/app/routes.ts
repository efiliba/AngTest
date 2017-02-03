import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '', loadChildren: 'app/home-page/home-page.module' },
    { path: 'test', loadChildren: 'app/experiment/experiment.module' },
    { path: 'home', redirectTo: '/', pathMatch: 'full' }
];

export const Routing = RouterModule.forRoot(routes);