import { Component } from '@angular/core';
import { LandingHeroComponent } from './sections/hero/hero';
import { LandingLogosComponent } from './sections/logos/logos';
import { LandingNavbarComponent } from './sections/navbar/navbar';
import { LandingServicesComponent } from './sections/services/services';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    LandingNavbarComponent,
    LandingHeroComponent,
    LandingLogosComponent,
    LandingServicesComponent
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {}
