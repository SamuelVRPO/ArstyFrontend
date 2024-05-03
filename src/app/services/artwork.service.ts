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

  private apiUrl = "http://localhost:5001/artworks/get-paginated-artworks/"

  constructor(private http: HttpClient) { }

  getArtworks(): Observable<ArtworkServerResponse> {
    return this.http.get<ArtworkServerResponse>(this.apiUrl, {
      responseType: 'json'
    });
  }

  getNextArtworks(page: number): Observable<ArtworkServerResponse> {
    const params = new HttpParams().set('page', page.toString())

    return this.http.get<ArtworkServerResponse>(this.apiUrl, {
      params,
      responseType: 'json'
    });
  }
}
