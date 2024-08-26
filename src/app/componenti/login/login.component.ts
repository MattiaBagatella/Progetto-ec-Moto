import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  Accesso = false
  nome : any= document.getElementById('NomeUtente')
  password : any= document.getElementById('Password') 

  goHomepage :string= 'homepage'

  ngOnInit(): void {
    
  }


  vaiLogin(){
    if(this.nome.value === 'Mattia Bagatella' && this.password.value === 'Password') {
      this.goHomepage = 'homepage'  
      return this.goHomepage
    }
    else {
        this.goHomepage = ''
        return this.goHomepage
    }
  }

  

}
