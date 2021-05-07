import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Gamer } from './gamer';

@Injectable({
  providedIn: 'root'
})
export class GamerService {
  private baseUrl = "http://localhost:8080/players";
  start = 0;
  amount = 15;

  constructor(private http: HttpClient) { }
  
  getGamers() : Observable<Gamer[]> {
    return this.http.get<Gamer[]>(`${this.baseUrl}/all`)
  }

  getGamersByPage() : Observable<Gamer[]>{
    return this.http.get<Gamer[]>(`${this.baseUrl}/getallbypage/${this.start}/${this.amount}`);
  }

  getGamersByName(name: any) : Observable<Gamer[]> {
    if(name.trim() === "") return this.getGamersByPage();
    return this.http.get<Gamer[]>(`${this.baseUrl}/searchByAccount/${name}`);
  } 

}
