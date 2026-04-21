import { Component } from '@angular/core';
import { HERO_CONTENT } from '../../content/landing-content';

@Component({
  selector: 'landing-hero',
  standalone: true,
  templateUrl: './hero.html',
  styleUrl: './hero.css'
})
export class LandingHeroComponent {
  protected readonly content = HERO_CONTENT;
}
