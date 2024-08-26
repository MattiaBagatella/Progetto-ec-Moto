import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PreferitiComponent } from "../preferiti/preferiti.component";
import { NavComponent } from "../nav/nav.component";

@Component({
  selector: 'app-profilo',
  standalone: true,
  imports: [RouterModule, PreferitiComponent, NavComponent],
  templateUrl: './profilo.component.html',
  styleUrl: './profilo.component.css'
})
export class ProfiloComponent {

}
