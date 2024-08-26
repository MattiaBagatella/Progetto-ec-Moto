import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavComponent } from "../nav/nav.component";

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [RouterModule, NavComponent],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent {

}
