import { Component } from '@angular/core';

interface SocialItem {
  label: string;
  url: string;
  icon: string;
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.html',
  styleUrls: ['./footer.scss']
})
export class Footer {
  year: number = new Date().getFullYear();

  brand = {
    tagline: 'Votre partenaire créatif et digital pour donner vie à vos projets.'
  };

  social: SocialItem[] = [
    { label: 'Facebook', url: 'https://facebook.com', icon: 'fa-brands fa-facebook-f' },
    { label: 'Instagram', url: 'https://instagram.com', icon: 'fa-brands fa-instagram' },
    { label: 'LinkedIn', url: 'https://linkedin.com', icon: 'fa-brands fa-linkedin-in' },
    { label: 'Twitter / X', url: 'https://x.com', icon: 'fa-brands fa-x-twitter' },
    { label: 'YouTube', url: 'https://youtube.com', icon: 'fa-brands fa-youtube' }
  ];
}