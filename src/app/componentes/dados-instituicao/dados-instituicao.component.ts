import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-dados-instituicao',
  standalone: true,
  imports: [RouterLink, SidebarComponent],
  templateUrl: './dados-instituicao.component.html',
  styleUrl: './dados-instituicao.component.css'
})
export class DadosInstituicaoComponent {

}
