import { Component } from '@angular/core';
import { CategoriasPix } from '../../models/cards-informativos';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pagina-pix',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pagina-pix.component.html',
  styleUrl: './pagina-pix.component.css'
})
export class PaginaPixComponent {

  cardspix: CategoriasPix [] = [
    {image: '/img/Como_Ajudar/ongfictica2.png', title:'ONG 1', description:'Com o projeto Mesa Solidária, a ong visa fornecer cestas básicas mensais para famílias em situação de vulnerabilidade na cidade de Votorantim. O foco é garantir que essas famílias tenham acesso a alimentos nutritivos e essenciais.',site:'www.ong1.org.br', chavepix: 'ong1@exeample.com',qrcode: '/img/Como_Ajudar/qrcode.png'},
    {image: '/img/Como_Ajudar/Ong 2.png', title:'ONG 2', description:'Com o projeto Mãos que ajudam, a associação fornece marmitas para pessoas em situação de rua. Além da alimentação, a associação também busca proporcionar um momento de acolhimento e dignidade.',site:'www.ong2.org.br', chavepix: 'ong2@example.com',qrcode: '/img/Como_Ajudar/qrcode.png'},
    {image: '/img/Como_Ajudar/ong3.png', title:'ONG 3', description:'O projeto Cozinha Solidária é uma iniciativa que prepara e distribui refeições quentes para famílias necessitadas, especialmente idosos e crianças. O centro comunitário também oferece aulas de culinária para ensinar receitas econômicas e nutritivas.',site:'>www.ong3.org.br', chavepix: 'ong3@example.com',qrcode: '/img/Como_Ajudar/qrcode.png'},
    {image: '/img/Como_Ajudar/ong 4.png', title:'ONG 4', description:'O Instituto Y trabalha com famílias de baixa renda e comunidades carentes, oferecendo suporte através de doações de alimentos e oficinas de culinária básica para promover uma alimentação saudável e sustentável.',site:'www.ong4.org.br', chavepix: ' ong4@example.com',qrcode:'/img/Como_Ajudar/qrcode.png'},
    {image: '/img/Como_Ajudar/ong 5.png', title:'ONG 5', description:'Com um projeto voltado para o apoio de mães solteiras e suas crianças. O objetivo é fornecer cestas básicas que incluam não apenas alimentos essenciais, mas também itens de higiene infantil e fórmulas lácteas, garantindo uma alimentação adequada e cuidados básicos.',site:'www.ong5.org.br', chavepix: 'ong5@example.co',qrcode: '/img/Como_Ajudar/qrcode.png'},
   ]
  
   
}
