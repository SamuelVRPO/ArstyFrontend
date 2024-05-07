import { Artist } from "./artist";

export interface Artwork {
    id: string;
    title: string;
    medium: string;
    date: string;
    category: string;
    artists: Artist[];
    dimensions: {
      in: {
        text: string;
      }
    }
    _links: {
      thumbnail: {
        href: string;
      }
    }
}
