import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./home/home.component').then(m => m.HomeComponent),
        data: { preload: true }
    },
    {
        path: 'unternehmen',
        loadComponent: () => import('./unternehmen/unternehmen.component').then(m => m.UnternehmenComponent)
    },
    {
        path: 'produkte',
        loadComponent: () => import('./produkte/produkte.component').then(m => m.ProdukteComponent)
    },
    {
        path: 'karriere',
        loadComponent: () => import('./karriere/karriere.component').then(m => m.KarriereComponent)
    },
    {
        path: 'kontakt',
        loadComponent: () => import('./kontakt/kontakt.component').then(m => m.KontaktComponent)
    },
    {
        path: 'Produkt/anlagenintegration',
        loadComponent: () => import('./Produkt/anlagenintegration/anlagenintegration.component').then(m => m.AnlagenintegrationComponent)
    },
    {
        path: 'Produkt/praezisionsklimageraet',
        loadComponent: () => import('./Produkt/praezisionsklimageraet/praezisionsklimageraet.component').then(m => m.PraezisionsklimageraetComponent)
    },
    {
        path: 'Produkt/praezisionsklimageraet/a2-htc',
        loadComponent: () => import('./Produkt/praezisionsklimageraet/a2-htc/a2-htc.component').then(m => m.A2HTCComponent)
    },
    {
        path: 'Produkt/praezisionstermostat',
        loadComponent: () => import('./Produkt/praezisionstermostat/praezisionstermostat.component').then(m => m.PraezisionstermostatComponent)
    },
    {
        path: 'Produkt/praezisionstermostat/ct2-0',
        loadComponent: () => import('./Produkt/praezisionstermostat/ct2-0/ct2-0.component').then(m => m.CT20Component)
    },
    {
        path: 'Produkt/reinraumloesung',
        loadComponent: () => import('./Produkt/reinraumloesung/reinraumloesung.component').then(m => m.ReinraumloesungComponent)
    }
];
