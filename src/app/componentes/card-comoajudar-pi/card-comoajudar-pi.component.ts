import { Component } from '@angular/core';
import { CardsInformativos } from '../../models/cards-informativos';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-comoajudar-pi',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './card-comoajudar-pi.component.html',
  styleUrl: './card-comoajudar-pi.component.css'
})
export class ComoajudarPIComponent {
  comoAjudar : CardsInformativos[] =[
    {image: '/img/PaginaInicial/help_5102230.png', title:'Como Ajudar', description:'Descubra os pontos de arrecadação de alimentos ou cadastre sua empresa para auxiliar na doação',button:'Leia Mais'},
  ]
}
