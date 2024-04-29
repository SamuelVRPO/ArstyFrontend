export interface Artwork {
    id: string;
    title: string;
    medium: string;
    date: string;
    artist: string;
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
