import { Component } from '@angular/core';

@Component({
  selector: 'app-why-choose-us',
  imports: [],
  templateUrl: './why-choose-us.html',
  styleUrl: './why-choose-us.scss',
})
export class WhyChooseUs {
  advantages=[
    {
      icon: 'fas fa-award',
      title: 'Qualité Premium',
      description: 'Chaque réalisation est pensée avec un niveau d’exigence élevé.'
    },
    {
      icon: 'fas fa-lightbulb',
      title: 'Créativité',
      description: 'Des concepts originaux qui valorisent votre identité.'
    },
    {
      icon: 'fas fa-clock',
      title: 'Respect des Délais',
      description: 'Des livraisons rapides sans compromettre la qualité.'
    },
    {
      icon: 'fas fa-users',
      title: 'Accompagnement',
      description: 'Nous travaillons avec vous à chaque étape du projet.'
    }
  ];
}
