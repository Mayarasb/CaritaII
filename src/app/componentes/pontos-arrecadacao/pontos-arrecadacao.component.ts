import { CommonModule} from '@angular/common';
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
  showAlert = false;

  constructor(private fb: FormBuilder){
    this.formPontoArrecadacaoOng = this.fb.group({
        logradouro: ['',[Validators.required]],
        numero: ['',[Validators.required,Validators.minLength(2)]],
        bairro: ['', [Validators.required,Validators.minLength(5)]],
        cidade: ['', [Validators.required,Validators.minLength(2)]],
        estado: ['', [Validators.required,Validators.minLength(2)]],
        cep: ['', [Validators.required, Validators.pattern(/^\d{5}-\d{3}$/)]],

    });
  }
  
  onSubmit(): void {
    if (this.formPontoArrecadacaoOng.valid) {
      console.log('Formulário válido:', this.formPontoArrecadacaoOng.value);
      this.showAlert = true;
      setTimeout(() => (this.showAlert = false), 4000);
      this.formPontoArrecadacaoOng.reset();
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

