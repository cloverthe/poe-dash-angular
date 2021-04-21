import { Component, OnInit } from '@angular/core';
import { Gamer } from '../gamer';
import { GamerService } from '../gamer.service';

@Component({
  selector: 'app-gamer',
  templateUrl: './gamer.component.html',
  styleUrls: ['./gamer.component.css']
})
export class GamerComponent implements OnInit {

  private gamers: Gamer[];
  constructor(private gamerService : GamerService) { }

  ngOnInit(): void {
    this.gamerService.getGamers().subscribe((data: Gamer[]) => {
      console.log(data);
      this.gamers = data;
    })
  }

}
