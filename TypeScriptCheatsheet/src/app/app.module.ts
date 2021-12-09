import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GenericsComponent } from './generics/generics.component';
import { UnionsComponent } from './unions/unions.component';
import { KeyofComponent } from './keyof/keyof.component';
import { InterfacesComponent } from './interfaces/interfaces.component';
import { TypesComponent } from './types/types.component';
import { PartialComponent } from './partial/partial.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    GenericsComponent,
    UnionsComponent,
    KeyofComponent,
    InterfacesComponent,
    TypesComponent,
    PartialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
