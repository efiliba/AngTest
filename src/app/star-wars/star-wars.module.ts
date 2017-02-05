import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { DetailComponent } from './detail.component';
import { HttpModule} from '@angular/http';
import starWarsRoutes from './star-wars.routes';

@NgModule({
  imports: [
    CommonModule,
    starWarsRoutes,
    HttpModule
  ],
  declarations: [
    ListComponent,
    DetailComponent
  ],
  providers: [
    { provide: 'starWarsApiUrl', useValue: 'https://starwars-json-server-ewtdxbyfdz.now.sh'}
  ]
})
export default class StarWarsModule { }