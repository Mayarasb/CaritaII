import { Component } from '@angular/core';
import { CardsInformativos } from '../../models/cards-informativos';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card-informativo',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './card-somoscarita.html',
  styleUrl: './card-somoscarita.component.css'
})
export class CardInformativoComponent {

  somosCarita :CardsInformativos[] = [
    {image: '/img/logo.png', title:'Somos a Caritá', description:'O site de divulgação de pontos de arrecadação de alimentos de Votorantim que visa auxiliar no combate à fome de forma eficiente, simplificando doações e garantindo melhor aproveitamento dos alimentos para famílias necessitadas.',button:'Leia Mais'}

  ]

  }
