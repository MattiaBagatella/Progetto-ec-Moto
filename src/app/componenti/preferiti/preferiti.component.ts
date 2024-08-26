import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavComponent } from "../nav/nav.component";

@Component({
  selector: 'app-preferiti',
  standalone: true,
  imports: [RouterModule, NavComponent],
  templateUrl: './preferiti.component.html',
  styleUrl: './preferiti.component.css'
})
export class PreferitiComponent {

}
