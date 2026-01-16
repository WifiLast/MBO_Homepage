import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-unternehmen',
  standalone: true,
  templateUrl: './unternehmen.component.html',
  styleUrls: ['./unternehmen.component.css'],
  imports: [TranslateModule, CommonModule],
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
}
