import { Component } from '@angular/core';

@Component({
  selector: 'app-partners',
  imports: [],
  templateUrl: './partners.html',
  styleUrl: './partners.scss',
})
export class Partners {
  partners = [
    { name: 'UCB', logo: 'assets/images/Icones/UCB.png' },
    { name: 'Top Saho', logo: 'assets/images/Icones/top saho.png' },
    { name: 'The Dedes Records', logo: 'assets/images/Icones/THE DEDES RECORDS.jpeg' },
    { name: 'Steven Music', logo: 'assets/images/Icones/STEVEN MUSIC.png' },
    { name: 'Razzl', logo: 'assets/images/Icones/RAZZL.png' },
    { name: 'Orange', logo: 'assets/images/Icones/Orange.png' },
    { name: 'MTN Cameroun', logo: 'assets/images/Icones/MTN CAMEROUN.png' },
    { name: 'Mewaa Music', logo: 'assets/images/Icones/Mewaa music orange .png' },
    { name: 'LME', logo: 'assets/images/Icones/LME logo white.png' },
    { name: 'Krystal Palace', logo: 'assets/images/Icones/Krystal palace.png' },
    { name: 'IF Cameroun', logo: 'assets/images/Icones/IF CAMEROUN.png' },
  ];
}
