import { Component } from '@angular/core';

import { BannerSobreComponent } from '../banner-sobre/banner-sobre.component';
import { CardSobrecaritaComponent } from '../card-sobrecarita/card-sobrecarita.component';
import { MissaoComponent } from '../missao/missao.component';
import { CardCompartilheComponent } from '../card-compartilhe/card-compartilhe.component';


@Component({
  selector: 'app-pagina-sobre',
  standalone: true,
  imports: [BannerSobreComponent,CardSobrecaritaComponent,MissaoComponent,CardCompartilheComponent,],
  templateUrl: './pagina-sobre.component.html',
  styleUrl: './pagina-sobre.component.css'
})
export class PaginaSobreComponent {

}
