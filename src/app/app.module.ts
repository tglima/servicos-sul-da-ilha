import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopComponent } from './components/top/top.component';
import { BottomComponent } from './components/bottom/bottom.component';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { AnuncioComponent } from './components/anuncio/anuncio.component';
import { CategoriaComponent } from './components/categoria/categoria.component';
import { ContatoComponent } from './components/contato/contato.component';
import { ResumoPipe } from './pipes/resumo.pipe';
import { HttpClientModule } from '@angular/common/http';
import { IMaskModule } from 'angular-imask';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    BottomComponent,
    HomeComponent,
    ErrorComponent,
    AnuncioComponent,
    CategoriaComponent,
    ContatoComponent,
    ResumoPipe
  ],
  imports: [
    ReactiveFormsModule,
    IMaskModule,
    HttpModule,
    NgbModule.forRoot(),
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
