import { Component } from '@angular/core';

type CardTheme = 'light' | 'green' | 'dark';
type LabelTone = 'green' | 'white';

interface ServiceCard {
  titleLines: string[];
  theme: CardTheme;
  labelTone: LabelTone;
  contentWidth: number;
  headingWidth: number;
  labelWidths: number[];
  image: string;
  illustrationHeight: number;
  flipX?: boolean;
}

@Component({
  selector: 'landing-services',
  standalone: true,
  templateUrl: './services.html',
  styleUrls: ['./services.css']
})
export class LandingServicesComponent {
  protected readonly cards: ServiceCard[] = [
    {
      titleLines: ['Search engine', 'optimization'],
      theme: 'light',
      labelTone: 'green',
      contentWidth: 221,
      headingWidth: 221,
      labelWidths: [221, 197],
      image: '/images/services-1.svg',
      illustrationHeight: 170
    },
    {
      titleLines: ['Pay-per-click', 'advertising'],
      theme: 'green',
      labelTone: 'white',
      contentWidth: 209,
      headingWidth: 209,
      labelWidths: [209, 178],
      image: '/images/services-2.svg',
      illustrationHeight: 147.62
    },
    {
      titleLines: ['Social Media', 'Marketing'],
      theme: 'dark',
      labelTone: 'white',
      contentWidth: 197,
      headingWidth: 197,
      labelWidths: [197, 161],
      image: '/images/services-3.svg',
      illustrationHeight: 210
    },
    {
      titleLines: ['Email', 'Marketing'],
      theme: 'light',
      labelTone: 'green',
      contentWidth: 164,
      headingWidth: 161,
      labelWidths: [90, 161],
      image: '/images/services-4.svg',
      illustrationHeight: 192.68,
      flipX: true
    },
    {
      titleLines: ['Content', 'Creation'],
      theme: 'green',
      labelTone: 'white',
      contentWidth: 164,
      headingWidth: 137,
      labelWidths: [133, 137],
      image: '/images/services-5.svg',
      illustrationHeight: 195.91
    },
    {
      titleLines: ['Analytics and', 'Tracking'],
      theme: 'dark',
      labelTone: 'green',
      contentWidth: 213,
      headingWidth: 213,
      labelWidths: [213, 138],
      image: '/images/services-6.svg',
      illustrationHeight: 170
    }
  ];
}
