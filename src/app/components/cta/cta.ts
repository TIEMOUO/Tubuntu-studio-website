import { Component } from '@angular/core';

@Component({
  selector: 'app-cta',
  imports: [],
  templateUrl: './cta.html',
  styleUrl: './cta.scss',
})
export class Cta {
  title = 'Prêt à donner vie à votre projet ?';

  description = `
    Nous transformons vos idées en contenus visuels impactants,
    du concept jusqu’à la livraison finale.
  `;

  primaryAction = 'Démarrer un projet';
  secondaryAction = 'Voir nos réalisations';
}
