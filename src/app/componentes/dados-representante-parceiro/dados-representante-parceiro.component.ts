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
  showAlert = false;

  constructor(private fb: FormBuilder) {
    this.RepresentanteParceirosForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],  // Usando array para validadores
      CPF: ['', [Validators.required, Validators.minLength(11)]],  // Usando array para validadores
      nome: ['', [Validators.required, Validators.minLength(3)]]  // Usando array para validadores
    });
  }

  onSubmit(): void {
    if (this.RepresentanteParceirosForm.valid) {
      console.log('Formulário válido:', this.RepresentanteParceirosForm.value);
      this.showAlert = true;
      setTimeout(() => (this.showAlert = false), 4000);
      this.RepresentanteParceirosForm.reset();
    } else {
      console.log('Formulário inválido');
    }
  }
}


