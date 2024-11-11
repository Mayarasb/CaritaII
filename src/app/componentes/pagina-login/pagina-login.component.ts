import { Component } from '@angular/core';

import { CamposLoginComponent } from '../campos-login/campos-login.component';


@Component({
  selector: 'app-pagina-login',
  standalone: true,
  imports: [CamposLoginComponent],
  templateUrl: './pagina-login.component.html',
  styleUrl: './pagina-login.component.css'
})
export class PaginaLoginComponent {

}
