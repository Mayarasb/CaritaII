import { Component } from '@angular/core';
import { HeaderComponent } from "../../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { ContatoComponent } from '../contato/contato.component';

@Component({
  selector: 'app-pagina-contato',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, ContatoComponent],
  templateUrl: './pagina-contato.component.html',
  styleUrl: './pagina-contato.component.css'
})
export class PaginaContatoComponent {

}
