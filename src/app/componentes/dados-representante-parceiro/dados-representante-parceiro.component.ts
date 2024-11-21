import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dados-representante-parceiro',
  standalone: true,
  imports: [RouterLink,CommonModule,ReactiveFormsModule],
  templateUrl: './dados-representante-parceiro.component.html',
  styleUrl: './dados-representante-parceiro.component.css'
})
export class DadosRepresentanteParceiroComponent {
  RepresentanteParceirosForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.RepresentanteParceirosForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],  // Usando array para validadores
      CPF: ['', [Validators.required, Validators.minLength(11)]],  // Usando array para validadores
      nome: ['', [Validators.required, Validators.minLength(3)]]  // Usando array para validadores
    });
  }

  onSubmit() {
    if (this.RepresentanteParceirosForm.valid) {
      // Exibe um alerta informando que os dados foram enviados
      alert('Dados enviados com sucesso!');

      // Reinicia o formulário
      this.RepresentanteParceirosForm.reset();

      
      // Caso o formulário não seja válido, exibe uma mensagem de erro
      alert('Por favor, preencha os campos corretamente.');
    }
  }
}


