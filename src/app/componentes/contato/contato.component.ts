import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
 
@Component({
  selector: 'app-contato',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.css'
})
export class ContatoComponent {
  ContatoForm: FormGroup;
  showAlert = false;

 constructor(private fb: FormBuilder){
this.ContatoForm = this.fb.group({
    nome:['',[Validators.required, Validators.minLength(2)]],
    email:['',[Validators.required, Validators.email]],
    mensagem:['',[Validators.required, Validators.minLength(5)]]
  })
 }
 
 onSubmit(): void {
  if (this.ContatoForm.valid) {
    console.log('Formulário válido:', this.ContatoForm.value);
    this.showAlert = true;
    setTimeout(() => (this.showAlert = false), 4000);
    this.ContatoForm.reset();
  } else {
    console.log('Formulário inválido');
  }
}
 
}
 
