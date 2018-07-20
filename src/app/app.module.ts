import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopComponent } from './components/top/top.component';
import { BottomComponent } from './components/bottom/bottom.component';
import { HomeComponent } from './components/home/home.component';
import { AnuncioComponent } from './components/anuncio/anuncio.component';
import { CategoriaComponent } from './components/categoria/categoria.component';
import { ContatoComponent } from './components/contato/contato.component';
import { ResumoPipe } from './pipes/resumo.pipe';
import { HttpClientModule } from '@angular/common/http';
import { IMaskModule } from 'angular-imask';
import { ReactiveFormsModule } from '@angular/forms';
import { SobreComponent } from './components/sobre/sobre.component';
import { Error503Component } from './components/error503/error503.component';
import { Error404Component } from './components/error404/error404.component';

@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    BottomComponent,
    HomeComponent,
    AnuncioComponent,
    CategoriaComponent,
    ContatoComponent,
    ResumoPipe,
    SobreComponent,
    Error503Component,
    Error404Component
  ],
  imports: [
    ReactiveFormsModule,
    IMaskModule,
    NgbModule.forRoot(),
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
