import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list.component';
import { DetailComponent } from './detail.component';

const routes: Routes = [
    { path: '', component: ListComponent },
    { path: ':id', component: DetailComponent },
];

export default RouterModule.forChild(routes);