import { Component } from '@angular/core';
import { LandingHeroComponent } from './sections/hero/hero';
import { LandingLogosComponent } from './sections/logos/logos';
import { LandingNavbarComponent } from './sections/navbar/navbar';
import { LandingServicesComponent } from './sections/services/services';
import { LandingCaseStudiesComponent } from './sections/case-studies/case-studies';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    LandingNavbarComponent,
    LandingHeroComponent,
    LandingLogosComponent,
    LandingServicesComponent,
    LandingCaseStudiesComponent
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {}
