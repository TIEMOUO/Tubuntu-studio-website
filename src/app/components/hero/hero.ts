import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  services = [
    'Production Vidéo',
    'Photographie Professionnelle',
    'Couverture Événementielle',
    'Communication Visuelle',
    'Personal Branding'
  ];
}