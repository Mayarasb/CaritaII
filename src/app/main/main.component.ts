import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { BannerPrincipalComponent } from '../componentes/banner-principal/banner-principal.component';
import { BannerSecundarioComponent } from '../componentes/banner-secundario/banner-secundario.component';
import { CardInformativoComponent } from "../componentes/card-informativo/card-informativo.component";
import { ComoajudarPIComponent } from '../componentes/comoajudar-pi/comoajudar-pi.component';
import { FooterComponent } from '../componentes/footer/footer.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [HeaderComponent, BannerPrincipalComponent, BannerPrincipalComponent, BannerSecundarioComponent, CardInformativoComponent,CardInformativoComponent,ComoajudarPIComponent,FooterComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
