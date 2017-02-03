import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page.component';

const routes: Routes = [
    { path: '', component: HomePageComponent }
];

export default RouterModule.forChild(routes);