import { Component, OnInit } from '@angular/core';
import { AnunciosService } from '../../services/anuncios.service';
import { Observable, Subject, of } from 'rxjs';
import { Anuncio } from '../../models/anuncio.model';
import { debounceTime, distinctUntilChanged, switchMap, catchError, tap } from 'rxjs/operators';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css'],
  providers: [ AnunciosService ]
})
export class TopComponent implements OnInit {

  showResult: boolean;
  isCollapsed = true;
  anuncios: Observable<Anuncio[]>;
  private subjectPesquisa = new Subject<String>();

  constructor(private anunciosService: AnunciosService) { }

  ngOnInit() {
    this.anuncios = this.subjectPesquisa
    .pipe(
            tap(() => { this.showResult = false; }),
            debounceTime(750),
            distinctUntilChanged(),
            switchMap((termo: string) => {
              if (termo.trim() === '') {
                return of(  <Anuncio[]>([]) );
              }
              this.showResult = true;
              return this.anunciosService.pesquisarAnuncio(termo);
            }),
            catchError(err => {
              throw new Error(err.message);
            })
    );
  }

  public pesquisar(termoDaBusca: string): void {
    this.subjectPesquisa.next(termoDaBusca);
  }

  public limparPesquisa(): void {
    this.subjectPesquisa.next('');
    this.showResult = false;
  }

}
