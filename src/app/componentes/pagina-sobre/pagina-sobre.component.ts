import { Component } from '@angular/core';
import { HeaderComponent } from '../../header/header.component';
import { BannerSobreComponent } from '../banner-sobre/banner-sobre.component';
import { CardSobrecaritaComponent } from '../card-sobrecarita/card-sobrecarita.component';
import { MissaoComponent } from '../missao/missao.component';
import { CardCompartilheComponent } from '../card-compartilhe/card-compartilhe.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-pagina-sobre',
  standalone: true,
  imports: [HeaderComponent,BannerSobreComponent,CardSobrecaritaComponent,MissaoComponent,CardCompartilheComponent,FooterComponent],
  templateUrl: './pagina-sobre.component.html',
  styleUrl: './pagina-sobre.component.css'
})
export class PaginaSobreComponent {

}
