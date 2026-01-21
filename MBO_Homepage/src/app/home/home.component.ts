import { Component, OnInit, OnDestroy } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { SlideshowComponent } from '../components/slideshow/slideshow.component';
import { KarriereSectionComponent } from '../components/karriere-section/karriere-section.component';

@Component({
  selector: 'app-home',
  imports: [TranslateModule, CommonModule, SlideshowComponent, KarriereSectionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy {
  slides = [
    '/Bilder/ART/Bau/20240415_115933.jpg',
    '/Bilder/ART/Bau/20240418_071549.jpg',
    '/Bilder/ART/Bau/20240514_134945.jpg',
    '/Bilder/ART/Bau/20240514_134951.jpg',
    '/Bilder/ART/Bau/20240514_135011.jpg',
    '/Bilder/ART/Bau/20240515_104609.jpg'
  ];
  showIntro = false;
introOut = false;

private readonly INTRO_KEY = 'mbo_intro_seen_v1';
private introTimer: any;

ngOnInit() {
  // DEV: Intro erzwingen, wenn ?intro in der URL steht
  const forceIntro = new URLSearchParams(window.location.search).has('intro');
  if (forceIntro) localStorage.removeItem(this.INTRO_KEY);

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (localStorage.getItem(this.INTRO_KEY) === '1' || reduced) {
    this.showIntro = false;
    return;
  }

  this.showIntro = true;
  document.documentElement.classList.add('introLock');
  document.body.classList.add('introLock');

  this.introTimer = setTimeout(() => this.endIntro(), 2000);
}


ngOnDestroy() {
  if (this.introTimer) clearTimeout(this.introTimer);
}

skipIntro() {
  if (this.introTimer) clearTimeout(this.introTimer);
  this.endIntro();
}

private endIntro() {
  if (this.introOut) return;
  localStorage.setItem(this.INTRO_KEY, '1');
  this.introOut = true;
}

onIntroTransitionEnd(e: TransitionEvent) {
  if (e.propertyName !== 'opacity') return;

  if (this.introOut) {
    this.showIntro = false;
    document.documentElement.classList.remove('introLock');
    document.body.classList.remove('introLock');
  }
}

}
