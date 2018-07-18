import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Anuncio } from '../models/anuncio.model';
import { retry } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

const anuncioAPI = (environment.apiUrl + 'anuncios');
const catAPI = (environment.apiUrl + 'categorias');

@Injectable()
export class AnunciosService {

  constructor(private http: HttpClient) { }

  getAnuncios(): Promise<Anuncio[]> {
    return this.http.get<Anuncio[]>(anuncioAPI + '?destaque=true')
      .pipe(retry(3))
        .toPromise()
          .then((res => {
            return res; }))
          .catch(err => {
            throw new Error(err.message);
          });
  }

  getAnuncioPorID(id: number): Promise<Anuncio> {
    return this.http.get(anuncioAPI + `?id=${id}`)
      .pipe(retry(3))
        .toPromise()
          .then((res => {
            return res[0]; }))
          .catch(err => {
              throw new Error(err.message);
            });
  }

  getAnuncioPorCat(cat: string): Promise<Anuncio[]> {
    return this.http.get<Anuncio[]>(anuncioAPI + `?categoria=${cat}`)
      .pipe(retry(3))
        .toPromise()
          .then((res => {
            return res; }))
          .catch(err => {
            throw new Error(err.message);
          });
  }

  getCategoria(cat: string): Promise<any> {
    return this.http.get(catAPI + `?url=${cat}`)
      .pipe(retry(3))
        .toPromise()
          .then((res => {
            return res[0]; }))
          .catch(err => {
            throw new Error(err.message);
          });
  }

  public pesquisarAnuncio(termo: string): Observable<Anuncio[]> {
    return this.http.get<Anuncio[]>(anuncioAPI + `?descricao_like=${termo}`)
      .pipe(retry(3));
  }

}
