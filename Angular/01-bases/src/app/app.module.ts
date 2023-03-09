import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContadorComponent } from './contador/contador-component';

import { HeroesModule } from './heroes/heroes.module';
import { MainPageComponent } from './dbz/main-page/main-page.component';
import { DbzModule } from './dbz/dbz.module';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    DbzModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
