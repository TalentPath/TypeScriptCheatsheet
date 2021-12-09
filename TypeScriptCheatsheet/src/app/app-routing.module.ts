import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InterfacesComponent } from './interfaces/interfaces.component';
import { PartialComponent } from './partial/partial.component';
import { TypesComponent } from './types/types.component';
import { GenericsComponent } from './generics/generics.component';
import { UnionsComponent } from './unions/unions.component';
import { KeyofComponent } from './keyof/keyof.component';

const routes: Routes = [
  {path: 'interfaces', component: InterfacesComponent},
  {path: 'partial', component: PartialComponent},
  {path: 'types', component: TypesComponent},
  {path: 'generics', component: GenericsComponent},
  {path: 'unions', component: UnionsComponent},
  {path: 'keyof', component: KeyofComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }