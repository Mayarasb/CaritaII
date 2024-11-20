import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dados-representante',
  standalone: true,
  imports: [RouterLink,CommonModule,ReactiveFormsModule],
  templateUrl: './dados-representante.component.html',
  styleUrl: './dados-representante.component.css'
})
export class DadosRepresentanteComponent {
  myForm: FormGroup;
  constructor(private fb: FormBuilder){
    this.myForm = this.fb.group({
      email:['',Validators.required, Validators.email],
      CPF:['',Validators.required,Validators.minLength(11)],
      nome:['',Validators.required,Validators.minLength(3)]
    })
  }
  onSubmit(){
    console.log(this.myForm.value);
    if(this.myForm.valid){
      console.log(this.myForm.value)
    }
  }
}



 