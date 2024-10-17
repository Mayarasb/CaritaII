import { Component } from '@angular/core';
import { CardsInformativos } from '../../models/cards-informativos';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-informativo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-informativo.component.html',
  styleUrl: './card-informativo.component.css'
})
export class CardInformativoComponent {

  somosCarita :CardsInformativos[] = [
    {image: 'img/freepik-export-20240423182946N0MK 1.png', title:'Somos a Caritá', description:'O site de divulgação de pontos de arrecadação de alimentos de Votorantim que visa auxiliar no combate à fome de forma eficiente, simplificando doações e garantindo melhor aproveitamento dos alimentos para famílias necessitadas.',button:'Leia Mais'}

  ]

  comoAjudar : CardsInformativos[] =[
    {image: '/img/help_5102230.png', title:'Como Ajudar', description:'Descubra os pontos de arrecadação de alimentos ou cadastre sua empresa para auxiliar na doação',button:'Leia Mais'},
  ]
}
