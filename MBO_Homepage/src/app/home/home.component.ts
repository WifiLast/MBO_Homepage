import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { SlideshowComponent } from '../components/slideshow/slideshow.component';

@Component({
  selector: 'app-home',
  imports: [TranslateModule, CommonModule, SlideshowComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  slides = [
    'https://wifilast.github.io/testmbo.github.com/bilder/ART/Bau/20240415_115933.jpg',
    'https://wifilast.github.io/testmbo.github.com/bilder/ART/Bau/20240418_071549.jpg',
    'https://wifilast.github.io/testmbo.github.com/bilder/ART/Bau/20240514_134945.jpg',
    'https://wifilast.github.io/testmbo.github.com/bilder/ART/Bau/20240514_134951.jpg',
    'https://wifilast.github.io/testmbo.github.com/bilder/ART/Bau/20240514_135011.jpg',
    'https://wifilast.github.io/testmbo.github.com/bilder/ART/Bau/20240515_104609.jpg'
  ];
}
