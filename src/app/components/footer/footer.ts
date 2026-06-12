import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  year = new Date().getFullYear();

  brand = {
    name: 'TUBUNTU STUDIO',
    tagline: 'Création visuelle • Branding • Production digitale'
  };

  links = [
    { label: 'Accueil', target: '#home' },
    { label: 'Services', target: '#services' },
    { label: 'Portfolio', target: '#portfolio' },
    { label: 'Processus', target: '#process' },
    { label: 'Contact', target: '#contact' }
  ];

  social = [
    { label: 'Instagram', url: '#' },
    { label: 'TikTok', url: '#' },
    { label: 'LinkedIn', url: '#' },
    { label: 'Facebook', url: '#' }
  ];
}
