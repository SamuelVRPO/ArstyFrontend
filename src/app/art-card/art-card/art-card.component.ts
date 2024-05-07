import { Component, Input } from '@angular/core';
import { Artist } from '../../interfaces/artist';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-art-card',
  standalone: true,
  imports: [
    RouterModule
  ],
  templateUrl: './art-card.component.html',
  styleUrl: './art-card.component.scss'
})
export class ArtCardComponent{
  @Input() id: string;
  @Input() title: string;
  @Input() date: string;
  @Input() imageUrl: string;
  @Input() artists: string;
  @Input() method: string;
  @Input() dimensions: string;

  constructor() { }
}
