import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Stat {
  icon: string;
  value: string;
  label: string;
}

interface SubPortfolio {
  icon: string;
  title: string;
  subtitle: string;
  driveUrl: string;
}

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.html',
  styleUrls: ['./portfolio.scss'],
})
export class Portfolio {
  
  // Lien vers le portfolio principal sur Google Drive
  mainDriveUrl = 'https://tubuntustudio71.pixieset.com/tubuntustudiophotoscollection/';

  // Données des statistiques
  stats: Stat[] = [
    {
      icon: 'fas fa-camera',
      value: '+300',
      label: 'Projets réalisés'
    },
    {
      icon: 'fas fa-users',
      value: '+100',
      label: 'Clients satisfaits'
    },
    {
      icon: 'fas fa-star',
      value: '+5',
      label: "Années d'expérience"
    }
  ];

  // Données des deux sous-portfolios du bas
  subPortfolios: SubPortfolio[] = [
    {
      icon: 'fas fa-camera',
      title: 'Studio Portfolio',
      subtitle: 'Voir toutes nos photos',
      driveUrl: 'https://tubuntustudio71.pixieset.com/tubuntustudiophotoscollection/'
    },
    {
      icon: 'fas fa-film',
      title: 'Set Management Portfolio',
      subtitle: 'Voir toutes nos réalisations',
      driveUrl: 'https://tubuntustudio93.pixieset.com/tubuntustudiosetmanagement/'
    }
  ];
}