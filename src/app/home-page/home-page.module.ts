import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RepeatDirective } from '../common/directives/ef-repeat.directive';
import { ListDirective } from '../common/directives/ef-list.directive';
import { HomePageComponent } from './home-page.component';
import homePageRoutes from './home-page.routes';
import { BoardComponent } from './board/board.component';
import { TemplateService } from '../common/services/template.service';
import { TemplateStorage } from '../common/template-storage.component';
import { SurroundDirective } from '../common/directives/ef-surround.directive';

@NgModule({
  imports: [
    CommonModule,
    homePageRoutes
  ],
  declarations: [
    RepeatDirective,
    ListDirective,
    SurroundDirective,
    HomePageComponent,
    BoardComponent,
    TemplateStorage
  ],
  providers: [
    TemplateService
  ]
})
export default class HomePageModule { }
