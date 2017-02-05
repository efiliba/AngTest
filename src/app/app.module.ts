import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

import { Routing } from './routes';
// import { ContactComponent } from './star-wars/list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    // ListComponent
  ],
  imports: [
    BrowserModule,
    Routing,
    FormsModule,
    HttpModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
