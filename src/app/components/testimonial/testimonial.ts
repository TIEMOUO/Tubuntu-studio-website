import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonial',
  imports: [],
  templateUrl: './testimonial.html',
  styleUrl: './testimonial.scss',
})
export class Testimonial {
   testimonials = [
    {
      name: 'Marie N.',
      role: 'Responsable Marketing',
      image: 'assets/images/corporate.jpg',
      message: 'Une équipe professionnelle et créative. Le résultat a largement dépassé nos attentes.'
    },
    {
      name: 'Jean P.',
      role: 'Chef d’Entreprise',
      image: 'assets/images/client2.jpg',
      message: 'TUBUNTU STUDIO a complètement transformé notre image de marque avec un travail remarquable.'
    },
    {
      name: 'Sarah K.',
      role: 'Entrepreneure',
      image: 'assets/images/commercial.jpg',
      message: 'Une collaboration fluide, des idées innovantes et un rendu exceptionnel.'
    }
  ];
}
