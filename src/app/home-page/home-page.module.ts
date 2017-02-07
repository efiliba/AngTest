import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RepeatDirective } from '../common/directives/ng-repeat.directive';
import { HomePageComponent } from './home-page.component';
import homePageRoutes from './home-page.routes';
import { BoardComponent } from './board/board.component';

@NgModule({
  imports: [
    CommonModule,
    homePageRoutes
  ],
  declarations: [
    RepeatDirective,
    HomePageComponent,
    BoardComponent
  ],
  providers: [
  ]
})
export default class HomePageModule { }
