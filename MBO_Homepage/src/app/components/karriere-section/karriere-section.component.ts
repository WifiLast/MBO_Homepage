import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { SlideshowComponent } from '../slideshow/slideshow.component';

@Component({
  selector: 'app-karriere-section',
  imports: [TranslateModule, SlideshowComponent],
  templateUrl: './karriere-section.component.html',
  styleUrl: './karriere-section.component.css'
})
export class KarriereSectionComponent {
  slides = ['/Bilder/ART/Bau/20240415_115933.jpg'];
}
