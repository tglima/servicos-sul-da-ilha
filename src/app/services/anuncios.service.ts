import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Anuncio } from '../models/anuncio.model';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const API_URL = environment.apiUrl;

@Injectable()
export class AnunciosService {

  constructor(private http: Http) { }

  public getAnuncios(): Promise<Anuncio[]> {

    return fetch(API_URL + 'anuncios?destaque=true')
    .then(res => res.json())
    .catch(err => {
      throw new Error(err.message);
    });
  }

  public getAnuncioPorID(id: number): Promise<Anuncio> {
    return this.http.get(API_URL + `anuncios?id=${id}`)
    .toPromise()
    .then((res => {
      return res.json()[0]; }))
    .catch(
      err => {
        throw new Error(err.message);
      });
  }

  public getAnuncioPorCat(cat: string): Promise<Anuncio[]> {
    return this.http.get(API_URL + `anuncios?categoria=${cat}`)
    .toPromise()
    .then((res => {
      return res.json(); }))
    .catch(
      err => {
        throw new Error(err.message);
      });
  }

  public getCategoria(cat: string): Promise<any> {
    return this.http.get(API_URL + `categorias?url=${cat}`)
    .toPromise()
    .then( (res => {
      return res.json()[0]; }))
    .catch(
      err => {
        throw new Error(err.message);
      });
  }

  public pesquisarAnuncio(termo: string): Observable<Anuncio[]> {
    return this.http.get(API_URL + `anuncios?descricao_like=${termo}`)
    .pipe( map(res => res.json() ));
  }

}
