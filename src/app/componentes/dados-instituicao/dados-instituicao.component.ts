import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-dados-instituicao',
  standalone: true,
  imports: [RouterLink,ReactiveFormsModule,CommonModule],
  templateUrl: './dados-instituicao.component.html',
  styleUrl: './dados-instituicao.component.css'
})
export class DadosInstituicaoComponent {
  formOrganizacao: FormGroup;

  constructor(private fb: FormBuilder){
    this.formOrganizacao = this.fb.group({
      orgName: ['', [Validators.required, Validators.minLength(3)]],
      cnpj: ['', [Validators.required, Validators.pattern(/^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/)]],
      telefone: ['', [Validators.required, Validators.pattern(/^\(\d{2}\) \d{5}-\d{4}$/)]],
      email: ['', [Validators.required, Validators.email]],
      endereco: this.fb.group({
        logradouro: ['', Validators.required],
        numero: ['',[Validators.required,Validators.minLength(2)]],
        bairro: ['', [Validators.required,Validators.minLength(5)]],
        cidade: ['', [Validators.required,Validators.minLength(2)]],
        estado: ['', [Validators.required,Validators.minLength(2)]],
        cep: ['', [Validators.required, Validators.pattern(/^\d{5}-\d{3}$/)]],
      }),
      chavePix: [''],
      site: [''],
      tipoInstituicao: ['', Validators.required],
      anoFundacao: ['', [Validators.required, Validators.pattern(/^\d{4}$/)]],
      areaAtuacao: ['', Validators.required],
      descricao: ['', [Validators.required, Validators.maxLength(500)]],
      logo: [null],
      documento: [null],
    });
  }

  onSubmit() {
    if (this.formOrganizacao.valid) {
      console.log('Formulário válido:', this.formOrganizacao.value);
    } else {
      console.log('Formulário inválido');
    }
  }
}

