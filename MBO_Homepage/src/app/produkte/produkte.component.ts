import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { SlideshowComponent, CardData } from '../components/slideshow/slideshow.component';
import { KarriereSectionComponent } from '../components/karriere-section/karriere-section.component';
import { RouterModule } from '@angular/router';
import { ScriptLoaderService } from '../services/script-loader.service';

@Component({
  selector: 'app-produkte',
  imports: [TranslateModule, CommonModule, SlideshowComponent, KarriereSectionComponent, RouterModule],
  templateUrl: './produkte.component.html',
  styleUrl: './produkte.component.css'
})
export class ProdukteComponent implements OnInit {
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
      title: 'PRODUCTS.CARDS.REINRAUM.TITLE',
      description: 'PRODUCTS.CARDS.REINRAUM.DESCRIPTION',
      id: 'reinraum',
      routerLink: '/Produkt/reinraumloesung',
      cssClass: 'reinraum'
    },
    {
      title: 'PRODUCTS.CARDS.ANLAGENINTEGRATION.TITLE',
      description: 'PRODUCTS.CARDS.ANLAGENINTEGRATION.DESCRIPTION',
      id: 'anlagenintegration',
      routerLink: '/Produkt/anlagenintegration',
      cssClass: 'anlagenintegration'
    },
    {
      title: 'PRODUCTS.CARDS.PRAEZISIONSKLIMAGERAET.TITLE',
      description: 'PRODUCTS.CARDS.PRAEZISIONSKLIMAGERAET.DESCRIPTION',
      id: 'praezisionsklimageraet',
      routerLink: '/Produkt/praezisionsklimageraet',
      cssClass: 'praezisionsklimageraet'
    },
    {
      title: 'PRODUCTS.CARDS.PRAEZISIONSTERMOSTAT.TITLE',
      description: 'PRODUCTS.CARDS.PRAEZISIONSTERMOSTAT.DESCRIPTION',
      id: 'produkte',
      routerLink: '/Produkt/praezisionstermostat',
      cssClass: 'praezisionstermostat'
    }
  ];

  constructor(private scriptLoader: ScriptLoaderService) { }

  ngOnInit(): void {
    this.scriptLoader.loadScript('https://ajax.googleapis.com/ajax/libs/model-viewer/3.4.0/model-viewer.min.js', 'module');
  }
}
