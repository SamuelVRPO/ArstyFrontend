import { Component, OnInit } from '@angular/core';
import { ArtCardComponent } from '../../art-card/art-card/art-card.component';
import { ArtworkService } from '../../services/artwork.service';
import { CommonModule } from '@angular/common';
import { Artwork } from '../../interfaces/artwork';
import { ArtistService } from '../../services/artist.service';
import { ArtworkFilterComponent } from '../../artwork-filter/artwork-filter.component';

@Component({
  selector: 'app-artwork',
  standalone: true,
  imports: [ArtCardComponent, CommonModule, ArtworkFilterComponent],
  templateUrl: './artwork.component.html',
  styleUrl: './artwork.component.scss'
})
export class ArtworkComponent implements OnInit{
  filteredArtworks: Artwork[] = [];
  artworks: Artwork[] = [];
  page: number;

  constructor(private artworkService: ArtworkService) {}

  ngOnInit() {
    this.loadArtworks();
  }

  loadArtworks(): void {
    this.artworkService.getArtworks().subscribe(artworkServerResponse => {
      this.artworks = artworkServerResponse.results;
      this.page = 1
    })
  }

  loadNextArtworks(): void {
    this.artworkService.getNextArtworks(this.page + 1).subscribe(artworkServerResponse => {
      this.artworks = artworkServerResponse.results;
      this.page = this.page + 1
    })
  }

  loadPrevArtworks(): void {
    this.artworkService.getNextArtworks(this.page - 1).subscribe(artworkServerResponse => {
      this.artworks = artworkServerResponse.results;
      this.page = this.page - 1
    })
  }

  onArtworksFiltered(artworks: Artwork[]) {
    this.filteredArtworks = artworks;
    console.log("filtered:", this.filteredArtworks)
  }
}
