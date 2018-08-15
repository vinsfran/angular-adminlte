import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {PruebaComponent} from './prueba/prueba.component';
import {Prueba2Component} from './prueba2/prueba2.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent,
  },
  {
    path: 'prueba', component: HomeComponent,
    children: [{path: '', component: PruebaComponent}]
  },
  {
    path: 'prueba2', component: HomeComponent,
    children: [{path: '', component: Prueba2Component}]
  },
  {path: '', redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
