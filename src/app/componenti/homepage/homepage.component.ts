import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MotoService } from '../../service/moto.service';
import { NavComponent } from "../nav/nav.component";

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [RouterModule, NavComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {
  cards : any= []
  miPiace : string = 'bi bi-heart'

  constructor(public MotoServizio : MotoService){}
   
  ngOnInit(): any {
    this.cards = this.MotoServizio.moto;
}

cambiaLike(){
  this.miPiace = 'bi bi-heart-fill'
}

}
