import { Component } from '@angular/core';
import { HeaderComponent } from '../../header/header.component';
import { CamposCadastroComponent } from '../campos-cadastro/campos-cadastro.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-pagina-cadastro',
  standalone: true,
  imports: [HeaderComponent, CamposCadastroComponent, FooterComponent],
  templateUrl: './pagina-cadastro.component.html',
  styleUrl: './pagina-cadastro.component.css'
})
export class PaginaCadastroComponent {

}
