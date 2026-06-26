import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  imports: [],
  templateUrl: './services.html',
  styleUrl: './services.scss',
})
export class Services {

  services = [
    {
      title: 'Photographie Professionnelle',
      icon: 'fas fa-camera',
      description: 'Portraits, événements, produits, immobilier et photographie corporate.'
    },
    {
      title: 'Production Vidéo',
      icon: 'fas fa-video',
      description: 'Spots publicitaires, vidéos institutionnelles, clips et documentaires.'
    },

    {
      title: 'Design Graphique',
      icon: 'fas fa-pen-ruler',
      description: 'Flyers, affiches, identité visuelle, branding et supports marketing.'
    },

    {
      title: 'Couverture Événementielle',
      icon: 'fas fa-calendar-check',
      description: 'Captation photo et vidéo pour mariages, conférences et événements.'
    },

    {
      title: 'Création de Contenus',
      icon: 'fas fa-mobile-screen-button',
      description: 'Reels, TikTok, réseaux sociaux et contenus engageants pour les marques.'
    },

    {
      title: 'Communication Visuelle',
      icon: 'fas fa-bullhorn',
      description: 'Stratégie visuelle et accompagnement pour développer votre image.'
    }
  ];
}
