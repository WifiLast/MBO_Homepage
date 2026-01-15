import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UnternehmenComponent } from './unternehmen/unternehmen.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'unternehmen', component: UnternehmenComponent }
];
