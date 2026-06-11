import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss',
})
export class Portfolio {
  projects = [
    {
      title: 'Couverture Événementielle',
      category: 'Événement',
      image: 'assets/images/event.jpg',
      driveUrl: 'https://drive.google.com/'
    },
    {
      title: 'Photographie Corporate',
      category: 'Photographie',
      image: 'assets/images/corporate.jpg',
      driveUrl: 'https://drive.google.com/'
    },
    {
      title: 'Production Vidéo',
      category: 'Vidéo',
      image: 'assets/images/studio.jpg',
      driveUrl: 'https://drive.google.com/'
    },
    {
      title: 'Branding & Design',
      category: 'Design',
      image: 'assets/images/brand.jpg',
      driveUrl: 'https://drive.google.com/'
    },
    {
      title: 'Création de Contenu',
      category: 'Social Media',
      image: 'assets/images/content.jpg',
      driveUrl: 'https://drive.google.com/'
    },
    {
      title: 'Projet Commercial',
      category: 'Publicité',
      image: 'assets/images/commercial.jpg',
      driveUrl: 'https://drive.google.com/'
    }
  ];

  openProject(url: string): void {
    window.open(url, '_blank');
  }
}
