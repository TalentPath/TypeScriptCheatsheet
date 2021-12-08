import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InterfacesComponent } from './interfaces/interfaces.component';
import { PartialComponent } from './partial/partial.component';
import { TypesComponent } from './types/types.component';

const routes: Routes = [
  {path: 'interfaces', component: InterfacesComponent},
  {path: 'partial', component: PartialComponent},
  {path: 'types', component: TypesComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }