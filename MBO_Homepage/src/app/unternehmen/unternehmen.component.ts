import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { SlideshowComponent } from '../components/slideshow/slideshow.component';
import { KarriereSectionComponent } from '../components/karriere-section/karriere-section.component'; 
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-unternehmen',
  standalone: true,
  templateUrl: './unternehmen.component.html',
  styleUrls: ['./unternehmen.component.css'],
  imports: [TranslateModule, CommonModule, SlideshowComponent, KarriereSectionComponent],
})
export class UnternehmenComponent {
  scrollTo(targetId: string): void {
    if (targetId === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
  
  slides = [
    '/Bilder/ART/Bau/20240415_115933.jpg',
    '/Bilder/ART/Bau/20240418_071549.jpg',
    '/Bilder/ART/Bau/20240514_134945.jpg',
    '/Bilder/ART/Bau/20240514_134951.jpg',
    '/Bilder/ART/Bau/20240514_135011.jpg',
    '/Bilder/ART/Bau/20240515_104609.jpg',
  ];
}
