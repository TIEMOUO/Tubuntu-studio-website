import { Component, signal } from '@angular/core';
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
    FloatingActions
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  protected readonly title = signal('TUBUNTU');

  // ngOnInit() {
  //   AOS.init({
  //     duration: 1000,
  //     once: true,
  //   });
  // }
}
  
