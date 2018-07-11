import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import { Mensagem } from '../models/mensagem.model';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';

const API_URL = environment.apiUrl;

@Injectable()
export class MensagemService {

  constructor(private http: Http) { }

  public gravarMensagem(msg: Mensagem): Observable<number> {
    const headers: Headers = new Headers();
    msg.data = new Date();
    msg.msgLida = false;
    headers.append('Content-type', 'application/json');
    return this.http.post(
      `${API_URL}mensagens`, JSON.stringify(msg),
      new RequestOptions( { headers: headers })
    ).pipe(
      map( (res) => res.json().id )
    );
  }


}
