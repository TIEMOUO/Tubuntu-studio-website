import { Component } from '@angular/core';

@Component({
  selector: 'app-brand-name',
  imports: [],
  template: `<span class="brand-name"><span class="brand-tubuntu">Tubuntu</span><span class="brand-studio">Studio</span></span>`,
  styles: [`
    .brand-name {
      .brand-tubuntu {
        color: var(--primary-color);
      }
      .brand-studio {
        color: inherit;
      }
    }
  `]
})
export class BrandName {}
