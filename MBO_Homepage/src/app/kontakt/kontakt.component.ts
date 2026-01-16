import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { SlideshowComponent } from '../components/slideshow/slideshow.component';
import { KarriereSectionComponent } from '../components/karriere-section/karriere-section.component';

@Component({
  selector: 'app-kontakt',
  imports: [TranslateModule, CommonModule, SlideshowComponent, KarriereSectionComponent],
  templateUrl: './kontakt.component.html',
  styleUrl: './kontakt.component.css'
})
export class KontaktComponent {
  slides = [
    'Bilder/ART/Bau/20240415_115933.jpg',
    'Bilder/ART/Bau/20240418_071549.jpg',
    'Bilder/ART/Bau/20240514_134945.jpg',
    'Bilder/ART/Bau/20240514_134951.jpg',
    'Bilder/ART/Bau/20240514_135011.jpg',
    'Bilder/ART/Bau/20240515_104609.jpg',
  ];
}
