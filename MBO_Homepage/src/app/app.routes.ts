import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UnternehmenComponent } from './unternehmen/unternehmen.component';
import { ProdukteComponent } from './produkte/produkte.component';
import { KarriereComponent } from './karriere/karriere.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { LegalComponent } from './legal/legal.component';
import { ImprintComponent } from './legal/imprint/imprint.component';
import { DatenschutzComponent } from './legal/datenschutz/datenschutz.component';
import { AGBComponent } from './legal/agb/agb.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'unternehmen', component: UnternehmenComponent },
  { path: 'produkte', component: ProdukteComponent },
  { path: 'karriere', component: KarriereComponent },
  { path: 'kontakt', component: KontaktComponent },
  {
    path: 'legal',
    component: LegalComponent,
    children: [
      { path: 'imprint', component: ImprintComponent },
      { path: 'datenschutz', component: DatenschutzComponent },
      { path: 'agb', component: AGBComponent }
    ]
  },
  { path: '**', redirectTo: '' }
];
