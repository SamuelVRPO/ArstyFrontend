import { Artwork } from "./artwork";

export interface ArtworkServerResponse {
    count: number;
    _embedded: {
      artworks: Artwork[];
    }
    _links: {
      next: {
        href: string
      }
    }
}
