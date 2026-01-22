import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

export interface CardData {
  title: string;
  description: string;
  id?: string;
  routerLink?: string;
  cssClass?: string;
}

@Component({
  selector: 'app-slideshow',
  imports: [CommonModule, RouterModule],
  templateUrl: './slideshow.component.html',
  styleUrl: './slideshow.component.css'
})
export class SlideshowComponent implements OnInit, OnDestroy {
  @Input() slides: string[] = [];
  @Input() interval: number = 5000;
  @Input() showOverlay: boolean = false;
  @Input() overlayTitle: string = '';
  @Input() overlaySubtitle: string = '';
  @Input() initialSlide: number = 0;
  @Input() imagePath: string = '';
  @Input() cards: CardData[] = [];
  @Input() showCards: boolean = false;
  @Input() cardAlignment: 'left' | 'right' | 'center' = 'right';
  @Input() cardsPerRow: number = 2; // Default: 2 cards per row

  currentSlide = 0;
  private intervalId: any;
  private touchStartX = 0;
  private touchEndX = 0;

  ngOnInit(): void {
    // If imagePath is provided, use it as a single slide
    if (this.imagePath && this.slides.length === 0) {
      this.slides = [this.imagePath];
    }

    // Set initial slide index
    if (this.initialSlide >= 0 && this.initialSlide < this.slides.length) {
      this.currentSlide = this.initialSlide;
    }

    this.startSlideshow();
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  startSlideshow(): void {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, this.interval);
  }

  nextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  prevSlide(): void {
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  }

  goToSlide(index: number): void {
    this.currentSlide = index;
    this.resetInterval();
  }

  resetInterval(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
    this.startSlideshow();
  }

  onTouchStart(event: TouchEvent): void {
    this.touchStartX = event.changedTouches[0].screenX;
  }

  onTouchEnd(event: TouchEvent): void {
    this.touchEndX = event.changedTouches[0].screenX;
    this.handleSwipe();
  }

  handleSwipe(): void {
    const swipeThreshold = 50;
    const diff = this.touchStartX - this.touchEndX;

    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        this.nextSlide();
      } else {
        this.prevSlide();
      }
      this.resetInterval();
    }
  }
}
