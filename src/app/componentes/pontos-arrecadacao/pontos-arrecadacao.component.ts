import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-pontos-arrecadacao',
  standalone: true,
  imports: [RouterLink,ReactiveFormsModule, CommonModule],
  templateUrl: './pontos-arrecadacao.component.html',
  styleUrl: './pontos-arrecadacao.component.css'
})
export class PontosArrecadacaoComponent {

  formPontoArrecadacaoOng: FormGroup;

  constructor(private fb: FormBuilder){
    this.formPontoArrecadacaoOng = this.fb.group({
        logradouro: [''],
        numero: ['',[Validators.required,Validators.minLength(2)]],
        bairro: ['', [Validators.required,Validators.minLength(5)]],
        cidade: ['', [Validators.required,Validators.minLength(2)]],
        estado: ['', [Validators.required,Validators.minLength(2)]],
        cep: ['', [Validators.required, Validators.pattern(/^\d{5}-\d{3}$/)]],

    });
  }
    onSubmit() {
      if (this.formPontoArrecadacaoOng.valid) {
        console.log('Formulário válido:', this.formPontoArrecadacaoOng.value);
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

