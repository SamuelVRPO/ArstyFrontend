import { Component, OnInit } from '@angular/core';
import { Artwork } from '../interfaces/artwork';
import { ActivatedRoute } from '@angular/router';
import { ArtworkService } from '../services/artwork.service';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-bootstrap/carousel'
import { ArtCardComponent } from '../art-card/art-card/art-card.component';

@Component({
  selector: 'app-artwork-details',
  standalone: true,
  imports: [
    CommonModule,
    CarouselModule,
    ArtCardComponent
  ],
  templateUrl: './artwork-details.component.html',
  styleUrl: './artwork-details.component.scss'
})
export class ArtworkDetailsComponent implements OnInit{
  artwork: Artwork;
  relatedArtworks: Artwork[] = [];
  relatedArtist: Artwork[] = [];

  constructor(
    private route: ActivatedRoute,
    private artworkService: ArtworkService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      const cat = params.get('cat');
      const artist = params.get('artist');

      if (id) {
        this.loadArtworkDetails(id);
        
      }
      if (cat) {
        
        this.loadRelatedArtworks(cat);
      }
      if (artist) {
        this.loadRelatedArtist(artist);
      }
    });
  }

  loadArtworkDetails(id: string): void {
    this.artworkService.getArtworkById(id).subscribe(artwork => {
      this.artwork = artwork;
    });
  }

  loadRelatedArtworks(category: string): void {
    this.artworkService.getArtworksByCategory(category).subscribe(artworkServerResponse => {
      this.relatedArtworks = artworkServerResponse.results;
    });
  }

  loadRelatedArtist(artist: string): void {
    this.artworkService.getArtworksByArtist(artist).subscribe(artworkServerResponse => {
      this.relatedArtist = artworkServerResponse.results
    })
  }
}
