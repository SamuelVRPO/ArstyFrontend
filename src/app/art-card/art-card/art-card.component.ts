import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-art-card',
  standalone: true,
  imports: [],
  templateUrl: './art-card.component.html',
  styleUrl: './art-card.component.scss'
})
export class ArtCardComponent {
  @Input() title: string;
  @Input() date: string;
  @Input() imageUrl: string;
  @Input() artist: string;
  @Input() method: string;
  @Input() dimensions: string;

  constructor() { }
}
