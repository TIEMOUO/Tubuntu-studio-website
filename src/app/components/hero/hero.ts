import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnDestroy, OnInit, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero implements OnInit, OnDestroy {


 services = [
    'Production Vidéo',
    'Photographie Professionnelle',
    'Design Graphique',
    'Branding',
    'Création de Contenu',
    'Couverture Événementielle',
    'Communication Visuelle'
  ];

  displayServices = [...this.services];

  private intervalId: any;

  constructor(
  @Inject(PLATFORM_ID)
  private platformId: Object
) {}

  ngOnInit(): void {

  if (!isPlatformBrowser(this.platformId)) {
    return;
  }

  this.intervalId = setInterval(() => {

    const first = this.displayServices[0];

    this.displayServices = [
      ...this.displayServices.slice(1),
      first
    ];

  }, 2500);

}
  ngOnDestroy(): void {

    if(this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}


