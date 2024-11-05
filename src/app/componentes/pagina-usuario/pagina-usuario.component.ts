import { Component } from '@angular/core';
import { HeaderComponent } from '../../header/header.component';
import { DadosInstituicaoComponent } from '../dados-instituicao/dados-instituicao.component';
import { DadosRepresentanteComponent } from '../dados-representante/dados-representante.component';
import { DesativarContaComponent } from '../desativar-conta/desativar-conta.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-pagina-usuario',
  standalone: true,
  imports: [HeaderComponent,DadosInstituicaoComponent,DadosRepresentanteComponent,DesativarContaComponent,FooterComponent],
  templateUrl: './pagina-usuario.component.html',
  styleUrl: './pagina-usuario.component.css'
})
export class PaginaUsuarioComponent {

}
