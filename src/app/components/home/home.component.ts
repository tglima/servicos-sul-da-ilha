import { Component, OnInit } from '@angular/core';
import { AnunciosService } from '../../services/anuncios.service';
import { Anuncio } from '../../models/anuncio.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ AnunciosService ]
})
export class HomeComponent implements OnInit {

  public anuncios: Array<Anuncio>;

  constructor(private anunciosService: AnunciosService) { }

  ngOnInit() {
    this.anunciosService.getAnuncios()
    .then((anuncios: Anuncio[] ) => {
      this.anuncios = anuncios;
    }).catch((param: any) => {
      console.log('Error ao carregar os anúncios: \n', param);
    });
  }

}
