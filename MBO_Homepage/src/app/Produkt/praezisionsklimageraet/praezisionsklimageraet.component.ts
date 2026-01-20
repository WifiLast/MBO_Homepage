import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { SlideshowComponent } from '../../components/slideshow/slideshow.component';
import { KarriereSectionComponent } from '../../components/karriere-section/karriere-section.component';
import { Subscription } from 'rxjs';

declare global {
  interface Window {
    MathJax?: { typesetPromise?: () => Promise<void> };
  }
}

@Component({
  selector: 'app-praezisionsklimageraet',
  imports: [TranslateModule, CommonModule, SlideshowComponent, KarriereSectionComponent],
  templateUrl: './praezisionsklimageraet.component.html',
  styleUrl: './praezisionsklimageraet.component.css'
})
export class PraezisionsklimageraetComponent implements AfterViewInit, OnDestroy {
  private langChangeSub?: Subscription;

  slides = [
    '/Bilder/ART/Bau/20240415_115933.jpg',
    '/Bilder/ART/Bau/20240418_071549.jpg',
    '/Bilder/ART/Bau/20240514_134945.jpg',
    '/Bilder/ART/Bau/20240514_134951.jpg',
    '/Bilder/ART/Bau/20240514_135011.jpg',
    '/Bilder/ART/Bau/20240515_104609.jpg',
  ];

  constructor(private translate: TranslateService) {}

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
