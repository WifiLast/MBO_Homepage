import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { SlideshowComponent, CardData } from '../components/slideshow/slideshow.component';
import { KarriereSectionComponent } from '../components/karriere-section/karriere-section.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-produkte',
  imports: [TranslateModule, CommonModule, SlideshowComponent, KarriereSectionComponent, RouterModule],
  templateUrl: './produkte.component.html',
  styleUrl: './produkte.component.css'
})
export class ProdukteComponent {
  slides = [
    '/Bilder/ART/Bau/20240415_115933.jpg',
    '/Bilder/ART/Bau/20240418_071549.jpg',
    '/Bilder/ART/Bau/20240514_134945.jpg',
    '/Bilder/ART/Bau/20240514_134951.jpg',
    '/Bilder/ART/Bau/20240514_135011.jpg',
    '/Bilder/ART/Bau/20240515_104609.jpg',
  ];

  cards: CardData[] = [
    {
      title: 'Reinraumtechnologie',
      description: 'Mit entscheidendem Know-How und Erfahrung auf dem Gebiet der Reinraumtechnik mit besonderer Sorgfalt und dem Antrieb zu den Besten zählen zu wollen.',
      id: 'reinraum',
      routerLink: '/Produkt/reinraumloesung',
      cssClass: 'reinraum'
    },
    {
      title: 'Anlagenintegration',
      description: 'Die MBO integriert als Single-Point-of-Accountability Anlagen und Technologien in die Fertigungsprozesse der Auftraggeber.',
      id: 'anlagenintegration',
      routerLink: '/Produkt/anlagenintegration',
      cssClass: 'anlagenintegration'
    },
    {
      title: 'Präzissionsklimageräte',
      description: 'Hochpräzise Temperatur- und Feuchteregelung für sensible Prozesse in Produktion, Test-, Labor- und Prozessumfeld.',
      id: 'praezisionsklimageraet',
      routerLink: '/Produkt/praezisionsklimageraet',
      cssClass: 'praezisionsklimageraet'
    },
    {
      title: 'Präzisionsthermostate',
      description: 'Hochpräzise Temperaturregelung für flüssigkeitsführende sensible Prozesse in Produktion, Test-, Labor- und Prozessumfeld.',
      id: 'produkte',
      routerLink: '/Produkt/praezisionstermostat',
      cssClass: 'praezisionstermostat'
    }
  ];
}
