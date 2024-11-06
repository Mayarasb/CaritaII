import { Component } from '@angular/core';
import { HeaderComponent } from '../../header/header.component';
import { CamposLoginComponent } from '../campos-login/campos-login.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-pagina-login',
  standalone: true,
  imports: [HeaderComponent, CamposLoginComponent, FooterComponent],
  templateUrl: './pagina-login.component.html',
  styleUrl: './pagina-login.component.css'
})
export class PaginaLoginComponent {

}
