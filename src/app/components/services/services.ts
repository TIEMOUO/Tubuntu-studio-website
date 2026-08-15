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
      title: 'Photography Professional',
      icon: 'fas fa-camera',
      description: 'Shooting photo, couverture photo d\'événement, shooting produits, shooting corporate.'
    },
    {
      title: 'Production vidéo',
      icon: 'fas fa-video',
      description: 'Film événementiel.'
    },
    {
      title: 'Couverture événementielle',
      icon: 'fas fa-calendar-check',
      description: 'Concert, listening parties.'
    },
    {
      title: 'Communication visuelle',
      icon: 'fas fa-bullhorn',
      description: 'Personal branding.'
    }
  ];
}
