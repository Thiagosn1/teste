import { Component } from '@angular/core';

interface BrandLogo {
  alt: string;
  src: string;
}

@Component({
  selector: 'landing-logos',
  standalone: true,
  templateUrl: './logos.html',
  styleUrls: ['./logos.css']
})
export class LandingLogosComponent {
  protected readonly logos: BrandLogo[] = [
    { alt: 'Amazon', src: '/images/logo_amazon.svg' },
    { alt: 'Dribbble', src: '/images/logo_dribbble.svg' },
    { alt: 'HubSpot', src: '/images/logo_hubspot.svg' },
    { alt: 'Notion', src: '/images/logo_notion.svg' },
    { alt: 'Netflix', src: '/images/logo_netflix.svg' },
    { alt: 'Zoom', src: '/images/logo_zoom.svg' }
  ];

  protected readonly marqueeLoop: BrandLogo[] = [...this.logos, ...this.logos];
}
