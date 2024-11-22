import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-campos-login',
  standalone: true,
  imports: [RouterLink,ReactiveFormsModule,CommonModule],
  templateUrl: './campos-login.component.html',
  styleUrl: './campos-login.component.css'
})
export class CamposLoginComponent {
 myForm: FormGroup;

 constructor(private fb: FormBuilder, private router: Router){
  this.myForm = this.fb.group({
      email:['',[Validators.required, Validators.email]],
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

//   <a
//   routerLink="/pagina-preCadastro"
//   class="text-white text-decoration-none"
//   >Entrar</a
// >
}

}
