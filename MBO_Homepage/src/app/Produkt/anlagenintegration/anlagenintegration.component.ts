import { AfterViewInit, Component, OnDestroy, OnInit, CUSTOM_ELEMENTS_SCHEMA, ElementRef } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
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
  selector: 'app-anlagenintegration',
  imports: [TranslateModule, CommonModule, SlideshowComponent, KarriereSectionComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './anlagenintegration.component.html',
  styleUrl: './anlagenintegration.component.css'
})
export class AnlagenintegrationComponent implements OnInit, AfterViewInit, OnDestroy {
  private langChangeSub?: Subscription;
  private resizeObserver?: ResizeObserver;

  ngOnInit(): void {
    this.scriptLoader.loadScript('https://ajax.googleapis.com/ajax/libs/model-viewer/3.4.0/model-viewer.min.js', 'module');
  }
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
      title: 'Anlagenintegration',
      description: 'Die MBO Trinity GmbH plant und integriert hochsensible Anlagen wie z.B.: MBMW-Tools, Photomask development systems, Sputtering tools, Scanning Electron Microscopes, Test benches, Climate Chambers in ReinrÃ¤umen und GraurÃ¤umen.'
    }
  ];

  constructor(
    private translate: TranslateService,
    private hostRef: ElementRef<HTMLElement>,
    private scriptLoader: ScriptLoaderService
  ) { }

  ngAfterViewInit(): void {
    this.typesetMath();
    this.updateCardMetrics();
    this.observeCardMetrics();
    this.langChangeSub = this.translate.onLangChange.subscribe(() => {
      this.typesetMath();
      this.updateCardMetrics();
    });
  }

  ngOnDestroy(): void {
    this.langChangeSub?.unsubscribe();
    this.resizeObserver?.disconnect();
  }

  private typesetMath(): void {
    const mathJax = window.MathJax;
    if (mathJax?.typesetPromise) {
      mathJax.typesetPromise();
    }
  }

  private updateCardMetrics(): void {
    const host = this.hostRef.nativeElement;
    const card = host.querySelector<HTMLElement>('.slideshow-card');
    if (!card) return;

    const rect = card.getBoundingClientRect();
    host.style.setProperty('--card-space', `${rect.width}px`);
    host.style.setProperty('--card-height', `${rect.height}px`);
  }

  private observeCardMetrics(): void {
    const host = this.hostRef.nativeElement;
    const card = host.querySelector<HTMLElement>('.slideshow-card');
    if (!card || typeof ResizeObserver === 'undefined') return;

    this.resizeObserver = new ResizeObserver(() => {
      this.updateCardMetrics();
    });
    this.resizeObserver.observe(card);
  }
}


