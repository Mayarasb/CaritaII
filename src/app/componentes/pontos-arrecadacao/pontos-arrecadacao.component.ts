import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pontos-arrecadacao',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './pontos-arrecadacao.component.html',
  styleUrl: './pontos-arrecadacao.component.css'
})
export class PontosArrecadacaoComponent {

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

