import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AnunciosService } from '../../services/anuncios.service';
import { Anuncio } from '../../models/anuncio.model';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css'],
  providers: [ AnunciosService ]
})
export class CategoriaComponent implements OnInit {

  public anuncios: Array<Anuncio>;
  public titulo: string;
  public descricao: string;

  constructor(
    private route: ActivatedRoute,
    private anunciosService: AnunciosService,
    private router: Router
  ) { }

  ngOnInit() {
    this.carregarCategoria();
  }

  private carregarCategoria() {
    this.route.params.subscribe((parametro: Params) => {
      this.anunciosService.getAnuncioPorCat( parametro.categoria )
      .then((anuncios: Array<Anuncio>) => {
        this.anuncios = anuncios;
      })
      .then(() => {
        if (this.anuncios.length === 0) {
          this.router.navigate(['/not-found']);
        } else {
          this.anunciosService.getCategoria( this.anuncios[0].categoria )
          .then( (cat: any) => {
            this.titulo =  cat.titulo;
            this.descricao = cat.descricao;
          });
        }
      })
      .catch((err) => {
        console.error('Error ao carregar o anúncio: \n', err);
        this.anuncios = null;
      });
    });
  }

}
