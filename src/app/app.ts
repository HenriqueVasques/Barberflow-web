import { Component } from '@angular/core';
import { HeaderComponent} from './features/landing-page/components/header/header';
import { Hero } from './features/landing-page/components/hero/hero';
import { About } from './features/landing-page/components/about/about';
import { Services } from './features/landing-page/components/services/services';
import { Gallery } from './features/landing-page/components/gallery/gallery';
import { Location } from './features/landing-page/components/location/location';
import { Testimonials } from './features/landing-page/components/testimonials/testimonials';
import { Cta } from './features/landing-page/components/cta/cta';
import { Footer } from './features/landing-page/components/footer/footer';

@Component({
  selector: 'app-root',
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
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {}