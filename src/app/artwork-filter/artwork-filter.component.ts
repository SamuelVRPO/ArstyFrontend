import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ArtworkService } from '../services/artwork.service';
import { Artwork } from '../interfaces/artwork';

@Component({
  selector: 'app-artwork-filter',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './artwork-filter.component.html',
  styleUrl: './artwork-filter.component.scss'
})
export class ArtworkFilterComponent {
  @Output() filteredArtworks = new EventEmitter<Artwork[]>();
  filterForm: FormGroup;

  constructor(private artworkService: ArtworkService) {
    this.filterForm = new FormGroup({
      artist: new FormControl(''),
      category: new FormControl(''),
      period: new FormControl(''),
      genre: new FormControl('')
    });
  }

  onFilter() {
    this.artworkService.getArtworksByCategory(this.filterForm.value.category)
      .subscribe(artworks => {
        this.filteredArtworks.emit(artworks.results);
      });
  }
}
