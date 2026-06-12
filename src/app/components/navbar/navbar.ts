import { Component, HostListener, OnInit } from '@angular/core';

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
    {label: 'Temoignages', href: '#testimonials'},
    { label: 'Contact', href: '#contact' }
    
  ];

  ngOnInit(): void {
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.isScrolled = window.scrollY > 60;
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
