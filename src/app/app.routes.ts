import { Routes } from '@angular/router';
import { HomepageComponent } from './componenti/homepage/homepage.component';
import { ProfiloComponent } from './componenti/profilo/profilo.component';
import { PreferitiComponent } from './componenti/preferiti/preferiti.component';
import { ChatComponent } from './componenti/chat/chat.component';
import { LoginComponent } from './componenti/login/login.component';
import { NavComponent } from './componenti/nav/nav.component';
import { VendiComponent } from './componenti/vendi/vendi.component';

export const routes: Routes = [
    {path: '',component: LoginComponent },
    {path:'homepage',component: HomepageComponent},
    {path: 'nav',component: NavComponent},
    {path: 'profilo',component: ProfiloComponent},
    {path:'preferiti',component:PreferitiComponent},
    {path:'chat',component:ChatComponent},
    {path:'vendi',component:VendiComponent},

];
