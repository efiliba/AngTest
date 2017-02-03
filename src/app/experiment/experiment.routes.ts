import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './test/test.component';

const routes: Routes = [
    { path: '', component: TestComponent }
];

export default RouterModule.forChild(routes);