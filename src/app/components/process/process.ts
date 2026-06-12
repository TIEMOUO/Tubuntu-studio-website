import { Component } from '@angular/core';

@Component({
  selector: 'app-process',
  imports: [],
  templateUrl: './process.html',
  styleUrl: './process.scss',
})
export class Process {
  steps=[
    {
      number: '01',
      title: 'Prise de Contact',
      description: 'Nous échangeons sur vos besoins, vos objectifs et votre vision du projet.'
    },
    {
      number: '02',
      title: 'Planification',
      description: 'Nous élaborons une stratégie créative et préparons chaque détail de la production.'
    },
    {
      number: '03',
      title: 'Production',
      description: 'Réalisation des prises de vue, tournages, créations graphiques et contenus.'
    },
    {
      number: '04',
      title: 'Livraison',
      description: 'Nous finalisons les retouches et livrons les contenus dans les formats adaptés.'
    }
  ];
}
