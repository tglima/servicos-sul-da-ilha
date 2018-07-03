import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Anuncio } from '../models/anuncio.model';
import { environment } from '../../environments/environment';

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

}
