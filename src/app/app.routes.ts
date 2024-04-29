import { Routes } from '@angular/router';
import { ArtworkComponent } from './artwork/artwork/artwork.component';

export const routes: Routes = [
    { path: 'artwork', component: ArtworkComponent},
    { path: '', redirectTo: '/artwork', pathMatch: 'full' }
];


