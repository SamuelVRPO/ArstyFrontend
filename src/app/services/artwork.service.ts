import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ArtworkServerResponse } from '../interfaces/artwork-server-response';
import { Artwork } from '../interfaces/artwork';

@Injectable({
  providedIn: 'root'
})

export class ArtworkService {

  private apiUrl = "http://localhost:5001/artworks";

  constructor(private http: HttpClient) { }

  getArtworks(): Observable<ArtworkServerResponse> {
    const url = `${this.apiUrl}/get-paginated-artworks/`;
    return this.http.get<ArtworkServerResponse>(url, {
      responseType: 'json'
    });
  }

  getNextArtworks(page: number): Observable<ArtworkServerResponse> {
    const url = `${this.apiUrl}/get-paginated-artworks/`;
    const params = new HttpParams().set('page', page.toString())
    return this.http.get<ArtworkServerResponse>(url, {
      params,
      responseType: 'json'
    });
  }

  getArtworkById(id: string): Observable<Artwork> {
    const url = `${this.apiUrl}/get-artwork-id/${id}`;
    return this.http.get<Artwork>(url, {
      responseType: 'json'
    });
  }

  getArtworksByCategory(category: string): Observable<ArtworkServerResponse> {
    const url = `${this.apiUrl}/get-artworks-category/${category}`;
    return this.http.get<ArtworkServerResponse>(url, {
      responseType: 'json'
    });
  }
}
