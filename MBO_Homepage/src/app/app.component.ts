import { Component } from '@angular/core';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [TranslateModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MBO_Homepage';
  currentLanguage = 'de';

  constructor(private readonly translate: TranslateService) {
    this.translate.setDefaultLang('de');
    this.currentLanguage = 'de';
  }

  switchLanguage(lang: string) {
    this.translate.use(lang).subscribe(() => {
      this.currentLanguage = lang;
    });
  }
}
