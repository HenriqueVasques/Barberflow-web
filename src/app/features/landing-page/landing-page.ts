import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header';
import { Hero } from './components/hero/hero';
import { About } from './components/about/about';
import { Services } from './components/services/services';
import { Gallery } from './components/gallery/gallery';
import { Location } from './components/location/location';
import { Testimonials } from './components/testimonials/testimonials';
import { Cta } from './components/cta/cta';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    HeaderComponent,
    Hero,
    About,
    Services,
    Gallery,
    Location,
    Testimonials,
    Cta,
    Footer
  ],
  templateUrl: './landing-page.html'
})
export class LandingPageComponent {}