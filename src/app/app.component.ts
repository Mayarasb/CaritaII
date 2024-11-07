import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainComponent } from "./main/main.component";
import { PaginaConteudoComponent } from './componentes/pagina-conteudo/pagina-conteudo.component';
import { PaginaSobreComponent } from './componentes/pagina-sobre/pagina-sobre.component';
import { PaginaComoajudarComponent } from './componentes/pagina-comoajudar/pagina-comoajudar.component';
import { PaginaUsuarioComponent } from './componentes/pagina-usuario/pagina-usuario.component';
import { DadosParceirosComponent } from './componentes/dados-parceiros/dados-parceiros.component';
import { DadosRepresentanteParceiroComponent } from './componentes/dados-representante-parceiro/dados-representante-parceiro.component';
import { DesativarParceiroComponent } from './componentes/desativar-parceiro/desativar-parceiro.component';
import { PontosArrecadacaoComponent } from './componentes/pontos-arrecadacao/pontos-arrecadacao.component';
import { PaginaLoginComponent } from './componentes/pagina-login/pagina-login.component';
import { PaginaCadastroComponent } from './componentes/pagina-cadastro/pagina-cadastro.component';
import { PaginaPrecadastroComponent } from './componentes/pagina-precadastro/pagina-precadastro.component';
import { PaginaContatoComponent } from './componentes/pagina-contato/pagina-contato.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MainComponent, PaginaConteudoComponent, PaginaSobreComponent, PaginaComoajudarComponent,PaginaUsuarioComponent,DadosParceirosComponent, DadosRepresentanteParceiroComponent, DesativarParceiroComponent, PontosArrecadacaoComponent, PaginaLoginComponent ,PaginaCadastroComponent, PaginaPrecadastroComponent, PaginaContatoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CaritaII';
}
