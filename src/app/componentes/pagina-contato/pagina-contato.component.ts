import { Component } from '@angular/core';

import { ContatoComponent } from '../contato/contato.component';

@Component({
  selector: 'app-pagina-contato',
  standalone: true,
  imports: [ ContatoComponent],
  templateUrl: './pagina-contato.component.html',
  styleUrl: './pagina-contato.component.css'
})
export class PaginaContatoComponent {

}
