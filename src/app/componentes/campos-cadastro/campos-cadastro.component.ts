import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-campos-cadastro',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './campos-cadastro.component.html',
  styleUrl: './campos-cadastro.component.css'
})
export class CamposCadastroComponent {
  myForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router){
    this.myForm = this.fb.group({
      email:['',[Validators.required, Validators.email]],
      CPF:['',[Validators.required,Validators.minLength(11)]],
      senha:['',[Validators.required, Validators.minLength(6)]]
    })
  }
  onSubmit(){
    console.log(this.myForm.value);
    console.log(">> ", this.myForm.valid);
    if(this.myForm.valid){
      console.log(this.myForm.value)
      this.router.navigate(['/pagina-preCadastro'])
  
  
    
    }
  }
}
