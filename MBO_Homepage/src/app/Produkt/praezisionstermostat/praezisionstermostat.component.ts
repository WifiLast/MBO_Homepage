import { AfterViewInit, Component, OnDestroy, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SlideshowComponent, CardData } from '../../components/slideshow/slideshow.component';
import { KarriereSectionComponent } from '../../components/karriere-section/karriere-section.component';
import { Subscription } from 'rxjs';
import { ScriptLoaderService } from '../../services/script-loader.service';

declare global {
  interface Window {
    MathJax?: { typesetPromise?: () => Promise<void> };
  }
}

@Component({
  selector: 'app-praezisionstermostat',
  imports: [TranslateModule, CommonModule, RouterLink, SlideshowComponent, KarriereSectionComponent],
  templateUrl: './praezisionstermostat.component.html',
  styleUrl: './praezisionstermostat.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PraezisionstermostatComponent implements OnInit, AfterViewInit, OnDestroy {
  private langChangeSub?: Subscription;

  slides = [
    '/Bilder/ART/Bau/20240415_115933.webp',
    '/Bilder/ART/Bau/20240418_071549.jpg',
    '/Bilder/ART/Bau/20240514_134945.jpg',
    '/Bilder/ART/Bau/20240514_134951.jpg',
    '/Bilder/ART/Bau/20240514_135011.jpg',
    '/Bilder/ART/Bau/20240515_104609.jpg',
  ];

  cards: CardData[] = [
    {
      title: 'Cooling Tower 2.0',
      description: 'Der Cooling Tower CT 2.0 als Liquid-to-Liquid-Prozessthermostat dient als Prozesskühlung für Anlagen mit höchster Anforderung an Temper-aturstabilität, definierten Volumenstrom, stabilen Druck und Versorgungssicherheit mit einer abgeführten Wärmemenge von bis zu 800 kW.',
      id: 'praezisionstermostat',
      routerLink: '/Produkt/praezisionstermostat/ct2-0'
    }
  ];

  constructor(private translate: TranslateService, private scriptLoader: ScriptLoaderService) { }

  ngOnInit(): void {
    this.scriptLoader.loadScript('https://ajax.googleapis.com/ajax/libs/model-viewer/3.4.0/model-viewer.min.js', 'module');
  }

  ngAfterViewInit(): void {
    this.typesetMath();
    this.langChangeSub = this.translate.onLangChange.subscribe(() => {
      this.typesetMath();
    });
  }

  ngOnDestroy(): void {
    this.langChangeSub?.unsubscribe();
  }

  private typesetMath(): void {
    const mathJax = window.MathJax;
    if (mathJax?.typesetPromise) {
      mathJax.typesetPromise();
    }
  }
}
