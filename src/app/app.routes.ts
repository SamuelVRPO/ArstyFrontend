import { Routes } from '@angular/router';
import { ArtworkComponent } from './artwork/artwork/artwork.component';
import { ArtworkDetailsComponent } from './artwork-details/artwork-details.component';

export const routes: Routes = [
    { path: '', component: ArtworkComponent},
    { path: 'artwork', component: ArtworkComponent},
    { path: 'artwork/:id/:cat/:artist', component: ArtworkDetailsComponent},
    { path: '', redirectTo: '/artwork', pathMatch: 'full' }
];


