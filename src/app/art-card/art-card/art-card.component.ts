import { Component, Input } from '@angular/core';
import { Artist } from '../../interfaces/artist';

@Component({
  selector: 'app-art-card',
  standalone: true,
  imports: [],
  templateUrl: './art-card.component.html',
  styleUrl: './art-card.component.scss'
})
export class ArtCardComponent{
  @Input() title: string;
  @Input() date: string;
  @Input() imageUrl: string;
  @Input() artists: string;
  @Input() method: string;
  @Input() dimensions: string;

  constructor() { }
}
