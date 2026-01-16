import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UnternehmenComponent } from './unternehmen/unternehmen.component';
import { ProdukteComponent } from './produkte/produkte.component';
import { KarriereComponent } from './karriere/karriere.component';
import { AnlagenintegrationComponent } from './Produkt/anlagenintegration/anlagenintegration.component';
import { PraezisionsklimageraetComponent } from './Produkt/praezisionsklimageraet/praezisionsklimageraet.component';
import { PraezisionstermostatComponent } from './Produkt/praezisionstermostat/praezisionstermostat.component';
import { ReinraumloesungComponent } from './Produkt/reinraumloesung/reinraumloesung.component';
import { KontaktComponent } from './kontakt/kontakt.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'unternehmen', component: UnternehmenComponent },
    { path: 'produkte', component: ProdukteComponent },
    { path: 'karriere', component: KarriereComponent },
    { path: 'kontakt', component: KontaktComponent },
    { path: 'Produkt/anlagenintegration', component: AnlagenintegrationComponent },
    { path: 'Produkt/praezisionsklimageraet', component: PraezisionsklimageraetComponent },
    { path: 'Produkt/praezisionstermostat', component: PraezisionstermostatComponent },
    { path: 'Produkt/reinraumloesung', component: ReinraumloesungComponent }
];
