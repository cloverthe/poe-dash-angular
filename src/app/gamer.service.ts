import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Gamer } from './gamer';

@Injectable({
  providedIn: 'root'
})
export class GamerService {
  private baseUrl = "http://localhost:8080/players/all";
  constructor(private http: HttpClient) { }
  
  getGamers() : Observable<Gamer[]> {
    return this.http.get<Gamer[]>(`${this.baseUrl}`)
  }

}
