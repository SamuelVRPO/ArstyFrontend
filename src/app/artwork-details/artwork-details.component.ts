import { Component, OnInit } from '@angular/core';
import { Artwork } from '../interfaces/artwork';
import { ActivatedRoute } from '@angular/router';
import { ArtworkService } from '../services/artwork.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-artwork-details',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './artwork-details.component.html',
  styleUrl: './artwork-details.component.scss'
})
export class ArtworkDetailsComponent implements OnInit{
  artwork: Artwork;

  constructor(
    private route: ActivatedRoute,
    private artworkService: ArtworkService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.loadArtworkDetails(id);
      }
    });
  }

  loadArtworkDetails(id: string): void {
    this.artworkService.getArtworkById(id).subscribe(artwork => {
      this.artwork = artwork;
    });
  }
}
