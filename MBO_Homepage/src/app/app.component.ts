import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive, Router, NavigationEnd, Event } from '@angular/router';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { SlideshowComponent, CardData } from './components/slideshow/slideshow.component';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, TranslateModule, CommonModule, SlideshowComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'MBO_Homepage';
  currentLanguage = 'de';
  mobileMenuOpen = false;
  isHomePage = false;

  slides = [
    '/Bilder/ART/Bau/20240415_115933.webp',
    '/Bilder/ART/Bau/20240418_071549.jpg',
    '/Bilder/ART/Bau/20240514_134945.jpg',
    '/Bilder/ART/Bau/20240514_134951.jpg',
    '/Bilder/ART/Bau/20240514_135011.jpg',
    '/Bilder/ART/Bau/20240515_104609.jpg'
  ];

  cards: CardData[] = [
    {
      title: 'HERO.COMPANY.TITLE',
      description: 'HERO.COMPANY.DESCRIPTION',
      id: 'unternehmen',
      cssClass: 'company',
      routerLink: '/unternehmen'
    },
    {
      title: 'HERO.PRODUCTS.TITLE',
      description: 'HERO.PRODUCTS.DESCRIPTION',
      id: 'produkte',
      cssClass: 'products',
      routerLink: '/produkte'
    }
  ];

  constructor(private readonly translate: TranslateService, private router: Router) {
    this.translate.setDefaultLang('de');
    this.currentLanguage = 'de';
  }

  ngOnInit() {
    // Check initial URL
    this.checkHomePage(this.router.url);

    this.router.events.pipe(
      filter((event: Event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.checkHomePage(event.urlAfterRedirects);
    });
  }

  private checkHomePage(url: string) {
    console.log('Checking HomePage. URL:', url);
    this.isHomePage = url === '/' || url === '/home' || url.endsWith('index.html'); // Handle basics
    console.log('Is HomePage:', this.isHomePage);
  }

  switchLanguage(lang: string) {
    this.translate.use(lang).subscribe(() => {
      this.currentLanguage = lang;
    });
  }

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  closeMobileMenu() {
    this.mobileMenuOpen = false;
  }
}
