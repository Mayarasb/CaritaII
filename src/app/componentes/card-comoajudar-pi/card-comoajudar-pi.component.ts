import { Component } from '@angular/core';
import { CardsInformativos } from '../../models/cards-informativos';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-comoajudar-pi',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-comoajudar-pi.component.html',
  styleUrl: './card-comoajudar-pi.component.css'
})
export class ComoajudarPIComponent {
  comoAjudar : CardsInformativos[] =[
    {image: '/img/help_5102230.png', title:'Como Ajudar', description:'Descubra os pontos de arrecadação de alimentos ou cadastre sua empresa para auxiliar na doação',button:'Leia Mais'},
  ]
}
