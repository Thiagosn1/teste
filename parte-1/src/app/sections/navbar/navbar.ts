import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnDestroy } from '@angular/core';
import { NAV_LINKS } from '../../content/landing-content';

@Component({
  selector: 'landing-navbar',
  standalone: true,
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css']
})
export class LandingNavbarComponent implements OnDestroy {
  protected readonly links = NAV_LINKS;
  protected isMenuOpen = false;

  constructor(@Inject(DOCUMENT) private readonly document: Document) {}

  protected toggleMenu(): void {
    this.setMenuOpen(!this.isMenuOpen);
  }

  protected closeMenu(): void {
    this.setMenuOpen(false);
  }

  ngOnDestroy(): void {
    this.document.body.style.overflow = '';
  }

  private setMenuOpen(isOpen: boolean): void {
    this.isMenuOpen = isOpen;
    this.document.body.style.overflow = isOpen ? 'hidden' : '';
  }
}
