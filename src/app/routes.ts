import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { TestComponent } from './experiment/test/test.component';

export const appRoutes: Routes = [
    { path: 'home', component: HomePageComponent },
    { path: 'test/:id', component: TestComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];