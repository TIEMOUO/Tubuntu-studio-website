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
    { label: 'Facebook', url: 'https://www.facebook.com/share/18mRzDRVFr/?mibextid=wwXIfr', icon: 'fa-brands fa-facebook-f' },
    { label: 'TikTok', url: 'https://www.tiktok.com/@tubuntustudio4?_r=1&_t=ZS-992opukbnz6 ', icon: 'fa-brands fa-tiktok' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/company/tubuntu-group-sarl/', icon: 'fa-brands fa-linkedin-in' },
    { label: 'Instagram', url: 'https://www.instagram.com/tubuntu_237?igsi=MTdheHpvMjNubTU3OA%3D%3D&utm_source=qr', icon: 'fa-brands fa-instagram' },
  ]
}