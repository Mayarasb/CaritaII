import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pontos-arrecadacao-parceiro',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './pontos-arrecadacao-parceiro.component.html',
  styleUrl: './pontos-arrecadacao-parceiro.component.css'
})
export class PontosArrecadacaoParceiroComponent {

  addresses: number[] = [];

  addAddressForm(): void {
    if (this.addresses.length < 3) {
      this.addresses.push(this.addresses.length);
    }
  }

  removeAddressForm(index: number): void {
    this.addresses.splice(index, 1);
  }
}



