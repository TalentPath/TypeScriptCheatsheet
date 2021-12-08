import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GenericsComponent } from './generics/generics.component';
import { UnionsComponent } from './unions/unions.component';
import { KeyofComponent } from './keyof/keyof.component';

@NgModule({
  declarations: [
    AppComponent,
    GenericsComponent,
    UnionsComponent,
    KeyofComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
