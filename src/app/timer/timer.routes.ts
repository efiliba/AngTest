import { Routes, RouterModule } from '@angular/router';
import { TimerComponent } from './timer.component';

const routes: Routes = [
    { path: '', component: TimerComponent },
];

export default RouterModule.forChild(routes);