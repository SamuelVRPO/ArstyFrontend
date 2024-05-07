import { Artwork } from "./artwork";

export interface ArtworkServerResponse {
    count: number;
    next: boolean;
    previous: boolean;
    results: Artwork[];
}
