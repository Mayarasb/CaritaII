import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainComponent } from "./main/main.component";
import { PaginaConteudoComponent } from './componentes/pagina-conteudo/pagina-conteudo.component';
import { PaginaSobreComponent } from './componentes/pagina-sobre/pagina-sobre.component';
import { PaginaComoajudarComponent } from './componentes/pagina-comoajudar/pagina-comoajudar.component';
import { PaginaUsuarioComponent } from './componentes/pagina-usuario/pagina-usuario.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MainComponent, PaginaConteudoComponent, PaginaSobreComponent, PaginaComoajudarComponent,PaginaUsuarioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CaritaII';
}
