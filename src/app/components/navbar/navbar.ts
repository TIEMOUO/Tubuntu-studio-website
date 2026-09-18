import { Component, HostListener, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [
  ],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss'],
})
export class Navbar implements OnInit {
  isScrolled = false;
  isMenuOpen = false;
  navLinks = [
    { label: 'Accueil', href: '#home' },
    { label: 'A Propos', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Processus', href: '#process' },
    { label: 'Contact', href: '#contact' }

  ];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    this.updateScrollState();
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.updateScrollState();
  }

  @HostListener('window:resize')
  onResize(): void {
    this.updateScrollState();
  }

  private updateScrollState(): void {
    if (!isPlatformBrowser(this.platformId)) {
      this.isScrolled = false;
      return;
    }

    this.isScrolled = window.innerWidth <= 767 || window.scrollY > 60;
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }

  scrollTo(href: string): void {
    this.closeMenu();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
