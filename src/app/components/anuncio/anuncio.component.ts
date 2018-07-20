import { Component, OnInit } from '@angular/core';
import { AnunciosService } from '../../services/anuncios.service';
import { Anuncio } from '../../models/anuncio.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-anuncio',
  templateUrl: './anuncio.component.html',
  styleUrls: ['./anuncio.component.css'],
  providers: [ AnunciosService ]
})
export class AnuncioComponent implements OnInit {

  public anuncio: Anuncio;

  constructor(
    private route: ActivatedRoute,
    private anunciosService: AnunciosService,
    private router: Router,
    private modalService: NgbModal ) { }

  ngOnInit() {
    this.carregarAnuncio();
  }

  private carregarAnuncio() {
    this.route.params.subscribe((parametro: Params) => {
      this.anunciosService.getAnuncioPorID( parametro.id )
      .then((anuncio: Anuncio) => {
        this.anuncio = anuncio;
      })
      .then( () => {
        if (this.anuncio === undefined) {
          this.router.navigate(['/404']);
        }
      })
      .catch( (err) => {
        console.error('Error ao carregar o anúncio: \n', err);
        this.anuncio = null;
      });
    });
  }

  openModal(content) {
    this.modalService.open(content);
  }

}
