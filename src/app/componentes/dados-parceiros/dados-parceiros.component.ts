import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormBuilder,  FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dados-parceiros',
  standalone: true,
  imports: [RouterLink,ReactiveFormsModule,CommonModule],
  templateUrl: './dados-parceiros.component.html',
  styleUrl: './dados-parceiros.component.css'
})
export class DadosParceirosComponent {
  formParceiros: FormGroup;

  constructor(private fb: FormBuilder){
    this.formParceiros = this.fb.group({
      orgName: ['', [Validators.required, Validators.minLength(3)]],
      cnpj: ['', [Validators.required, Validators.pattern(/^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/)]],
      telefone: ['', [Validators.required, Validators.pattern(/^\(\d{2}\) \d{5}-\d{4}$/)]],
      email: ['', [Validators.required, Validators.email]],
      logradouro: ['', Validators.required],
      numero: ['',[Validators.required,Validators.minLength(2)]],
      bairro: ['', [Validators.required,Validators.minLength(5)]],
      cidade: ['', [Validators.required,Validators.minLength(2)]],
      estado: ['', [Validators.required,Validators.minLength(2)]],
      cep: ['', [Validators.required, Validators.pattern(/^\d{5}-\d{3}$/)]],
      horarioFuncionamento: ['',Validators.required],
      areaAtuacao: ['', Validators.required],
      logo: [null],
      documento: [null],
    });
  }

  onSubmit() {
    if (this.formParceiros.valid) {
      console.log('Formulário válido:', this.formParceiros.value);
    } else {
      console.log('Formulário inválido');
    }
  }

}
