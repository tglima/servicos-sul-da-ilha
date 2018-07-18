import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { AnuncioComponent } from './components/anuncio/anuncio.component';
import { CategoriaComponent } from './components/categoria/categoria.component';
import { ContatoComponent } from './components/contato/contato.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contato', component: ContatoComponent },
  { path: 'anuncio', component: HomeComponent },
  { path: 'anuncio/:id', component: AnuncioComponent },
  { path: 'cat', component: HomeComponent },
  { path: 'cat/:categoria', component: CategoriaComponent },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    NgbModule.forRoot()
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
