import { Component } from '@angular/core';
import { NAV_LINKS } from '../../content/landing-content';

@Component({
  selector: 'landing-navbar',
  standalone: true,
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css']
})
export class LandingNavbarComponent {
  protected readonly links = NAV_LINKS;
}
