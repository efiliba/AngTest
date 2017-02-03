import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import homePageRoutes from './home-page.routes';

@NgModule({
  imports: [
    CommonModule,
    homePageRoutes
  ],
  declarations: [
    HomePageComponent,
  ],
  providers: [
  ]
})
export default class HomePageModule { }
