import { Component, OnInit, signal, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
import { Footer } from './components/footer/footer';
import { Contact } from './components/contact/contact';
import { Cta } from './components/cta/cta';
import { Services } from './components/services/services';
import { Process } from './components/process/process';
import { WhyChooseUs } from './components/why-choose-us/why-choose-us';
import { Portfolio } from './components/portfolio/portfolio';
import { About } from './components/about/about';
import { Testimonial } from './components/testimonial/testimonial';
import { FloatingActions } from './components/floating-actions/floating-actions';
import { Partners } from './components/partners/partners';
import AOS from 'aos';

@Component({
  selector: 'app-root',
  imports: [
    Navbar,
    Hero,
    Cta,
    Contact,
    Footer,
    Services,
    Process,
    WhyChooseUs,
    Portfolio,
    About,
    Testimonial,
    FloatingActions,
    Partners
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App implements OnInit {
  protected readonly title = signal('TUBUNTU');

  constructor(
    @Inject(PLATFORM_ID)
    private platformId: Object
  ) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init({
        duration: 1000,
        once: true,
        offset: 100,
        easing: 'ease-out-cubic'
      });
    }
  }
}
  
