import { Component, HostListener, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-floating-actions',
  imports: [],
  templateUrl: './floating-actions.html',
  styleUrl: './floating-actions.scss',
})
export class FloatingActions implements OnInit {
  isVisible = false;
  isBrowser = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    this.isBrowser = isPlatformBrowser(this.platformId);
    if (this.isBrowser) {
      this.updateVisibility();
    }
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.updateVisibility();
  }

  @HostListener('window:resize')
  onResize(): void {
    this.updateVisibility();
  }

  private updateVisibility(): void {
    if (!isPlatformBrowser(this.platformId)) {
      this.isVisible = false;
      return;
    }

    this.isVisible = window.innerWidth <= 767 ? true : window.scrollY > 400;
  }

  scrollToTop(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}
