import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  imports: [],
  templateUrl: './gallery.html',
  styleUrl: './gallery.scss',
})
export class Gallery {
  activeTab: 'studio' | 'material' = 'studio';

  studioImages: string[] = [
    'assets/images/studio/studio-1.jpg',
    'assets/images/studio/studio-2.jpg',
    'assets/images/studio/studio-3.jpg',
  ];

  materialImages: string[] = [
    'assets/images/material/material-1.jpg',
    'assets/images/material/material-2.jpg',
    'assets/images/material/material-3.jpg',
  ];
}
