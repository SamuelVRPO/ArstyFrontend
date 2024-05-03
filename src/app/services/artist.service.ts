import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ArtistServerResponse } from '../interfaces/artist-server-response';
import { Artist } from '../interfaces/artist';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {
  private apiUrl = "https://api.artsy.net/api/artists"
  private headers = new HttpHeaders({
    "X-XAPP-Token": "eyJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6IiIsInN1YmplY3RfYXBwbGljYXRpb24iOiJmNDY3NzQ3ZS03OWQzLTRkZTctODI5Mi05OWQ4ZjRmNTIyOTkiLCJleHAiOjE3MTQ2ODQ2NTksImlhdCI6MTcxNDA3OTg1OSwiYXVkIjoiZjQ2Nzc0N2UtNzlkMy00ZGU3LTgyOTItOTlkOGY0ZjUyMjk5IiwiaXNzIjoiR3Jhdml0eSIsImp0aSI6IjY2MmFjODczNDBiZWU5MDAwZTEzOGY3ZiJ9.WRcbZ7jh7SMpl49EIydoWEMT8H2rjq73wiZssX-8Ev8"
  })

  constructor(private http: HttpClient) { }

  getArtistFromArtworkId(artistUrl: string): Observable<Artist> {
    return this.http.get<Artist>(artistUrl, {
      headers: this.headers,
      responseType: 'json'
    })
  }
}
