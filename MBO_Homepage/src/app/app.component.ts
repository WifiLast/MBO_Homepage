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
    '/slideshow/1.jpg',
    '/slideshow/2.jpg',
    '/slideshow/3.jpg',
    '/slideshow/4.jpg',
    '/slideshow/5.jpg',
    '/slideshow/6.jpg',
    '/slideshow/8.jpg',
    '/slideshow/9.jpeg',
    '/slideshow/10.jpg',
    '/slideshow/11.JPG'
  ];

  cards: CardData[] = [];

  constructor(private readonly translate: TranslateService, private router: Router) {
    this.translate.setDefaultLang('en');
    this.currentLanguage = 'en';
  }

  ngOnInit() {
    // Check initial URL
    this.checkHomePage(this.router.url);

    this.router.events.pipe(
      filter((event: Event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.checkHomePage(event.urlAfterRedirects);
      // Force scroll to top
      window.scrollTo(0, 0);
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
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
