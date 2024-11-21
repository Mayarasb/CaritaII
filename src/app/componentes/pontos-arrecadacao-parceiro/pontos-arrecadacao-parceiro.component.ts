import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-pontos-arrecadacao-parceiro',
  standalone: true,
  imports: [RouterLink,ReactiveFormsModule, CommonModule],
  templateUrl: './pontos-arrecadacao-parceiro.component.html',
  styleUrl: './pontos-arrecadacao-parceiro.component.css'
})
export class PontosArrecadacaoParceiroComponent {

  formPontoArrecadacaoParceiro: FormGroup;

  constructor(private fb: FormBuilder){
    this.formPontoArrecadacaoParceiro = this.fb.group({
        logradouro: ['',[Validators.required]],
        numero: ['',[Validators.required,Validators.minLength(2)]],
        bairro: ['', [Validators.required,Validators.minLength(5)]],
        cidade: ['', [Validators.required,Validators.minLength(2)]],
        estado: ['', [Validators.required,Validators.minLength(2)]],
        cep: ['', [Validators.required, Validators.pattern(/^\d{5}-\d{3}$/)]],

    });
  }
    onSubmit() {
      if (this.formPontoArrecadacaoParceiro.valid) {
        console.log('Formulário válido:', this.formPontoArrecadacaoParceiro .value);
      } else {
        console.log('Formulário inválido');
      }
    }
  

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



