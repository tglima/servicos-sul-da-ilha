import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Mensagem } from '../models/mensagem.model';
import { environment } from '../../environments/environment';

const URL = (environment.apiUrl + 'mensagens');
const httpOptions = { headers: new HttpHeaders({ 'content-Type': 'application/json' })};

@Injectable()
export class MensagemService {

  constructor(private http: HttpClient ) { }

  public postMessage(msg: Mensagem) {
    return this.http.post(URL, JSON.stringify(msg), httpOptions);
  }

}
