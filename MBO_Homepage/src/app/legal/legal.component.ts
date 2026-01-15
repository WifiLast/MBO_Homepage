import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-legal',
  imports: [RouterOutlet, TranslateModule, CommonModule],
  templateUrl: './legal.component.html',
  styleUrl: './legal.component.css'
})
export class LegalComponent {

}
