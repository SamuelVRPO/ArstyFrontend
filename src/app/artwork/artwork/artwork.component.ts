import { Component, OnInit } from '@angular/core';
import { ArtCardComponent } from '../../art-card/art-card/art-card.component';
import { ArtworkService } from '../../services/artwork.service';
import { CommonModule } from '@angular/common';
import { Artwork } from '../../interfaces/artwork';

@Component({
  selector: 'app-artwork',
  standalone: true,
  imports: [ArtCardComponent, CommonModule],
  templateUrl: './artwork.component.html',
  styleUrl: './artwork.component.scss'
})
export class ArtworkComponent implements OnInit{
  artworks: Artwork[] = [];
  nextUrl: string = '';

  constructor(private artworkService: ArtworkService) {}

  ngOnInit() {
    this.loadArtworks();
  }

  loadArtworks(): void {
    this.artworkService.getArtworks().subscribe(artworkServerResponse => {
      this.nextUrl = artworkServerResponse._links.next.href;
      this.artworks = artworkServerResponse._embedded.artworks;
    })
  }

  loadNextArtworks(): void {
    this.artworkService.getNextArtworks(this.nextUrl).subscribe(artworkServerResponse => {
      this.nextUrl = artworkServerResponse._links.next.href;
      this.artworks = artworkServerResponse._embedded.artworks;
    })
  }

}
